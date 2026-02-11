"use client";

import { useState, type ReactNode } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/components/prism-typescript";
import PythonLogo from "./PythonLogo";
import TypeScriptLogo from "./TypeScriptLogo";

type Tab = {
  id: string;
  lang: "python" | "typescript";
  label: ReactNode;
  code: string;
};

const iconClass = "inline-block w-[1.4em] h-[1.4em] align-[-0.15em] mr-1.5";

const tabs: Tab[] = [
  // Python examples
  {
    id: "py-anthropic",
    lang: "python",
    label: (
      <>
        <PythonLogo className={iconClass} /> Anthropic
      </>
    ),
    code: `from shuntly import shunt
from anthropic import Anthropic

client = shunt(Anthropic(api_key=API_KEY)) # Call shuntly()
resp = client.messages.create(
    model=MODEL,
    messages=[{'role': 'user', 'content': 'What is Shuntly?'}],
)`,
  },
  {
    id: "py-openai",
    lang: "python",
    label: (
      <>
        <PythonLogo className={iconClass} /> OpenAI
      </>
    ),
    code: `from shuntly import shunt
from openai import OpenAI

client = shunt(OpenAI(api_key=_API_KEY)) # Call shuntly()
resp = client.chat.completions.create(
    model=MODEL,
    messages=[{'role': 'user', 'content': 'What is Shuntly?'}],
)`,
  },
  {
    id: "py-google",
    lang: "python",
    label: (
      <>
        <PythonLogo className={iconClass} /> Google
      </>
    ),
    code: `from shuntly import shunt
from google import genai

client = shunt(genai.Client(api_key=API_KEY)) # Call shuntly()
resp = client.models.generate_content(
    model=MODEL,
    contents='What is Shuntly?',
)`,
  },
  // TS examples
  {
    id: "ts-anthropic",
    lang: "typescript",
    label: (
      <>
        <TypeScriptLogo className={iconClass} /> Anthropic
      </>
    ),
    code: `import { shunt } from 'shuntly';
import Anthropic from '@anthropic-ai/sdk';

const client = shunt(new Anthropic({ apiKey: API_KEY })); // Call shuntly()
const resp = await client.messages.create({
  model: MODEL,
  messages: [{ role: "user", content: "What is Shuntly?" }],
});`,
  },
  {
    id: "ts-openai",
    lang: "typescript",
    label: (
      <>
        <TypeScriptLogo className={iconClass} /> OpenAI
      </>
    ),
    code: `import { shunt } from 'shuntly';
import OpenAI from 'openai';

const client = shunt(new OpenAI({ apiKey: API_KEY })); // Call shuntly()
const resp = await client.chat.completions.create({
  model: MODEL,
  messages: [{ role: "user", content: "What is Shuntly?" }],
});`,
  },
  {
    id: "ts-google",
    lang: "typescript",
    label: (
      <>
        <TypeScriptLogo className={iconClass} /> Google
      </>
    ),
    code: `import { shunt } from 'shuntly';
import { GoogleGenAI } from "@google/genai";

const client = shunt(new GoogleGenAI({ apiKey: API_KEY })); // Call shuntly()
const resp = await client.models.generateContent({
  model: MODEL,
  contents: "What is Shuntly?",
});
`,
  },
  {
    id: "ts-piai",
    lang: "typescript",
    label: (
      <>
        <TypeScriptLogo className={iconClass} /> pi-ai
      </>
    ),
    code: `import { shunt } from 'shuntly';
import { complete, getModel } from "@mariozechner/pi-ai";

const complete = shunt(complete); // Call shuntly()
const model = getModel("anthropic", "claude-haiku-4-5-20251001");
const resp = await complete(model, {
  messages: [
    {
      role: "user",
      content: "What is Shuntly?",
    },
  ],
});`,
  },
];

const highlightedTabs = tabs.map((tab) => {
  const grammar =
    tab.lang === "python" ? Prism.languages.python : Prism.languages.typescript;
  return {
    id: tab.id,
    lang: tab.lang,
    html: Prism.highlight(tab.code, grammar, tab.lang),
  };
});

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section
      id="how"
      className="how-grid-lines relative py-10 px-8 bg-brown text-cream overflow-hidden"
    >
      <p className="font-terminal text-[0.85rem] tracking-[0.3em] uppercase text-mustard mb-2 text-center relative z-[1]">
        How It Works
      </p>
      <h2 className="font-righteous text-[clamp(2rem,5vw,3.5rem)] text-cream mb-8 text-center relative z-[1]">
        One Call. Total Visibility.
      </h2>

      <div className="max-w-[700px] mx-auto relative z-[1]">
        <div className="flex">
          {tabs
            .filter((t) => t.lang === "python")
            .map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`code-tab-responsive grow basis-0 font-terminal text-[0.85rem] tracking-[0.05em] py-2 px-4 border-2 border-mustard border-b-2 cursor-pointer transition-all ${
                  activeTab === tab.id
                    ? "bg-mustard/90 text-brown"
                    : "bg-transparent text-mustard hover:bg-mustard/15"
                }`}
              >
                {tab.label}
              </button>
            ))}
        </div>
        <div className="flex -mt-[2px]">
          {tabs
            .filter((t) => t.lang === "typescript")
            .map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`code-tab-responsive grow basis-0 font-terminal text-[0.85rem] tracking-[0.05em] py-2 px-4 border-2 border-mustard border-b-0 cursor-pointer transition-all ${
                  activeTab === tab.id
                    ? "bg-mustard text-brown"
                    : "bg-transparent text-mustard hover:bg-mustard/15"
                }`}
              >
                {tab.label}
              </button>
            ))}
        </div>
      </div>

      <div className="max-w-[700px] mx-auto relative z-[1]">
        <pre className="bg-terminal/70 border-2 border-mustard p-4 font-terminal text-[0.9rem] leading-[1.7] overflow-x-auto text-left grid">
          {highlightedTabs.map((tab) => (
            <code
              key={tab.id}
              className={`language-${tab.lang} col-start-1 row-start-1 ${
                tab.id === activeTab ? "visible" : "invisible"
              }`}
              dangerouslySetInnerHTML={{ __html: tab.html }}
            />
          ))}
        </pre>
      </div>
    </section>
  );
}
