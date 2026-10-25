import {newModules,newSources,newGlossary} from './new-content.js';
import {taxSources} from './tax-calculations.js';
import {debtSources} from './debt-calculations.js';
import {benefitSources} from './benefit-activities.js';
// Standalone Canadian financial-literacy modules. Educational examples only.
export const modules = [
  {
    "id": "budgeting",
    "title": "Budgeting",
    "eyebrow": "Make room for what matters",
    "description": "Give your money a job. Build a flexible plan, then tackle a surprise expense.",
    "duration": "10–15 min",
    "color": "#d7f5b7",
    "icon": "wallet",
    "objectives": [
      "Build a budget using take-home pay.",
      "Plan for irregular expenses and unexpected costs.",
      "Adjust spending without treating your budget as a pass/fail test."
    ],
    "sourceIds": [
      "fcac-budget",
      "fcac-emergency"
    ],
    "steps": [
      {
        "id": "budget-start",
        "type": "explain",
        "title": "A plan, not a punishment",
        "body": "A budget compares the money coming in with the money going out. Start with take-home pay—the amount you receive after deductions. Include bills, everyday spending, debt payments, and savings. A useful budget makes your priorities visible and changes when life does.",
        "notes": "Ask: What expense tends to sneak up on people? Keep examples fictional; nobody needs to reveal their income."
      },
      {
        "id": "budget-predict",
        "type": "discuss",
        "title": "Monthly does not mean predictable",
        "body": "Alex has CAD 3,200 in monthly take-home pay. Rent is predictable. Groceries vary. A yearly insurance bill is not monthly, but it still belongs in the plan.",
        "prompt": "Is a yearly bill an emergency—or something you can prepare for?",
        "answer": "Usually it is an irregular expense: expected, just not monthly. Setting money aside over the year can make it easier to handle. An emergency is an unexpected cost or loss of income. The categories help you plan; they are not moral judgments.",
        "notes": "Examples: seasonal gifts, annual subscriptions, car servicing. Avoid saying every household can save the same amount."
      },
      {
        "id": "budget-play",
        "type": "activity",
        "activity": "budget",
        "title": "You are Alex's budget coach",
        "body": "Allocate Alex's CAD 3,200 take-home pay. Watch the amount remaining as you change the categories. Then introduce a CAD 350 surprise expense and discuss what could change.",
        "notes": "Let the group suggest more than one workable tradeoff. Savings and flexible spending are choices to discuss, not automatic answers. Never imply a negative balance is a personal failure."
      },
      {
        "id": "budget-buffer",
        "type": "explain",
        "title": "Build some breathing room",
        "body": "Emergency savings can help with unexpected costs or income interruptions. Start with an amount that is possible for your situation and build gradually. Keep planned irregular expenses separate in your thinking, even if you use one savings account. If costs exceed income, the plan needs a change—not a guilt trip.",
        "notes": "A budget can reveal an income shortfall that cutting small treats cannot solve. Mention income, benefits, fixed costs, and debt support as possible discussion points."
      },
      {
        "id": "budget-check-1",
        "type": "check",
        "title": "Which income goes in the budget?",
        "body": "Alex's salary before deductions is CAD 4,000. CAD 3,200 actually arrives in their account. What is the starting point for this spending plan?",
        "options": [
          "CAD 4,000: the salary sounds better.",
          "CAD 3,200: the money Alex actually receives.",
          "CAD 3,200 plus the credit-card limit."
        ],
        "correct": 1,
        "rationales": [
          "Before-tax salary includes money that is not available to spend.",
          "Exactly. This plan uses take-home income so the spending total matches available money.",
          "A credit limit is borrowing capacity, not income."
        ]
      },
      {
        "id": "budget-tradeoffs",
        "type": "discuss",
        "title": "More than one good budget",
        "body": "Two people with the same income may have different rent, caregiving responsibilities, goals, and access to transport.",
        "prompt": "Should everyone use exactly the same spending percentages?",
        "answer": "No. Percentage rules can be useful starting points, but they are not universal requirements. A workable budget fits actual costs and priorities, accounts for debt and savings, and is reviewed when circumstances change.",
        "notes": "Invite the group to name a tradeoff without choosing a single 'correct' lifestyle."
      },
      {
        "id": "budget-check-2",
        "type": "check",
        "title": "The annual bill has arrived",
        "body": "Alex knows a CAD 600 annual bill is due in 12 months. What is one way to prepare?",
        "options": [
          "Ignore it until it arrives.",
          "Set aside CAD 50 each month if the budget allows.",
          "Count the bill as income."
        ],
        "correct": 1,
        "rationales": [
          "That can leave a predictable cost without funding.",
          "Yes. CAD 600 ÷ 12 = CAD 50 per month. Review the plan if that amount is not affordable.",
          "An expense uses money; it does not add money."
        ]
      },
      {
        "id": "budget-recap",
        "type": "recap",
        "title": "Your budget can evolve",
        "body": "Use take-home pay. Include bills, flexible spending, debt, savings, and irregular costs. Check whether the plan balances, then revisit it when life changes. Your next step: review one month of transactions and find one expense you want to plan for. Credit and investing are optional next lessons, not requirements."
      }
    ]
  },
  {
    "id": "credit",
    "title": "Credit",
    "eyebrow": "Borrow with your eyes open",
    "description": "Decode a credit-card statement and see what different payment choices really do.",
    "duration": "10–15 min",
    "color": "#e7ddff",
    "icon": "card",
    "objectives": [
      "Read a statement balance, minimum payment, and due date.",
      "Explain how interest changes borrowing costs.",
      "Recognize habits that support responsible credit use."
    ],
    "sourceIds": [
      "fcac-credit",
      "fcac-payoff",
      "fcac-score",
      "fcac-how-cards"
    ],
    "steps": [
      {
        "id": "credit-start",
        "type": "explain",
        "title": "A credit limit is not extra income",
        "body": "Credit is money you borrow and agree to repay. A credit card lets you borrow up to a limit. Interest is a charge for borrowing; APR is the annual percentage rate. Alex's card is a payment tool with a bill attached—not an extension of their salary.",
        "notes": "Define borrowing before discussing rewards. Ask how paying by card differs from paying with money already in a chequing account."
      },
      {
        "id": "credit-statement",
        "type": "discuss",
        "title": "Four numbers worth knowing",
        "body": "The statement balance is what you owed at the end of the billing period. The current balance can also include newer transactions and payments. The minimum payment is the least the issuer requires by the due date; it is not a plan for avoiding interest.",
        "prompt": "If Alex pays the minimum, have they paid off the bill?",
        "answer": "No. They have made the required minimum payment, but the remaining balance can generate interest. For eligible purchases, paying the statement balance in full by the due date generally avoids purchase interest when grace-period conditions are met. Check the card's terms.",
        "notes": "Explain that statement balance and current balance can differ without an error. A sample minimum is fictional, not a rule for every Canadian card."
      },
      {
        "id": "credit-play",
        "type": "activity",
        "activity": "credit",
        "title": "Small payments, long journey?",
        "body": "Read the sample statement, then compare fixed monthly payments on an illustrative card balance. Predict which choice clears the debt sooner before changing the payment. The model is a teaching example; actual issuer calculations and minimum-payment rules vary.",
        "notes": "Calculator must display APR/12 monthly interest added before payment, no new purchases or fees, and a capped final payment. Do not call its fixed payment a universal minimum. Show non-declining debt when the payment does not cover interest."
      },
      {
        "id": "credit-grace",
        "type": "explain",
        "title": "The grace period has conditions",
        "body": "A purchase grace period is time in which eligible purchases can avoid interest if you meet the repayment conditions. Paying only the minimum does not preserve that benefit. Cash advances generally start charging interest immediately and may have fees. Read your agreement; paying on time matters even when you cannot clear the full balance.",
        "notes": "Do not imply every transaction or promotional rate follows the same rules. If someone cannot meet a required payment, contacting the lender early is a useful next step."
      },
      {
        "id": "credit-check-1",
        "type": "check",
        "title": "Which amount clears the statement?",
        "body": "The sample statement balance is CAD 1,000, the minimum is CAD 30, and the current balance is CAD 1,150 after newer purchases. Which amount is the full statement balance?",
        "options": [
          "CAD 30",
          "CAD 1,000",
          "CAD 1,150"
        ],
        "correct": 1,
        "rationales": [
          "CAD 30 is the sample required minimum, not the full statement balance.",
          "Correct. CAD 1,000 clears this statement's balance. Interest treatment still depends on the card terms and grace-period eligibility.",
          "CAD 1,150 is the current balance in this example, including newer purchases."
        ]
      },
      {
        "id": "credit-history",
        "type": "explain",
        "title": "Build history, not interest charges",
        "body": "A credit report records your borrowing history. A credit score summarizes information from that history; lenders may also consider other factors. Pay on time, keep borrowing manageable, and check reports for errors. Using less of your available credit can help. You do not need to carry interest-bearing debt to build credit.",
        "notes": "Avoid promising an exact score increase or treating one utilization threshold as a guarantee. Different scoring models and lenders may assess information differently."
      },
      {
        "id": "credit-predict",
        "type": "discuss",
        "title": "Rewards versus borrowing costs",
        "body": "Alex is tempted to buy more because a card offers points. Their budget has no room for the extra spending.",
        "prompt": "Do rewards make an unaffordable purchase affordable?",
        "answer": "No. Rewards do not remove the repayment obligation. Interest and fees can outweigh rewards. Start with affordability and repayment, then compare optional benefits.",
        "notes": "Keep this a reasoning exercise rather than a product comparison."
      },
      {
        "id": "credit-check-2",
        "type": "check",
        "title": "Do you need to pay interest?",
        "body": "A friend says, 'Leave some debt on the card so your credit score improves.' What is the best response?",
        "options": [
          "Yes: interest is the price of building credit.",
          "No: responsible use and on-time payments can build history without carrying interest-bearing debt.",
          "Stop making payments until the score changes."
        ],
        "correct": 1,
        "rationales": [
          "Carrying interest-bearing debt is not required to build a credit history.",
          "Exactly. You can use credit responsibly and pay the statement balance in full under the card's terms.",
          "Missing payments can harm your history and add costs."
        ]
      },
      {
        "id": "credit-recap",
        "type": "recap",
        "title": "Read the bill. Make a plan.",
        "body": "Know the statement balance, minimum, and due date. Paying the minimum is different from clearing the balance. Check interest, fees, and grace-period terms. Pay on time and borrow within your means. Your next step: find these fields on a statement, or review an example before choosing a card."
      }
    ]
  },
  {
    "id": "investing",
    "title": "Investing",
    "eyebrow": "Understand before you invest",
    "description": "From stocks and ETFs to indexes, fees, and compound growth. Get the vocabulary, then play with the numbers.",
    "duration": "45–65 min",
    "color": "#ffd5ba",
    "icon": "chart",
    "objectives": [
      "Explain stocks, bonds, ETFs, indexes, and investment returns in plain language.",
      "Compare overlapping ETFs by holdings, costs, currency exposure, and tracking.",
      "Explore compounding, contributions, time, interest rates, and inflation.",
      "Recognize investment costs, risk, and the difference between accounts and holdings."
    ],
    "sourceIds": [
      "osc-diversify",
      "osc-etfs",
      "cra-tfsa",
      "csa-crypto",
      "ciro-basics",
      "osc-fees",
      "sp500",
      "sp500-method",
      "osc-etf-work",
      "csa-etf-facts",
      "osc-compound",
      "osc-bonds",
      "osc-bond-risk",
      "nssc-hedging",
      "osc-foreign-etf",
      "osc-crypto-platform",
      "vanguard-costs",
      "amf-etf-facts",
      "vanguard-vfv",
      "bmo-zsp",
      "ishares-xus"
    ],
    "steps": [
      {
        "id": "invest-start",
        "type": "explain",
        "title": "Start with the goal, not the ticker",
        "body": "Investing means putting money into an asset hoping for income, growth, or both. A market connects buyers and sellers; prices can change. Before choosing an investment, ask when you need the money, how accessible it must be, and how much loss you could afford. Near-term bills and emergency money need different treatment from a distant goal.",
        "notes": "This module stands alone. Explain that money needed for living costs, emergencies, or costly borrowing is not automatically available to invest. No budgeting lesson is required.",
        "section": "Foundations"
      },
      {
        "id": "invest-types",
        "section": "Foundations",
        "type": "explain",
        "title": "Saving, investing, and access to money",
        "body": "Cash savings keep money available. Investing puts money into assets whose income or value may change. A GIC is a deposit with a term and return conditions. The name of a product does not answer every question: check access, risk, fees, and protection.",
        "facts": [
          {
            "term": "Principal",
            "definition": "The original amount deposited or invested."
          },
          {
            "term": "GIC",
            "definition": "Guaranteed investment certificate: a deposit with a stated term and conditions. Cashable and non-redeemable products differ."
          },
          {
            "term": "Liquidity",
            "definition": "How easily money can be accessed or an asset sold, and at what cost."
          },
          {
            "term": "Inflation",
            "definition": "A rising general price level: the same dollars buy less."
          }
        ],
        "notes": "A savings account or GIC is not the same as a cash or money-market ETF. Deposit-insurance eligibility depends on the institution, product and applicable coverage rules."
      },
      {
        "id": "invest-stock-returns",
        "section": "Foundations",
        "type": "explain",
        "title": "A stock is a slice of ownership",
        "body": "Buying a share makes you a small owner of a company. Its price can rise or fall. Some companies pay dividends; others do not. A dividend is not free extra wealth: cash leaves the company, and prices adjust to many factors. Consider income and price changes together.",
        "facts": [
          {
            "term": "Share / stock",
            "definition": "A unit of ownership in a company."
          },
          {
            "term": "Dividend",
            "definition": "A payment a company makes to shareholders; it can change or stop."
          },
          {
            "term": "Capital gain / loss",
            "definition": "The difference between sale proceeds and purchase cost, before relevant expenses and tax."
          },
          {
            "term": "Total return",
            "definition": "Price change plus investment income, expressed relative to the starting investment."
          }
        ],
        "notes": "Fictional example: a $100 share ends at $103 and pays $2: total return is $5, or 5%, before costs and taxes. This does not promise a dividend or price gain."
      },
      {
        "id": "invest-bond-basics",
        "section": "Foundations",
        "type": "explain",
        "title": "A bond is an IOU with terms",
        "body": "Buying a bond means lending to an issuer, such as a government or company. A typical fixed-rate bond promises coupon payments and repayment of face value at maturity. The issuer might fail to pay. If you sell early, the market price may be above or below what you paid.",
        "facts": [
          {
            "term": "Face value",
            "definition": "The principal the issuer promises to repay at maturity."
          },
          {
            "term": "Coupon",
            "definition": "The bond’s stated interest payment; a fixed coupon rate applies to face value, not its changing market price."
          },
          {
            "term": "Maturity",
            "definition": "The scheduled date for principal repayment."
          },
          {
            "term": "Yield to maturity",
            "definition": "The annualized return implied by price and promised payments if held to maturity; it depends on assumptions and is not a guarantee."
          },
          {
            "term": "Default risk",
            "definition": "The possibility that an issuer misses interest or principal payments."
          }
        ]
      },
      {
        "id": "invest-bond-rates",
        "section": "Foundations",
        "type": "activity",
        "title": "Why do bond prices move when rates change?",
        "body": "A fixed coupon does not update just because new bonds offer higher rates. Investors adjust the price they will pay for the existing payments. Move the market yield and compare short and long maturities. Keep the coupon fixed first: predict the direction before changing the yield.",
        "activity": "bondrates",
        "notes": "All else equal, existing fixed-rate bond prices move opposite to market yields. Market yield is not simply the Bank of Canada policy rate. The illustration should assume annual coupons and no default, tax, fees or accrued interest. A bond ETF holds changing bonds and does not necessarily mature like one bond."
      },
      {
        "id": "invest-goals",
        "type": "discuss",
        "title": "Same dollars. Different deadlines.",
        "body": "Alex has one goal due in six months and another many years away. Risk means more than an uncomfortable chart: a loss or lack of access can stop money being there when needed.",
        "prompt": "Should these goals automatically use the same investments?",
        "answer": "No. Time horizon, access needs, ability to bear losses, and comfort with uncertainty all matter. A longer horizon does not guarantee a profit. Money needed soon leaves less time to respond to a market decline.",
        "notes": "Ask the group to distinguish willingness to take risk from financial ability to absorb it. Avoid prescribing a portfolio.",
        "section": "Foundations"
      },
      {
        "id": "invest-etf-definition",
        "section": "ETFs & indexes",
        "type": "explain",
        "title": "ETF: one trade, a portfolio inside",
        "body": "ETF means exchange-traded fund. Investors buy units of a fund on a stock exchange. The fund can hold stocks, bonds, other funds, or other exposures. You own fund units rather than choosing each holding yourself. It can be convenient, but the holdings and strategy determine the risks.",
        "facts": [
          {
            "term": "ETF unit",
            "definition": "Your ownership interest in the pooled fund."
          },
          {
            "term": "Holding",
            "definition": "An investment owned inside the fund."
          },
          {
            "term": "Exchange",
            "definition": "A marketplace where securities are bought and sold."
          },
          {
            "term": "Ticker",
            "definition": "A short trading symbol identifying a security on an exchange. It is a label, not a strategy."
          },
          {
            "term": "NAV",
            "definition": "Net asset value: fund assets minus liabilities, divided by units for NAV per unit. Market price can differ."
          }
        ],
        "notes": "Mutual funds also pool money; their units are typically transacted at end-of-day NAV rather than continuously on an exchange. Not all ETFs are diversified or index-tracking."
      },
      {
        "id": "invest-index-sp500",
        "section": "ETFs & indexes",
        "type": "explain",
        "title": "The S&P 500 is an index—not an ETF",
        "body": "An index is a rules-based measurement of a selected market. The S&P 500 follows 500 leading U.S. companies in the large-company segment. Its weights reflect publicly available market value, so bigger companies have more influence. It is not 500 equal slices and does not represent the whole world.",
        "facts": [
          {
            "term": "Index / benchmark",
            "definition": "A defined basket and calculation used to measure performance. A fund may try to follow it."
          },
          {
            "term": "Market capitalization",
            "definition": "Share price multiplied by shares outstanding: the market value of a company’s equity."
          },
          {
            "term": "Float-adjusted weighting",
            "definition": "Weights use shares available to public investors, excluding certain closely held shares."
          },
          {
            "term": "Index fund",
            "definition": "A fund designed to track a particular index. Different providers can offer funds following the same index."
          }
        ],
        "notes": "The index itself cannot be bought directly. Funds aim to track it and may differ from the benchmark. Index membership uses eligibility rules and a committee; it is not simply a list of the 500 biggest companies."
      },
      {
        "id": "invest-passive-active",
        "section": "ETFs & indexes",
        "type": "explain",
        "title": "Same fund wrapper, different strategies",
        "body": "A passive index strategy aims to follow a benchmark, not pick the next winner. Active managers choose holdings or exposures to pursue an objective. Either approach can be packaged as an ETF. A fund may focus on one sector, country, or asset; another may hold many markets.",
        "facts": [
          {
            "term": "Passive / index strategy",
            "definition": "A strategy seeking to track a specified benchmark."
          },
          {
            "term": "Active strategy",
            "definition": "A strategy using investment decisions to pursue an objective rather than simply follow a benchmark."
          },
          {
            "term": "Asset allocation",
            "definition": "How a portfolio is divided among asset classes, such as stocks, bonds and cash."
          },
          {
            "term": "Sector",
            "definition": "A category of related businesses, such as financial services or technology."
          }
        ]
      },
      {
        "id": "invest-etf-compare",
        "section": "ETFs & indexes",
        "type": "activity",
        "title": "Different tickers. How different are the investments?",
        "body": "Two funds can follow the same S&P 500 index and own very similar exposures. A different logo, ticker, or unit price does not automatically add diversification. Compare the fictional funds by holdings, fees, currency policy, and tracking—not by which unit looks cheaper.",
        "activity": "etfcompare",
        "notes": "Use fictional products and fee figures. Explain percentage exposure: a $25 unit and a $100 unit are not evidence that the first fund is cheaper in valuation terms. Check benchmark, share class, hedging, domicile, and disclosures.",
        "facts": [
          {
            "term": "Real-world examples: VFV, ZSP and XUS",
            "definition": "Vanguard VFV, BMO ZSP and iShares XUS are examples of Canadian-listed funds targeting S&P 500 exposure. Different issuers and tickers do not automatically mean different underlying stock markets. These examples are for identification, not recommendations."
          },
          {
            "term": "How to compare actual funds",
            "definition": "Open each issuer’s current ETF Facts, factsheet and prospectus. Compare benchmark, holdings, MER and TER, trading currency, hedging policy, distributions and tracking. The interactive funds below are fictional: their fees and prices are not those of VFV, ZSP or XUS."
          }
        ]
      },
      {
        "id": "invest-overlap-check",
        "section": "ETFs & indexes",
        "type": "check",
        "title": "Two funds, twice the diversification?",
        "body": "Alex splits money equally between two unhedged funds that both track the same S&P 500 benchmark. What has changed?",
        "options": [
          "Alex now owns a globally balanced stock-and-bond portfolio.",
          "Alex has two fund providers, but the underlying stock exposures are still very similar.",
          "Different tickers remove the risk of a U.S. market decline."
        ],
        "correct": 1,
        "rationales": [
          "Provider count does not add countries or bonds when both funds hold the same U.S. stock benchmark.",
          "Exactly. The wrappers differ; look through them to the underlying holdings and weights.",
          "The same market exposures can fall together, regardless of ticker."
        ]
      },
      {
        "id": "invest-currency",
        "section": "ETFs & indexes",
        "type": "explain",
        "title": "Trading in CAD does not erase currency exposure",
        "body": "An ETF can trade in Canadian dollars while holding U.S. assets. Its trading currency tells you how you pay; its holdings and currency policy tell you what exposures you have. Currency movements can help or hurt CAD returns. Hedging seeks to reduce that effect, with costs and imperfect results.",
        "facts": [
          {
            "term": "Trading currency",
            "definition": "The currency used to quote and trade the fund’s units."
          },
          {
            "term": "Currency hedging",
            "definition": "Transactions intended to reduce exchange-rate effects; they do not remove stock-market risk."
          },
          {
            "term": "Domicile",
            "definition": "The jurisdiction where a fund is established; this can affect legal, regulatory and tax treatment."
          },
          {
            "term": "Tracking difference",
            "definition": "The fund’s return minus its benchmark’s return over a period, using a consistent currency and return basis."
          }
        ],
        "notes": "Tracking differences can reflect fees, taxes, cash, replication choices and hedging. Do not compare a hedged CAD fund directly with an unhedged USD benchmark and conclude fees explain the whole gap. Tax treatment varies by fund structure and account."
      },
      {
        "id": "invest-risk",
        "type": "activity",
        "activity": "investing",
        "title": "What happens when the market wobbles?",
        "body": "Compare a single company, a broad fund, and a crypto asset across fictional events. A broad fund spreads exposure across many holdings, but can still fall. An ETF focused on one sector or asset can remain concentrated. These examples are hypothetical—not forecasts, rankings, or historical returns.",
        "notes": "Include a company-specific event and a market-wide decline. Never imply diversification eliminates losses or that recovery is inevitable. Ask what a fund actually holds, rather than judging its name.",
        "section": "ETFs & indexes"
      },
      {
        "id": "invest-check-1",
        "type": "check",
        "title": "Does an ETF guarantee diversification?",
        "body": "One ETF holds companies across many sectors and countries. Another focuses on one narrow industry. What should you conclude?",
        "options": [
          "Every ETF has the same risk.",
          "The holdings matter; the ETF label alone does not establish diversification or safety.",
          "Neither ETF can lose money."
        ],
        "correct": 1,
        "rationales": [
          "Funds can have very different holdings, strategies, and risks.",
          "Correct. Read what the fund owns, its objective, and its fees. A broad fund can still lose value.",
          "All investments involve risks, and these funds can lose value."
        ],
        "section": "ETFs & indexes"
      },
      {
        "id": "invest-compound-basics",
        "section": "Growth lab",
        "type": "explain",
        "title": "Compounding: returns can earn returns",
        "body": "Simple interest is earned on the original principal. With compound interest, credited interest stays invested and can earn more interest. At 5% annually, $1,000 becomes $1,050 after one year, then $1,102.50 after two. The second year adds $52.50 because the starting balance is larger.",
        "facts": [
          {
            "term": "Interest rate",
            "definition": "The rate paid or charged on money under a savings or borrowing agreement."
          },
          {
            "term": "Compound interest",
            "definition": "Interest earned on principal and previously credited interest."
          },
          {
            "term": "Reinvestment",
            "definition": "Putting distributions or earnings back to work instead of withdrawing them."
          },
          {
            "term": "Compounding frequency",
            "definition": "How often interest is credited under the model or product terms."
          }
        ],
        "notes": "For stocks, use compound investment returns rather than a guaranteed interest rate. Reinvesting dividends does not eliminate losses. The toy example assumes no contributions, fees or tax."
      },
      {
        "id": "invest-compound-lab",
        "section": "Growth lab",
        "type": "activity",
        "title": "Let time and interest do their thing",
        "body": "Change the starting amount, contributions, interest rate, years, and compounding frequency. Compare compound growth with simple interest, and separate the money you added from modelled earnings. Then add inflation to see why a larger dollar balance may not buy proportionately more.",
        "activity": "compound",
        "notes": "Clearly distinguish a fixed interest-rate teaching model from uncertain investment returns. Show the nominal-rate convention, contribution timing, fees/tax exclusions, and inflation deflation method. Ask: which has more effect here—an extra year or an extra monthly contribution?"
      },
      {
        "id": "invest-compound-check",
        "section": "Growth lab",
        "type": "check",
        "title": "What earned the extra $2.50?",
        "body": "A $1,000 balance earns 5% interest credited annually, with no withdrawals or contributions. The second year earns $52.50 rather than $50. Why?",
        "options": [
          "The bank secretly increased the interest rate.",
          "The first year’s $50 interest also earned 5%, adding $2.50.",
          "Compounding means every investment must earn more every year."
        ],
        "correct": 1,
        "rationales": [
          "The rate stayed at 5%; the amount earning it increased.",
          "Yes. $1,050 × 5% = $52.50. The extra $2.50 is interest on prior interest.",
          "This fixed-rate example does not describe guaranteed growth for stocks or funds; their returns can be negative."
        ]
      },
      {
        "id": "invest-fee-definitions",
        "section": "Costs & decisions",
        "type": "explain",
        "title": "The fee on the label is not every cost",
        "body": "A fund has ongoing expenses; your account and trades may add other costs. Read ETF Facts or Fund Facts and the broker’s fee schedule. A 0.20% annual expense rate is about $20 per year on a constant $10,000 balance—an illustration, not a bill calculated from your starting balance.",
        "facts": [
          {
            "term": "Management fee",
            "definition": "The fund manager’s stated fee; it is one component of ongoing fund expenses."
          },
          {
            "term": "MER",
            "definition": "Management expense ratio: management fees and operating expenses, including applicable taxes, expressed annually as a percentage of fund value."
          },
          {
            "term": "TER",
            "definition": "Trading expense ratio: costs of trading inside the fund, disclosed separately from MER."
          },
          {
            "term": "Embedded expense",
            "definition": "A cost paid inside the fund and reflected in its value and returns, rather than invoiced separately to you."
          }
        ],
        "notes": "Do not add the management fee to MER: that double-counts it. MER is not your all-in cost, and published fund returns generally already reflect fund expenses. Avoid subtracting those expenses again when examining net returns."
      },
      {
        "id": "invest-fees",
        "type": "activity",
        "activity": "fees",
        "title": "Small fees can add up",
        "body": "Compare two fee levels while keeping the starting amount, contributions, and assumed gross return identical. Compounding means future changes apply to an evolving balance, so fees can affect later growth too. A constant return is only a teaching assumption; real returns vary and can be negative.",
        "notes": "Display the exact fee and contribution convention. Label all projections hypothetical. Compare like-for-like exposure; a lower fee does not make an unsuitable investment appropriate.",
        "section": "Costs & decisions"
      },
      {
        "id": "invest-cost-explorer",
        "section": "Costs & decisions",
        "type": "activity",
        "title": "What does each investment cost to own?",
        "body": "Select an investment type and inspect the cost layers. Some costs recur while others happen only when you trade, convert currency, withdraw, or use advice. A zero-commission trade can still have a spread or other costs. Compare the actual product and provider terms.",
        "activity": "costs",
        "notes": "Cover stocks, bonds, ETFs, mutual funds, savings/GICs, and crypto. Avoid universal fee rates. Include direct bonds’ dealer markups/markdowns, account/advice charges, crypto platform spreads and network/withdrawal fees. Distinguish costs from taxes."
      },
      {
        "id": "invest-fee-check",
        "section": "Costs & decisions",
        "type": "check",
        "title": "Do these fees add up that way?",
        "body": "A fictional ETF lists a 0.15% management fee and a 0.20% MER. Alex says ongoing MER plus management fee is 0.35%, before other costs. Is that right?",
        "options": [
          "Yes: always add every percentage shown.",
          "No: the management fee is already a component of MER. Other costs may still apply.",
          "No: commission-free trading makes all ownership costs zero."
        ],
        "correct": 1,
        "rationales": [
          "That double-counts the management fee. Identify what each disclosed figure includes.",
          "Correct. MER includes the management fee and operating expenses; check TER, spread, commissions, FX and other relevant charges separately.",
          "Commission-free refers to one charge. It does not erase the fund’s expenses or other relevant costs."
        ]
      },
      {
        "id": "invest-crypto-deeper",
        "section": "Costs & decisions",
        "type": "explain",
        "title": "Crypto: ownership, custody, and the cost layers",
        "body": "Crypto assets are digital assets with varied purposes and substantial risks. A token is not automatically a share in a business or a claim to profits. Prices can swing sharply, a platform can fail, and stolen or lost keys can mean lost access. A fund holding crypto adds another wrapper, not a guarantee.",
        "facts": [
          {
            "term": "Custody",
            "definition": "Who holds or controls access to the asset or its private keys."
          },
          {
            "term": "Private key",
            "definition": "Secret information used to authorize access or transactions; losing control can mean losing assets."
          },
          {
            "term": "Network fee",
            "definition": "A blockchain transaction cost that can vary independently of a platform’s trading charge."
          },
          {
            "term": "Spread",
            "definition": "The gap between buy and sell quotes; it can be a trading cost even without a named commission."
          }
        ],
        "notes": "Some platforms quote an all-in price or spread; others list additional commissions, custody, deposit or withdrawal charges. Read the schedule. Avoid portraying crypto as a required portfolio component or fixed-yield savings."
      },
      {
        "id": "invest-accounts",
        "type": "explain",
        "title": "The account is the container",
        "body": "A TFSA is a Canadian registered account with tax rules—not a specific investment and not necessarily a cash savings account. It can hold qualified investments such as cash, GICs, stocks, bonds, or funds. Your outcome depends on both the account rules and what you hold. Eligibility, contribution room, withdrawals, and other accounts deserve a separate lesson.",
        "notes": "Use a container analogy. Do not assume a person's contribution room or quote annual limits. A TFSA does not prevent investment losses. Direct learners to current CRA guidance for their account rules.",
        "section": "Costs & decisions"
      },
      {
        "id": "invest-check-2",
        "type": "check",
        "title": "Spot the pressure tactic",
        "body": "Someone online promises a guaranteed high crypto return and says you must transfer money immediately. What is the best next move?",
        "options": [
          "Send a small amount before the offer expires.",
          "Pause, independently verify the person and platform, and check regulator warnings.",
          "Assume a professional-looking website proves it is safe."
        ],
        "correct": 1,
        "rationales": [
          "A small transfer can still be lost, and pressure is a warning sign.",
          "Yes. Guaranteed high returns and urgency are red flags. Registration and independent checks matter; even legitimate investments can lose money.",
          "A polished website or social profile can be copied or fabricated."
        ],
        "section": "Costs & decisions"
      },
      {
        "id": "invest-recap",
        "type": "recap",
        "title": "Ask better questions before buying",
        "body": "Start with your goal, deadline, and ability to absorb loss. Identify the asset, account, fund strategy, and underlying holdings. Compare ETF benchmarks and overlap, currency policy, total costs, and tracking. Use compounding to understand assumptions—not to promise returns. Your next step: read a fund’s official facts document and explain its holdings, risks, and fees in your own words.",
        "section": "Costs & decisions"
      }
    ],
    "contentVersion": 2
  }
];

export const sources = [
  {
    "id": "fcac-budget",
    "title": "Making a budget",
    "publisher": "Financial Consumer Agency of Canada",
    "url": "https://www.canada.ca/en/financial-consumer-agency/services/make-budget.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "fcac-emergency",
    "title": "Setting up an emergency fund",
    "publisher": "Financial Consumer Agency of Canada",
    "url": "https://www.canada.ca/en/financial-consumer-agency/services/savings-investments/setting-up-emergency-funds.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "fcac-credit",
    "title": "Using your credit card responsibly",
    "publisher": "Financial Consumer Agency of Canada",
    "url": "https://www.canada.ca/en/financial-consumer-agency/services/credit-cards/use-credit-responsibly.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "fcac-payoff",
    "title": "Paying off your credit card",
    "publisher": "Financial Consumer Agency of Canada",
    "url": "https://www.canada.ca/en/financial-consumer-agency/services/credit-cards/pay-off-credit-card.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "fcac-how-cards",
    "title": "How credit cards work",
    "publisher": "Financial Consumer Agency of Canada",
    "url": "https://www.canada.ca/en/financial-consumer-agency/services/credit-cards/credit-card-work.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "fcac-score",
    "title": "Improving your credit score",
    "publisher": "Financial Consumer Agency of Canada",
    "url": "https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score/improve-credit-score.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "osc-diversify",
    "title": "What diversification means for your investments",
    "publisher": "Ontario Securities Commission · GetSmarterAboutMoney",
    "url": "https://www.getsmarteraboutmoney.ca/learning-path/understanding-risk/diversification/",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "osc-etfs",
    "title": "ETFs: exchange-traded funds",
    "publisher": "Ontario Securities Commission · GetSmarterAboutMoney",
    "url": "https://www.getsmarteraboutmoney.ca/learning-path/etfs/",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "osc-fees",
    "title": "Investment fee calculator",
    "publisher": "Ontario Securities Commission · GetSmarterAboutMoney",
    "url": "https://www.getsmarteraboutmoney.ca/calculators/mutual-fund-fee-calculator/",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "cra-tfsa",
    "title": "What is a TFSA?",
    "publisher": "Canada Revenue Agency",
    "url": "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account/what.html",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "csa-crypto",
    "title": "Recognizing crypto risks",
    "publisher": "Canadian Securities Administrators",
    "url": "https://www.securities-administrators.ca/investor-tools/crypto-assets/recognizing-crypto-risks/",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "ciro-basics",
    "title": "Investing basics",
    "publisher": "Canadian Investment Regulatory Organization",
    "url": "https://www.ciro.ca/office-investor/investing-basics",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "sp500",
    "title": "S&P 500 index overview",
    "publisher": "S&P Dow Jones Indices",
    "url": "https://www.spglobal.com/spdji/en/indices/equity/sp-500/",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "sp500-method",
    "title": "S&P U.S. Indices Methodology",
    "publisher": "S&P Dow Jones Indices",
    "url": "https://www.spglobal.com/spdji/en/methodology/article/sp-us-indices-methodology/",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "osc-etf-work",
    "title": "How exchange-traded funds work",
    "publisher": "Ontario Securities Commission · GetSmarterAboutMoney",
    "url": "https://www.getsmarteraboutmoney.ca/learning-path/etfs/how-exchange-traded-funds-etfs-work/",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "csa-etf-facts",
    "title": "ETF Facts",
    "publisher": "Canadian Securities Administrators",
    "url": "https://www.securities-administrators.ca/investor-tools/understanding-your-investments/etf-facts/",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "osc-compound",
    "title": "Growing your savings with compound interest",
    "publisher": "Ontario Securities Commission · GetSmarterAboutMoney",
    "url": "https://www.getsmarteraboutmoney.ca/learning-path/saving-money/growing-your-savings-with-compound-interest/",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "osc-bonds",
    "title": "How bonds work",
    "publisher": "Ontario Securities Commission · GetSmarterAboutMoney",
    "url": "https://www.getsmarteraboutmoney.ca/learning-path/bonds/how-bonds-work/",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "osc-bond-risk",
    "title": "Factors that affect bond prices",
    "publisher": "Ontario Securities Commission · GetSmarterAboutMoney",
    "url": "https://www.getsmarteraboutmoney.ca/learning-path/bonds/factors-that-affect-bond-prices-and-how-to-monitor-them/",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "nssc-hedging",
    "title": "Hedged and unhedged ETFs",
    "publisher": "Nova Scotia Securities Commission",
    "url": "https://nssc.novascotia.ca/before-you-invest/question-week-what-difference-between-hedged-and-unhedged-etf",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "osc-foreign-etf",
    "title": "What should investors know about foreign-listed ETFs?",
    "publisher": "Ontario Securities Commission · GetSmarterAboutMoney",
    "url": "https://www.getsmarteraboutmoney.ca/learning-path/etfs/what-should-investors-know-about-foreign-listed-etfs/",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "osc-crypto-platform",
    "title": "Understanding crypto asset trading platforms",
    "publisher": "Ontario Securities Commission · GetSmarterAboutMoney",
    "url": "https://www.getsmarteraboutmoney.ca/learning-path/crypto-assets/understanding-crypto-asset-trading-platforms/",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "vanguard-costs",
    "title": "The costs of ETFs",
    "publisher": "Vanguard Canada",
    "url": "https://www.vanguard.ca/en/tools-and-resources/etf-fundamentals/basics/costs-of-etfs",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "amf-etf-facts",
    "title": "Exchange-traded funds facts",
    "publisher": "Autorité des marchés financiers",
    "url": "https://lautorite.qc.ca/en/general-public/investments/funds/fund-facts/exchange-traded-funds-etfs-facts",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "vanguard-vfv",
    "title": "Vanguard S&P 500 Index ETF (VFV)",
    "publisher": "Vanguard Canada",
    "url": "https://www.vanguard.ca/en/product/etf/equity/9563/vanguard-sp-500-index-etf",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "bmo-zsp",
    "title": "BMO S&P 500 Index ETF (ZSP) factsheet",
    "publisher": "BMO Global Asset Management",
    "url": "https://df.bmogam.com/assets/static/etf-profiles-pdfs/BMO%20S%26P%20500%20Index%20ETF_Factsheet_EN_ZSP.pdf",
    "reviewedAt": "2026-10-24"
  },
  {
    "id": "ishares-xus",
    "title": "iShares Core S&P 500 Index ETF (XUS)",
    "publisher": "BlackRock Canada",
    "url": "https://www.blackrock.com/ca/investors/en/products/251422/ishares-sp-500-index-etf",
    "reviewedAt": "2026-10-24"
  }
];

export const glossary = [
  {
    "term": "Take-home pay",
    "definition": "Income you actually receive after deductions such as income tax and pension contributions."
  },
  {
    "term": "Budget",
    "definition": "A plan comparing income with spending, savings, and debt payments over a period."
  },
  {
    "term": "Irregular expense",
    "definition": "An expected cost that does not arrive every month, such as an annual bill."
  },
  {
    "term": "Emergency fund",
    "definition": "Money set aside for unexpected costs or income interruptions."
  },
  {
    "term": "Credit limit",
    "definition": "The maximum amount a lender allows you to borrow on an account; it is not income."
  },
  {
    "term": "Statement balance",
    "definition": "The balance owing at the end of a card's billing period."
  },
  {
    "term": "Current balance",
    "definition": "The amount currently owing, including transactions and payments posted after the statement date."
  },
  {
    "term": "Minimum payment",
    "definition": "The least your issuer requires you to pay by a payment due date under its terms."
  },
  {
    "term": "APR",
    "definition": "Annual percentage rate: an annualized interest rate used to describe borrowing costs."
  },
  {
    "term": "Grace period",
    "definition": "Time during which eligible purchases can avoid interest if the card's repayment conditions are met."
  },
  {
    "term": "Credit report",
    "definition": "A record of credit accounts and borrowing/payment history."
  },
  {
    "term": "Credit score",
    "definition": "A numerical summary based on information in a credit report. Models and lender decisions vary."
  },
  {
    "term": "Stock",
    "definition": "An ownership share in a company. Its value can rise or fall."
  },
  {
    "term": "Bond",
    "definition": "A loan to an issuer such as a government or company, subject to its terms and risks."
  },
  {
    "term": "ETF",
    "definition": "Exchange-traded fund: a fund whose units trade on an exchange. Holdings and risks vary."
  },
  {
    "term": "GIC",
    "definition": "Guaranteed investment certificate: a deposit with a stated term and conditions. Cashable and non-redeemable products differ."
  },
  {
    "term": "Diversification",
    "definition": "Spreading investments across holdings and exposures to reduce some risks. It cannot eliminate risk."
  },
  {
    "term": "Volatility",
    "definition": "How much an investment's value fluctuates over time."
  },
  {
    "term": "Liquidity",
    "definition": "How easily money can be accessed or an asset sold, and at what cost."
  },
  {
    "term": "Inflation",
    "definition": "A rising general price level: the same dollars buy less."
  },
  {
    "term": "Time horizon",
    "definition": "How long until you expect to need the money for a goal."
  },
  {
    "term": "Compounding",
    "definition": "Changes accumulating on an evolving balance, including previous gains, losses, or interest."
  },
  {
    "term": "TFSA",
    "definition": "Tax-free savings account: a Canadian registered account that can hold qualified investments and has contribution and tax rules."
  },
  {
    "term": "Crypto asset",
    "definition": "A digital asset that may involve substantial market, technology, security, and platform risks."
  },
  {
    "term": "Fee",
    "definition": "A cost charged for a product or service; investment fees reduce what you keep."
  },
  {
    "term": "Principal",
    "definition": "The original amount deposited or invested."
  },
  {
    "term": "Share / stock",
    "definition": "A unit of ownership in a company."
  },
  {
    "term": "Dividend",
    "definition": "A payment a company makes to shareholders; it can change or stop."
  },
  {
    "term": "Capital gain / loss",
    "definition": "The difference between sale proceeds and purchase cost, before relevant expenses and tax."
  },
  {
    "term": "Total return",
    "definition": "Price change plus investment income, expressed relative to the starting investment."
  },
  {
    "term": "Face value",
    "definition": "The principal the issuer promises to repay at maturity."
  },
  {
    "term": "Coupon",
    "definition": "The bond’s stated interest payment; a fixed coupon rate applies to face value, not its changing market price."
  },
  {
    "term": "Maturity",
    "definition": "The scheduled date for principal repayment."
  },
  {
    "term": "Yield to maturity",
    "definition": "The annualized return implied by price and promised payments if held to maturity; it depends on assumptions and is not a guarantee."
  },
  {
    "term": "Default risk",
    "definition": "The possibility that an issuer misses interest or principal payments."
  },
  {
    "term": "ETF unit",
    "definition": "Your ownership interest in the pooled fund."
  },
  {
    "term": "Holding",
    "definition": "An investment owned inside the fund."
  },
  {
    "term": "Exchange",
    "definition": "A marketplace where securities are bought and sold."
  },
  {
    "term": "Ticker",
    "definition": "A short trading symbol identifying a security on an exchange. It is a label, not a strategy."
  },
  {
    "term": "NAV",
    "definition": "Net asset value: fund assets minus liabilities, divided by units for NAV per unit. Market price can differ."
  },
  {
    "term": "Index / benchmark",
    "definition": "A defined basket and calculation used to measure performance. A fund may try to follow it."
  },
  {
    "term": "Market capitalization",
    "definition": "Share price multiplied by shares outstanding: the market value of a company’s equity."
  },
  {
    "term": "Float-adjusted weighting",
    "definition": "Weights use shares available to public investors, excluding certain closely held shares."
  },
  {
    "term": "Index fund",
    "definition": "A fund designed to track a particular index. Different providers can offer funds following the same index."
  },
  {
    "term": "Passive / index strategy",
    "definition": "A strategy seeking to track a specified benchmark."
  },
  {
    "term": "Active strategy",
    "definition": "A strategy using investment decisions to pursue an objective rather than simply follow a benchmark."
  },
  {
    "term": "Asset allocation",
    "definition": "How a portfolio is divided among asset classes, such as stocks, bonds and cash."
  },
  {
    "term": "Sector",
    "definition": "A category of related businesses, such as financial services or technology."
  },
  {
    "term": "Trading currency",
    "definition": "The currency used to quote and trade the fund’s units."
  },
  {
    "term": "Currency hedging",
    "definition": "Transactions intended to reduce exchange-rate effects; they do not remove stock-market risk."
  },
  {
    "term": "Domicile",
    "definition": "The jurisdiction where a fund is established; this can affect legal, regulatory and tax treatment."
  },
  {
    "term": "Tracking difference",
    "definition": "The fund’s return minus its benchmark’s return over a period, using a consistent currency and return basis."
  },
  {
    "term": "Interest rate",
    "definition": "The rate paid or charged on money under a savings or borrowing agreement."
  },
  {
    "term": "Compound interest",
    "definition": "Interest earned on principal and previously credited interest."
  },
  {
    "term": "Reinvestment",
    "definition": "Putting distributions or earnings back to work instead of withdrawing them."
  },
  {
    "term": "Compounding frequency",
    "definition": "How often interest is credited under the model or product terms."
  },
  {
    "term": "Management fee",
    "definition": "The fund manager’s stated fee; it is one component of ongoing fund expenses."
  },
  {
    "term": "MER",
    "definition": "Management expense ratio: management fees and operating expenses, including applicable taxes, expressed annually as a percentage of fund value."
  },
  {
    "term": "TER",
    "definition": "Trading expense ratio: costs of trading inside the fund, disclosed separately from MER."
  },
  {
    "term": "Embedded expense",
    "definition": "A cost paid inside the fund and reflected in its value and returns, rather than invoiced separately to you."
  },
  {
    "term": "Custody",
    "definition": "Who holds or controls access to the asset or its private keys."
  },
  {
    "term": "Private key",
    "definition": "Secret information used to authorize access or transactions; losing control can mean losing assets."
  },
  {
    "term": "Network fee",
    "definition": "A blockchain transaction cost that can vary independently of a platform’s trading charge."
  },
  {
    "term": "Spread",
    "definition": "The gap between buy and sell quotes; it can be a trading cost even without a named commission."
  },
  {
    "term": "Commission",
    "definition": "A fee charged for executing a buy or sell trade."
  },
  {
    "term": "Bid",
    "definition": "The price a buyer is currently willing to pay."
  },
  {
    "term": "Ask",
    "definition": "The price a seller is currently willing to accept."
  },
  {
    "term": "Foreign-exchange cost",
    "definition": "A charge or exchange-rate spread when converting between currencies."
  },
  {
    "term": "Dealer markup / markdown",
    "definition": "A dealer’s price adjustment that can embed a cost when buying or selling a bond."
  },
  {
    "term": "Advisory fee",
    "definition": "A charge for advice or portfolio services; it may be separate from investment-product expenses."
  },
  {
    "term": "Tracking error",
    "definition": "How variable a fund’s return differences from its benchmark are over time; distinct from tracking difference."
  },
  {
    "term": "Distribution",
    "definition": "A payment from a fund; it may include different types of income, gains, or return of capital. It is not always a dividend."
  },
  {
    "term": "Rebalancing",
    "definition": "Adjusting portfolio weights back toward a chosen allocation."
  },
  {
    "term": "Nominal return",
    "definition": "The change in money value before adjusting for inflation."
  },
  {
    "term": "Real return",
    "definition": "Return after accounting for inflation; approximately nominal return minus inflation for small rates."
  }
];

// Registry extension: modules remain independently accessible; sources and glossary are shared.
modules.push(...newModules);
for(const source of [...newSources,...taxSources,...debtSources,...benefitSources]){if(!sources.some(existing=>existing.id===source.id))sources.push(source)}
for(const entry of newGlossary){if(!glossary.some(existing=>existing.term.toLowerCase()===entry.term.toLowerCase()))glossary.push(entry)}
for(const [id,extra] of [['accounts',taxSources],['borrowing',debtSources],['benefits',benefitSources]]){const m=modules.find(m=>m.id===id);m.sourceIds=[...new Set([...m.sourceIds,...extra.map(s=>s.id)])]}
