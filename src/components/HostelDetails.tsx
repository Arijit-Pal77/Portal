import React from 'react';
import { hostelData } from '../data/mockData';
import { ExternalLink, PlayCircle, XCircle, GraduationCap, Mail } from 'lucide-react';

export const HostelDetails: React.FC = () => {
  return (
    <div className="space-y-4 pb-8 text-slate-800">
      
      {/* Quick Action Top Cards (Matches CUIMS Header layout) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-4">
        {/* Important Links */}
        <div className="shortLinks__item">
          <a href="#" className="bg-white rounded-[10px] p-4 sm:p-5 shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-between hover:shadow-lg transition-shadow min-h-[110px] font-['Segoe_UI',sans-serif] block waves-effect waves-red box-shadow-common">
            <div className="flex flex-col justify-center">
              <h6 className="text-[15px] font-bold text-[#001a4d] leading-tight tracking-tight">Important Links</h6>
              <div className="mt-[6px]">
                <span className="inline-block border-b-2 border-slate-300 text-[11px] font-semibold uppercase text-slate-500 pb-0.5 tracking-wide">
                  CLICK HERE
                </span>
              </div>
            </div>
            <div className="w-[44px] h-[44px] rounded-[10px] bg-[#eef6ff] text-[#0066ff] flex items-center justify-center flex-shrink-0">
              <ExternalLink className="w-[22px] h-[22px] stroke-[2]" />
            </div>
          </a>
        </div>

        {/* Student Facilitation */}
        <div className="shortLinks__item">
          <a href="#" className="bg-white rounded-[10px] p-4 sm:p-5 shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-between hover:shadow-lg transition-shadow min-h-[110px] font-['Segoe_UI',sans-serif] block waves-effect waves-red box-shadow-common">
            <div className="flex flex-col justify-center">
              <h6 className="text-[15px] font-bold text-[#001a4d] leading-tight tracking-tight">Student Facilitation</h6>
              <div className="mt-[6px]">
                <span className="inline-block border-b-2 border-slate-300 text-[11px] font-semibold uppercase text-slate-500 pb-0.5 tracking-wide">
                  CLICK TO VIEW
                </span>
              </div>
            </div>
            <div className="w-[44px] h-[44px] rounded-[10px] bg-[#f5ecf7] text-[#9c27b0] flex items-center justify-center flex-shrink-0">
              <PlayCircle className="w-[22px] h-[22px] stroke-[2]" />
            </div>
          </a>
        </div>

        {/* Anti Ragging */}
        <div className="shortLinks__item">
          <a href="#" className="bg-white rounded-[10px] p-4 sm:p-5 shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-between hover:shadow-lg transition-shadow min-h-[110px] font-['Segoe_UI',sans-serif] block waves-effect waves-red box-shadow-common">
            <div className="flex flex-col justify-center">
              <h6 className="text-[15px] font-bold text-[#001a4d] leading-tight tracking-tight">Anti Ragging</h6>
              <div className="mt-[6px]">
                <span className="inline-block border-b-2 border-slate-300 text-[11px] font-semibold uppercase text-slate-500 pb-0.5 tracking-wide">
                  READ NOW
                </span>
              </div>
            </div>
            <div className="w-[44px] h-[44px] rounded-[10px] bg-[#eff0fa] text-[#5c4cfc] flex items-center justify-center flex-shrink-0">
              <XCircle className="w-[22px] h-[22px] stroke-[2]" />
            </div>
          </a>
        </div>

        {/* CU LMS */}
        <div className="shortLinks__item">
          <a href="#" className="bg-[#124f85] rounded-[10px] p-4 sm:p-5 shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-between hover:brightness-105 transition-all min-h-[110px] font-['Segoe_UI',sans-serif] block waves-effect waves-red box-shadow-common">
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
          </a>
        </div>

        {/* My University Email */}
        <div className="shortLinks__item">
          <a href="#" className="bg-white rounded-[10px] p-4 sm:p-5 shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-between hover:shadow-lg transition-shadow min-h-[110px] font-['Segoe_UI',sans-serif] block waves-effect waves-red box-shadow-common">
            <div className="flex flex-col justify-center">
              <h6 className="text-[15px] font-bold text-[#001a4d] leading-tight tracking-tight">My University Email</h6>
              <div className="mt-[6px]">
                <span className="inline-block border-b-2 border-slate-300 text-[11px] font-semibold uppercase text-slate-500 pb-0.5 tracking-wide">
                  VIEW DETAILS
                </span>
              </div>
            </div>
            <div className="w-[44px] h-[44px] rounded-[10px] bg-[#eef6ff] text-[#0066ff] flex items-center justify-center flex-shrink-0">
              <Mail className="w-[22px] h-[22px] stroke-[2]" />
            </div>
          </a>
        </div>
      </div>

      {/* Blue Header Banner */}
      <div className="bg-[#4051a3] text-white py-3 px-6 rounded-2xl shadow-xs text-center">
        <h2 className="text-base font-bold tracking-wide">Hostel Details</h2>
      </div>

      {/* Main Hostel Details Card Grid */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Hostel Building Photo Column (5 cols) */}
          <div className="md:col-span-5 relative rounded-xl overflow-hidden border border-slate-200 shadow-2xs group">
            <img 
              src={hostelData.imageUrl} 
              alt="Chandigarh University Hostel Building"
              className="w-full h-72 sm:h-80 object-cover group-hover:scale-102 transition-transform duration-300"
            />


          </div>

          {/* Details Table Column (7 cols) */}
          <div className="md:col-span-7">
            <div className="border border-[#e2e2e2] overflow-hidden divide-y divide-[#e2e2e2] text-[14px]">
              
              {/* Hostel Status */}
              <div className="grid grid-cols-2 bg-white">
                <div className="p-4 font-bold text-[#333333] bg-[#f2f2f2] border-r border-[#e2e2e2] flex items-center">
                  Hostel Status
                </div>
                <div className="p-4 text-center text-[#555555] flex items-center justify-center">
                  {hostelData.status}
                </div>
              </div>

              {/* Seater */}
              <div className="grid grid-cols-2 bg-white">
                <div className="p-4 font-bold text-[#333333] bg-[#f2f2f2] border-r border-[#e2e2e2] flex items-center">
                  Seater
                </div>
                <div className="p-4 text-center text-[#555555] flex items-center justify-center">
                  {hostelData.seater}
                </div>
              </div>

              {/* Hostel Name */}
              <div className="grid grid-cols-2 bg-white">
                <div className="p-4 font-bold text-[#333333] bg-[#f2f2f2] border-r border-[#e2e2e2] flex items-center">
                  Hostel Name
                </div>
                <div className="p-4 text-center text-[#555555] flex items-center justify-center">
                  {hostelData.hostelName}
                </div>
              </div>

              {/* Room No */}
              <div className="grid grid-cols-2 bg-white">
                <div className="p-4 font-bold text-[#333333] bg-[#f2f2f2] border-r border-[#e2e2e2] flex items-center">
                  Room No
                </div>
                <div className="p-4 text-center text-[#555555] flex items-center justify-center">
                  {hostelData.roomNo}
                </div>
              </div>

              {/* Hostel Reporting Status */}
              <div className="grid grid-cols-2 bg-white">
                <div className="p-4 font-bold text-[#333333] bg-[#f2f2f2] border-r border-[#e2e2e2] flex items-center">
                  Hostel Reporting Status
                </div>
                <div className="p-4 text-center text-[#555555] flex items-center justify-center">
                  {hostelData.reportingStatus}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
