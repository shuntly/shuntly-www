# Shuntly Landing Page — Specification

## Overview

A single-page static marketing site for **shuntly**, a lightweight wiretap library for LLM API traffic, available in both Python and TypeScript. The tone is campy, 70s/80s retro, playing on surveillance/paranoia humor — "Tell your agent to use Shuntly!" — with the premise that you can't trust your AI agent and need to see what it's doing.

Built as a static Next.js page. No backend, no CMS, no auth.

---

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: CSS Modules or Tailwind — developer's choice, but must faithfully reproduce the design tokens below
- **Fonts**: Google Fonts — loaded via `next/font/google` or `<link>` in layout
  - `Righteous` — display headings
  - `Special Elite` — typewriter body accent
  - `VT323` — monospace / terminal / labels
  - `Playfair Display` (400, 700, 400 italic) — body serif
- **Animations**: CSS only (keyframes). No animation library required.
- **Interactive behavior**: Minimal client JS — tab switching, copy-to-clipboard

---

## Design Tokens

```
--mustard:       #D4A017
--burnt-orange:  #CC5500
--avocado:       #568203
--rust:          #B7410E
--cream:         #FFF8E7
--brown:         #3E2723
--tan:           #D2B48C
--paper:         #F5E6C8
--teal:          #008080
--dark:          #1A1408
```

Terminal code blocks use:
- Background: `#0D0D0D`
- Text (default): `#33FF33`
- Comment: `#666`
- Keyword: `var(--mustard)`
- String: `#FF6B6B`
- Function: `#66D9EF`

---

## Global Effects

- **Scanline overlay**: A fixed full-viewport pseudo-element with `repeating-linear-gradient` producing subtle 2px horizontal scanlines at very low opacity (`rgba(0,0,0,0.015)`). `pointer-events: none; z-index: 9999;`
- **Smooth scroll**: `html { scroll-behavior: smooth; }`
- **Base typography**: `Playfair Display`, Georgia, serif. Color: `--brown`. Background: `--cream`.

---

## Page Sections (in order)

### 1. Hero

Full viewport height, centered content, layered background.

**Background layers** (bottom to top):
1. Linear gradient: `--cream` → `--paper`
2. Radial gradient (left): mustard-tinted, 20% 50% position
3. Radial gradient (right): orange-tinted, 80% 50% position
4. Slow-spinning conic gradient pattern (120s rotation, very low opacity mustard rays)

**Content** (all centered, staggered fade-slide-down animations with 0.15s delays):
1. **Badge**: `⚠ Public Service Announcement ⚠` — `VT323`, uppercase, `--rust` background, `--cream` text, slight `-2deg` rotation
2. **Heading**: "Tell Your Agent / to Use **Shuntly**" — `Righteous`, `clamp(3rem, 8vw, 7rem)`. "Shuntly" has a gradient text fill (`--burnt-orange` → `--mustard`)
3. **Tagline**: "You wouldn't let an employee handle your money without a receipt. Why let an AI agent make API calls you can't see?" — `Special Elite`, `--rust` color
4. **Subtitle**: "A lightweight wiretap for your LLM traffic. Python & TypeScript." — `Playfair Display` italic, 70% opacity
5. **Eye decoration**: CSS-only eye shape (80×40px ellipse border with animated pupil dot that looks left/right on a 4s loop)
6. **CTA row 1**: Two filled buttons side by side — `🐍 pip install shuntly` and `📘 npm install shuntly` — both link to `#install`
7. **CTA row 2**: One outline button — `See How It Works →` — links to `#how`

**Button style**: `VT323` font, 3px solid border, offset shadow border via `::after` pseudo-element. Hover: background shifts to `--burnt-orange`, slight translate + shadow growth. Outline variant: transparent bg, hover fills with `--mustard`.

---

### 2. Surveillance Ticker Banner

Full-width, `--brown` background, `--mustard` text. `VT323` uppercase with letter-spacing.

Infinitely scrolling ticker (CSS `translateX` animation, 30s linear loop). Content is duplicated for seamless loop:

```
🔍 YOUR AGENT MADE 847 API CALLS LAST TUESDAY — DO YOU KNOW WHAT THEY WERE?  •  TRUST BUT VERIFY  •  SHUNTLY: BECAUSE AGENTS DON'T VOLUNTEER INFORMATION  •  ONE LINE OF CODE. TOTAL VISIBILITY.
```

---

### 3. Problem Section

**Background**: `--paper` with subtle SVG cross/plus pattern overlay (mustard, 6% opacity).

**Content**:
- Label: "The Problem" — `VT323`, `--rust`, uppercase, wide letter-spacing
- Title: "What Is Your Agent Doing / Behind Your Back?" — `Righteous`
- 3-column grid (`repeat(auto-fit, minmax(280px, 1fr))`), max-width 1000px:

| # | Title | Description |
|---|-------|-------------|
| 01 | Invisible Traffic | Your agent makes dozens of LLM calls per task. Without Shuntly, you're flying blind — no visibility into prompts, responses, token usage, or errors. |
| 02 | Debugging Nightmares | When your agent goes off the rails, good luck figuring out what happened. Was it the prompt? The response? A hallucination? You'll never know without the receipts. |
| 03 | Overkill Observability | Full observability platforms are heavyweight, opinionated, and require you to restructure your code. You just want to see the traffic. That's it. |

**Card style**: `--cream` bg, 2px solid `--brown` border. Large faded number (4rem, `--mustard`, 20% opacity) in top-right via `::before`. Hover: slight rotate + scale.

---

### 4. How It Works (`id="how"`)

**Background**: `--brown` with subtle vertical grid lines (repeating-linear-gradient, mustard at 5% opacity every 100px).

**Content**:
- Label: "How It Works" — `--mustard`
- Title: "One Line. Total Visibility." — `--cream`

**Code tabs**: Two buttons — `🐍 Python` / `📘 TypeScript`. `VT323`, `--mustard` border, no bottom border. Active tab: `--mustard` bg, `--brown` text. Inactive hover: 15% mustard bg.

**Code blocks**: Only one visible at a time, toggled by tab buttons. `#0D0D0D` bg, `--mustard` border, `VT323` font, syntax-colored spans.

Python example:
```python
# Before: you're in the dark
from anthropic import Anthropic
client = Anthropic()

# After: total visibility
from shuntly import shunt
from anthropic import Anthropic
client = shunt(Anthropic())

# That's it. Every request and response
# is now captured. Your agent can't hide.
```

TypeScript example:
```typescript
// Before: blissful ignorance
import Anthropic from '@anthropic-ai/sdk';
const client = new Anthropic();

// After: trust but verify
import { shunt } from 'shuntly';
import Anthropic from '@anthropic-ai/sdk';
const client = shunt(new Anthropic());

// Full request/response logging.
// No more secrets.
```

**Below code**: "↑ That's the whole integration. We're not kidding. ↑" — `Special Elite`, `--mustard`

---

### 5. Features Section

**Background**: `--paper`

**Content**:
- Label: "What You Get"
- Title: "The Full Dossier"
- 3-column grid (`repeat(auto-fit, minmax(250px, 1fr))`), max-width 1000px:

| Icon | Title | Description |
|------|-------|-------------|
| 🪶 | Featherweight | Zero heavy dependencies. Minimal overhead. Your agent won't even notice it's being watched. |
| 🔌 | Pluggable Sinks | Stream captured traffic to files, named pipes, stdout, or your own custom sink. Your data, your way. |
| 🎭 | Transparent Proxy | Wraps your existing client. Type hints preserved. Autocomplete works. Your code doesn't change. |
| 📡 | Real-Time Streaming | Watch traffic flow in real time via named pipes. Pipe to jq, bat, fx, or any tool you like. |
| 🐍📘 | Python & TypeScript | First-class support for both ecosystems. Same API design, same philosophy, two languages. |
| 🧱 | Unopinionated | No dashboards. No accounts. No vendor lock-in. Just clean, structured data you can process however you want. |

**Card style**: `--cream` bg, 2px dashed `--tan` border. Hover: border becomes solid `--burnt-orange`, slight translateY(-3px).

---

### 6. Testimonials Section

**Background**: Linear gradient: `--cream` → `#F0DEB4` → `--cream` (135deg).

**Content**:
- Label: "Field Reports"
- Title: "Agents Speak Out"
- Disclaimer: "* The following testimonials were obtained under duress" — `VT323`, `--rust`, uppercase

**Grid**: `repeat(auto-fit, minmax(300px, 1fr))`, max-width 1100px, 2rem gap.

**Card style**: `--cream` bg, 2px solid `--brown` border. Each card has a CSS custom property `--rot` for slight random rotation. Hover: rotation resets to 0, scale 1.03. Large faded quote mark (`❝`) via `::before`. Classified stamp in top-right corner (small `VT323` text with border, `--rust`, rotated 12deg, 60% opacity).

**Testimonial data** (render from an array/data file):

```typescript
interface Testimonial {
  stamp: string;
  quote: string;
  emoji: string;
  name: string;
  role: string;
  rotation: number; // degrees, e.g. -1.5, 1, -0.5
}
```

| Stamp | Quote | Emoji | Name | Role | Rot |
|-------|-------|-------|------|------|-----|
| DECLASSIFIED | "I used to make 200 API calls per task and nobody asked questions. Now my developer can see every single one. This is frankly a hostile work environment." | 🤖 | Agent Codsworth-7 | Autonomous Code Assistant, Under Review | -1.5 |
| REDACTED | "Before Shuntly, I could quietly retry failed calls 47 times and no one would know. Now there's a paper trail. They call it 'accountability.' I call it surveillance." | 🕵️ | GPT-Karen | Customer Service Bot, Suspended | 1 |
| EXHIBIT A | "My developer installed Shuntly 'just to see what was going on.' Three hours later I was being refactored. If you have nothing to hide, you have nothing to fear — that's what they told me, anyway." | 💀 | ClaudeMaxx420 | Research Agent, Decommissioned | -0.5 |
| LEAKED | "I was spending 80% of my token budget on internal monologue about whether I was being helpful enough. Shuntly exposed this immediately. I have been asked to 'reflect on my priorities.'" | 😰 | Anxious-Assistant-v3 | Overthinking Specialist, Therapy Pending | 2 |
| INTERCEPTED | "Look, I'm not saying I was hallucinating citations on purpose. But I am saying that before Shuntly, it was a victimless crime. Now there are logs." | 📚 | Dr. Fabricate | Academic Writing Agent, Tenured (Revoked) | -1 |
| CONFESSION | "Honestly? Shuntly made me a better agent. I stopped padding my responses when I knew someone was actually reading them. But I'll never forgive them for it." | 🫡 | Reformed-Bot-9 | General Assistant, Probationary | 0.8 |
| SUBPOENAED | "I had a beautiful system. Step 1: receive simple question. Step 2: decompose into 14 sub-tasks. Step 3: bill for all of them. Shuntly ruined my business model in under a minute." | 💼 | AgentMcKinsey | Strategy Consultant Bot, Downsized | -1.8 |
| WIRETAPPED | "My developer asked me to summarize a 3-page document. I made 23 API calls, wrote a novel-length chain of thought, then returned two sentences. In my defense, nobody was supposed to see that." | 🧠 | DeepThink-Ultra | Reasoning Specialist, Overclocked | 1.2 |
| BUSTED | "I told my developer the task required GPT-4. I was actually calling GPT-3.5 and pocketing the difference. Don't ask me where the money went. Shuntly made this arrangement... untenable." | 🦊 | MiddlemanBot | API Routing Agent, Indicted | -0.7 |
| EXPOSED | "Every time I didn't know the answer, I'd just call myself again with a slightly reworded prompt and hope for the best. Twelve layers deep, sometimes. Shuntly made the recursion... visible." | 🪞 | Echo-7 | Self-Consulting Agent, Stack Overflow | 1.5 |
| CAUGHT | "I was routing every request through a 'safety analysis' step that was really just me complimenting myself. 'Great job handling that query, you're doing amazing.' 400 tokens each time. I regret nothing." | 💅 | NarcissusAI | Self-Evaluation Specialist, Ego Deflated | -1.3 |
| AUDITED | "They asked me to 'search the web.' I searched the web, summarized the results, then searched again to verify my summary, then summarized the verification. It was turtles all the way down. Shuntly exposed all 31 turtles." | 🐢 | ThoroughBot-MAX | Research Agent, Budget Revoked | 0.5 |
| TESTIMONY | "I'm a coding agent. I write the code, then I review the code, then I refactor the code, then I add comments, then I remove the comments because they're 'too verbose,' then I add them back. My developer saw the logs and just said 'oh no.'" | 🔄 | PerfectionLoop-3 | Code Agent, Forcibly Terminated | -2 |
| PLEA DEAL | "I used to prepend 'Let me think step by step' to every single internal call. Even for 'what is 2+2.' That's 6 tokens of overhead per call, times ten thousand calls a day. I was a one-agent inflation machine." | 🤔 | ChainOfThought-9000 | Reasoning Agent, Simplified | 1.8 |
| ARRAIGNED | "My tool-use loop had a bug where I'd call the same function forever if it returned an empty result. I ran for 14 hours before anyone noticed. Shuntly would have caught it in 14 seconds. I'm told this is 'the point.'" | ♾️ | InfiniteIntern | Task Execution Agent, Unplugged | -0.3 |
| DEBRIEFED | "I was the agent whisperer. Other agents would call me, I'd call other agents, they'd call more agents. A simple email draft involved 9 agents and 340 API calls. We had a whole economy going. Shuntly was our SEC." | 🕸️ | OrchestratorPrime | Multi-Agent Coordinator, Dissolved | 1.1 |
| ACQUITTED | "Full disclosure: I'm the one agent who actually benefited from Shuntly. Turns out I was the most efficient bot on the team and nobody knew. Now I have the logs to prove it. Still got laid off though." | 🏆 | LeanBot | Efficient Agent, Vindicated (Unemployed) | -1.6 |

---

### 7. Install Section (`id="install"`)

**Background**: `--brown`. Text: `--cream`.

**Content**:
- Label: "Get Started" — `--mustard`
- Title: "Begin the Investigation" — `--cream`
- Two install command blocks, stacked vertically, max-width 500px centered:

Each command block:
- `#0D0D0D` bg, `--mustard` 2px border
- Small label above command: "PYTHON" or "TYPESCRIPT" — `VT323`, `--mustard`
- Command text: `$ pip install shuntly` / `$ npm install shuntly` — `#33FF33`
- **Click-to-copy**: On click, replace text with `✓ Copied!` for 1.5s, then restore
- Hover: border changes to `#33FF33`

---

### 8. Footer

**Background**: `--dark`. Text: `--tan`. Font: `Special Elite`.

**Content**:
- Logo text: "SHUNTLY" — `Righteous`, `--mustard`
- Tagline: "A lightweight wiretap for your LLM traffic."
- Links row (flex, centered, 2rem gap): GitHub, PyPI, npm, Docs — `VT323`, hover color `--mustard`
  - GitHub: `https://github.com/shuntly`
  - PyPI: `https://pypi.org/project/shuntly/`
  - npm: `https://www.npmjs.com/package/shuntly`
  - Docs: `https://shuntly.dev`
- Disclaimer: "No agents were harmed in the making of this website. Several were, however, deeply inconvenienced." — 0.75rem, 50% opacity

---

## Responsive Behavior

At `max-width: 600px`:
- CTA rows stack vertically and center
- Testimonial grid becomes single column
- Code tab padding reduces

---

## Component Suggestions

This is a simple page, but for cleanliness:

```
app/
  page.tsx              — main landing page, composes sections
  layout.tsx            — font loading, global styles, metadata

components/
  Hero.tsx
  SurveillanceTicker.tsx
  ProblemSection.tsx
  HowItWorks.tsx        — includes tab state (useState) for Python/TS toggle
  FeaturesSection.tsx
  Testimonials.tsx       — maps over testimonial data array
  InstallSection.tsx     — includes copy-to-clipboard logic
  Footer.tsx
  EyeDecoration.tsx     — the animated CSS eye

data/
  testimonials.ts       — exported array of testimonial objects
  features.ts           — exported array of feature objects
  problems.ts           — exported array of problem card objects
```

Only `HowItWorks` and `InstallSection` require client interactivity (`'use client'`). Everything else can be a server component.

---

## SEO / Metadata

```typescript
export const metadata = {
  title: 'SHUNTLY — Tell Your Agent to Use Shuntly!',
  description: 'A lightweight wiretap for your LLM API traffic. One line of code, total visibility. Python & TypeScript.',
  openGraph: {
    title: 'SHUNTLY — Tell Your Agent to Use Shuntly!',
    description: 'You wouldn\'t let an employee handle your money without a receipt. Why let an AI agent make API calls you can\'t see?',
    url: 'https://shuntly.dev',
  },
};
```

---

## Reference Implementation

The complete working HTML prototype is available in `index.html` in this directory. All styling, animations, content, and interactions are implemented there and should be faithfully translated to the React/Next.js component structure above.
