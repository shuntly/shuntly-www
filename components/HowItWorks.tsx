"use client";

import { useState } from "react";

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"python" | "typescript">("python");

  return (
    <section
      id="how"
      className="how-grid-lines relative py-10 px-8 bg-brown text-cream overflow-hidden"
    >
      <p className="font-terminal text-[0.85rem] tracking-[0.3em] uppercase text-mustard mb-3 text-center relative z-[1]">
        How It Works
      </p>
      <h2 className="font-righteous text-[clamp(2rem,5vw,3.5rem)] text-cream mb-8 text-center relative z-[1]">
        One Line. Total Visibility.
      </h2>

      <div className="flex justify-center max-w-[700px] mx-auto relative z-[1]">
        <button
          onClick={() => setActiveTab("python")}
          className={`code-tab-responsive font-terminal text-[1.1rem] tracking-[0.1em] py-[0.6em] px-8 border-2 border-mustard border-b-0 cursor-pointer transition-all ${
            activeTab === "python"
              ? "bg-mustard text-brown"
              : "bg-transparent text-mustard hover:bg-mustard/15"
          }`}
        >
          🐍 Python
        </button>
        <button
          onClick={() => setActiveTab("typescript")}
          className={`code-tab-responsive font-terminal text-[1.1rem] tracking-[0.1em] py-[0.6em] px-8 border-2 border-mustard border-b-0 cursor-pointer transition-all ${
            activeTab === "typescript"
              ? "bg-mustard text-brown"
              : "bg-transparent text-mustard hover:bg-mustard/15"
          }`}
        >
          📘 TypeScript
        </button>
      </div>

      <div className="max-w-[700px] mx-auto relative z-[1]">
        {activeTab === "python" ? (
          <pre className="bg-terminal border-2 border-mustard p-4 font-terminal text-[0.9rem] leading-[1.7] text-terminal-green overflow-x-auto text-left">
            <span className="syn-comment">
              # Before: you&apos;re in the dark
            </span>
            {"\n"}
            <span className="syn-keyword">from</span> anthropic{" "}
            <span className="syn-keyword">import</span> Anthropic{"\n"}
            client = Anthropic(){"\n"}
            {"\n"}
            <span className="syn-comment"># After: total visibility</span>
            {"\n"}
            <span className="syn-keyword">from</span> shuntly{" "}
            <span className="syn-keyword">import</span>{" "}
            <span className="syn-func">shunt</span>
            {"\n"}
            <span className="syn-keyword">from</span> anthropic{" "}
            <span className="syn-keyword">import</span> Anthropic{"\n"}
            client = <span className="syn-func">shunt</span>(Anthropic()){"\n"}
            {"\n"}
            <span className="syn-comment">
              # That&apos;s it. Every request and response
            </span>
            {"\n"}
            <span className="syn-comment">
              # is now captured. Your agent can&apos;t hide.
            </span>
          </pre>
        ) : (
          <pre className="bg-terminal border-2 border-mustard p-4 font-terminal text-[0.9rem] leading-[1.7] text-terminal-green overflow-x-auto text-left">
            <span className="syn-comment">
              {"// "}Before: blissful ignorance
            </span>
            {"\n"}
            <span className="syn-keyword">import</span> Anthropic{" "}
            <span className="syn-keyword">from</span>{" "}
            <span className="syn-string">
              &apos;@anthropic-ai/sdk&apos;
            </span>
            ;{"\n"}
            <span className="syn-keyword">const</span> client ={" "}
            <span className="syn-keyword">new</span>{" "}
            <span className="syn-func">Anthropic</span>();{"\n"}
            {"\n"}
            <span className="syn-comment">
              {"// "}After: trust but verify
            </span>
            {"\n"}
            <span className="syn-keyword">import</span> {"{ "}
            <span className="syn-func">shunt</span>
            {" }"} <span className="syn-keyword">from</span>{" "}
            <span className="syn-string">&apos;shuntly&apos;</span>;{"\n"}
            <span className="syn-keyword">import</span> Anthropic{" "}
            <span className="syn-keyword">from</span>{" "}
            <span className="syn-string">
              &apos;@anthropic-ai/sdk&apos;
            </span>
            ;{"\n"}
            <span className="syn-keyword">const</span> client ={" "}
            <span className="syn-func">shunt</span>(
            <span className="syn-keyword">new</span>{" "}
            <span className="syn-func">Anthropic</span>());{"\n"}
            {"\n"}
            <span className="syn-comment">
              {"// "}Full request/response logging.
            </span>
            {"\n"}
            <span className="syn-comment">{"// "}No more secrets.</span>
          </pre>
        )}
      </div>

    </section>
  );
}
