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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Important Links */}
        <div className="bg-white rounded-[14px] px-[20px] py-[18px] shadow-sm border border-slate-200/80 flex items-center justify-between hover:shadow-md transition-shadow h-[96px] font-['Segoe_UI',sans-serif]">
          <div className="flex flex-col justify-center">
            <h6 className="text-[15.5px] font-bold text-[#1f355c] leading-tight tracking-tight">Important Links</h6>
            <div className="mt-[6px]">
              <span className="inline-block border-b-2 border-slate-300 text-[11px] font-semibold uppercase text-slate-500 pb-0.5 tracking-wide">
                CLICK HERE
              </span>
            </div>
          </div>
          <div className="w-[44px] h-[44px] rounded-[10px] bg-[#eef6ff] text-[#0066ff] flex items-center justify-center flex-shrink-0">
            <ExternalLink className="w-[22px] h-[22px] stroke-[2]" />
          </div>
        </div>

        {/* Student Facilitation */}
        <div className="bg-white rounded-[14px] px-[20px] py-[18px] shadow-sm border border-slate-200/80 flex items-center justify-between hover:shadow-md transition-shadow h-[96px] font-['Segoe_UI',sans-serif]">
          <div className="flex flex-col justify-center">
            <h6 className="text-[15.5px] font-bold text-[#1f355c] leading-tight tracking-tight">Student Facilitation</h6>
            <div className="mt-[6px]">
              <span className="inline-block border-b-2 border-slate-300 text-[11px] font-semibold uppercase text-slate-500 pb-0.5 tracking-wide">
                CLICK TO VIEW
              </span>
            </div>
          </div>
          <div className="w-[44px] h-[44px] rounded-[10px] bg-[#f5ecf7] text-[#9c27b0] flex items-center justify-center flex-shrink-0">
            <PlayCircle className="w-[22px] h-[22px] stroke-[2]" />
          </div>
        </div>

        {/* Anti Ragging */}
        <div className="bg-white rounded-[14px] px-[20px] py-[18px] shadow-sm border border-slate-200/80 flex items-center justify-between hover:shadow-md transition-shadow h-[96px] font-['Segoe_UI',sans-serif]">
          <div className="flex flex-col justify-center">
            <h6 className="text-[15.5px] font-bold text-[#1f355c] leading-tight tracking-tight">Anti Ragging</h6>
            <div className="mt-[6px]">
              <span className="inline-block border-b-2 border-slate-300 text-[11px] font-semibold uppercase text-slate-500 pb-0.5 tracking-wide">
                READ NOW
              </span>
            </div>
          </div>
          <div className="w-[44px] h-[44px] rounded-[10px] bg-[#eff0fa] text-[#5c4cfc] flex items-center justify-center flex-shrink-0">
            <XCircle className="w-[22px] h-[22px] stroke-[2]" />
          </div>
        </div>

        {/* CU LMS */}
        <div className="bg-[#204a74] rounded-[14px] px-[20px] py-[18px] shadow-sm border-2 border-[#00d05a] flex items-center justify-between hover:brightness-105 transition-all h-[96px] font-['Segoe_UI',sans-serif]">
          <div className="flex flex-col justify-center">
            <h6 className="text-[15.5px] font-bold text-white leading-tight tracking-tight">CU LMS</h6>
            <div className="mt-[6px]">
              <span className="inline-block border-b-[2px] border-white/50 text-[11px] font-semibold uppercase text-white pb-0.5 tracking-wide">
                CLICK HERE
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center flex-shrink-0 mr-1 opacity-90">
            <GraduationCap className="w-[32px] h-[32px] text-white stroke-[1.5]" />
          </div>
        </div>

        {/* My University Email */}
        <div className="bg-white rounded-[14px] px-[20px] py-[18px] shadow-sm border border-slate-200/80 flex items-center justify-between hover:shadow-md transition-shadow h-[96px] font-['Segoe_UI',sans-serif]">
          <div className="flex flex-col justify-center">
            <h6 className="text-[15.5px] font-bold text-[#1f355c] leading-tight tracking-tight">My University Email</h6>
            <div className="mt-[6px]">
              <span className="inline-block border-b-2 border-slate-300 text-[11px] font-semibold uppercase text-slate-500 pb-0.5 tracking-wide">
                VIEW DETAILS
              </span>
            </div>
          </div>
          <div className="w-[44px] h-[44px] rounded-[10px] bg-[#eef6ff] text-[#0066ff] flex items-center justify-center flex-shrink-0">
            <Mail className="w-[22px] h-[22px] stroke-[2]" />
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
