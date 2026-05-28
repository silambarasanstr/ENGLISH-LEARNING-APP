import React, { useState } from 'react';
import { INTERVIEW_CATEGORIES } from '../utils/data';
import { Card, CardBody } from '../components/Card';
import { Button } from '../components/Button';
import { Briefcase, Eye, EyeOff, BookOpen, Quote, Search, ChevronRight } from 'lucide-react';

export const Interview = () => {
  const [selectedCategory, setSelectedCategory] = useState(INTERVIEW_CATEGORIES[0]);
  const [revealedAnswers, setRevealedAnswers] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const toggleReveal = (id) => {
    setRevealedAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredQuestions = selectedCategory.questions.filter(q => 
    q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    q.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-20 pb-12 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        
        {/* Sidebar */}
        <div className="lg:w-72 shrink-0 space-y-4">
          <div>
            <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2 tracking-tight">
              <Briefcase className="text-indigo-600" size={24} />
              Interview Prep
            </h1>
            <p className="text-slate-500 mt-1 text-sm">Choose a category to practice.</p>
          </div>

          <div className="space-y-2">
            {INTERVIEW_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat);
                  setRevealedAnswers({});
                }}
                className={`w-full text-left p-3 rounded-xl transition-all duration-200 border ${
                  selectedCategory.id === cat.id 
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20' 
                    : 'bg-white border-slate-200 text-slate-500 hover:border-indigo-300 hover:bg-indigo-50/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-xs">{cat.title}</p>
                    <p className="text-[10px] opacity-60 line-clamp-1">{cat.desc}</p>
                  </div>
                  <ChevronRight size={16} className={selectedCategory.id === cat.id ? 'text-white' : 'text-slate-300'} />
                </div>
              </button>
            ))}
          </div>

         
        </div>

        {/* Main Content */}
        <div className="grow space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-slate-900">{selectedCategory.title}</h2>
            <div className="relative group w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search questions..." 
                className="w-full bg-white border border-slate-200 rounded-xl py-2 pl-10 pr-4 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-6">
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((q, idx) => (
                <Card key={q.id} className="border-slate-200 bg-white group shadow-sm">
                  <CardBody className="p-5 space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-7 h-7 bg-slate-50 rounded-lg text-indigo-600 font-bold text-xs shrink-0 border border-slate-100">
                        {idx + 1}
                      </div>
                      <div className="space-y-3 grow">
                        <h3 className="text-lg font-bold text-slate-900 leading-tight">
                          {q.question}
                        </h3>
                        
                        <Button
                          variant={revealedAnswers[q.id] ? 'secondary' : 'primary'}
                          size="sm"
                          onClick={() => toggleReveal(q.id)}
                          className="text-xs"
                        >
                          {revealedAnswers[q.id] ? (
                            <>
                              <EyeOff className="mr-2" size={14} /> Hide Answer
                            </>
                          ) : (
                            <>
                              <Eye className="mr-2" size={14} /> Show Model Answer
                            </>
                          )}
                        </Button>

                         {revealedAnswers[q.id] && (
                          <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                            <div className="relative p-4 bg-slate-50 rounded-xl border border-slate-100">
                              <Quote className="absolute -top-2 -left-2 text-indigo-500/5" size={24} />
                              <p className="text-slate-700 italic text-sm leading-relaxed">
                                "{q.answer}"
                              </p>
                            </div>
 
                            <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
                              <h4 className="flex items-center gap-2 text-emerald-600 font-bold mb-1.5 uppercase tracking-wider text-[9px]">
                                <BookOpen size={10} /> Tamil Explanation
                              </h4>
                              <p className="text-slate-600 font-tamil text-xs leading-relaxed">
                                {q.tamilExplanation}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200">
                <p className="text-slate-400">No questions found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
