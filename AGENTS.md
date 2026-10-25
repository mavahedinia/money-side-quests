# AGENTS.md

Instructions for AI agents (and humans) working on this repo. Read this before
making changes. `README.md` is the product-facing changelog/spec — read it
too; this file is about *how the code is built and how to extend it safely*.

**Keep this file current.** If you add a new directory, file category,
convention, storage key, or workflow step — or deprecate one described
here — update the relevant section in the same change. Treat a drifted
AGENTS.md (describing files/patterns that no longer exist, or missing ones
that now matter) as a bug in the change, not a follow-up. If you're unsure
whether something is significant enough to document, prefer adding a short
note over leaving it undocumented.

## What this is

A static, dependency-free, client-only SPA for Canadian financial literacy:
lessons (`dist/content.js`, `dist/new-content.js`) plus calculator tools
(tax, debt, benefits, investing, a standalone budget planner). No backend,
no build tooling for the app itself, no npm dependencies at all.

**`dist/` is hand-authored source, not a build output.** There is no
transpiler/bundler/minifier. The terse, single-line style you see
(`dist/app.js`, `dist/content.js`, etc.) is the actual source code as written
by prior agents — match it, don't "clean it up" into multi-line idiomatic JS.
`npm run build` only copies `dist/` → `_site/` and adds `.nojekyll`
(`scripts/build.mjs`); it does not transform anything.

## Commands

- `npm test` — runs `node --test tests/*.test.js` (Node's built-in test
  runner, no framework/dependency). Run this before and after any change.
- `npm run build` — stages `dist/` into `_site/` (gitignored) for GitHub
  Pages. No need to run this for most changes; CI does it on push.
- There is no lint/typecheck step and no `node_modules`. Don't add a
  bundler, framework, or dependency unless the user explicitly asks — the
  zero-dependency constraint is a deliberate product property (see README:
  "No account, API key, backend, or runtime dependencies").

CI (`.github/workflows/pages.yml`) runs `npm test` then `npm run build` on
every push/PR to `main`, and deploys `_site/` to GitHub Pages on successful
pushes to `main`. Keep tests passing — a red `npm test` blocks the deploy.

## Directory map

```
dist/                     the app itself (ES modules, loaded directly by the browser, no bundling)
  index.html              single entry point, loads app.js as a module
  app.js                  router, shell/nav, lesson renderer, legacy "budget/credit/investing" activities, save/load
  content.js              core lesson modules (budgeting, credit, investing...) + merges in new-content.js/tax/debt/benefit sources
  new-content.js          accounts/retirement/tax module + benefits resource module content
  calculations.js         pure calc fns for the original lessons (repayment, futureValue) + investing extras (compoundSeries, bondPrice, tradeCosts)
  tax-calculations.js / tax-activities.js         tax & registered-account calculators + their activity renderers
  debt-calculations.js / debt-activities.js       debt payoff / balance-transfer / loan calculators + renderers
  benefit-calculations.js / benefit-activities.js CPP/EI, employer match, insurance claim calculators + renderers
  extended-activities.js  renderers for the extra investing activities (compound, bondrates, etfcompare, costs)
  currency-input.js       shared $-field formatting/parsing (used by planner, could be reused elsewhere)
  planner.js / planner.css / planner-payroll.js / planner-budget.js   standalone budget planner (route: #/planner), independent of lesson progress
  style.css               app-wide styles
scripts/build.mjs         dist/ -> _site/ copy for Pages deploy
tests/*.test.js           node:test files, one per calculation module, import directly from dist/*.js
.github/workflows/pages.yml  CI: test, build, deploy to Pages
README.md                 product spec / changelog of financial modeling decisions — treat as living documentation, update it when behavior changes
```

## Code conventions (match the existing style)

- **ES modules, no build step.** Files `import`/`export` directly; the
  browser runs them as-is via `<script type="module">`. Keep imports at the
  top-ish (existing files interleave a few, but don't scatter further than
  necessary) and keep everything else a plain top-level `const`/`function`.
- **Terse, single-statement-per-line style**, not multi-line "readable"
  formatting — this is intentional (small file size, no build/minify step).
  New code in these files should look like its neighbours, not like a
  typical prettified codebase.
- **No comments except load-bearing ones.** The few comments present
  explain a *non-obvious modeling convention* (e.g. "empty is distinct from
  zero" in `currency-input.js`, bond-pricing assumptions in
  `calculations.js`). Don't add narrative comments; do add one if you
  introduce a similarly non-obvious financial/UI convention.
- **HTML is built with template literals**, always escaped via a local
  `esc`/`safe` helper (`s=>String(s??'').replace(/[&<>"']/g,...)`) redefined
  per file. Any user-influenced or data-driven string going into `innerHTML`
  must go through that file's escape helper — this is the app's only XSS
  defense, there's no framework doing it for you.
- **Money formatting**: use `Intl.NumberFormat('en-CA',{style:'currency',
  currency:'CAD',...})`, consistent with every existing module. Use
  `dist/currency-input.js`'s `formatCurrencyInput`/`parseCurrencyInput` for
  any editable dollar `<input>` (handles blank-vs-zero, pasted commas, etc.)
  rather than inventing another parser.
- **No optional chaining into silent wrong answers**: calculation functions
  validate inputs and return `{error: '...'}` objects rather than throwing
  or silently producing nonsense (see `repayment`, `loanPayment`,
  `estimatePayroll` which throws `RangeError` on invalid province/salary).
  Follow whichever convention the surrounding module already uses
  (throw vs. `{error}`) — don't mix new styles into an existing file.

## Adding or editing a lesson module

(This is also documented in `README.md`; both should stay in sync.)

- Modules live in `dist/content.js` (`modules` array) or
  `dist/new-content.js` (`newModules`, merged into `modules` at the bottom
  of `content.js`). Give a new module a **stable `id`** — it's used as a
  localStorage key and in hash routes (`#/<id>/<stepIndex>`); never reuse or
  repurpose an existing id for different content.
- Required module shape: `id, title, eyebrow, description, duration, color,
  icon, objectives, sourceIds, steps`. `sourceIds` must reference entries
  that exist in `sources` (see `tests/lessons.test.js` — it asserts this).
- `steps` supported types: `explain`, `discuss`, `activity`, `check`,
  `recap`. Every module's first step must be `explain`-ish and last step
  must be `type:'recap'` (tested). Every module needs at least 2 `check`
  steps (tested). Step `id`s must be unique within the module (tested) —
  they're used for resuming progress, so once shipped, don't rename them
  (there's a migration shim in `app.js`'s `resumeIndex` only for the
  original `investing` module's legacy numeric indices; don't expect a new
  one for new modules — keep ids stable from the start instead).
- `check` steps need `options`, zero-based `correct`, and one `rationales`
  entry per option (tested). `discuss` steps use `prompt`/`answer`. `notes`
  is optional facilitator guidance.
- Keep each module **standalone** — its own starting context and recap, no
  dependency on another module having been completed.
- A module with `kind:'resource'` (e.g. `benefits`) is treated as a
  non-progress-tracked resource section in the nav, not a learning module
  with a completion checkmark — see `learningModules`/`resourceModules`
  split in `app.js`.
- New navigation/library entries appear automatically from the `modules`
  array — no renderer changes needed for a plain lesson module. Add an icon
  to the `icons` map in `app.js` if you want one (falls back to `✦`).

## Adding a new calculator/activity

- Pattern: `<feature>-calculations.js` holds pure functions (+ an exported
  `*Sources` array of `{id, title, publisher, url}` citation metadata) and
  `<feature>-activities.js` holds a `render<Feature>Activity(name, state,
  money)` function that returns an HTML string for a known `name`, or
  **`null`/`undefined` for an unsupported name** — never throw. `app.js`'s
  `renderFeatureActivity` chains these renderers with `??` in a fixed order
  (tax → debt → benefit → extended); a new feature file should follow the
  same null-fallthrough contract and get added to that chain.
- Dynamic/refreshable output must live inside one of the recognized wrapper
  classes (`.tax-results`, `.debt-results`, `.benefit-results`, or the
  legacy `.growth-chart`/`.stats`/`.lab-insight`/`.year-table`/
  `.comparison-table`/`.cost-breakdown` selectors) — `app.js`'s
  `refreshExtended` swaps these elements in place on input, preserving
  focus/scroll. **Never put a form control inside one of these wrapper
  elements** or it will be destroyed/recreated on every keystroke.
- Give every new activity a **stable identifier string** (the `name`
  passed to the renderer) and never reuse one for a different state shape —
  saved activity state in localStorage is keyed by this name.
- State fields saved per-activity go through `app.js`'s `load()` validator
  (the big `if` chain checking each known key by name/range). If you add a
  new activity field that isn't already covered by an existing key pattern,
  **add validation for it there**, or malformed/future localStorage data
  will silently wipe all saved progress (the whole `load()` throws → falls
  back to `empty()`) for everyone, not just that activity.
- Financial correctness: add hand-worked fixtures (see `tests/*.test.js` —
  every calculation module has one, often with a `close`/`near` epsilon
  helper and a comment showing the manual arithmetic) whenever you add or
  change arithmetic. Source factual Canadian claims (contribution limits,
  CPP/EI rates, tax brackets, etc.) from FCAC/CRA/OSC or another regulator,
  record it in the module's `*Sources` export, and set/update a
  `reviewedAt`-style date. Don't hardcode a new year's limits without
  checking current published rules — these numbers are explicitly labelled
  "2026" throughout and must be revisited before rolling the model year.
- Never label a calculator output "refund" or "net pay" unless it actually
  is one under CRA's definition — the README is explicit that several of
  these models (tax, benefits) are deliberately partial, and mislabeling
  output is treated as a correctness bug, not a copy nit.

## The standalone planner (`#/planner`)

- Fully separate subsystem from lesson progress: separate storage keys
  (`money-side-quests:planner:workshop:v1` / `:demo:v1`), separate reset
  flow, own CSS file (`planner.css`). Don't let planner code read/write the
  lesson `state` object in `app.js`, and don't let lesson resets touch
  planner storage.
- `planner-payroll.js`: annual (not biweekly/July-catchup) salary→take-home
  estimate for all 13 provinces/territories. `planner-budget.js`: cadence
  conversion, category summaries, contribution-room math,
  `validatePlannerState` (defensive parsing of restored localStorage).
  `planner.js` wires both into the two-step income/category UI.
- `tests/planner-payroll.test.js` encodes hand-worked per-province tax
  numbers with inline comments showing the arithmetic — if you touch a
  bracket/credit/premium constant, update the matching hand-worked comment
  and expected value together, don't just adjust the assertion.
- Saved planner state is validated through `validatePlannerState` on load;
  if you add a new field to planner state, add it there too, following the
  same pattern as `rrspRoom`/`province`/`categories` validation, or restored
  state can silently be rejected (falls back to notice + default state).

## Testing expectations

- Every `tests/*.test.js` file imports straight from `dist/*.js` (there's no
  separate `src/`) — tests exercise exactly what ships.
- Use `node:test` + `node:assert/strict` only; no test framework dependency.
  Follow the existing per-file epsilon-comparison helpers (`close`, `near`)
  for floating-point money math rather than exact equality.
- Run `npm test` before considering any change to `dist/*.js` done. A
  calculation/content change without a corresponding test update or
  addition should be treated as incomplete.

## Things to avoid

- Don't introduce a bundler, framework, CSS preprocessor, or npm dependency
  — the zero-dependency, zero-build-step property is load-bearing for how
  this app is deployed and reviewed.
- Don't reformat existing terse one-line files into multi-line "readable"
  code as a drive-by cleanup; it inflates diffs and breaks the established
  style.
- Don't change a shipped module/step/activity `id`, or a localStorage key
  name, without a migration path — these are durable identifiers for other
  people's saved browser progress.
- Don't add server calls, analytics, or any network dependency — "no
  financial inputs are submitted to a server" is a stated product
  guarantee (README).
