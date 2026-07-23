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
