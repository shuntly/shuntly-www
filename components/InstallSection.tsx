"use client";

import { useState } from "react";

function InstallCmd({ label, command }: { label: string; command: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div
      onClick={handleCopy}
      className="bg-terminal border-2 border-mustard py-2 px-6 font-terminal text-[0.9rem] text-terminal-green text-left flex justify-between items-center cursor-pointer transition-colors hover:border-terminal-green"
    >
      <div>
        <div className="text-[0.75rem] text-mustard tracking-[0.15em]">
          {label}
        </div>
        <span>{copied ? "✓ Copied!" : `$ ${command}`}</span>
      </div>
    </div>
  );
}

export default function InstallSection() {
  return (
    <section id="install" className="how-grid-lines relative py-10 px-8 bg-brown text-cream text-center overflow-hidden">
      <p className="font-terminal text-[0.85rem] tracking-[0.3em] uppercase text-mustard mb-2 relative z-[1]">
        Get Started
      </p>
      <h2 className="font-righteous text-[clamp(2rem,5vw,3.5rem)] text-cream mb-8 relative z-[1]">
        Begin the Investigation
      </h2>
      <div className="flex flex-col gap-4 max-w-[500px] mx-auto relative z-[1]">
        <InstallCmd label="PYTHON" command="pip install shuntly" />
        <InstallCmd label="TYPESCRIPT" command="npm install shuntly" />
      </div>
    </section>
  );
}
