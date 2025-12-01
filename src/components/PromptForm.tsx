"use client";

import { useState } from "react";

type Props = {
  onGenerate: (prompt: string) => void;
  loading: boolean;
};

export function PromptForm({ onGenerate, loading }: Props) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || loading) return;
    onGenerate(prompt.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 flex flex-col gap-3 md:flex-row"
    >
      <input
        className="flex-1 rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-sm text-slate-50 outline-none ring-0 transition focus:border-indigo-400"
        placeholder='e.g. "I want to focus on studying for exams today"'
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Thinking..." : "Generate insights"}
      </button>
    </form>
  );
}
