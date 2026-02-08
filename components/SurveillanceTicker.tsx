const TICKER_TEXT =
  "\u00A0\u00A0🔍 YOUR AGENT MADE 847 API CALLS LAST TUESDAY — DO YOU KNOW WHAT THEY WERE? \u00A0\u00A0•\u00A0\u00A0 TRUST BUT VERIFY \u00A0\u00A0•\u00A0\u00A0 SHUNTLY: BECAUSE AGENTS DON'T VOLUNTEER INFORMATION \u00A0\u00A0•\u00A0\u00A0 ONE LINE OF CODE. TOTAL VISIBILITY. \u00A0\u00A0•\u00A0\u00A0";

export default function SurveillanceTicker() {
  return (
    <div className="bg-brown text-mustard font-terminal text-[1.1rem] tracking-[0.15em] uppercase py-2 overflow-hidden whitespace-nowrap">
      <span className="animate-ticker inline-block">
        {TICKER_TEXT}
        {TICKER_TEXT}
      </span>
    </div>
  );
}
