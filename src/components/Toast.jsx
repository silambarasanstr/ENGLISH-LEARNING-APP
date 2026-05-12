import React from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
};

const styles = {
  success: 'bg-emerald-50 border-emerald-200 text-emerald-700 shadow-sm',
  error: 'bg-red-50 border-red-200 text-red-700 shadow-sm',
  info: 'bg-indigo-50 border-indigo-200 text-indigo-700 shadow-sm',
};

const Toast = ({ message, type = 'success', onClose }) => {
  const Icon = icons[type];

  return (
    <div
      className={twMerge(
        'flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-md shadow-2xl animate-in fade-in slide-in-from-right-4 duration-300',
        styles[type]
      )}
    >
      <Icon size={18} className="shrink-0" />
      <p className="text-sm font-medium pr-4">{message}</p>
      <button
        onClick={onClose}
        className="ml-auto p-1 hover:bg-black/5 rounded-lg transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-3 pointer-events-none">
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        </div>
      ))}
    </div>
  );
};
