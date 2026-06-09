"use client";

import React from "react";
import { 
  ArrowLeft, 
  Layers, 
  ListTodo, 
  GitMerge, 
  Building2, 
  Trophy, 
  Bookmark, 
  FolderHeart, 
  History, 
  GraduationCap, 
  Flame, 
  ChevronRight 
} from "lucide-react";

export default function PracticeSidebar({ 
  activeView, 
  onViewChange, 
  solvedCount = 8, 
  dailyGoal = 15,
  streakDays = 0,
  bestStreak = 0,
  onBackToPractice
}) {
  const navItems = [
    { id: "problem-list", label: "Problem List", icon: ListTodo },
    { id: "topic-wise", label: "Topic-wise", icon: GitMerge },
    { id: "company-wise", label: "Company-wise", icon: Building2 },
    { id: "bookmarks", label: "Bookmarks", icon: Bookmark },
    { id: "recent-solved", label: "Recent Solved", icon: History },
  ];

  const dailyGoalPercentage = Math.min(100, Math.round((solvedCount / dailyGoal) * 100));

  return (
    <aside className="w-full lg:w-[260px] flex-shrink-0 flex flex-col gap-6 select-none">
      {/* Back button */}
      <button 
        onClick={onBackToPractice}
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-purple-500/10 text-primary dark:bg-purple-950/20 dark:text-purple-400 font-bold text-sm w-fit transition hover:scale-102 active:scale-98"
      >
        <ArrowLeft size={16} />
        <span>Practice</span>
      </button>

      {/* Navigation List */}
      <nav className="flex flex-col gap-1 bg-white dark:bg-[#1a1b1e] border border-slate-100 dark:border-neutral-800/80 rounded-2xl p-4 shadow-sm">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                isActive
                  ? "bg-primary text-white shadow-md shadow-primary/20 dark:shadow-none"
                  : "text-slate-500 hover:text-slate-800 hover:bg-slate-50 dark:text-neutral-400 dark:hover:text-neutral-200 dark:hover:bg-neutral-800/50"
              }`}
            >
              <Icon size={18} className={isActive ? "text-white" : "text-slate-400 dark:text-neutral-500"} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Widgets Column */}
      <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
        {/* Daily Goal Card */}
        <div className="flex-1 bg-white dark:bg-[#1a1b1e] border border-slate-100 dark:border-neutral-800/80 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-4.5">
            <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
              <Flame size={18} className="fill-orange-500/10" />
            </div>
            <div>
              <span className="text-[10px] font-black text-slate-400 dark:text-neutral-500 uppercase tracking-widest block">
                Daily Goal
              </span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-xl font-black text-slate-800 dark:text-white">
                  {solvedCount}/{dailyGoal}
                </span>
                <span className="text-xs text-slate-400 dark:text-neutral-500 font-semibold">
                  Problems Solved
                </span>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-slate-100 dark:bg-neutral-800 h-2 rounded-full overflow-hidden mb-4">
            <div 
              className="bg-primary h-full rounded-full transition-all duration-500" 
              style={{ width: `${dailyGoalPercentage}%` }}
            />
          </div>

          <button className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-slate-50 hover:bg-slate-100 dark:bg-neutral-800/50 dark:hover:bg-neutral-850 text-slate-600 dark:text-neutral-300 rounded-xl text-xs font-bold transition shadow-sm">
            <span>View Progress</span>
            <ChevronRight size={14} />
          </button>
        </div>

        {/* Streak Card */}
        <div className="flex-1 bg-white dark:bg-[#1a1b1e] border border-slate-100 dark:border-neutral-800/80 rounded-2xl p-5 shadow-sm flex items-center gap-4">
          <div className="w-11 h-11 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0 animate-pulse">
            <Flame size={22} className="fill-amber-500/20" />
          </div>
          <div>
            <span className="text-[10px] font-black text-slate-400 dark:text-neutral-500 uppercase tracking-widest block">
              Current Streak
            </span>
            <span className="text-xl font-black text-slate-800 dark:text-white block mt-0.5">
              {streakDays} Days
            </span>
            <span className="text-[10px] text-slate-400 dark:text-neutral-500 font-bold block mt-0.5">
              🔥 Best: {bestStreak} Days
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
