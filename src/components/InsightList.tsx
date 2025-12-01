// src/components/InsightList.tsx
"use client";

import { motion } from "framer-motion";
import type { Insight } from "../types/insight";
import { InsightCard } from "./InsightCard";

type Props = {
  insights: Insight[];
};

export function InsightList({ insights }: Props) {
  if (!insights.length) {
    return (
      <div className="mt-8 rounded-2xl border border-dashed border-slate-700 p-6 text-center text-slate-400">
        No insights yet. Try entering a goal above ✨
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
      className="mt-8 grid gap-4 md:grid-cols-2"
    >
      {insights.map((insight, index) => (
        <InsightCard key={insight.id} insight={insight} index={index} />
      ))}
    </motion.div>
  );
}
