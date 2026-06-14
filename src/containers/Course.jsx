import React, { useState } from "react";
import { GRAMMAR_TOPICS } from "../utils/data";
import { Card, CardBody } from "../components/Card";
import { BookOpen, ChevronRight, ChevronDown } from "lucide-react";

export const Course = () => {
  const [selectedTopic, setSelectedTopic] = useState(GRAMMAR_TOPICS[0]);
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (idx) => {
    if (openAccordion === idx) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(idx);
    }
  };

  return (
    <div className="pt-20 pb-12 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Course Navigation */}
        <div className="lg:w-72 shrink-0 space-y-4">
          <div className="space-y-2">
            {GRAMMAR_TOPICS.map((topic) => (
              <button
                key={topic.id}
                onClick={() => {
                  setSelectedTopic(topic);
                  setOpenAccordion(null);
                }}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 border ${
                  selectedTopic.id === topic.id
                    ? "bg-indigo-600 border-indigo-500 text-white shadow-xl shadow-indigo-500/20"
                    : "bg-white border-slate-200 text-slate-500 hover:border-indigo-300 hover:bg-indigo-50/30"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      selectedTopic.id === topic.id
                        ? "bg-white"
                        : "bg-slate-300"
                    }`}
                  />
                  <span className="font-semibold text-xs">{topic.title}</span>
                </div>

                <ChevronRight
                  size={14}
                  className={
                    selectedTopic.id === topic.id
                      ? "text-white"
                      : "text-slate-600"
                  }
                />
              </button>
            ))}
          </div>
        </div>

        {/* Course Content */}
        <div className="grow space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-1">
                {selectedTopic.title}
              </h2>

              <div className="flex items-center gap-4">
                <span className="text-indigo-600 text-xs font-bold flex items-center gap-1">
                  {selectedTopic.items.length} Lessons
                </span>
              </div>
            </div>
          </div>

          {/* ACCORDION */}
          <div className="space-y-4">
            {selectedTopic.items.map((item, idx) => {
              const isOpen = openAccordion === idx;

              return (
                <Card
                  key={idx}
                  className="border-2 border-slate-200 overflow-hidden"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-5 flex items-center justify-between hover:bg-slate-50 transition-all duration-300"
                  >
                    <div className="text-left">
                      <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-indigo-50 rounded-full text-indigo-600 text-[9px] font-black uppercase tracking-widest border border-indigo-100 mb-2">
                        Lesson {idx + 1}
                      </div>

                      <h3 className="text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="text-indigo-600 font-tamil text-sm">
                        {item.subtitle}
                      </p>
                    </div>

                    <div
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown size={20} className="text-slate-500" />
                    </div>
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-750 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <CardBody className="p-6 pt-0">
                      <div className="space-y-6">
                        {/* Description */}
                        {item.desc && (
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        )}

                        {/* Examples */}
                        <div>
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                            Examples
                          </h4>

                          <div className="grid sm:grid-cols-2 gap-3 mt-3">
                            {item.examples.map((example, eIdx) => (
                              <div
                                key={eIdx}
                                className="flex flex-col p-3.5 bg-white rounded-xl border-2 border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300"
                              >
                                <div className="flex items-start gap-3 mb-2.5">
                                  <span className="shrink-0 px-1.5 py-0.5 bg-indigo-50 text-indigo-600 text-[8px] font-black rounded border border-indigo-100 mt-1">
                                    EN
                                  </span>

                                  <p className="text-slate-900 font-bold text-sm leading-snug">
                                    {example.english}
                                  </p>
                                </div>

                                <div className="flex items-start gap-3 pt-2 border-t border-slate-50">
                                  <span className="shrink-0 px-1.5 py-0.5 bg-emerald-50 text-emerald-600 text-[8px] font-black rounded border border-emerald-100 mt-1">
                                    TA
                                  </span>

                                  <p className="text-emerald-600 font-tamil text-sm leading-relaxed">
                                    {example.tamil}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* TYPES */}
                        {item.types && (
                          <div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                              <span className="w-8 h-px bg-slate-100" />
                              Types
                            </h4>

                            <div className="grid md:grid-cols-2 gap-3 mt-3">
                              {item.types.map((type, tIdx) => (
                                <div
                                  key={tIdx}
                                  className="p-3.5 bg-indigo-50/50 rounded-xl border-2 border-indigo-100/50 hover:bg-white hover:shadow-lg transition-all duration-300"
                                >
                                  <div className="flex items-center justify-between mb-2">
                                    <h5 className="text-indigo-700 font-black text-sm">
                                      {type.name}
                                    </h5>

                                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
                                  </div>

                                  <p className="text-emerald-600 font-tamil text-xs mb-3 leading-relaxed">
                                    {type.tamil}
                                  </p>

                                  <div className="space-y-2">
                                    {type.examples.map((ex, exIdx) => (
                                      <div
                                        key={exIdx}
                                        className="flex flex-col bg-white/80 px-2.5 py-2 rounded-lg border border-indigo-100/30 text-[11px]"
                                      >
                                        <span className="text-slate-800 font-bold mb-0.5">
                                          · {ex.english}
                                        </span>

                                        <span className="text-emerald-600 font-tamil pl-2 border-l border-emerald-100">
                                          {ex.tamil}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </CardBody>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
