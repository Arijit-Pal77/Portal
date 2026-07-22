import React from 'react';
import { ExternalLink, PlayCircle, XCircle, GraduationCap, Mail } from 'lucide-react';

interface GenericViewProps {
  title: string;
  description?: string;
}

export const GenericView: React.FC<GenericViewProps> = ({ title, description }) => {
  return (
    <div className="space-y-4 pb-8 text-slate-800">
      
      {/* Quick Action Cards Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        <div className="bg-white rounded-xl p-3.5 border border-slate-100 shadow-xs flex items-center justify-between">
          <div>
            <h4 className="text-xs font-bold text-[#303e67]">Important Links</h4>
            <span className="text-[10px] font-bold text-gray-500 hover:text-blue-600 cursor-pointer underline mt-1 block">
              CLICK HERE
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-sky-100/70 text-sky-600 flex items-center justify-center flex-shrink-0">
            <ExternalLink className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-3.5 border border-slate-100 shadow-xs flex items-center justify-between">
          <div>
            <h4 className="text-xs font-bold text-[#303e67]">Student Facilitation</h4>
            <span className="text-[10px] font-bold text-gray-500 hover:text-purple-600 cursor-pointer underline mt-1 block">
              CLICK TO VIEW
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-purple-100/70 text-purple-600 flex items-center justify-center flex-shrink-0">
            <PlayCircle className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-3.5 border border-slate-100 shadow-xs flex items-center justify-between">
          <div>
            <h4 className="text-xs font-bold text-[#303e67]">Anti Ragging</h4>
            <span className="text-[10px] font-bold text-gray-500 hover:text-indigo-600 cursor-pointer underline mt-1 block">
              READ NOW
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-indigo-100/70 text-indigo-600 flex items-center justify-center flex-shrink-0">
            <XCircle className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#174872] to-[#115488] rounded-xl p-3.5 text-white shadow-xs flex items-center justify-between">
          <div>
            <h4 className="text-xs font-bold text-white tracking-wide">CU LMS</h4>
            <span className="text-[10px] font-bold text-sky-200 cursor-pointer underline mt-1 block">
              CLICK HERE
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-3.5 border border-slate-100 shadow-xs flex items-center justify-between">
          <div>
            <h4 className="text-xs font-bold text-[#303e67]">My University Email</h4>
            <span className="text-[10px] font-bold text-gray-500 hover:text-blue-600 cursor-pointer underline mt-1 block">
              VIEW DETAILS
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-sky-100/70 text-sky-600 flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Header Pill */}
      <div className="bg-[#4051a3] text-white py-3 px-6 rounded-2xl shadow-xs text-center">
        <h2 className="text-base font-bold tracking-wide">{title}</h2>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs p-8 text-center space-y-3 min-h-[300px] flex flex-col items-center justify-center">
        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
          <GraduationCap className="w-6 h-6" />
        </div>
        <h3 className="text-base font-bold text-slate-800">{title} Portal Module</h3>
        <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
          {description || `All records and active forms for ${title} under student ID 25BAI70040 are verified and synchronized.`}
        </p>
      </div>

    </div>
  );
};
