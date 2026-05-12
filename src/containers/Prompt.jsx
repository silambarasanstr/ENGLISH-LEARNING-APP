import React, { useState } from 'react';
import { Card, CardBody } from '../components/Card';
import { Button } from '../components/Button';
import { Sparkles, Copy, Check, Terminal, Search, FileText } from 'lucide-react';
import { useToast } from '../utils/ToastContext';
import { PROMPTS } from '../utils/data';

export const Prompt = () => {
  const { addToast } = useToast();
  const [selectedPrompt, setSelectedPrompt] = useState(PROMPTS[0]);
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedPrompt.content);
    addToast('Prompt copied to clipboard!');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredPrompts = PROMPTS.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-20 pb-12 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        
        {/* Sidebar */}
        <div className="lg:w-72 shrink-0 space-y-4">
          <div>
            <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2 tracking-tight">
              <Sparkles className="text-indigo-600" size={24} />
              Prompts
            </h1>
            <p className="text-slate-500 mt-1 text-sm">Select a specialized prompt.</p>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input 
              type="text" 
              placeholder="Search prompts..." 
              className="w-full bg-white border border-slate-200 rounded-xl py-2 pl-10 pr-4 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="space-y-2 overflow-y-auto max-h-[600px] pr-2 custom-scrollbar">
            {filteredPrompts.map((prompt) => (
              <button
                key={prompt.id}
                onClick={() => {
                  setSelectedPrompt(prompt);
                  setCopied(false);
                }}
                className={`w-full text-left p-3 rounded-xl transition-all duration-200 border ${
                  selectedPrompt.id === prompt.id 
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20' 
                    : 'bg-white border-slate-200 text-slate-500 hover:border-indigo-300 hover:bg-indigo-50/30'
                }`}
              >
                <div className="flex items-center gap-2">
                  <FileText size={16} className={selectedPrompt.id === prompt.id ? 'text-white' : 'text-indigo-600'} />
                  <div>
                    <p className="font-bold text-xs truncate">{prompt.title}</p>
                    <p className="text-[10px] opacity-60 truncate">Click to view prompt</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="grow space-y-6">
          <Card className="border-slate-200 bg-white overflow-visible relative group h-full flex flex-col shadow-xl">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-white rounded-xl overflow-hidden flex flex-col h-full">
              <div className="flex items-center justify-between p-4 bg-slate-50 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                  </div>
                  <div className="h-4 w-px bg-slate-200 mx-2"></div>
                  <div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                    <Terminal size={16} className="text-indigo-600" />
                    <span>{selectedPrompt.filename}</span>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white border-none shadow-lg shadow-indigo-600/20 transition-all active:scale-95"
                  onClick={handleCopy}
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? 'Copied!' : 'Copy Prompt'}
                </Button>
              </div>
              
              <CardBody className="p-0 flex-grow">
                <div className="p-6 h-[500px] overflow-y-auto custom-scrollbar bg-slate-50">
                  <pre className="whitespace-pre-wrap font-mono text-slate-800 leading-relaxed text-sm selection:bg-indigo-100">
                    {selectedPrompt.content}
                  </pre>
                </div>
              </CardBody>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
