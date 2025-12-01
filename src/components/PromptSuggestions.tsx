// src/components/PromptSuggestions.tsx
"use client";

import { motion } from "framer-motion";

type Props = {
  onSelect: (value: string) => void;
};

const suggestions = [
  "I want to study for my exams",
  "I want to focus on coding today",
  "I want to be more productive",
  "I want to improve my fitness",
  "I feel tired, I want better sleep",
  "I want to reduce stress today",
  "I want a more disciplined routine",
  "I want to break a bad habit",
];

export function PromptSuggestions({ onSelect }: Props) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {suggestions.map((text, i) => (
        <motion.button
          key={text}
          onClick={() => onSelect(text)}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="rounded-full bg-slate-800/70 px-4 py-2 text-xs text-slate-300 shadow-sm hover:bg-slate-700 hover:text-white transition"
        >
          {text}
        </motion.button>
      ))}
    </div>
  );
}
