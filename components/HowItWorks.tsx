"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import Prism from "prismjs";
Prism.manual = true;
import "prismjs/components/prism-python";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-json";
import PythonLogo from "./PythonLogo";
import TypeScriptLogo from "./TypeScriptLogo";

type Tab = {
  id: string;
  lang: "python" | "typescript";
  icon: ReactNode;
  text: string;
  code: string;
};

const iconClass = "inline-block w-[1.1em] h-[1.1em] align-[-0.15em]";

const tabs: Tab[] = [
  // Python examples
  {
    id: "py-anthropic",
    lang: "python",
    icon: <PythonLogo className={iconClass} />,
    text: "Anthropic",
    code: `from shuntly import shunt
from anthropic import Anthropic

client = shunt(Anthropic(api_key=API_KEY)) # Call shuntly
resp = client.messages.create(
    model=MODEL,
    messages=[{'role': 'user', 'content': 'What is observability?'}],
)`,
  },
  //----------------------------------------------------------------------------
  {
    id: "py-openai",
    lang: "python",
    icon: <PythonLogo className={iconClass} />,
    text: "OpenAI",
    code: `from shuntly import shunt
from openai import OpenAI

client = shunt(OpenAI(api_key=_API_KEY)) # Call shuntly
resp = client.chat.completions.create(
    model=MODEL,
    messages=[{'role': 'user', 'content': 'What is observability?'}],
)`,
  },
  //----------------------------------------------------------------------------
  {
    id: "py-litellm",
    lang: "python",
    icon: <PythonLogo className={iconClass} />,
    text: "LiteLLM",
    code: `from shuntly import shunt
import litellm

shunt(litellm)
resp = litellm.completion(
    model=MODEL,
    messages=[{'role': 'user', 'content': 'What is Shuntly'}],
)`,
  },
  //----------------------------------------------------------------------------
  {
    id: "py-google",
    lang: "python",
    icon: <PythonLogo className={iconClass} />,
    text: "Google",
    code: `from shuntly import shunt
from google import genai

client = shunt(genai.Client(api_key=API_KEY)) # Call shuntly
resp = client.models.generate_content(
    model=MODEL,
    contents='What is observability?',
)`,
  },
  //----------------------------------------------------------------------------
  {
    id: "py-ollama",
    lang: "python",
    icon: <PythonLogo className={iconClass} />,
    text: "Ollama",
    code: `from shuntly import shunt
import ollama

client = shunt(ollama.Client(host="https://ollama.com")) # Call shuntly
resp = client.chat(
    model=MODEL,
    messages=[{'role': 'user', 'content': 'What is observability?'}],
)`,
  },
  //----------------------------------------------------------------------------
  {
    id: "py-anyllm",
    lang: "python",
    icon: <PythonLogo className={iconClass} />,
    text: "any-llm",
    code: `from shuntly import shunt
import any_llm

client = shunt(any_llm) # Call shuntly
resp = client.completion(
    model=MODEL,
    provider='openai',
    messages=[{'role': 'user', 'content': 'What is observability?'}],
)`,
  },
  // TS examples
  {
    id: "ts-anthropic",
    lang: "typescript",
    icon: <TypeScriptLogo className={iconClass} />,
    text: "Anthropic",
    code: `import { shunt } from 'shuntly';
import Anthropic from '@anthropic-ai/sdk';

const client = shunt(new Anthropic({ apiKey: API_KEY })); // Call shuntly
const resp = await client.messages.create({
  model: MODEL,
  messages: [{ role: "user", content: "What is observability?" }],
});`,
  },
  //----------------------------------------------------------------------------
  {
    id: "ts-openai",
    lang: "typescript",
    icon: <TypeScriptLogo className={iconClass} />,
    text: "OpenAI",
    code: `import { shunt } from 'shuntly';
import OpenAI from 'openai';

const client = shunt(new OpenAI({ apiKey: API_KEY })); // Call shuntly
const resp = await client.chat.completions.create({
  model: MODEL,
  messages: [{ role: "user", content: "What is observability?" }],
});`,
  },
  //----------------------------------------------------------------------------
  {
    id: "ts-google",
    lang: "typescript",
    icon: <TypeScriptLogo className={iconClass} />,
    text: "Google",
    code: `import { shunt } from 'shuntly';
import { GoogleGenAI } from "@google/genai";

const client = shunt(new GoogleGenAI({ apiKey: API_KEY })); // Call shuntly
const resp = await client.models.generateContent({
  model: MODEL,
  contents: "What is observability?",
});
`,
  },
  //----------------------------------------------------------------------------
  {
    id: "ts-ollama",
    lang: "typescript",
    icon: <TypeScriptLogo className={iconClass} />,
    text: "Ollama",
    code: `import { shunt } from 'shuntly';
import { Ollama } from 'ollama';

const client = shunt(new Ollama({ host: "https://ollama.com" })); // Call shuntly
const resp = await client.chat({
  model: MODEL,
  messages: [{ role: "user", content: "What is observability?" }],
});`,
  },
  //----------------------------------------------------------------------------
  {
    id: "ts-piai",
    lang: "typescript",
    icon: <TypeScriptLogo className={iconClass} />,
    text: "pi-ai",
    code: `import { shunt } from 'shuntly';
import { complete, getModel } from "@mariozechner/pi-ai";

const complete = shunt(complete); // Call shuntly
const model = getModel("anthropic", "claude-haiku-4-5-20251001");
const resp = await complete(model, {
  messages: [
    {
      role: "user",
      content: "What is observability?",
    },
  ],
});`,
  },
];

const sinkOutput = `{
  "timestamp": "2026-02-12T18:55:47.270929+00:00",
  "hostname": "echo-7-p1",
  "user": "echo-7",
  "pid": 270786,
  "client": "google.genai.client.Client",
  "method": "models.generate_content",
  "request": {
    "model": "gemini-2.5-flash-lite",
    "contents": "What is observability?"
  },
  "response": {
    "candidates": [
      {
        "content": {
          "parts": [
            {
              "text": "Observability is the ability to understand the internal state of a system by examining its external outputs...",
            }
          ],
          "role": "model"
        },
      }
    ],
    "model_version": "gemini-2.5-flash-lite",
    "response_id": "MyKOafvVC9CUmtkP6vKBiQ8",
    "usage_metadata": {
      "candidates_token_count": 936,
      "prompt_token_count": 5,
      "prompt_tokens_details": [{ "modality": "TEXT", "token_count": 5 }],
      "total_token_count": 941,
    },
  },
  "duration_ms": 4517.117270006565,
  "error": null
}
`;

const sinkLines = Prism.highlight(
  sinkOutput,
  Prism.languages.json,
  "json",
).split("\n");

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
  const [visibleLines, setVisibleLines] = useState(sinkLines.length);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);
  const sinkRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setVisibleLines(0);
    sinkRef.current?.scrollTo(0, 0);
    let line = 0;
    intervalRef.current = setInterval(() => {
      line++;
      setVisibleLines(line);
      if (line >= sinkLines.length) {
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
      }
    }, 40);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeTab]);

  return (
    <section
      id="how"
      className="how-grid-lines relative py-10 px-8 bg-brown text-cream overflow-hidden"
    >
      <p className="font-terminal text-[0.85rem] tracking-[0.3em] uppercase text-mustard mb-2 text-center relative z-[1]">
        How It Works
      </p>
      <h2 className="font-righteous text-[clamp(2rem,5vw,3.5rem)] text-cream mb-8 text-center relative z-[1]">
        One Call. Total Visibility
      </h2>

      <div className="max-w-[700px] mx-auto relative z-[1] border-t-2 border-x-2 border-mustard">
        {(["python", "typescript"] as const).map((lang) => (
          <div key={lang} className="flex flex-wrap">
            {tabs
              .filter((t) => t.lang === lang)
              .map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`code-tab-responsive grow basis-[calc(50%-1px)] sm:basis-0 font-semibold text-sm tracking-[0.05em] py-2 px-4 cursor-pointer transition-all ${
                    activeTab === tab.id
                      ? "bg-mustard/90 text-brown"
                      : "bg-mustard/20 text-mustard hover:bg-mustard/40"
                  }`}
                >
                  <span className="grid grid-cols-[1.4em_1fr] items-center gap-2 text-left">
                    {tab.icon}
                    <span>{tab.text}</span>
                  </span>
                </button>
              ))}
          </div>
        ))}
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

      <div className="max-w-[700px] mx-auto relative z-[1] mt-4">
        <h3 className="font-righteous text-[clamp(2rem,5vw,3.5rem)] text-cream mb-2 text-center relative z-[1]">
          Traffic Tapped
        </h3>

        <div className="flex items-center text-[0.9rem] text-tan opacity-80 mb-4 mx-20">
          <p>
            For each response, the selected Sink (stderr, file, rotating log,
            named pipe, or custom) writes JSON
          </p>
        </div>

        <pre
          ref={sinkRef}
          className="bg-terminal/70 border-2 border-tan p-4 h-100 font-terminal text-[0.9rem] leading-[1.7] overflow-x-auto overflow-y-auto text-left grid"
        >
          <code
            className="language-json col-start-1 row-start-1 invisible"
            dangerouslySetInnerHTML={{ __html: sinkLines.join("\n") }}
          />
          <code
            className="language-json col-start-1 row-start-1"
            dangerouslySetInnerHTML={{
              __html: sinkLines.slice(0, visibleLines).join("\n"),
            }}
          />
        </pre>
      </div>
    </section>
  );
}
