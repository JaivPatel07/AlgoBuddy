"use client";
import { useEffect } from "react";
import AuthForm from "@/app/components/ui/AuthForm";
import "../../../../styles/dark-mode.css";

export default function SignupPage() {
  useEffect(() => {
    // Load persisted theme
    const saved = localStorage.getItem('theme');
    const root = document.documentElement;
    if (saved) root.dataset.theme = saved;
    
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    
    const setTheme = (t) => {
      root.dataset.theme = t;
      localStorage.setItem('theme', t);
      btn.textContent = t === 'dark' ? '☀️ Light mode' : '🌙 Dark mode';
    };
    
    const toggleTheme = () => {
      setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
    };
    
    btn.addEventListener('click', toggleTheme);
    btn.textContent = root.dataset.theme === 'dark' ? '☀️ Light mode' : '🌙 Dark mode';

    return () => {
      btn.removeEventListener('click', toggleTheme);
    };
  }, []);

  return (
    <>
      <AuthForm isLogin={false} />
      <button className="toggle" id="theme-toggle">🌙 Dark mode</button>
    </>
  );
}

