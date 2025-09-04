"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


type HomeSectionProps = { onGoProjects: () => void };
type TabButtonProps = { active: boolean; children: React.ReactNode; onClick: () => void };
type LiftProps = { children: React.ReactNode };


// ---------------- Tabs ----------------
function useTabs(initial = "home") {
  const [tab, setTab] = React.useState(initial);
  return { tab, setTab };
}

// ---------------- Data ----------------
const projects = [
  {
    title: "ValoPro — Valorant Pro Match Tracker (Discord Bot)",
    tags: ["Python", "discord.py", "VLR.gg"],
    href: "https://brandonks05.github.io/ValoPro/",
    description:
      "Slash commands to fetch upcoming matches, live scores, and team info for VCT/Game Changers from the unofficial VLR ecosystem. Built for reliability and low-latency updates.",
  },
  {
    title: "CiviBrief — US Bill Summaries (Web App)",
    tags: ["Python", "Streamlit", "Open Data"],
    href: "https://brandonks05.github.io/civibrief-site/#",
    description:
      "Clean, fast summaries of federal & state bills with shareable links. Designed for students and citizens who want the TL;DR without the legalese.",
  },
];

// ---------------- Page ----------------
export default function Portfolio() {
  const { tab, setTab } = useTabs();

  return (
    <div className="relative min-h-screen w-full text-slate-100 overflow-hidden bg-[#0a0a0f]">
      <div className="relative z-10">
        {/* Nav */}
        <div className="mx-auto max-w-6xl px-4 pt-6">
          <nav className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl">
            <div className="flex items-center justify-between px-4 py-3 text-sm">
              <span className="font-semibold tracking-wide text-white">Brandon Lee</span>
              <div className="flex items-center gap-2">
                <TabButton active={tab === "home"} onClick={() => setTab("home")}>Home</TabButton>
                <TabButton active={tab === "projects"} onClick={() => setTab("projects")}>Projects</TabButton>
              </div>
            </div>
          </nav>
        </div>

        {/* Content */}
        <main className="mx-auto max-w-6xl px-4 pb-24">
          {tab === "home" ? <HomeSection onGoProjects={() => setTab("projects")} /> : <ProjectsSection />}

          {/* Footer */}
          <footer className="mx-auto mt-10 max-w-6xl px-4 text-center text-sm text-slate-400">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              © {new Date().getFullYear()} Brandon Lee. Built with React, Tailwind, and shadcn/ui.
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

// ---------------- Sections ----------------
function HomeSection({ onGoProjects }: HomeSectionProps) {

  return (
    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
      {/* Identity */}
      <Lift>
        <Card className="h-full bg-black/50 border-white/10">
          <CardHeader>
            <CardTitle className="text-2xl tracking-tight text-white">Brandon Lee</CardTitle>
            <CardDescription className="text-slate-200/90">
              CS + Math @ Vanderbilt University
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mt-2 flex flex-col gap-2 text-slate-200">
              <a className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 hover:bg-white/5" href="mailto:jinwoo.lee.asml@gmail.com">
                <Mail className="h-4 w-4" /> <span>Email</span>
              </a>
              <a className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 hover:bg-white/5" href="https://github.com/BrandonKS05" target="_blank">
                <Github className="h-4 w-4" /> <span>GitHub</span>
              </a>
              <a className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 hover:bg-white/5" href="https://www.linkedin.com/in/brandon-lee-179491318" target="_blank">
                <Linkedin className="h-4 w-4" /> <span>LinkedIn</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </Lift>

      {/* About me */}
      <div className="md:col-span-2">
        <Lift>
          <Card className="bg-black/50 border-white/10">
            <CardHeader>
              <CardTitle className="text-white">About me</CardTitle>
            </CardHeader>
            <CardContent className="leading-7 text-slate-100/90">
              <p>
                Outside of school, I really enjoy eating good food, exploring new places, and traveling with friends. Coding is a big part of my life, but I also like balancing it with time outdoors and hanging out socially. I also play Valorant and the cello, which keeps life interesting both online and offline. I’m curious, open to learning, and always looking for ways to make life both productive and fun.
              </p>
            </CardContent>
          </Card>
        </Lift>
      </div>

      {/* Quick Links + Focus + Now */}
      <div className="md:col-span-3 grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Quick Links */}
        <Lift>
          <Card className="bg-black/50 border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Quick links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <a className="group flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 hover:bg-white/5" href="https://brandonks05.github.io/ValoPro/" target="_blank" rel="noreferrer">
                <span className="text-slate-200">ValoPro — Discord bot</span>
              </a>
              <a className="group flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 hover:bg-white/5" href="https://brandonks05.github.io/civibrief-site/#" target="_blank" rel="noreferrer">
                <span className="text-slate-200">CiviBrief — bill summaries</span>
              </a>
              <Button onClick={onGoProjects} className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold">See all projects</Button>
            </CardContent>
          </Card>
        </Lift>

        {/* Focus */}
        <Lift>
          <Card className="bg-black/50 border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Focus</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-200 space-y-2">
              <p>• Building minimal, useful tools</p>
              <p>• Clean React/TS frontends</p>
              <p>• Lightweight Python services</p>
            </CardContent>
          </Card>
        </Lift>

        {/* Now */}
        <Lift>
          <Card className="bg-black/50 border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Now</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-200 space-y-2">
              <p>• Polishing ValoPro commands</p>
              <p>• Making CiviBrief installable</p>
              <p>• Interview prep + coursework</p>
            </CardContent>
          </Card>
        </Lift>
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
      {projects.map((p) => (
        <Lift key={p.title}>
          <Card className="h-full bg-black/50 border-white/10">
            <CardHeader>
              <CardTitle className="text-xl text-white">{p.title}</CardTitle>
              <div className="flex flex-wrap gap-2 pt-1">
                {p.tags.map((t) => (
                  <Badge key={t} className="bg-white/10 text-slate-100">
  {t}
</Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-200">{p.description}</p>
              <div className="mt-4">
                <Button asChild className="bg-white text-black font-semibold hover:bg-slate-200">
                  <a href={p.href} target="_blank" rel="noreferrer">
                    Visit <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </Lift>
      ))}
    </div>
  );
}

// ---------------- UI helpers ----------------
function TabButton({ active, children, onClick }: TabButtonProps) {

  return (
    <button
      onClick={onClick}
      className={
        "rounded-xl px-3 py-1.5 transition " +
        (active ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white")
      }
    >
      {children}
    </button>
  );
}

function Lift({ children }: LiftProps) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.div>
  );
}
