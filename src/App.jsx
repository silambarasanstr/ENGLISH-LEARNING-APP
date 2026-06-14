import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./containers/Home";
import { Course } from "./containers/Course";
import { Interview } from "./containers/Interview";
import { Schedule } from "./containers/Schedule";
import { Dashboard } from "./containers/Dashboard";
import { Prompt } from "./containers/Prompt";
import { ToastProvider } from "./utils/ToastContext";
import VerbForms from "./containers/VerbForms";
import ArticlesLearning from "./containers/ArticlesLearning";

function App() {
  return (
    <ToastProvider>
      <Router>
        <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Course />} />

              <Route path="/interviews" element={<Interview />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/prompt" element={<Prompt />} />
              <Route path="/verb-forms" element={<VerbForms />} />
              <Route path="/ArticlesLearning" element={<ArticlesLearning />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="py-8 border-t border-slate-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <p className="text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} EngTamil Learning Platform.
                Built for Tamil-speaking English learners.
              </p>
            </div>
          </footer>
        </div>
      </Router>
    </ToastProvider>
  );
}

export default App;
