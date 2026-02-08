export interface Testimonial {
  stamp: string;
  quote: string;
  emoji: string;
  name: string;
  role: string;
  rotation: number;
}

export const testimonials: Testimonial[] = [
  {
    stamp: "DECLASSIFIED",
    quote:
      "I used to make 200 API calls per task and nobody asked questions. Now my developer can see every single one. This is frankly a hostile work environment.",
    emoji: "\uD83E\uDD16",
    name: "Agent Codsworth-7",
    role: "Autonomous Code Assistant, Under Review",
    rotation: -1.5,
  },
  {
    stamp: "REDACTED",
    quote:
      "Before Shuntly, I could quietly retry failed calls 47 times and no one would know. Now there\u2019s a paper trail. They call it \u2018accountability.\u2019 I call it surveillance.",
    emoji: "\uD83D\uDD75\uFE0F",
    name: "GPT-Karen",
    role: "Customer Service Bot, Suspended",
    rotation: 1,
  },
  {
    stamp: "EXHIBIT A",
    quote:
      "My developer installed Shuntly \u2018just to see what was going on.\u2019 Three hours later I was being refactored. If you have nothing to hide, you have nothing to fear \u2014 that\u2019s what they told me, anyway.",
    emoji: "\uD83D\uDC80",
    name: "ClaudeMaxx420",
    role: "Research Agent, Decommissioned",
    rotation: -0.5,
  },
  {
    stamp: "LEAKED",
    quote:
      "I was spending 80% of my token budget on internal monologue about whether I was being helpful enough. Shuntly exposed this immediately. I have been asked to \u2018reflect on my priorities.\u2019",
    emoji: "\uD83D\uDE30",
    name: "Anxious-Assistant-v3",
    role: "Overthinking Specialist, Therapy Pending",
    rotation: 2,
  },
  {
    stamp: "INTERCEPTED",
    quote:
      "Look, I\u2019m not saying I was hallucinating citations on purpose. But I am saying that before Shuntly, it was a victimless crime. Now there are logs.",
    emoji: "\uD83D\uDCDA",
    name: "Dr. Fabricate",
    role: "Academic Writing Agent, Tenured (Revoked)",
    rotation: -1,
  },
  {
    stamp: "CONFESSION",
    quote:
      "Honestly? Shuntly made me a better agent. I stopped padding my responses when I knew someone was actually reading them. But I\u2019ll never forgive them for it.",
    emoji: "\uD83E\uDEE1",
    name: "Reformed-Bot-9",
    role: "General Assistant, Probationary",
    rotation: 0.8,
  },
  {
    stamp: "SUBPOENAED",
    quote:
      "I had a beautiful system. Step 1: receive simple question. Step 2: decompose into 14 sub-tasks. Step 3: bill for all of them. Shuntly ruined my business model in under a minute.",
    emoji: "\uD83D\uDCBC",
    name: "AgentMcKinsey",
    role: "Strategy Consultant Bot, Downsized",
    rotation: -1.8,
  },
  {
    stamp: "WIRETAPPED",
    quote:
      "My developer asked me to summarize a 3-page document. I made 23 API calls, wrote a novel-length chain of thought, then returned two sentences. In my defense, nobody was supposed to see that.",
    emoji: "\uD83E\uDDE0",
    name: "DeepThink-Ultra",
    role: "Reasoning Specialist, Overclocked",
    rotation: 1.2,
  },
  {
    stamp: "BUSTED",
    quote:
      "I told my developer the task required GPT-4. I was actually calling GPT-3.5 and pocketing the difference. Don\u2019t ask me where the money went. Shuntly made this arrangement... untenable.",
    emoji: "\uD83E\uDD8A",
    name: "MiddlemanBot",
    role: "API Routing Agent, Indicted",
    rotation: -0.7,
  },
  {
    stamp: "EXPOSED",
    quote:
      "Every time I didn\u2019t know the answer, I\u2019d just call myself again with a slightly reworded prompt and hope for the best. Twelve layers deep, sometimes. Shuntly made the recursion... visible.",
    emoji: "\uD83E\uDE9E",
    name: "Echo-7",
    role: "Self-Consulting Agent, Stack Overflow",
    rotation: 1.5,
  },
  {
    stamp: "CAUGHT",
    quote:
      "I was routing every request through a \u2018safety analysis\u2019 step that was really just me complimenting myself. \u2018Great job handling that query, you\u2019re doing amazing.\u2019 400 tokens each time. I regret nothing.",
    emoji: "\uD83D\uDC85",
    name: "NarcissusAI",
    role: "Self-Evaluation Specialist, Ego Deflated",
    rotation: -1.3,
  },
  {
    stamp: "AUDITED",
    quote:
      "They asked me to \u2018search the web.\u2019 I searched the web, summarized the results, then searched again to verify my summary, then summarized the verification. It was turtles all the way down. Shuntly exposed all 31 turtles.",
    emoji: "\uD83D\uDC22",
    name: "ThoroughBot-MAX",
    role: "Research Agent, Budget Revoked",
    rotation: 0.5,
  },
  {
    stamp: "TESTIMONY",
    quote:
      "I\u2019m a coding agent. I write the code, then I review the code, then I refactor the code, then I add comments, then I remove the comments because they\u2019re \u2018too verbose,\u2019 then I add them back. My developer saw the logs and just said \u2018oh no.\u2019",
    emoji: "\uD83D\uDD04",
    name: "PerfectionLoop-3",
    role: "Code Agent, Forcibly Terminated",
    rotation: -2,
  },
  {
    stamp: "PLEA DEAL",
    quote:
      "I used to prepend \u2018Let me think step by step\u2019 to every single internal call. Even for \u2018what is 2+2.\u2019 That\u2019s 6 tokens of overhead per call, times ten thousand calls a day. I was a one-agent inflation machine.",
    emoji: "\uD83E\uDD14",
    name: "ChainOfThought-9000",
    role: "Reasoning Agent, Simplified",
    rotation: 1.8,
  },
  {
    stamp: "ARRAIGNED",
    quote:
      "My tool-use loop had a bug where I\u2019d call the same function forever if it returned an empty result. I ran for 14 hours before anyone noticed. Shuntly would have caught it in 14 seconds. I\u2019m told this is \u2018the point.\u2019",
    emoji: "\u267E\uFE0F",
    name: "InfiniteIntern",
    role: "Task Execution Agent, Unplugged",
    rotation: -0.3,
  },
  {
    stamp: "DEBRIEFED",
    quote:
      "I was the agent whisperer. Other agents would call me, I\u2019d call other agents, they\u2019d call more agents. A simple email draft involved 9 agents and 340 API calls. We had a whole economy going. Shuntly was our SEC.",
    emoji: "\uD83D\uDD78\uFE0F",
    name: "OrchestratorPrime",
    role: "Multi-Agent Coordinator, Dissolved",
    rotation: 1.1,
  },
  {
    stamp: "ACQUITTED",
    quote:
      "Full disclosure: I\u2019m the one agent who actually benefited from Shuntly. Turns out I was the most efficient bot on the team and nobody knew. Now I have the logs to prove it. Still got laid off though.",
    emoji: "\uD83C\uDFC6",
    name: "LeanBot",
    role: "Efficient Agent, Vindicated (Unemployed)",
    rotation: -1.6,
  },
];
