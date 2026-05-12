import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, MessageSquare, Briefcase, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/Button';
import TenseContainer from '../containers/TenseContainer';

export const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Beginner to Advanced',
      desc: 'Structured courses from basic grammar to complex idioms.',
      icon: BookOpen,
      color: 'text-blue-600',
    },
    {
      title: 'Conversation Practice',
      desc: 'Real-life scenarios with Tamil translations and practice mode.',
      icon: MessageSquare,
      color: 'text-emerald-600',
    },
    {
      title: 'Interview Prep',
      desc: 'Common HR questions with English answers and Tamil explanations.',
      icon: Briefcase,
      color: 'text-indigo-600',
    },
  ];

  return (
    <div className="pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Learn Conversational{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                English
              </span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              From Beginner to Advanced - English to Tamil. Master the art of conversation and ace your interviews with our dedicated learning platform.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" onClick={() => navigate('/courses')}>
              Start Learning
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/practice')}>
              Start Conversation Practice
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-indigo-500/30 shadow-sm hover:shadow-md transition-all"
            >
              <feature.icon className={`mb-4 ${feature.color}`} size={32} />
              <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        
      </div>




      <TenseContainer/>
    </div>
  );
};
