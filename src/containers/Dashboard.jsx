import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardBody } from "../components/Card";
import { Button } from "../components/Button";
import {
  Trophy,
  BookOpen,
  Calendar,
  ArrowRight,
  TrendingUp,
  Target,
  Clock,
} from "lucide-react";
import { getStorageItem, STORAGE_KEYS } from "../utils/storage";
import { GRAMMAR_TOPICS } from "../utils/data";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(
    getStorageItem(STORAGE_KEYS.PROGRESS, {}),
  );
  const [interviews, setInterviews] = useState(
    getStorageItem(STORAGE_KEYS.INTERVIEWS, []),
  );

  const allTopics = GRAMMAR_TOPICS.flatMap((section) => section.items);
  const totalLessons = allTopics.length;
  const completedLessons = Object.keys(progress).length;
  const progressPercentage =
    Math.round((completedLessons / totalLessons) * 100) || 0;

  return (
    <div className="pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Your Dashboard</h1>
            <p className="text-slate-500 text-sm">
              Welcome back! Track your learning journey and upcoming sessions.
            </p>
          </div>
          <Button onClick={() => navigate("/courses")}>
            Continue Learning
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-slate-100 shadow-sm">
            <CardBody className="flex items-center gap-4">
              <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                <Target size={28} />
              </div>
              <div>
                <p className="text-[10px] font-medium text-indigo-600 uppercase tracking-wider">
                  Overall Progress
                </p>
                <p className="text-2xl font-bold text-slate-900">
                  {progressPercentage}%
                </p>
              </div>
            </CardBody>
          </Card>

          <Card className="border-slate-100 shadow-sm">
            <CardBody className="flex items-center gap-4">
              <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                <Trophy size={28} />
              </div>
              <div>
                <p className="text-[10px] font-medium text-emerald-600 uppercase tracking-wider">
                  Lessons Completed
                </p>
                <p className="text-2xl font-bold text-slate-900">
                  {completedLessons} / {totalLessons}
                </p>
              </div>
            </CardBody>
          </Card>

          <Card className="border-slate-100 shadow-sm">
            <CardBody className="flex items-center gap-4">
              <div className="w-14 h-14 bg-amber-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-amber-500/20">
                <Calendar size={28} />
              </div>
              <div>
                <p className="text-[10px] font-medium text-amber-600 uppercase tracking-wider">
                  Scheduled Interviews
                </p>
                <p className="text-2xl font-bold text-slate-900">
                  {interviews.length}
                </p>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Progress */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="text-indigo-600" size={20} />
              Learning Activity
            </h2>
            <Card>
              <CardBody className="space-y-8">
                {GRAMMAR_TOPICS.map((section) => {
                  const sectionItems = section.items;
                  // For now, we'll just show the sections. Progress tracking per item would need more logic.
                  return (
                    <div key={section.id} className="space-y-3">
                      <div className="flex justify-between items-end">
                        <div>
                          <h3 className="font-bold text-slate-900">
                            {section.title}
                          </h3>
                          <p className="text-xs text-slate-400">
                            {sectionItems.length} topics available
                          </p>
                        </div>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500 transition-all duration-1000 w-full opacity-10" />
                      </div>
                    </div>
                  );
                })}
              </CardBody>
            </Card>
          </div>

          {/* Upcoming Sessions */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Clock className="text-emerald-600" size={20} />
              Next Session
            </h2>
            {interviews.length > 0 ? (
              <Card className="border-emerald-100 bg-emerald-50 shadow-sm">
                <CardBody className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white shadow-sm border border-emerald-100 rounded-xl text-emerald-600">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Scheduled Date</p>
                      <p className="text-lg font-bold text-slate-900">
                        {interviews[0].date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white shadow-sm border border-indigo-100 rounded-xl text-indigo-600">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Time Slot</p>
                      <p className="text-lg font-bold text-slate-900">
                        {interviews[0].time}
                      </p>
                    </div>
                  </div>
                  <Button
                    className="w-full mt-4"
                    variant="secondary"
                    onClick={() => navigate("/schedule")}
                  >
                    Manage Sessions
                  </Button>
                </CardBody>
              </Card>
            ) : (
              <Card className="border-dashed border-slate-200">
                <CardBody className="text-center p-10 space-y-4">
                  <p className="text-slate-400">No upcoming sessions</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate("/schedule")}
                  >
                    Schedule One Now
                  </Button>
                </CardBody>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
