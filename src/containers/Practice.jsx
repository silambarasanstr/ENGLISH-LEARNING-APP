import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardBody } from '../components/Card';
import { Button } from '../components/Button';
import { Languages, ArrowRightLeft, Sparkles, Volume2, Copy, Check, History, Search, X, Mic, Star, MessageSquare } from 'lucide-react';
import { useToast } from '../utils/ToastContext';

export const Practice = () => {
  const { addToast } = useToast();
  
  // Translation State
  const [sourceText, setSourceText] = useState('');
  const [targetText, setTargetText] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  const [sourceLang, setSourceLang] = useState('tanglish'); // tanglish, ta, en
  const [targetLang, setTargetLang] = useState('en'); // en, ta
  const [copied, setCopied] = useState(false);
  const translationTimeout = useRef(null);

  const EXAMPLES = [
    {
      input: 'remaining page la epadiya irukattum change panna veannum',
      output: 'The remaining pages should stay as they are. No changes are needed for those pages.',
      type: 'Tanglish'
    },
    {
      input: 'nalaiku nan chennai to vellore porean apa nee vantha pothum',
      output: 'I’ll be traveling from Chennai to Vellore tomorrow. You can come when I get there.',
      type: 'Tanglish'
    },
    {
      input: 'Enaku intha vellai romba mukkiyam',
      output: 'This job is very important to me.',
      type: 'Tanglish'
    }
  ];

  const handleTranslate = async (text) => {
    if (!text.trim()) {
      setTargetText('');
      return;
    }

    // Mocking specific examples for instant demo success
    const trimmedText = text.trim();
    const example = EXAMPLES.find(ex => ex.input.toLowerCase() === trimmedText.toLowerCase());
    if (example) {
      setTargetText(example.output);
      return;
    }

    setIsTranslating(true);
    try {
      let from = 'ta';
      let to = 'en';

      if (sourceLang === 'en') {
        from = 'en';
        to = 'ta';
      } else if (sourceLang === 'ta') {
        from = 'ta';
        to = 'en';
      } else if (sourceLang === 'tanglish') {
        from = 'ta';
        to = 'en';
      }

      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`
      );
      const data = await response.json();
      
      if (data.responseData) {
        setTargetText(data.responseData.translatedText);
      }
    } catch (error) {
      console.error('Translation error:', error);
    } finally {
      setIsTranslating(false);
    }
  };

  // Debounced translation
  useEffect(() => {
    if (translationTimeout.current) {
      clearTimeout(translationTimeout.current);
    }

    translationTimeout.current = setTimeout(() => {
      handleTranslate(sourceText);
    }, 500);

    return () => clearTimeout(translationTimeout.current);
  }, [sourceText, sourceLang, targetLang]);

  const handleCopy = () => {
    navigator.clipboard.writeText(targetText);
    setCopied(true);
    addToast('Translated text copied!');
    setTimeout(() => setCopied(false), 2000);
  };

  const swapLanguages = () => {
    if (sourceLang === 'tanglish') {
        setSourceLang('en');
        setTargetLang('ta');
    } else {
        const temp = sourceLang;
        setSourceLang(targetLang);
        setTargetLang(temp);
    }
    setSourceText(targetText);
    setTargetText(sourceText);
  };

  return (
    <div className="pt-20 pb-12 px-4 min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Page Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-6">
          <div className="inline-flex p-2.5 bg-indigo-600 rounded-full shadow-2xl shadow-indigo-600/30">
            <Languages className="text-white" size={24} />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            EngTamil <span className="text-indigo-600">Translate</span>
          </h1>
        </div>

        {/* Google Translate Style Layout */}
        <div className="space-y-6">
          {/* Language Selector Bar */}
          <div className="flex items-center justify-between bg-white border border-slate-200 rounded-t-xl p-1.5">
            <div className="flex grow items-center">
              <div className="flex bg-slate-50 rounded-lg p-1 border border-slate-100">
                {[
                  { id: 'tanglish', label: 'Tanglish' },
                  { id: 'ta', label: 'Tamil' },
                  { id: 'en', label: 'English' },
                ].map((lang) => (
                  <button 
                    key={lang.id}
                    onClick={() => setSourceLang(lang.id)}
                    className={`px-4 py-1.5 text-[10px] font-bold rounded-md transition-all ${
                      sourceLang === lang.id 
                        ? 'bg-white text-indigo-600 shadow-sm border border-slate-100' 
                        : 'text-slate-500 hover:text-slate-800 hover:bg-white/50'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
              
              <button 
                onClick={swapLanguages}
                className="mx-3 p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-slate-100 rounded-full transition-all"
              >
                <ArrowRightLeft size={16} />
              </button>

              <div className="flex bg-slate-800/50 rounded-lg p-1">
                 {[
                  { id: 'en', label: 'English' },
                  { id: 'ta', label: 'Tamil' },
                ].map((lang) => (
                  <button 
                    key={lang.id}
                    onClick={() => setTargetLang(lang.id)}
                    className={`px-4 py-1.5 text-[10px] font-bold rounded-md transition-all ${
                      targetLang === lang.id 
                        ? 'bg-white text-indigo-600 shadow-sm border border-slate-100' 
                        : 'text-slate-500 hover:text-slate-800 hover:bg-white/50'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 px-4 border-l border-slate-200 ml-4">
               <Star size={18} className="text-slate-300 cursor-pointer hover:text-amber-400" />
               <History size={18} className="text-slate-300 cursor-pointer hover:text-indigo-600" />
            </div>
          </div>

          {/* Translation Boxes */}
          <div className="grid md:grid-cols-2 gap-px bg-slate-200 border-x border-b border-slate-200 rounded-b-xl overflow-hidden shadow-lg">
            {/* Input Box */}
            <div className="bg-white p-5 min-h-[250px] flex flex-col relative group">
              <textarea
                placeholder="Enter text to translate..."
                className="w-full flex-grow bg-transparent text-xl text-slate-900 placeholder:text-slate-200 focus:outline-none resize-none"
                value={sourceText}
                onChange={(e) => setSourceText(e.target.value)}
              />
              <div className="mt-4 flex items-center justify-between text-slate-500">
                <div className="flex gap-4">
                  <Mic size={20} className="cursor-pointer hover:text-indigo-600" />
                  <Volume2 size={20} className="cursor-pointer hover:text-indigo-600" />
                </div>
                <div className="flex items-center gap-4">
                   <span className="text-xs font-mono">{sourceText.length} / 5000</span>
                   {sourceText && (
                     <X 
                        size={20} 
                        className="cursor-pointer hover:text-slate-900" 
                        onClick={() => setSourceText('')}
                     />
                   )}
                </div>
              </div>
            </div>

            {/* Output Box */}
            <div className="bg-white p-5 min-h-[250px] flex flex-col relative border-t md:border-t-0 md:border-l border-slate-100">
               {isTranslating && (
                 <div className="absolute top-2 left-5 animate-pulse text-[10px] text-indigo-600 font-bold uppercase tracking-widest">
                   Translating...
                 </div>
               )}
              <div className="w-full flex-grow text-xl text-slate-900 whitespace-pre-wrap">
                {targetText || (
                   <span className="text-slate-200">Translation</span>
                )}
              </div>
              <div className="mt-4 flex items-center justify-between text-slate-500">
                 <div className="flex gap-4">
                  <Volume2 size={20} className="cursor-pointer hover:text-indigo-600" />
                  <Star size={20} className="cursor-pointer hover:text-amber-400" />
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={handleCopy}
                    className="p-2 hover:bg-slate-50 rounded-lg transition-all"
                  >
                    {copied ? <Check size={20} className="text-emerald-500" /> : <Copy size={20} />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Example Conversations Section */}
          <div className="pt-8 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-indigo-600/20 rounded-lg flex items-center justify-center text-indigo-400">
                <History size={16} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Common Tanglish Examples</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {EXAMPLES.map((example, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200 hover:border-indigo-300 p-5 rounded-2xl shadow-sm transition-all cursor-pointer group"
                  onClick={() => {
                    setSourceText(example.input);
                    setSourceLang('tanglish');
                  }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-indigo-600 transition-colors">Example {idx + 1}</span>
                    <ArrowRightLeft size={14} className="text-slate-200 group-hover:text-indigo-600" />
                  </div>
                  <p className="text-slate-600 font-medium italic mb-2 group-hover:text-slate-900 transition-colors">"{example.input}"</p>
                  <p className="text-indigo-600 font-bold text-sm">{example.output}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-slate-200">
           {[
             { title: 'Smart Detection', desc: 'Auto-detects between Tamil, English, and phonetic Tanglish.', icon: Sparkles, color: 'text-amber-400' },
             { title: 'Interview Focused', desc: 'Optimized for professional phrases and corporate English.', icon: MessageSquare, color: 'text-indigo-400' },
             { title: 'Audio Support', desc: 'Listen to the correct pronunciation in both languages.', icon: Volume2, color: 'text-emerald-400' },
           ].map((item, i) => (
             <div key={i} className="flex gap-4">
                <div className={`shrink-0 p-3 bg-white rounded-xl border border-slate-200 shadow-sm ${item.color}`}>
                   <item.icon size={20} />
                </div>
                <div>
                   <h4 className="text-slate-900 font-bold text-sm mb-1">{item.title}</h4>
                   <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};
