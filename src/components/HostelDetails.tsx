import React from 'react';
import { hostelData } from '../data/mockData';
import { ExternalLink, PlayCircle, XCircle, GraduationCap, Mail } from 'lucide-react';

export const HostelDetails: React.FC = () => {
  return (
    <div className="space-y-4 pb-8 text-slate-800">
      
      {/* Quick Action Top Cards (Matches CUIMS Header layout) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {/* Important Links */}
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

        {/* Student Facilitation */}
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

        {/* Anti Ragging */}
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

        {/* CU LMS */}
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

        {/* My University Email */}
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
            {/* Top Left 'Ps' Badge as seen in CUIMS UI */}
            <div className="absolute top-2 left-2 bg-[#001e36] text-[#31a8ff] text-[11px] font-black px-2 py-0.5 rounded-sm shadow-md border border-sky-600/30">
              Ps
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-white text-xs">
              <span className="font-bold block text-sm">Zakir B</span>
              <span className="text-slate-200 text-[10px]">Chandigarh University Resident Housing</span>
            </div>
          </div>

          {/* Details Table Column (7 cols) */}
          <div className="md:col-span-7">
            <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-200 text-xs sm:text-sm">
              
              {/* Hostel Status */}
              <div className="grid grid-cols-12 bg-white hover:bg-slate-50 transition-colors">
                <div className="col-span-5 p-3.5 sm:p-4 font-bold text-slate-800 bg-[#f8fafc] border-r border-slate-200 flex items-center">
                  Hostel Status
                </div>
                <div className="col-span-7 p-3.5 sm:p-4 text-center font-medium text-slate-900 flex items-center justify-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                    {hostelData.status}
                  </span>
                </div>
              </div>

              {/* Seater */}
              <div className="grid grid-cols-12 bg-white hover:bg-slate-50 transition-colors">
                <div className="col-span-5 p-3.5 sm:p-4 font-bold text-slate-800 bg-[#f8fafc] border-r border-slate-200 flex items-center">
                  Seater
                </div>
                <div className="col-span-7 p-3.5 sm:p-4 text-center font-medium text-slate-900 flex items-center justify-center">
                  {hostelData.seater}
                </div>
              </div>

              {/* Hostel Name */}
              <div className="grid grid-cols-12 bg-white hover:bg-slate-50 transition-colors">
                <div className="col-span-5 p-3.5 sm:p-4 font-bold text-slate-800 bg-[#f8fafc] border-r border-slate-200 flex items-center">
                  Hostel Name
                </div>
                <div className="col-span-7 p-3.5 sm:p-4 text-center font-bold text-slate-900 flex items-center justify-center">
                  {hostelData.hostelName}
                </div>
              </div>

              {/* Room No */}
              <div className="grid grid-cols-12 bg-white hover:bg-slate-50 transition-colors">
                <div className="col-span-5 p-3.5 sm:p-4 font-bold text-slate-800 bg-[#f8fafc] border-r border-slate-200 flex items-center">
                  Room No
                </div>
                <div className="col-span-7 p-3.5 sm:p-4 text-center font-extrabold text-indigo-900 flex items-center justify-center">
                  {hostelData.roomNo}
                </div>
              </div>

              {/* Hostel Reporting Status */}
              <div className="grid grid-cols-12 bg-white hover:bg-slate-50 transition-colors">
                <div className="col-span-5 p-3.5 sm:p-4 font-bold text-slate-800 bg-[#f8fafc] border-r border-slate-200 flex items-center">
                  Hostel Reporting Status
                </div>
                <div className="col-span-7 p-3.5 sm:p-4 text-center font-medium text-slate-900 flex items-center justify-center">
                  {hostelData.reportingStatus}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Contact Footer Banner */}
      <div className="bg-[#1f2937] text-white py-3 px-4 rounded-xl shadow-xs text-xs flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="font-semibold text-slate-200">
          Chandigarh University, Gharuan, Mohali (Punjab)
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-300">
          <span>📞 <span className="font-bold text-white">Helpline:</span> 1800 257 1800</span>
          <span>✉️ <span className="font-bold text-white">Email:</span> studentcare@cumail.in</span>
          <span className="text-red-400 font-bold hover:underline cursor-pointer">Report a Bug 🚩</span>
        </div>
      </div>

    </div>
  );
};
