import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody } from '../components/Card';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Calendar, Clock, Trash2, Sparkles, MapPin } from 'lucide-react';
import { getStorageItem, setStorageItem, STORAGE_KEYS } from '../utils/storage';
import { useToast } from '../utils/ToastContext';

export const Schedule = () => {
  const { addToast } = useToast();
  const [interviews, setInterviews] = useState(getStorageItem(STORAGE_KEYS.INTERVIEWS, []));
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    tutor: '',
    email: '',
  });

  useEffect(() => {
    setStorageItem(STORAGE_KEYS.INTERVIEWS, interviews);
  }, [interviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInterview = {
      id: Date.now(),
      ...formData,
    };
    setInterviews([...interviews, newInterview]);
    addToast('Mock interview scheduled successfully!');
    setFormData({ date: '', time: '', tutor: '', email: '' });
  };

  const deleteInterview = (id) => {
    setInterviews(interviews.filter(item => item.id !== id));
    addToast('Interview session cancelled.', 'info');
  };

  return (
    <div className="pt-20 pb-12 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-indigo-50 rounded-full text-indigo-600 text-[10px] font-bold uppercase tracking-widest border border-indigo-100">
              <Sparkles size={10} /> Live Sessions
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Schedule a Mock Interview</h1>
            <p className="text-slate-600 text-base">Book personalized 1-on-1 sessions with expert English-Tamil speakers.</p>
          </div>
          <div className="flex gap-4">
            <Card className="p-4 bg-white border-slate-200 shadow-sm">
              <p className="text-xs text-slate-400 uppercase font-bold mb-1">Your Timezone</p>
              <div className="flex items-center gap-2 text-slate-900 font-semibold">
                <MapPin size={14} className="text-indigo-600" /> IST (UTC+5:30)
              </div>
            </Card>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Clock className="text-indigo-600" size={20} />
                Book a Session
              </h2>
            </CardHeader>
            <CardBody>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Select Date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
                <Input
                  label="Select Time"
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                />
                <Input
                  label="Preferred Tutor"
                  placeholder="e.g. John Doe"
                  value={formData.tutor}
                  onChange={(e) => setFormData({ ...formData, tutor: e.target.value })}
                />
                <Input
                  label="Your Email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <Button type="submit" className="w-full" size="lg">Confirm Booking</Button>
              </form>
            </CardBody>
          </Card>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Calendar className="text-emerald-600" size={20} />
              Upcoming Sessions
            </h2>
            <div className="space-y-4">
              {interviews.length > 0 ? (
                interviews.map((item) => (
                  <Card key={item.id} className="border-l-4 border-indigo-500 bg-white shadow-sm">
                    <CardBody className="flex justify-between items-center p-4">
                      <div>
                        <p className="font-bold text-slate-900 text-base">{item.tutor || 'Tutor Assigned'}</p>
                        <div className="flex gap-4 text-sm text-slate-400 mt-2">
                          <span className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-2 py-1 rounded-md">
                            <Calendar size={14} className="text-indigo-600" /> {item.date}
                          </span>
                          <span className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-2 py-1 rounded-md">
                            <Clock size={14} className="text-indigo-600" /> {item.time}
                          </span>
                        </div>
                      </div>
                      <button 
                        onClick={() => deleteInterview(item.id)}
                        className="p-3 text-slate-500 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
                      >
                        <Trash2 size={20} />
                      </button>
                    </CardBody>
                  </Card>
                ))
              ) : (
                <div className="p-8 text-center bg-white rounded-2xl border border-dashed border-slate-200">
                  <p className="text-slate-400 text-sm">No interviews scheduled yet. Book your first session to get started!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
