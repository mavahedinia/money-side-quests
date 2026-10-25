// New Canadian standalone lessons and workplace resource section. Reviewed 2026-10-24.
export const newModules = [
  {
    "id": "accounts",
    "title": "Accounts, retirement & taxes",
    "eyebrow": "The Canadian account toolkit",
    "description": "Connect TFSA, RRSP and FHSA rules with tax brackets, contribution room and future retirement.",
    "duration": "45–65 min",
    "color": "#e8e4f8",
    "icon": "account",
    "tag": "CANADIAN MONEY TOOLS",
    "objectives": [
      "Explain marginal tax, deductions and credits without confusing a tax reduction with a refund.",
      "Compare TFSA, RRSP and FHSA rules using actual available room.",
      "Explore retirement savings with realistic public and workplace income assumptions."
    ],
    "sourceIds": [
      "new-tax-rates",
      "new-limits",
      "new-tfsa",
      "new-tfsa-room",
      "new-tfsa-withdraw",
      "new-rrsp-room",
      "new-rrsp-guide",
      "new-fhsa-room",
      "new-fhsa-withdraw",
      "new-retirement-income",
      "new-gis"
    ],
    "steps": [
      {
        "id": "accounts-start",
        "type": "explain",
        "title": "One plan. Three connected questions.",
        "body": "Where should the money sit? How does tax change the result? What could support future retirement? This standalone lesson connects accounts, taxes, and retirement. All amounts are Canadian dollars. Use fictional inputs; nobody needs to share a salary or CRA details.",
        "section": "Taxes without the fog",
        "notes": "Introduce the calculator year, 2026. Explain that Ontario is a worked provincial example and federal-only is not a complete Canadian tax estimate."
      },
      {
        "id": "accounts-tax-language",
        "type": "explain",
        "title": "Your paycheque and your tax return are related—not identical.",
        "body": "Gross employment income is not the same as taxable income. A tax return combines income, deductions, and credits. Payroll withholdings are payments toward the final calculation. A refund can arise when payments and refundable credits exceed the tax owing; a deduction alone does not tell you the refund.",
        "section": "Taxes without the fog",
        "facts": [
          {
            "term": "Taxable income",
            "definition": "Income remaining after the deductions used to calculate tax. It is not necessarily gross salary or money deposited in your bank account."
          },
          {
            "term": "Deduction",
            "definition": "An eligible amount that reduces income used in the tax calculation."
          },
          {
            "term": "Tax credit",
            "definition": "An amount that reduces tax, under specific rules. A non-refundable credit generally cannot reduce that tax below zero."
          },
          {
            "term": "Withholding",
            "definition": "Tax taken from pay or a payment in advance of the final tax return calculation."
          }
        ]
      },
      {
        "id": "accounts-brackets",
        "type": "explain",
        "title": "A tax bracket is a layer, not a cliff.",
        "body": "Canada uses graduated federal tax brackets, with provincial or territorial tax added under separate rules. Moving into a higher bracket does not apply its rate to all earlier income. Your marginal rate describes the tax effect on an additional dollar; the average rate divides total income tax by the income used in the comparison.",
        "section": "Taxes without the fog",
        "facts": [
          {
            "term": "Marginal tax rate",
            "definition": "The tax rate applying to an extra amount of income; credits and income-tested rules can change the effective rate."
          },
          {
            "term": "Average tax rate",
            "definition": "Total income tax divided by the income measure used. In this lesson the calculator uses taxable income, not salary."
          },
          {
            "term": "Province or territory",
            "definition": "Regional tax rules matter. Ontario and Québec, for example, do not have identical rates or credits."
          }
        ]
      },
      {
        "id": "accounts-tax-lab",
        "type": "activity",
        "title": "Move through the brackets.",
        "body": "Change taxable income and an eligible deduction. Watch the tax layers and compare the average and marginal rates. The calculator is a 2026 teaching estimate, not a complete return or take-home-pay quote. Read which credits and provincial rules it includes.",
        "activity": "tax",
        "section": "Taxes without the fog",
        "notes": "Start with no deduction. Increase taxable income across a bracket boundary. Ask why tax rises only on the additional layer. Federal-only excludes provincial/territorial tax."
      },
      {
        "id": "accounts-bracket-check",
        "type": "check",
        "title": "Did the raise make every dollar more expensive?",
        "body": "Alex moves from one federal bracket into the next. What happens to the earlier layers of income?",
        "options": [
          "They all move into the new highest rate.",
          "They stay in their earlier brackets; only the additional layer uses the new rate.",
          "The raise becomes entirely tax-free."
        ],
        "correct": 1,
        "rationales": [
          "Tax brackets do not normally replace the rates on all previous layers.",
          "Exactly. Credits, deductions and benefit rules can add other effects, but graduated brackets tax portions of income.",
          "Additional income may create additional tax; it is not automatically exempt."
        ],
        "section": "Taxes without the fog"
      },
      {
        "id": "accounts-container",
        "type": "explain",
        "title": "The account is the container. The investment is inside.",
        "body": "TFSA, RRSP, and FHSA name registered accounts with different tax and participation rules. They are not individual investments. Depending on the account and provider, qualified holdings may include cash, GICs, stocks, bonds, and funds. Choosing an account does not remove investment risk or decide the right time horizon.",
        "section": "Registered accounts",
        "facts": [
          {
            "term": "Registered account",
            "definition": "An account governed by specific tax rules and limits."
          },
          {
            "term": "Non-registered account",
            "definition": "An investment account without the same registered tax shelter; income and gains may have tax consequences."
          },
          {
            "term": "Contribution",
            "definition": "Money or property put into an account. A contribution and a deduction are different actions."
          }
        ]
      },
      {
        "id": "accounts-tfsa",
        "type": "explain",
        "title": "TFSA: no deduction now, generally tax-free Canadian growth.",
        "body": "TFSA contributions are not income-tax deductions. Eligible growth and ordinary withdrawals are generally tax-free in Canada. The 2026 annual dollar limit is $7,000, but your available room can be very different. Eligibility, residence, age, past contributions and withdrawals all matter.",
        "section": "Registered accounts",
        "facts": [
          {
            "term": "TFSA room",
            "definition": "Unused eligible room, adjusted for contributions and previous-year withdrawals. It applies across your TFSAs together."
          },
          {
            "term": "Withdrawal timing",
            "definition": "A TFSA withdrawal normally adds room back on January 1 of the next calendar year—not immediately."
          },
          {
            "term": "Keep your records",
            "definition": "Reconcile CRA information with current institution records; recent transactions may not yet appear."
          }
        ],
        "notes": "Do not treat $7,000 as everyone’s personal contribution allowance. Do not assume room from years before Canadian tax residency."
      },
      {
        "id": "accounts-rrsp",
        "type": "explain",
        "title": "RRSP: a deduction today, taxable withdrawals later.",
        "body": "Eligible RRSP contributions can support a deduction, within your deduction limit. Growth is generally sheltered while it stays inside. Ordinary withdrawals are generally taxable and do not normally restore contribution room. The benefit is tax deferral, not a promise that the entire account is tax-free.",
        "section": "Registered accounts",
        "facts": [
          {
            "term": "2026 RRSP dollar ceiling",
            "definition": "$33,810 caps the new room calculation based on prior-year earned income. It is not everyone’s available contribution room."
          },
          {
            "term": "New room, simplified",
            "definition": "Generally the lesser of 18% of previous-year earned income and the annual ceiling, reduced by a pension adjustment; carryforward and other adjustments can matter."
          },
          {
            "term": "Contribution versus deduction",
            "definition": "An earlier contribution may remain undeducted. Check available contribution room and deduction limit separately."
          },
          {
            "term": "Pension adjustment",
            "definition": "A reported pension benefit amount that generally reduces next year’s RRSP room."
          }
        ],
        "notes": "The calculator requires actual available room. Avoid describing the over-contribution tolerance as extra deductible room."
      },
      {
        "id": "accounts-fhsa",
        "type": "explain",
        "title": "FHSA: first-home rules come with the tax treatment.",
        "body": "An eligible first-time home buyer can use an FHSA under its age, residence and home-ownership rules. Eligible contributions can be deductible. A qualifying home withdrawal can be tax-free; other withdrawals can be taxable. An RRSP-to-FHSA transfer uses FHSA room but does not create a new deduction.",
        "section": "Registered accounts",
        "facts": [
          {
            "term": "FHSA participation room",
            "definition": "$8,000 in the year the first FHSA is opened. Room does not start building before that opening."
          },
          {
            "term": "Carryforward and lifetime limit",
            "definition": "Up to $8,000 of unused participation room can generally carry forward, with a $40,000 lifetime contribution/transfer limit."
          },
          {
            "term": "Use of the account",
            "definition": "Qualifying withdrawal and account-closing deadlines have conditions. Verify the current CRA rules before acting."
          }
        ],
        "notes": "Do not assume everyone renting is eligible. Opening eligibility and qualifying-withdrawal tests are separate."
      },
      {
        "id": "accounts-room-lab",
        "type": "activity",
        "title": "Compare contribution room and the tax effect.",
        "body": "Select TFSA, RRSP, or FHSA. Enter a planned contribution and the fictional available room, then explore the modelled tax reduction. An annual headline limit is not a substitute for your own records. Tax reduction is not the same as a guaranteed refund.",
        "activity": "accounts",
        "section": "Registered accounts",
        "notes": "Use examples with zero room and a contribution above room. Ask which account gives no deduction now. Read the calculator assumptions about deductions already used and remaining lifetime FHSA room."
      },
      {
        "id": "accounts-room-check",
        "type": "check",
        "title": "Can you put the TFSA withdrawal back today?",
        "body": "Alex has no unused TFSA room and withdraws $2,000 in October. What is the usual timing for the withdrawal to create replacement room?",
        "options": [
          "Immediately, because it is the same money.",
          "January 1 of the next calendar year.",
          "The room is permanently lost."
        ],
        "correct": 1,
        "rationales": [
          "A withdrawal does not normally create same-year replacement room when no other room is available.",
          "Yes. The withdrawal normally adds room in the next calendar year. Other eligibility and residency rules still apply.",
          "Ordinary TFSA withdrawal amounts normally return as contribution room the next year."
        ],
        "section": "Registered accounts"
      },
      {
        "id": "accounts-deduction-discuss",
        "type": "discuss",
        "title": "A $5,000 contribution is not a $5,000 refund.",
        "body": "Two eligible people deduct the same amount. Their incomes, tax paid already, other credits and province differ.",
        "prompt": "Should they expect exactly the same refund?",
        "answer": "No. The deduction reduces the tax calculation according to each person’s situation. A refund also depends on payments already made and other return items. RRSP withdrawals may create tax later, and deduction timing can matter. The example calculator shows an estimated change in tax, not a CRA refund promise.",
        "section": "Registered accounts"
      },
      {
        "id": "accounts-withdrawals",
        "type": "explain",
        "title": "Plan the way out as well as the way in.",
        "body": "TFSA withdrawals, ordinary RRSP withdrawals, and qualifying FHSA withdrawals have different rules. An RRSP issuer may withhold tax on a withdrawal, but withholding is not necessarily the final tax. Special programs and direct transfers have their own conditions; moving money yourself is not always equivalent to an eligible direct transfer.",
        "section": "Retirement planning",
        "facts": [
          {
            "term": "Tax deferral",
            "definition": "Tax is postponed under account rules, rather than permanently eliminated."
          },
          {
            "term": "Direct transfer",
            "definition": "An institution-to-institution transfer handled under the relevant plan rules."
          },
          {
            "term": "RRIF",
            "definition": "Registered retirement income fund: a common retirement-income destination for RRSP assets, with minimum-withdrawal rules."
          }
        ],
        "notes": "No retirement withdrawal ages or current RRIF factors are calculated here. Point to CRA guidance for deadlines and special programs."
      },
      {
        "id": "accounts-retirement-layers",
        "type": "explain",
        "title": "Retirement income comes from several places.",
        "body": "A retirement plan may combine public pensions, an employer plan, registered savings, and other assets. CPP/QPP reflects contribution and earnings history. OAS has age and residence requirements and can be affected by income. GIS supports eligible low-income OAS recipients. None is automatically the advertised maximum for everyone.",
        "section": "Retirement planning",
        "facts": [
          {
            "term": "CPP / QPP",
            "definition": "Public contributory pension programs. They are not personal investment accounts or an employer’s optional match."
          },
          {
            "term": "OAS",
            "definition": "Old Age Security, a public pension with age and residency eligibility rules."
          },
          {
            "term": "GIS",
            "definition": "Guaranteed Income Supplement: an income-tested supplement for eligible low-income OAS recipients."
          },
          {
            "term": "Employer pension",
            "definition": "A workplace retirement arrangement, separate from CPP/QPP."
          }
        ],
        "notes": "Use personal Service Canada estimates rather than maximum benefit figures. Québec administers QPP; rules differ from CPP."
      },
      {
        "id": "accounts-retirement-lab",
        "type": "activity",
        "title": "Give future you a range, not a promise.",
        "body": "Adjust current savings, contributions, retirement timing, growth and inflation. Add only the public or employer income estimates you choose to assume. Compare the savings result with the income goal and read the withdrawal assumptions. Real returns, retirement dates, taxes and benefit eligibility can change.",
        "activity": "retirement",
        "section": "Retirement planning",
        "notes": "Use fictional figures. An assumed return is not an interest rate guaranteed by stocks or funds. Do not infer CPP/OAS eligibility or entitlement from this projection."
      },
      {
        "id": "accounts-retirement-tradeoffs",
        "type": "explain",
        "title": "The plan should survive more than one future.",
        "body": "A longer retirement, lower returns, higher inflation, or a different retirement date can change the picture. Account choices also affect taxes and income-tested benefits. Compare several scenarios, revisit assumptions, and distinguish a projected balance from an income stream that is guaranteed for life.",
        "section": "Retirement planning",
        "facts": [
          {
            "term": "Longevity risk",
            "definition": "The risk that money must last longer than expected."
          },
          {
            "term": "Sequence risk",
            "definition": "The timing of investment gains and losses can matter when taking withdrawals."
          },
          {
            "term": "Purchasing power",
            "definition": "What money can buy after accounting for prices, not just its future dollar amount."
          }
        ]
      },
      {
        "id": "accounts-retirement-check",
        "type": "check",
        "title": "Is the maximum CPP amount Alex’s forecast?",
        "body": "Alex sees a maximum CPP retirement amount online. What should go into their retirement plan?",
        "options": [
          "The maximum, because everyone who works receives it.",
          "A personal estimate based on their contribution record and chosen start age, with assumptions reviewed.",
          "Zero, because public pensions never count."
        ],
        "correct": 1,
        "rationales": [
          "The maximum is not everyone’s entitlement. Earnings, contribution history, age and other rules matter.",
          "Exactly. A personal estimate is more relevant than a headline maximum, and it still needs context.",
          "Eligible public pensions can be part of a plan; they should be estimated realistically."
        ],
        "section": "Retirement planning"
      },
      {
        "id": "accounts-action-checklist",
        "type": "explain",
        "title": "A useful annual money appointment.",
        "body": "Review available room using current records. Read your notice of assessment. Update beneficiaries and account paperwork where relevant. Check pension statements and workplace plan documents. Choose an account and investment based on goals, access, risk and tax rules—not only the size of this year’s tax reduction.",
        "section": "Retirement planning",
        "notes": "This is a discussion checklist, not a request to upload private tax or pension documents."
      },
      {
        "id": "accounts-recap",
        "type": "recap",
        "title": "Choose the container. Understand the tax. Revisit the future.",
        "body": "Know which income the calculator uses, which tax rules it includes, and which it excludes. Separate annual limits from personal room, contributions from deductions, and tax savings from refunds. Build retirement scenarios from realistic personal estimates, and keep reviewing them. Your next step: identify one account rule or pension estimate you want to verify.",
        "section": "Retirement planning"
      }
    ]
  },
  {
    "id": "borrowing",
    "title": "Debt & big purchases",
    "eyebrow": "Make borrowing make sense",
    "description": "Prioritize debts, decode balance transfers, and compare borrowing for cars, homes and other goals.",
    "duration": "35–50 min",
    "color": "#f6e4d6",
    "icon": "borrowing",
    "tag": "BORROWING WITH A PLAN",
    "objectives": [
      "Compare debt payoff priorities while keeping required payments in view.",
      "Evaluate transfer fees, promotional rates and total borrowing cost.",
      "Distinguish loan payments, ownership costs, mortgage terms and amortization."
    ],
    "sourceIds": [
      "new-debt-plan",
      "new-card-transfer",
      "new-consolidation",
      "new-rate-risk",
      "new-car-risk",
      "new-mortgage-term",
      "new-mortgage-rate",
      "new-debt-help",
      "new-loans"
    ],
    "steps": [
      {
        "id": "borrowing-start",
        "type": "explain",
        "title": "Borrowing buys time—and creates obligations.",
        "body": "Debt can help pay for an asset or cover a shortfall, but future income must support the payments. Start with the balance, interest rate, required payment, due date, fees, and what happens if payments are missed. This module works without completing the credit lesson.",
        "section": "Build a debt plan",
        "facts": [
          {
            "term": "Principal / balance",
            "definition": "The amount owed; interest and fees may add to it."
          },
          {
            "term": "APR",
            "definition": "Annual percentage rate: a borrowing-cost measure. Read the agreement to understand included charges and calculation conventions."
          },
          {
            "term": "Secured debt",
            "definition": "Borrowing backed by collateral, such as a home or vehicle; default can put that asset at risk."
          },
          {
            "term": "Unsecured debt",
            "definition": "Borrowing without specified collateral. It still has legal and credit consequences."
          }
        ]
      },
      {
        "id": "borrowing-minimums",
        "type": "discuss",
        "title": "Prioritize without abandoning the other bills.",
        "body": "Alex has three debts and an extra amount available after essential expenses. The minimum on one debt is due this week.",
        "prompt": "Should Alex send everything to the highest-rate debt and skip the other minimums?",
        "answer": "No. Keep required payments current across debts where possible, then choose how to direct extra money. Overdue obligations, housing, essential services and secured-debt consequences may need attention before a simple interest-rate ranking. If the budget cannot cover required payments, seek help rather than treating a calculator as the solution.",
        "section": "Build a debt plan"
      },
      {
        "id": "borrowing-methods",
        "type": "explain",
        "title": "Two routes through the same pile of debt.",
        "body": "The avalanche method directs extra payments to the highest interest rate after required payments. The snowball method starts with the smallest balance. The first usually targets interest cost; the second can provide visible wins. Use a plan that is affordable and that you can sustain.",
        "section": "Build a debt plan",
        "facts": [
          {
            "term": "Avalanche",
            "definition": "Pay required amounts, then target the highest-rate debt with extra money."
          },
          {
            "term": "Snowball",
            "definition": "Pay required amounts, then target the lowest-balance debt with extra money."
          },
          {
            "term": "Rollover",
            "definition": "Keep the overall payment budget as a debt is cleared, redirecting freed money to another debt."
          }
        ]
      },
      {
        "id": "borrowing-priority-lab",
        "type": "activity",
        "title": "Which debt gets the next extra dollar?",
        "body": "Change the fictional balances, rates, minimum payments and extra budget. Compare avalanche and snowball with the same overall monthly commitment. The model adds interest monthly and assumes no new borrowing. A payment that cannot cover interest needs a different plan.",
        "activity": "debtplan",
        "section": "Build a debt plan",
        "notes": "Ask the group to predict which strategy costs less before checking. Compare the same cash budget, not different payment amounts. Do not imply every real debt permits unlimited prepayments."
      },
      {
        "id": "borrowing-priority-check",
        "type": "check",
        "title": "What does the interest-first method prioritize?",
        "body": "After keeping all required payments current, Alex has extra money. One debt is $500 at 8%; another is $3,000 at 22%. Which gets the extra payment under avalanche?",
        "options": [
          "The $500 balance, because it is smaller.",
          "The 22% debt, because its rate is higher.",
          "Neither; avalanche ignores interest."
        ],
        "correct": 1,
        "rationales": [
          "That is the balance-first idea used by snowball, not avalanche.",
          "Correct. Under the stated assumptions, avalanche targets the highest rate after required payments.",
          "Avalanche explicitly uses interest-rate priority."
        ],
        "section": "Build a debt plan"
      },
      {
        "id": "borrowing-rates",
        "type": "explain",
        "title": "A rate can change the plan.",
        "body": "A fixed rate is set for an agreed period. A variable rate can move with a reference rate under the contract. Required payments may rise, or a fixed payment may leave less going toward principal. Read how rate changes, renewals, promotional periods and missed payments affect this particular debt.",
        "section": "Rates and transfers",
        "facts": [
          {
            "term": "Reference rate",
            "definition": "A rate used to set a variable borrowing rate, often with an added or subtracted margin."
          },
          {
            "term": "Interest versus payment",
            "definition": "A lower payment does not necessarily mean lower total borrowing cost."
          },
          {
            "term": "Prepayment rules",
            "definition": "The agreement may limit extra repayments or impose charges for early repayment."
          }
        ]
      },
      {
        "id": "borrowing-transfers",
        "type": "explain",
        "title": "A balance transfer moves debt; it does not erase it.",
        "body": "A promotional transfer may lower interest for a limited period, but an upfront fee, the later rate and the repayment schedule matter. Approval and transfer amounts are subject to issuer rules. Continue meeting the old account’s payment obligations until the transfer is confirmed.",
        "section": "Rates and transfers",
        "facts": [
          {
            "term": "Transfer fee",
            "definition": "A charge for moving the balance, often expressed as a percentage."
          },
          {
            "term": "Promotional period",
            "definition": "The time the introductory terms apply; a deadline or other conditions may be attached."
          },
          {
            "term": "Post-promotion rate",
            "definition": "The rate that applies after the offer ends under the agreement."
          },
          {
            "term": "New purchases",
            "definition": "They may use different rates or grace-period rules. Payment allocation also depends on the agreement and applicable rules."
          }
        ]
      },
      {
        "id": "borrowing-transfer-lab",
        "type": "activity",
        "title": "What happens after the headline rate?",
        "body": "Compare leaving a balance where it is with moving it to a fictional promotional offer. Adjust the fee, promotional rate and duration, ongoing rate, and monthly payment. Look at the remaining balance when the promotion ends—not only the first month’s interest.",
        "activity": "transfer",
        "section": "Rates and transfers",
        "notes": "No real offers are recommended. The model assumes a financed transfer fee, no new purchases, and the stated fixed payment. Real transaction and fee rates may differ."
      },
      {
        "id": "borrowing-transfer-check",
        "type": "check",
        "title": "Zero promotional interest means zero cost?",
        "body": "A fictional offer advertises 0% for six months with a 3% transfer fee. Alex will still owe money afterward. What should be compared?",
        "options": [
          "Only the 0%, because fees and the later rate do not matter.",
          "The transfer fee, repayments during the offer, remaining balance and later interest.",
          "Only the card’s colour."
        ],
        "correct": 1,
        "rationales": [
          "The fee and later interest can change the result substantially.",
          "Yes. Compare total cost using a realistic payment plan and all relevant terms.",
          "Appearance does not establish the borrowing cost."
        ],
        "section": "Rates and transfers"
      },
      {
        "id": "borrowing-consolidation",
        "type": "explain",
        "title": "One payment can be simpler without being cheaper.",
        "body": "Consolidation combines debts into a new loan or credit arrangement. Compare the rate, fees, length, total interest, security and prepayment rules. Extending the repayment period can reduce the monthly payment while increasing total cost. Converting unsecured borrowing to home-secured debt changes the risks.",
        "section": "Big purchases",
        "facts": [
          {
            "term": "Consolidation",
            "definition": "Replacing several debts with one borrowing arrangement."
          },
          {
            "term": "Refinancing",
            "definition": "Replacing or changing borrowing terms; fees, eligibility and penalties may apply."
          },
          {
            "term": "Reborrowing risk",
            "definition": "Old accounts can accumulate new debt if the underlying cash-flow issue remains."
          }
        ]
      },
      {
        "id": "borrowing-purchase-cost",
        "type": "explain",
        "title": "The sticker price is only the opening scene.",
        "body": "For a car, compare tax, insurance, fuel, maintenance, parking and depreciation as well as financing. A longer loan can make a payment look comfortable while keeping debt around longer. Negative equity means the loan balance exceeds the asset’s value.",
        "section": "Big purchases",
        "facts": [
          {
            "term": "Down payment",
            "definition": "Money paid upfront rather than financed."
          },
          {
            "term": "Total ownership cost",
            "definition": "The purchase and financing costs plus the costs of keeping and using the asset."
          },
          {
            "term": "Negative equity",
            "definition": "Owing more on an asset than its current value; rolling it into a new loan adds to new borrowing."
          }
        ]
      },
      {
        "id": "borrowing-loan-lab",
        "type": "activity",
        "title": "Turn “only this much a month” into a full picture.",
        "body": "Change the amount, rate and repayment length. Compare the payment with total interest, then stress the rate. For the mortgage model, notice the Canadian fixed-rate compounding convention and that an amortization projection is not a guaranteed rate for decades.",
        "activity": "loan",
        "section": "Big purchases",
        "notes": "The model does not quote lender approval, qualification or an actual mortgage offer. Keep taxes, insurance, fees and other ownership costs in the conversation."
      },
      {
        "id": "borrowing-mortgages",
        "type": "explain",
        "title": "Mortgage term and amortization are different clocks.",
        "body": "The term is how long the current mortgage contract lasts. Amortization is the projected time to repay the debt. You may renew several times at different rates. Fixed versus variable, open versus closed, payment flexibility, penalties and insurance costs can all affect the decision.",
        "section": "Big purchases",
        "facts": [
          {
            "term": "Mortgage term",
            "definition": "The length of the current contract and its terms."
          },
          {
            "term": "Amortization",
            "definition": "The projected repayment period used to calculate payments."
          },
          {
            "term": "Renewal risk",
            "definition": "The next term’s rate and payment may differ from today’s."
          },
          {
            "term": "Refinancing cost",
            "definition": "Changing a mortgage before its term ends may trigger penalties and other fees."
          }
        ]
      },
      {
        "id": "borrowing-stress-discuss",
        "type": "discuss",
        "title": "Would the plan survive a less comfortable year?",
        "body": "Alex can afford today’s payment only if income and rates stay exactly the same.",
        "prompt": "What should the group test before calling the purchase affordable?",
        "answer": "Try a higher rate, reduced income and realistic ownership costs. Preserve room for essential spending and unexpected costs. A lender’s approval is not a guarantee that the payment fits your priorities. A longer repayment period may improve cash flow while adding cost and risk.",
        "section": "Big purchases"
      },
      {
        "id": "borrowing-help",
        "type": "explain",
        "title": "Getting help is part of managing debt.",
        "body": "If required payments cannot be covered, contact creditors early to discuss options and seek trustworthy guidance. A credit counsellor may help review a budget and repayment options; fees can apply. Licensed Insolvency Trustees administer formal insolvency options. Be careful with promises to erase debt or repair credit instantly.",
        "section": "Big purchases",
        "notes": "Use FCAC sources in the drawer. Do not describe counselling, debt management plans, consumer proposals and bankruptcy as interchangeable. No provider promotion."
      },
      {
        "id": "borrowing-recap",
        "type": "recap",
        "title": "Compare the plan—not just the payment.",
        "body": "Keep required obligations in view. Choose how extra payments are prioritized, read interest and transfer conditions, and compare total cost. For major purchases, test ownership costs and renewal risk. Your next step: list the balance, rate, due date and key terms for a fictional debt—or read one real agreement privately.",
        "section": "Big purchases"
      }
    ]
  },
  {
    "id": "benefits",
    "title": "Workplace benefits",
    "kind": "resource",
    "eyebrow": "Beyond your salary",
    "description": "Understand CPP and EI, employer matching, insurance and the benefits hiding in your compensation package.",
    "duration": "25–35 min",
    "color": "#dcece5",
    "icon": "benefits",
    "tag": "BEYOND YOUR SALARY",
    "objectives": [
      "Separate CPP/QPP and EI from employer-provided retirement and insurance benefits.",
      "Read match formulas and insurance claim limits.",
      "Know which benefits, tax and departure questions to ask."
    ],
    "sourceIds": [
      "new-cpp-rates",
      "new-cpp2",
      "new-ei-rates",
      "new-ei-employers",
      "new-ei-eligibility",
      "new-ei-amount",
      "new-employer-pension",
      "new-insurance-tax",
      "new-benefit-tax",
      "new-qc-insurance"
    ],
    "steps": [
      {
        "id": "benefits-start",
        "type": "explain",
        "title": "Your pay package is bigger than the salary line.",
        "body": "Some deductions fund public programs; other benefits depend on the employer and plan. CPP/QPP and EI are not optional perks or personal savings accounts. Workplace insurance, retirement matching and extra leave may be offered under separate rules. Use this section to learn what questions to ask.",
        "section": "Read the pay package",
        "facts": [
          {
            "term": "Statutory public programs",
            "definition": "Programs such as CPP/QPP and EI operate under legislation and eligibility rules."
          },
          {
            "term": "Employer-provided benefits",
            "definition": "A plan may offer retirement contributions, insurance or other support beyond required public programs."
          },
          {
            "term": "Benefits booklet",
            "definition": "The plan document explaining eligibility, coverage, limits, claims, exclusions and what changes when employment ends."
          }
        ]
      },
      {
        "id": "benefits-cpp",
        "type": "explain",
        "title": "CPP is a public pension contribution—not your employer’s match.",
        "body": "CPP contributions help fund a public plan with retirement, disability and survivor benefits under its rules. Your retirement amount depends on your earnings and contribution record and when you start. Québec has QPP with different contribution rules; do not apply this section’s CPP calculator to Québec payroll.",
        "section": "Read the pay package",
        "facts": [
          {
            "term": "2026 CPP first tier",
            "definition": "For the standard full-year illustration: 5.95% employee contributions on pensionable earnings above $3,500 up to $74,600, maximum $4,230.45."
          },
          {
            "term": "2026 CPP2",
            "definition": "A second additional 4% contribution applies to pensionable earnings between $74,600 and $85,000, maximum $416."
          },
          {
            "term": "Employer share",
            "definition": "Under standard CPP rules, the employer contributes matching statutory amounts. That is separate from an optional workplace retirement match."
          }
        ],
        "notes": "Do not call $4,230.45 the base-only CPP maximum: the 5.95% tier includes an additional component. Age, elections, exceptions and part-year employment can change actual payroll."
      },
      {
        "id": "benefits-ei",
        "type": "explain",
        "title": "EI is insurance with eligibility—not an account you cash out.",
        "body": "EI premiums support public benefits for eligible situations, including unemployment and certain special benefits. Paying premiums does not by itself guarantee a claim. For regular benefits, Service Canada assesses the circumstances, insurable work and other conditions. Québec has different EI premiums and a separate parental insurance plan.",
        "section": "Read the pay package",
        "facts": [
          {
            "term": "2026 non-Québec employee EI",
            "definition": "1.63% of insurable earnings up to $68,900, for a maximum $1,123.07 annual employee premium."
          },
          {
            "term": "Standard employer premium",
            "definition": "Generally 1.4 times the employee premium; an approved reduced employer rate can apply."
          },
          {
            "term": "EI benefit amount",
            "definition": "Regular benefits are generally based on a percentage of average insurable weekly earnings up to a limit—not a full salary guarantee."
          }
        ],
        "notes": "Do not calculate entitlement from annual salary alone or promise a duration. Direct eligibility questions to current Service Canada rules."
      },
      {
        "id": "benefits-payroll-lab",
        "type": "activity",
        "title": "Read the public-program deductions.",
        "body": "Adjust fictional annual employment earnings and separate employee CPP, CPP2 and EI from employer contributions. The standard 2026 illustration is for a full-year, eligible employee outside Québec. It excludes income tax and other deductions, so its remainder is not take-home pay.",
        "activity": "payroll",
        "section": "Read the pay package",
        "notes": "Show the ceilings. Ask why deductions stop growing beyond them in this full-year model. Actual pay-period withholding can differ due to age, elections, multiple jobs and part-year work."
      },
      {
        "id": "benefits-retirement-types",
        "type": "explain",
        "title": "Not every workplace retirement plan works the same way.",
        "body": "A defined benefit plan uses a formula to determine a pension under its rules. A defined contribution plan specifies contributions, while the eventual balance and income depend on investment results and other factors. A group RRSP is an employer-sponsored RRSP arrangement. Read the specific plan rather than assuming all are interchangeable.",
        "section": "Retirement at work",
        "facts": [
          {
            "term": "Defined benefit pension",
            "definition": "A formula-based pension promise; details depend on the plan."
          },
          {
            "term": "Defined contribution pension",
            "definition": "A plan with defined contributions and investment-dependent outcomes."
          },
          {
            "term": "Group RRSP",
            "definition": "RRSP participation arranged through an employer; contributions use relevant RRSP room."
          },
          {
            "term": "Pension adjustment",
            "definition": "Registered pension or certain other plan benefits can reduce later RRSP room; group RRSP contributions themselves are not the same mechanism."
          }
        ]
      },
      {
        "id": "benefits-matching-lab",
        "type": "activity",
        "title": "What does “we match your contribution” actually mean?",
        "body": "Try different employee contribution percentages, employer match rates and caps. Compare the money you contribute with what the employer adds. Then inspect the eligibility, vesting, room and fee questions—not just the headline percentage.",
        "activity": "matching",
        "section": "Retirement at work",
        "notes": "Matching is conditional compensation, not guaranteed market return. The calculator models a fictional formula, not a universal workplace entitlement."
      },
      {
        "id": "benefits-match-check",
        "type": "check",
        "title": "A 50% match up to a cap is not a match on everything.",
        "body": "A fictional employer matches half of employee contributions up to a stated contribution cap. What should Alex verify?",
        "options": [
          "That every dollar contributed is matched without limit.",
          "The eligible salary, match formula, cap, eligibility, plan type and any vesting or withdrawal rules.",
          "Only the employee’s preferred investment colour."
        ],
        "correct": 1,
        "rationales": [
          "The cap and formula limit what is added.",
          "Exactly. The plan terms determine the contribution, and account-room and investment costs still matter.",
          "Plan mechanics and investments matter; appearance does not establish value."
        ],
        "section": "Retirement at work"
      },
      {
        "id": "benefits-insurance-basics",
        "type": "explain",
        "title": "Coverage has a price—and boundaries.",
        "body": "Workplace plans may include health, dental, vision, life, or short- and long-term disability insurance. Understand who pays premiums, what counts as eligible, and whether the plan covers you and dependants. A headline coverage percentage does not explain every exclusion or maximum.",
        "section": "Insurance and other benefits",
        "facts": [
          {
            "term": "Premium",
            "definition": "The price paid for insurance coverage; employer and employee shares can differ."
          },
          {
            "term": "Deductible",
            "definition": "An eligible amount you pay before the plan starts reimbursing under the stated rule."
          },
          {
            "term": "Coinsurance / reimbursement percentage",
            "definition": "The share paid by the plan or the member, depending on the wording; always check whose percentage is quoted."
          },
          {
            "term": "Maximum and exclusion",
            "definition": "A cap limits payment; an exclusion removes specified expenses or situations from coverage."
          },
          {
            "term": "Disability insurance",
            "definition": "Coverage that may replace part of income after illness or injury, with definitions, waiting periods and claim conditions."
          }
        ]
      },
      {
        "id": "benefits-insurance-lab",
        "type": "activity",
        "title": "A claim is not always reimbursed in full.",
        "body": "Change a fictional eligible claim, deductible, reimbursement percentage and remaining annual maximum. Compare the plan payment with your out-of-pocket amount. The model separates the total bill from the amount recognized as eligible; actual claims also depend on plan rules and exclusions.",
        "activity": "insurance",
        "section": "Insurance and other benefits",
        "notes": "Explain the order of this model’s deductible, percentage and remaining maximum. Do not infer actual coverage or approval from the calculator."
      },
      {
        "id": "benefits-beyond-insurance",
        "type": "explain",
        "title": "Other benefits are worth reading about too.",
        "body": "Employers may offer more than pension and insurance plans. Availability, tax treatment, expiry, eligibility and portability vary. Treat this as a questions-to-ask menu, not a list every employer must provide.",
        "section": "Insurance and other benefits",
        "facts": [
          {
            "term": "EAP and mental-health support",
            "definition": "Employee assistance programs may provide confidential counselling or referral support. Check services, limits and access."
          },
          {
            "term": "Health spending / flexible benefits",
            "definition": "A plan may allocate credits or allowances to eligible expenses. Check expiry, carryover and eligible claims."
          },
          {
            "term": "Paid leave",
            "definition": "Vacation, sick or other paid leave can come from employment standards, agreements and employer policy. Rules vary by jurisdiction and situation."
          },
          {
            "term": "Training / tuition",
            "definition": "Education reimbursement may have approval, completion or repayment conditions."
          },
          {
            "term": "Employee share purchase plans",
            "definition": "Discounts or employer contributions can have limits, vesting, tax and selling rules. Employer stock concentrates job and investment exposure in the same company."
          },
          {
            "term": "Vesting and liquidity",
            "definition": "When you gain rights to an employer-funded benefit, and when or how it can be converted to accessible money, are separate questions."
          }
        ]
      },
      {
        "id": "benefits-tax-and-leaving",
        "type": "discuss",
        "title": "“Employer-paid” does not mean every tax result is the same.",
        "body": "Alex sees employer-paid life insurance, dental coverage and disability premiums in a benefits booklet. They are also considering changing jobs.",
        "prompt": "Can Alex assume every benefit is tax-free and follows them to the next job?",
        "answer": "No. Tax treatment depends on the benefit, plan structure, who pays premiums and the applicable jurisdiction. Disability benefit taxation can depend on premium funding. Leaving a job can end coverage or trigger deadlines, transfer or conversion choices. Check the booklet, payroll details and current tax guidance.",
        "section": "Insurance and other benefits",
        "notes": "Do not generalize from one insurance type to all benefits. Québec can differ from federal tax treatment. Do not promise portability or a conversion right for every plan."
      },
      {
        "id": "benefits-check",
        "type": "check",
        "title": "Which question belongs on the benefits checklist?",
        "body": "Alex gets a new job offer with insurance and retirement contributions. What is the useful next step?",
        "options": [
          "Assume the advertised salary tells the full compensation story.",
          "Read eligibility, employee costs, coverage limits, contribution rules and what happens when employment ends.",
          "Treat CPP, EI and optional matching as the same private investment account."
        ],
        "correct": 1,
        "rationales": [
          "Salary is important, but plan costs and terms affect the rest of the package.",
          "Yes. Understand the mechanics before assigning a value or relying on coverage.",
          "They are different public programs and workplace arrangements."
        ],
        "section": "Insurance and other benefits"
      },
      {
        "id": "benefits-recap",
        "type": "recap",
        "title": "Ask better questions about the whole package.",
        "body": "Separate statutory deductions from optional employer benefits. Read match formulas, room implications and investment costs. Check insurance funding, eligibility, caps and claim rules. Look for other supports and departure deadlines. Your next step: find one benefits document and identify one unanswered question—without sharing private health or payroll details.",
        "section": "Insurance and other benefits"
      }
    ]
  }
];

export const newSources = [
  {
    "id": "new-tax-rates",
    "title": "Current year tax rates and income brackets (2026)",
    "publisher": "Canada Revenue Agency",
    "url": "https://www.canada.ca/en/revenue-agency/services/tax/individuals/tax-rates-brackets/current-year.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-limits",
    "title": "Registered plan limits, TFSA limits, YMPE and YAMPE",
    "publisher": "Canada Revenue Agency",
    "url": "https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/pspa/mp-rrsp-dpsp-tfsa-limits-ympe.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-tfsa",
    "title": "What is a TFSA?",
    "publisher": "Canada Revenue Agency",
    "url": "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/what.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-tfsa-room",
    "title": "Before you contribute to a TFSA",
    "publisher": "Canada Revenue Agency",
    "url": "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/contributing/before.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-tfsa-withdraw",
    "title": "Withdrawing from a TFSA",
    "publisher": "Canada Revenue Agency",
    "url": "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/withdraw.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-rrsp-room",
    "title": "How contributions affect your RRSP deduction limit",
    "publisher": "Canada Revenue Agency",
    "url": "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/contributing-a-rrsp-prpp/contributions-affect-your-rrsp-prpp-deduction-limit.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-rrsp-guide",
    "title": "RRSPs and other registered plans for retirement",
    "publisher": "Canada Revenue Agency",
    "url": "https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4040/rrsps-other-registered-plans-retirement.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-fhsa-room",
    "title": "Participating in your FHSAs",
    "publisher": "Canada Revenue Agency",
    "url": "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account/contributing-your-fhsa.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-fhsa-withdraw",
    "title": "Withdrawals and transfers out of your FHSAs",
    "publisher": "Canada Revenue Agency",
    "url": "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account/withdrawals-transfers-out-your-fhsas.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-retirement-income",
    "title": "Sources of income during retirement",
    "publisher": "Service Canada",
    "url": "https://www.canada.ca/en/services/life-events/retirement/sources-income.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-gis",
    "title": "Guaranteed Income Supplement overview",
    "publisher": "Service Canada",
    "url": "https://www.canada.ca/en/services/benefits/publicpensions/old-age-security/guaranteed-income-supplement.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-debt-plan",
    "title": "Paying back your debt",
    "publisher": "Financial Consumer Agency of Canada",
    "url": "https://www.canada.ca/en/financial-consumer-agency/services/debt/paying-debt.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-card-transfer",
    "title": "How credit cards work: balance transfers and charges",
    "publisher": "Financial Consumer Agency of Canada",
    "url": "https://www.canada.ca/en/financial-consumer-agency/services/credit-cards/credit-card-work.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-consolidation",
    "title": "Debt consolidation",
    "publisher": "Financial Consumer Agency of Canada",
    "url": "https://www.canada.ca/en/financial-consumer-agency/services/debt/debt-consolidation.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-rate-risk",
    "title": "Managing your money when interest rates rise",
    "publisher": "Financial Consumer Agency of Canada",
    "url": "https://www.canada.ca/en/financial-consumer-agency/services/interest-rates-rise.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-car-risk",
    "title": "Financial risks when buying a car",
    "publisher": "Financial Consumer Agency of Canada",
    "url": "https://www.canada.ca/en/financial-consumer-agency/services/loans/financing-car/risks.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-mortgage-term",
    "title": "Mortgage terms and amortization",
    "publisher": "Financial Consumer Agency of Canada",
    "url": "https://www.canada.ca/en/financial-consumer-agency/services/mortgages/mortgage-terms-amortization.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-mortgage-rate",
    "title": "Interest on mortgages",
    "publisher": "Financial Consumer Agency of Canada",
    "url": "https://www.canada.ca/en/financial-consumer-agency/services/mortgages/interest-on-mortgages.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-debt-help",
    "title": "Getting help from a credit counsellor",
    "publisher": "Financial Consumer Agency of Canada",
    "url": "https://www.canada.ca/en/financial-consumer-agency/services/debt/debt-help.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-loans",
    "title": "Personal loans",
    "publisher": "Financial Consumer Agency of Canada",
    "url": "https://www.canada.ca/en/financial-consumer-agency/services/loans/personal-loans.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-cpp-rates",
    "title": "CPP contribution rates, maximums and exemptions",
    "publisher": "Canada Revenue Agency",
    "url": "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/canada-pension-plan-cpp/cpp-contribution-rates-maximums-exemptions.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-cpp2",
    "title": "Second additional CPP contribution rates and maximums",
    "publisher": "Canada Revenue Agency",
    "url": "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/calculating-deductions/making-deductions/second-additional-cpp-contribution-rates-maximums.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-ei-rates",
    "title": "EI premium rates and maximums",
    "publisher": "Canada Revenue Agency",
    "url": "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/employment-insurance-ei/ei-premium-rates-maximums.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-ei-employers",
    "title": "Employment Insurance information for employers",
    "publisher": "Service Canada",
    "url": "https://www.canada.ca/en/employment-social-development/programs/ei/ei-list/ei-employers.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-ei-eligibility",
    "title": "EI regular benefits: eligibility",
    "publisher": "Service Canada",
    "url": "https://www.canada.ca/en/services/benefits/ei/ei-regular-benefit/eligibility.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-ei-amount",
    "title": "EI regular benefits: how much could you receive?",
    "publisher": "Service Canada",
    "url": "https://www.canada.ca/en/services/benefits/ei/ei-regular-benefit/benefit-amount.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-employer-pension",
    "title": "Employer pension plans",
    "publisher": "Financial Consumer Agency of Canada",
    "url": "https://www.canada.ca/en/financial-consumer-agency/services/retirement-planning/employer-sponsored-pension.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-insurance-tax",
    "title": "Employers’ guide: taxable benefits and allowances",
    "publisher": "Canada Revenue Agency",
    "url": "https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4130/employers-guide-taxable-benefits-allowances.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-benefit-tax",
    "title": "Determine if a benefit is taxable",
    "publisher": "Canada Revenue Agency",
    "url": "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/benefits-allowances/benefits-allowances-chart.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "new-qc-insurance",
    "title": "Contributions to a group insurance plan",
    "publisher": "Revenu Québec",
    "url": "https://www.revenuquebec.ca/en/businesses/source-deductions-and-employer-contributions/calculating-source-deductions-and-contributions/special-cases-source-deductions-and-employer-contributions/taxable-benefits/list-of-taxable-benefits/insurance-plans/contributions-to-a-group-insurance-plan-including-a-private-health-services-plan/",
    "reviewedAt": "2026-10-24"
  }
];

export const newGlossary = [
  {
    "term": "Taxable income",
    "definition": "Income remaining after relevant deductions used to calculate income tax; it is not necessarily salary."
  },
  {
    "term": "Deduction",
    "definition": "An eligible amount that reduces income used in the tax calculation."
  },
  {
    "term": "Tax credit",
    "definition": "An amount that reduces tax under specified rules; refundable and non-refundable credits differ."
  },
  {
    "term": "Withholding",
    "definition": "Tax collected from pay or a payment before the final tax-return calculation."
  },
  {
    "term": "Marginal tax rate",
    "definition": "The tax effect on an additional amount of income; benefit and credit rules can affect the effective rate."
  },
  {
    "term": "Average tax rate",
    "definition": "Total tax divided by the income measure being compared; identify whether it is taxable or gross income."
  },
  {
    "term": "RRSP",
    "definition": "Registered retirement savings plan: an account with contribution/deduction limits and generally taxable ordinary withdrawals."
  },
  {
    "term": "FHSA",
    "definition": "First home savings account: an account for eligible participants with deductible eligible contributions and tax-free qualifying withdrawals."
  },
  {
    "term": "Contribution room",
    "definition": "The amount that can be contributed without exceeding the relevant account rules; it is personal, not simply an annual headline limit."
  },
  {
    "term": "Deduction limit",
    "definition": "The maximum deduction allowed under the relevant account rules; contributions and deductions are different."
  },
  {
    "term": "Pension adjustment",
    "definition": "A reported pension-benefit amount that generally reduces next year’s RRSP deduction limit."
  },
  {
    "term": "Tax deferral",
    "definition": "Postponing tax under account rules rather than eliminating it permanently."
  },
  {
    "term": "RRIF",
    "definition": "Registered retirement income fund: a retirement-income arrangement with required minimum withdrawals."
  },
  {
    "term": "CPP / QPP",
    "definition": "Public contributory pension programs with benefits determined under their rules, not individual investment accounts."
  },
  {
    "term": "OAS",
    "definition": "Old Age Security: a public pension with age and residency requirements and income-related rules."
  },
  {
    "term": "GIS",
    "definition": "Guaranteed Income Supplement: an income-tested supplement for eligible low-income OAS recipients."
  },
  {
    "term": "Longevity risk",
    "definition": "The risk that savings must support a longer life than planned."
  },
  {
    "term": "Sequence risk",
    "definition": "The order of investment returns can affect how long a portfolio lasts during withdrawals."
  },
  {
    "term": "Secured debt",
    "definition": "Debt backed by specified collateral; missed payments can put the asset at risk."
  },
  {
    "term": "Unsecured debt",
    "definition": "Debt not backed by specified collateral, while still creating repayment obligations."
  },
  {
    "term": "Avalanche repayment",
    "definition": "Keeping required payments current, then directing extra money toward the highest-rate debt."
  },
  {
    "term": "Snowball repayment",
    "definition": "Keeping required payments current, then directing extra money toward the smallest balance."
  },
  {
    "term": "Balance transfer",
    "definition": "Moving an existing debt to another credit account under a transfer offer and its conditions."
  },
  {
    "term": "Promotional rate",
    "definition": "A temporary rate subject to stated dates and other conditions."
  },
  {
    "term": "Consolidation",
    "definition": "Replacing several debts with a new borrowing arrangement, which can change cost and risk."
  },
  {
    "term": "Refinancing",
    "definition": "Replacing or changing borrowing arrangements; costs and eligibility rules can apply."
  },
  {
    "term": "Negative equity",
    "definition": "When the amount owed on an asset exceeds its current value."
  },
  {
    "term": "Mortgage term",
    "definition": "The length of the current mortgage contract, distinct from the projected full repayment period."
  },
  {
    "term": "Amortization",
    "definition": "The projected period over which scheduled payments repay a debt."
  },
  {
    "term": "Prepayment",
    "definition": "An extra or early payment; agreements may impose limits or charges."
  },
  {
    "term": "EI",
    "definition": "Employment Insurance: a public program funded by premiums with eligibility and benefit rules."
  },
  {
    "term": "Defined benefit pension",
    "definition": "A pension whose promised benefits use a plan formula."
  },
  {
    "term": "Defined contribution pension",
    "definition": "A pension with specified contributions and investment-dependent outcomes."
  },
  {
    "term": "Employer match",
    "definition": "An employer contribution determined by a workplace plan’s matching formula and conditions."
  },
  {
    "term": "Vesting",
    "definition": "When rights to a benefit become yours under the plan rules."
  },
  {
    "term": "Premium",
    "definition": "The price paid for insurance coverage."
  },
  {
    "term": "Deductible",
    "definition": "An eligible amount a member pays before plan reimbursement under the specified rule."
  },
  {
    "term": "Coinsurance",
    "definition": "A share of an eligible expense paid by the plan or member; check whose percentage is quoted."
  },
  {
    "term": "Coverage exclusion",
    "definition": "A situation or expense the insurance policy does not cover."
  },
  {
    "term": "EAP",
    "definition": "Employee assistance program: workplace support that may include counselling or referrals, subject to its terms."
  }
];

