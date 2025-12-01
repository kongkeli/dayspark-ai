"use client";

import { motion } from "framer-motion";
import type { Insight, InsightCategory } from "../types/insight";

type Props = {
  insight: Insight;
  index: number;
};

const categoryColors: Record<InsightCategory, string> = {
  study: "from-indigo-500 to-sky-500",
  fitness: "from-emerald-500 to-lime-500",
  productivity: "from-orange-500 to-amber-500",
  coding: "from-cyan-500 to-blue-500",
  sleep: "from-purple-500 to-fuchsia-500",
  other: "from-slate-500 to-zinc-500",
};

export function InsightCard({ insight, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.1 * index, duration: 0.35, ease: "easeOut" }}
      className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-lg backdrop-blur-sm"
    >
      <div
        className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${
          categoryColors[insight.category]
        } px-3 py-1 text-xs font-semibold text-white`}
      >
        <span># {index + 1}</span>
        <span className="capitalize">{insight.category}</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-slate-50">
        {insight.title}
      </h3>
      <p className="mt-2 text-sm text-slate-300">{insight.description}</p>
    </motion.div>
  );
}
