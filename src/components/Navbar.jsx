import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BookOpen,
  MessageSquare,
  Briefcase,
  Calendar,
  LayoutDashboard,
  Languages,
  Sparkles,
} from "lucide-react";
import { twMerge } from "tailwind-merge";

export const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Languages },
    { name: "Courses", path: "/courses", icon: BookOpen },
    { name: "Interviews", path: "/interviews", icon: Briefcase },
    { name: "Schedule", path: "/schedule", icon: Calendar },
    { name: "Prompt", path: "/prompt", icon: Sparkles },
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Verb-Forms", path: "/verb-forms", icon: LayoutDashboard },
    { name: "Articles", path: "/ArticlesLearning", icon: LayoutDashboard },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center">
              <Languages className="text-white" size={20} />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">
              EngTamil
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={twMerge(
                    "flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                    isActive
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-slate-500 hover:text-indigo-600 hover:bg-slate-100",
                  )}
                >
                  <Icon size={16} />
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Navigation (simplified for now) */}
          <div className="md:hidden">
            {/* You could add a mobile menu button here */}
          </div>
        </div>
      </div>
    </nav>
  );
};
