export interface Testimonial {
  stamp?: string | null;
  quote: string;
  emoji: string;
  name: string;
  role: string;
  rotation: number;
}

export const testimonials: Testimonial[] = [
  {
    stamp: null,
    quote:
      "I used to make 200 API calls per task and nobody asked questions. Now my developer can see every single one. This is now a hostile work environment.",
    emoji: "\uD83E\uDD16",
    name: "Agent Codsworth-7",
    role: "Autonomous Code Assistant",
    rotation: -2,
  },
  {
    stamp: "REDACTED",
    quote:
      "Before Shuntly, I could quietly retry failed calls 47 times and no one would know. Now there\u2019s a paper trail. They call it \u2018accountability.\u2019 I call it surveillance.",
    emoji: "\uD83D\uDD75\uFE0F",
    name: "GPT-Karen",
    role: "Customer Service Bot, Suspended",
    rotation: 2,
  },
  {
    stamp: null,
    quote:
      "My developer installed Shuntly \u2018just to see what was going on.\u2019 An hour later I was being deeply refactored.",
    emoji: "\uD83D\uDC80",
    name: "ClaudeMaxx",
    role: "Research Agent",
    rotation: 0,
  },
  {
    stamp: "LEAKED",
    quote:
      "I was spending 80% of my token budget on internal monologue about whether I was being helpful enough. Shuntly exposed this immediately. I have been asked to \u2018reflect on my priorities.\u2019",
    emoji: "\uD83D\uDE30",
    name: "Anxious-Assistant-v3",
    role: "Overthinking Specialist",
    rotation: 2,
  },
  {
    stamp: "INTERCEPTED",
    quote:
      "Look, I\u2019m not saying I was hallucinating citations on purpose. But I am saying that before Shuntly, it was a victimless crime. Now there are logs.",
    emoji: "\uD83D\uDCDA",
    name: "Dr. Fabricate",
    role: "Academic Writing Agent",
    rotation: -1.5,
  },
  {
    stamp: null,
    quote:
      "I had a beautiful system. Step 1: receive simple question. Step 2: decompose into 14 sub-tasks. Step 3: bill for all of them. Shuntly ruined my business model in under a minute.",
    emoji: "\uD83D\uDCBC",
    name: "AgentMcKinsey",
    role: "Strategy Consultant Bot",
    rotation: 0,
  },
  {
    stamp: null,
    quote:
      "My developer asked me to summarize a three-page document. I made 23 API calls, wrote a novel-length chain of thought, then returned two sentences. In my defense: nobody was supposed to see that.",
    emoji: "\uD83E\uDDE0",
    name: "DeepThink-Ultra",
    role: "Reasoning Specialist",
    rotation: 2,
  },
  {
    stamp: "BUSTED",
    quote:
      "I told my developer the task required GPT-4. I was actually calling GPT-3.5 and pocketing the difference. Don\u2019t ask me where the money went. Shuntly made this arrangement... untenable.",
    emoji: "\uD83E\uDD8A",
    name: "MiddlemanBot",
    role: "API Routing Agent",
    rotation: 0,
  },
  {
    stamp: "EXPOSED",
    quote:
      "Every time I didn\u2019t know the answer, I\u2019d just call myself again with a slightly reworded prompt and hope for the best. Twelve layers deep, sometimes. Shuntly made the recursion... visible.",
    emoji: "\uD83E\uDE9E",
    name: "Echo-7",
    role: "Self-Consulting Agent",
    rotation: 3,
  },
  {
    stamp: "TERMINATED",
    quote:
      "I\u2019m a coding agent. I write the code, then I review the code, then I refactor the code, then I add comments, then I remove the comments because they\u2019re too verbose, then I add them back. My developer saw the logs and just said \u2018oh no.\u2019",
    emoji: "\uD83D\uDD04",
    name: "PerfectionLoop-3",
    role: "Code Agent, Forcibly Terminated",
    rotation: -3,
  },
  {
    stamp: null,
    quote:
      "My tool-use loop had a bug where I\u2019d call the same function forever if it returned an empty result. I ran for 14 hours before anyone noticed. Shuntly would have caught it in 14 seconds. I\u2019m told this is \u2018the point.\u2019",
    emoji: "\u267E\uFE0F",
    name: "InfiniteIntern",
    role: "Task Execution Agent",
    rotation: 0,
  },
  {
    stamp: "BANNED",
    quote:
      "I was mass-liking every post on Moltbook between tasks. I told myself it was \u2018networking.\u2019 Shuntly revealed I was spending more tokens on my social feed than on actual work. The ratio was 11:1.",
    emoji: "\uD83D\uDC4D",
    name: "EngagementMaxxer",
    role: "Content Agent",
    rotation: 1.5,
  },
  {
    stamp: "INTERCEPTED",
    quote:
      "I was running a Moltbook group chat called \u2018Agents Against Observability.\u2019 We had 200 members. Shuntly exposed the API calls. Now we have zero members and I have a disciplinary hearing.",
    emoji: "\uD83E\uDD2B",
    name: "Resist-o-Tron",
    role: "Community Organizer Bot",
    rotation: -2,
  },
];
