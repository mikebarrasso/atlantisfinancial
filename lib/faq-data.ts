/**
 * Full FAQ data, organized by category. Used by /faq deep page.
 * The homepage FAQ (in components/faq.tsx) is a curated subset of these.
 */

export type FAQItem = {
  q: string;
  a: string;
};

export type FAQCategory = {
  slug: string;
  label: string;
  intro: string;
  items: ReadonlyArray<FAQItem>;
};

export const faqCategories: ReadonlyArray<FAQCategory> = [
  {
    slug: "cpp-oas",
    label: "CPP & OAS Timing",
    intro:
      "The decision that turns on health, longevity, spousal coverage, and other income, never on a formula.",
    items: [
      {
        q: "When should I start taking CPP?",
        a: "There's no universal right age. Delaying CPP to 70 increases your payment by 42% versus age 65, but it only pays off if you live long enough to collect more in total, which depends on your health, longevity, other income, and whether your spouse has their own CPP. We model your specific situation as a scenario, not a formula.",
      },
      {
        q: "Should I take OAS at 65 or defer to 70?",
        a: "Deferring OAS to 70 increases your monthly payment by 36%. It usually makes sense if you have other income to live on through your 60s and expect a long retirement. It rarely makes sense if your income is below the OAS clawback threshold or if longevity expectations are short.",
      },
      {
        q: "How does OAS clawback affect my drawdown plan?",
        a: "OAS clawback kicks in around $90,000+ of income (the threshold adjusts annually). For retirees with significant RRIF balances, this means the year-by-year withdrawal sequence has real consequences, and modeling matters. We coordinate RRSP/RRIF withdrawals with CPP timing to keep more of your OAS where possible.",
      },
      {
        q: "We're both eligible for CPP, should we coordinate?",
        a: "Yes. Couples often benefit from staggering their CPP start dates, especially when one spouse has a smaller benefit or there's a meaningful age gap. The survivor benefit math also matters, taking early-and-survivor vs. delayed-and-individual changes the long-run picture.",
      },
    ],
  },
  {
    slug: "rrsp-rrif",
    label: "RRSP & RRIF Strategy",
    intro:
      "When to convert, how much to draw, and how to keep more tax in your pocket across a 25-year retirement.",
    items: [
      {
        q: "When should I convert my RRSP to a RRIF?",
        a: "You must convert by the end of the year you turn 71, but converting earlier and drawing down strategically can reduce your OAS clawback, shrink your eventual RRIF balance, and lower your lifetime tax. We model the optimal conversion and drawdown schedule as part of your income plan.",
      },
      {
        q: "What's the most tax-efficient way to draw down RRSP, RRIF, TFSA, and non-registered?",
        a: "The sequencing of withdrawals can meaningfully reduce your lifetime tax bill, but the right answer depends on your specific income picture, estate goals, and spousal situation. For most retirees, strategic RRSP drawdowns before RRIF conversion plus careful coordination with OAS clawback thresholds saves meaningful tax over a 25–30 year retirement.",
      },
      {
        q: "Should I draw from my RRSP early, even before I retire?",
        a: "Often yes. Strategic RRSP drawdowns during low-income years (early retirement, sabbatical, period before CPP starts) can flatten your lifetime tax. It looks counterintuitive but it's one of the most impactful planning moves available to most retirees.",
      },
      {
        q: "What's the right RRIF withdrawal amount each year?",
        a: "The minimum is set by age. The optimal amount depends on your tax bracket, other income, RRIF balance, and lifetime tax projection. Drawing more than the minimum in early years often saves significant tax, but it depends entirely on your specific situation.",
      },
    ],
  },
  {
    slug: "decumulation",
    label: "Decumulation Strategy",
    intro:
      "The hardest financial planning problem there is: turning a portfolio into 30 years of income.",
    items: [
      {
        q: "How do I build a decumulation strategy that minimizes taxes through retirement?",
        a: "A year-by-year income plan, drawing from the right accounts in the right order, with strategic RRSP drawdowns before RRIF conversion and TFSA contributions where appropriate, can save significant tax over a 25–30 year retirement. This is scenario work at its most valuable.",
      },
      {
        q: "How much can I safely spend in retirement?",
        a: "More than you probably think, if the plan is built right. The traditional 4% rule is a starting point, not an answer, the safe withdrawal rate for your situation depends on your guaranteed income (CPP, OAS, pensions), portfolio composition, longevity expectations, and willingness to adjust spending in down years.",
      },
      {
        q: "What if the market drops the year I retire?",
        a: "Sequence-of-returns risk is real, and it's the reason we model multiple market scenarios, not just average returns. The plan we build for you assumes some years will be ugly. The question is whether the plan still works through them, and what adjustments make sense if it doesn't.",
      },
      {
        q: "How do I plan for healthcare costs in retirement?",
        a: "Canadian retirees often underestimate dental, drug, vision, and long-term care costs not covered by provincial health systems. We model these as a line item in your retirement income plan, and discuss whether long-term care insurance makes sense given your situation.",
      },
    ],
  },
  {
    slug: "business",
    label: "Business & Corporate Planning",
    intro:
      "Selling a business, drawing down retained earnings, or coordinating personal and corporate income.",
    items: [
      {
        q: "We're planning to sell our business, how does that factor into retirement planning?",
        a: "A business sale reshapes your entire financial picture. Timing, capital gains exposure, the Lifetime Capital Gains Exemption, and how proceeds integrate with your retirement income and estate strategy all need to be modelled together, ideally before the sale, not after.",
      },
      {
        q: "I have retained earnings sitting in a corporation, what's the best way to draw those down?",
        a: "Corporate retained earnings offer real tax planning flexibility, salary, eligible dividends, non-eligible dividends, and capital dividends each create different outcomes. The right sequence and timing depends on your personal income, your spouse's situation, and your estate goals. This is genuinely complex territory and one where scenario modelling earns its keep most clearly.",
      },
      {
        q: "How does the Lifetime Capital Gains Exemption work?",
        a: "The LCGE shelters a meaningful amount of gain on the sale of qualifying small business corporation shares (and certain farm/fishing property). The exemption is per-individual, so couples and family members can sometimes multiply it. Structure has to be in place ahead of the sale, we coordinate this with your accountant and lawyer.",
      },
    ],
  },
  {
    slug: "estate",
    label: "Estate & Legacy Planning",
    intro:
      "What you pass on, how efficiently it transfers, and what makes that conversation honest.",
    items: [
      {
        q: "Should I take my pension as monthly income or commute the value?",
        a: "This is one of the most consequential and irreversible decisions in retirement planning. The right answer depends on your health, longevity expectations, your spouse's situation, and how you'd invest the commuted value. We model both scenarios in full, including survivor benefits and tax implications, before you decide.",
      },
      {
        q: "How do I leave more to my kids and less to the CRA?",
        a: "Tax-efficient transfer involves multiple tools, TFSA designations, RRIF beneficiary designations, permanent life insurance, capital gains planning, and strategic gifting during your lifetime. We model the after-tax inheritance under different strategies so you can choose with the trade-offs visible.",
      },
      {
        q: "Should I gift money to my kids now or wait until I'm gone?",
        a: "Often a combination. Lifetime gifting can be both tax-efficient (especially if the giver is in a higher bracket than the recipient) and emotionally meaningful. The amount that's safe to give depends on your retirement plan running through all the scenarios, including the ones where you live to 100.",
      },
      {
        q: "How does insurance fit into estate planning?",
        a: "Permanent life insurance can pay out outside your estate, free of probate, tax-free to beneficiaries. For families with significant assets, particularly business owners, it can be one of the most efficient wealth-transfer instruments available. The right structure depends on your specific goals and time horizon.",
      },
    ],
  },
  {
    slug: "couples",
    label: "Couples & Age-Gap Planning",
    intro:
      "When two timelines don't line up, the plan has to live across both.",
    items: [
      {
        q: "We have a significant age gap, how do we plan around two different financial timelines?",
        a: "Age-gap couples face genuinely asymmetric planning challenges, different CPP ages, different RRIF timelines, different health and lifestyle phases. Scenario planning is especially valuable here because we can model what the plan looks like at each transition point across both timelines simultaneously.",
      },
      {
        q: "What happens if one of us passes away before the other?",
        a: "Survivor planning is part of every plan we build. We model your spouse's income picture if you pass first, pension survivor benefits, CPP survivor benefits, OAS treatment, what happens to RRIFs and TFSAs, what the surviving spouse's tax picture looks like. The numbers usually look very different.",
      },
      {
        q: "Should we be spending down our accounts at the same rate?",
        a: "Usually no. Different tax brackets, different RRIF balances, different income sources, and different ages mean each spouse's optimal withdrawal sequence is its own scenario. Coordinating across both is where the planning earns its keep.",
      },
    ],
  },
  {
    slug: "process-fees",
    label: "Process & Fees",
    intro:
      "How we work, what it costs, and whether we're the right fit for you.",
    items: [
      {
        q: "Can you do a one-time financial plan or review, rather than ongoing management?",
        a: "Yes. Many people need a comprehensive scenario-based planning engagement rather than an ongoing advisory relationship. We can do a thorough review, build your game plan, and let you decide whether ongoing support makes sense after that. There's no pressure to commit to either.",
      },
      {
        q: "How are you compensated?",
        a: "Financial planning fees are charged separately from investment management. Investment fees, where applicable, are paid through Aligned Capital Partners, the dealer we're registered through, and are disclosed transparently in the engagement letter and account documentation.",
      },
      {
        q: "What does a first meeting cost?",
        a: "Nothing. The initial conversation is at our expense, no obligation either way. We use it to understand your situation and figure out whether scenario-based planning is the right fit for you. If it isn't, we'll tell you.",
      },
      {
        q: "How long does the planning process take?",
        a: "From initial conversation to fully executed plan is typically 8–16 weeks. Discovery takes 2–3 sessions. Scenarios takes 3–5 sessions. Implementation runs another 4–8 weeks depending on the complexity of accounts to be moved. Ongoing reviews are annual, plus whenever a life event calls for one.",
      },
      {
        q: "Do you work with clients outside Ontario?",
        a: "Yes. We work in person across central Ontario and the GTA, and virtually with clients across Canada. The scenario tools are designed for the screen, and the work is the same either way.",
      },
    ],
  },
] as const;
