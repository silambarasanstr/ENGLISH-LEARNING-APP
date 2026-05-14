import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  MessageSquare,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { Button } from "../components/Button";
import TenseContainer from "../containers/TenseContainer";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Learn Conversational{" "}
              <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                English
              </span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              From Beginner to Advanced - English to Tamil. Master the art of
              conversation and ace your interviews with our dedicated learning
              platform.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" onClick={() => navigate("/courses")}>
              Start Learning
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/practice")}
            >
              Start Conversation Practice
            </Button>
          </div>
        </div>
      </div>

      <TenseContainer />
    </div>
  );
};
