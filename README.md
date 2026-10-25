# Money Side Quests
A static, dependency-free SPA for shared-screen Canadian financial literacy.

## Run and verify
Serve `dist/` with any static server. No account, API key, backend, or runtime dependencies.
Run `npm run build` to copy the static app into `_site/` for deployment.
Run `npm test` for independent calculation fixtures and curriculum checks.
In the managed Sites environment, use `sites-preview start` on this checkout.

## Extend the lessons
`dist/content.js` exports `modules`, `sources`, and `glossary`.
Add a module with a stable id, title, description, duration, objectives,
sourceIds and steps. Supported steps: explain, discuss, activity, check, recap.
Discussion steps use prompt/answer. Checks use options, correct (zero-based),
and one rationale per option. Notes are optional. New modules appear in the
navigation and library without renderer changes. Theme/icon maps have defaults.
New custom activities go in the activity renderer, referenced by a stable
activity identifier. Do not reuse identifiers for different state shapes.
Keep future modules standalone, with their own starting context and recap.

`dist/calculations.js` holds pure calculation functions. Document conventions
in the UI and add hand-worked fixtures when changing financial arithmetic.
Source factual Canadian claims from FCAC, CRA, OSC or other regulators and
update reviewedAt. Do not use annual limits without checking current rules.

## Progress
Local storage namespaces: money-side-quests:workshop:v1 and
money-side-quests:demo:v1. Module state and activity state are keyed separately.
This is browser/group progress, not individual learner tracking. Demo mode is
remembered in sessionStorage. All reset actions require confirmation.
No financial inputs are submitted to a server. Google Fonts may be requested;
system fallback fonts work if unavailable. Offline support is not advertised.

## GitHub Pages release
The workflow in `.github/workflows/pages.yml` runs the test suite and builds the
static site on pull requests and pushes to `main`. Successful pushes to `main`
(and manual workflow runs) publish `_site/` to GitHub Pages using GitHub's
short-lived workflow credentials; no deployment secret is required.
Enable **Settings → Pages → Source → GitHub Actions** in the repository.

The source app is `dist/`; `npm run build` stages it in ignored `_site/`.
Relative asset paths and hash routing support a project repository URL such as
`https://OWNER.github.io/money-side-quests/#/planner` without a base-path setting.
Progress remains local to each browser and origin. Existing progress on the
original hosted URL will not automatically transfer to the GitHub Pages URL.

## Expanded investing module
25 steps across four collapsible sections; 45–65 minutes suggested.
Definition cards use `step.facts: [{term, definition}]` and `step.section`.
New activities live in `dist/extended-activities.js`: compound, bondrates,
etfcompare and costs. The source list includes real S&P 500 fund examples;
all calculator fee inputs and comparison funds are explicitly fictional.

Compounding compares simple/compound interest with monthly end-of-period
contributions and monthly/annual crediting. Inflation adjusts purchasing power.
The bond activity discounts annual coupons and face value using annual yield;
it is not a pricing implementation for actual semiannual Canadian bonds.
The cost microscope separates one-time execution estimates from annual MER.

Saved progress now resumes by stable step ID. Legacy investing numeric indices
map to their original step IDs so expanded content does not move the resume
point. Header reset controls confirm before clearing module or all progress.

## Canadian accounts, retirement, debt and benefits
The expanded library includes separate account/tax/retirement and debt/major
borrowing modules, plus a distinct workplace-benefits resource section.
Financial constants are labelled for 2026 and must be reviewed before updating
the model year. Calculator source metadata is exported by calculation modules.

- Tax: federal-only or Ontario+federal worked example; taxable income, not gross
  salary. Models basic personal credits, Ontario surtax/basic reduction/health
  premium. Explicitly excludes other credits, CPP/EI adjustments, benefit
  clawbacks, AMT and full-return details. Never label results a refund or net pay.
- Account room is manually entered, not inferred from age or annual headline
  limits. Contributions, deduction room, lifetime limits and current-year tax
  effects are distinct. Ordinary new RRSP room is only an illustration.
- Retirement: real-dollar contributions and a constant real return; user-entered
  benefit estimates. Not an entitlement or safe-withdrawal calculation.
- Debt: fixed monthly budget across strategies, all entered minima first, with
  freed payments rolled over; promo APR applies for exactly the entered months.
  Transfer fees are financed. Loan models declare their compounding convention.
- Benefits: 2026 outside-Quebec standard full-year employment. CPP/EI premiums
  are separate from income tax; the output is not net pay or benefit eligibility.
  Employer matching and insurance claims use fictional editable plan terms.

New activity renderers return null for unsupported names. Dynamic output uses
.tax-results, .debt-results or .benefit-results wrappers; do not place controls
inside these wrappers, because output refresh replaces them while preserving
active inputs. Keep the namespace for each activity independent of others.

## Standalone budget planner
Open `#/planner` from Tools for real life. It is separate from lesson progress.
`planner.js` and `planner.css` own the two-step income/category experience.
`planner-payroll.js` holds the 2026 annual salary estimate for all 13 provinces
and territories, including Quebec premiums and federal abatement. It uses
annual rates rather than July catch-up payroll rates. Provincial notes disclose
excluded low-income/family/refundable credits, RAMQ premiums, and other limits.
This is a standard full-year salary-only estimate, not a payroll or return filing.

`planner-budget.js` holds cadence conversion (52/26/12/4/1), category summaries,
room checks and saved-state validation. Actual personal TFSA/RRSP/FHSA room
cannot be inferred from salary: room and deduction inputs remain unknown until
entered. RRSP new-room illustrations use previous-year earnings and the 2026
ceiling, separate from available room. Every planned saving still uses cash,
including any excess or unconfirmed registered contribution; tax relief only
uses eligible deductions that the model can apply against available income.

Storage keys are money-side-quests:planner:workshop:v1 and
money-side-quests:planner:demo:v1. Planner reset is scoped to the current planner
profile and never clears learning progress. Inputs stay in localStorage; no bank,
CRA connection, server or account is required. Browser clearing removes the plan.
Category deletion has a one-step undo. Max50 categories, validated on restoration.

The live donut includes unallocated income. If over budget, slices normalize to
allocations while the legend continues to show each category's share of take-home;
the shortfall is explicit. Tax relief is excluded from spendable cash by default.
Refund = entered income tax withheld minus the deduction-adjusted model tax;
without withholding, only the incremental contribution tax reduction is shown.

Use npm test for payroll, budget, room and integration fixtures. Source constants
are labelled for 2026 and require an explicit source review before changing year.

Planner currency fields display `$ 82,543.50` when idle, accept plain or formatted
amounts (including pasted commas), and use unformatted numeric editing on focus.
Unknown optional room stays blank. Stored values remain numeric. Formatting
never adds CPP/EI a second time: net cash already removes statutory premiums.
The income summary makes monthly CPP/QPP, CPP2, EI and QPIP explicit.
Average income-tax rate is model tax divided by gross salary. Marginal salary
income-tax rate is the forward tax increase on the next $100 of gross employment
income; salary-based credits/deductions may affect it and it can cross a nearby
threshold. Premium payments are excluded from both tax rates. Rates are before
planned registered-account deductions.
