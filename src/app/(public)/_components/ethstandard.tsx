"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Layers, Network, ShieldCheck } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, XAxis } from "recharts";

const chartData = [
  { domain: "Execution", draft: 24, review: 18, final: 9 },
  { domain: "Consensus", draft: 12, review: 9, final: 6 },
  { domain: "Networking", draft: 8, review: 6, final: 3 },
  { domain: "Interfaces", draft: 15, review: 10, final: 5 },
  { domain: "ERCs", draft: 32, review: 22, final: 11 },
];

const chartConfig = {
  draft: {
    label: "Draft",
    color: "#52f6d6", // aqua
  },
  review: {
    label: "Review",
    color: "#7f6dff", // violet
  },
  final: {
    label: "Final",
    color: "#ffb45a", // warm amber
  },
} satisfies ChartConfig;

const stats = [
  { label: "Active proposals", value: "112", change: "+8 this month" },
  { label: "Finalized", value: "34", change: "15% of total" },
  { label: "Core team reviewers", value: "42", change: "Expanding coverage" },
  { label: "Average review time", value: "21d", change: "Down 12%" },
];

export default function EthStandard() {
  return (
    <section className="relative overflow-hidden bg-background py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(52,211,153,0.18),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.12),transparent_38%)]" />

      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-black/60 px-4 py-1 text-sm text-cyan-100 backdrop-blur">
            <span className="rounded-full bg-emerald-400 px-2 py-0.5 text-xs font-semibold text-black">New</span>
            <span>Ethereum Standards Overview</span>
            <ArrowRight className="h-4 w-4" />
          </div>

          <h1 className="dec-title bg-gradient-to-br from-emerald-300 via-slate-100 to-cyan-200 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-2xl md:text-4xl">
            A Structured View of Ethereum Proposals
          </h1>
          <p className="mt-4 text-md text-slate-200">
            Explore EIPs, ERCs, and RIPs across execution, consensus, networking, and interfaces. Understand how proposals are categorized, reviewed, and progressed through their lifecycle.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg transition hover:from-cyan-400 hover:to-blue-500 hover:text-white"
            >
              View dashboard
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/eips"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-black/40 px-5 py-2.5 text-sm text-cyan-100 backdrop-blur transition hover:bg-cyan-400/10"
            >
              <Layers className="h-4 w-4" />
              Browse proposals
            </Link>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-cyan-300/20 bg-black/50 p-6 shadow-xl backdrop-blur"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
              <Network className="h-4 w-4" />
              Domains
            </div>
            <h3 className="dec-title text-2xl font-semibold text-slate-100">
              Categorized by layers
            </h3>
            <p className="mt-2 text-slate-300">
              Execution, consensus, networking, and interfaces—quickly spot where proposals sit and how they impact the stack.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-200">
              <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-3">
                <p className="text-xs uppercase tracking-wide text-emerald-200">Execution</p>
                <p className="text-lg font-semibold">24 in review</p>
              </div>
              <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-3">
                <p className="text-xs uppercase tracking-wide text-cyan-200">Consensus</p>
                <p className="text-lg font-semibold">12 drafts</p>
              </div>
              <div className="rounded-xl border border-blue-400/20 bg-blue-400/5 p-3">
                <p className="text-xs uppercase tracking-wide text-blue-200">Networking</p>
                <p className="text-lg font-semibold">6 in review</p>
              </div>
              <div className="rounded-xl border border-slate-300/20 bg-slate-300/5 p-3">
                <p className="text-xs uppercase tracking-wide text-slate-200">Interfaces</p>
                <p className="text-lg font-semibold">15 active</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-2xl border border-cyan-300/20 bg-black/50 p-6 shadow-xl backdrop-blur"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
              <ShieldCheck className="h-4 w-4" />
              Review flow
            </div>
            <h3 className="dec-title text-2xl font-semibold text-slate-100">
              Clear lifecycle signals
            </h3>
            <p className="mt-2 text-slate-300">
              Track status, reviewers, and timelines. Spot blockers early and see which domains are accelerating.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li className="flex items-center justify-between rounded-xl border border-cyan-300/20 bg-cyan-400/5 px-4 py-3">
                <span className="font-semibold">Review queue</span>
                <span className="text-emerald-200">18 proposals</span>
              </li>
              <li className="flex items-center justify-between rounded-xl border border-emerald-300/20 bg-emerald-400/5 px-4 py-3">
                <span className="font-semibold">Ready for final</span>
                <span className="text-emerald-200">9 proposals</span>
              </li>
              <li className="flex items-center justify-between rounded-xl border border-blue-300/20 bg-blue-400/5 px-4 py-3">
                <span className="font-semibold">Needs authors</span>
                <span className="text-cyan-200">6 drafts</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-2xl border border-cyan-300/20 bg-black/50 p-6 shadow-xl backdrop-blur"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-200">
              <ArrowRight className="h-4 w-4" />
              Momentum
            </div>
            <h3 className="dec-title text-2xl font-semibold text-slate-100">
              Signals at a glance
            </h3>
            <p className="mt-2 text-slate-300">
              Engagement, throughput, and timelines—surface the signals that show where standards are moving.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-200">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-cyan-300/20 bg-white/5 p-3"
                >
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    {item.label}
                  </p>
                  <p className="text-lg font-semibold text-slate-50">{item.value}</p>
                  <p className="text-xs text-emerald-200">{item.change}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-12"
        >
          <Card className="border-cyan-300/20 bg-black/60 backdrop-blur">
            <CardHeader className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle className="dec-title text-xl text-slate-50">
                  Lifecycle across domains
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Draft, review, and final counts grouped by domain.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-2">
              <ChartContainer
                config={chartConfig}
                className="relative h-[320px] w-full overflow-hidden rounded-xl border border-cyan-300/10 bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-black/60 px-4 pb-2 pt-4 shadow-[0_10px_50px_rgba(0,0,0,0.35)]"
              >
                <BarChart accessibilityLayer data={chartData}>
                  <XAxis
                    dataKey="domain"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={12}
                    tick={{ fill: "#cbd5e1" }}
                  />
                  <Bar
                    dataKey="draft"
                    stackId="a"
                    fill="var(--color-draft)"
                    fillOpacity={0.6}
                    stroke="var(--color-draft)"
                    strokeOpacity={0.95}
                    strokeWidth={1.6}
                    radius={[6, 6, 0, 0]}
                    className="[filter:drop-shadow(0_0_12px_rgba(82,246,214,0.35))]"
                  />
                  <Bar
                    dataKey="review"
                    stackId="a"
                    fill="var(--color-review)"
                    fillOpacity={0.6}
                    stroke="var(--color-review)"
                    strokeOpacity={0.95}
                    strokeWidth={1.6}
                    className="[filter:drop-shadow(0_0_12px_rgba(127,109,255,0.35))]"
                  />
                  <Bar
                    dataKey="final"
                    stackId="a"
                    fill="var(--color-final)"
                    fillOpacity={0.6}
                    stroke="var(--color-final)"
                    strokeOpacity={0.95}
                    strokeWidth={1.6}
                    radius={[0, 0, 6, 6]}
                    className="[filter:drop-shadow(0_0_12px_rgba(255,180,90,0.35))]"
                  />
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        className="w-[220px]"
                        hideLabel
                        formatter={(value, name, item, index) => (
                          <>
                            <div
                              className="h-2.5 w-2.5 shrink-0 rounded-[2px]"
                              style={{ backgroundColor: `var(--color-${name})` }}
                            />
                            {chartConfig[name as keyof typeof chartConfig]?.label || name}
                            <div className="text-foreground ml-auto flex items-baseline gap-1 font-mono font-medium tabular-nums">
                              {value}
                              <span className="text-muted-foreground text-xs font-normal">items</span>
                            </div>
                            {index === 2 && (
                              <div className="text-foreground mt-2 flex basis-full items-center border-t pt-2 text-xs font-medium">
                                Total
                                <div className="text-foreground ml-auto flex items-baseline gap-1 font-mono font-medium tabular-nums">
                                  {item.payload.draft + item.payload.review + item.payload.final}
                                  <span className="text-muted-foreground text-xs font-normal">items</span>
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      />
                    }
                    defaultIndex={0}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}