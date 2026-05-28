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
      <TenseContainer />
    </div>
  );
};
