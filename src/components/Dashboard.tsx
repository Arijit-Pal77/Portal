import React, { useState } from 'react';
import { 
  Cloud, 
  ExternalLink, 
  PlayCircle, 
  XCircle, 
  GraduationCap, 
  Mail, 
  UserCheck, 
  HelpCircle,
  Search, 
  Pin, 
  FileText, 
  Calendar, 
  Clock,
  Briefcase,
  Bell,
  Download,
  Loader2
} from 'lucide-react';
import { courseAttendanceList, fullCourseDegreeName, mentorData, announcementsList } from '../data/mockData';
import { downloadIdCardPdf } from '../utils/downloadIdCardPdf';

interface DashboardProps {
  onGoToIDCard: () => void;
  onGoToHostel: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onGoToIDCard, onGoToHostel }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [announcementFilter, setAnnouncementFilter] = useState('ALL');
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPdf = async () => {
    setIsDownloading(true);
    try {
      await downloadIdCardPdf();
    } catch (err) {
      console.error(err);
    } finally {
      setIsDownloading(false);
    }
  };

  const filteredAnnouncements = announcementsList.filter(ann => {
    const matchesSearch = ann.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          ann.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="space-y-4 pb-8 text-slate-800">

      {/* Top 5 Quick Action Cards Row - Matching exact CUIMS CSS specifications from HomeNewStyle.css */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Important Links */}
        <div className="bg-white rounded-[10px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-between hover:shadow-lg transition-shadow min-h-[110px] font-['Segoe_UI',sans-serif]">
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
        </div>

        {/* Student Facilitation */}
        <div className="bg-white rounded-[10px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-between hover:shadow-lg transition-shadow min-h-[110px] font-['Segoe_UI',sans-serif]">
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
        </div>

        {/* Anti Ragging */}
        <div className="bg-white rounded-[10px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-between hover:shadow-lg transition-shadow min-h-[110px] font-['Segoe_UI',sans-serif]">
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
        </div>

        {/* CU LMS */}
        <div className="bg-[#124f85] rounded-[10px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-between hover:brightness-105 transition-all min-h-[110px] font-['Segoe_UI',sans-serif]">
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
        <div className="bg-white rounded-[10px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-between hover:shadow-lg transition-shadow min-h-[110px] font-['Segoe_UI',sans-serif]">
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
        </div>
      </div>

      {/* Row 2: Weather Bar + Virtual ID Card Bar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Weather Bar (6 cols - extends to the middle of the page) */}
        <div className="lg:col-span-6 bg-[#254e77] text-white rounded-[8px] px-6 sm:px-8 py-3.5 flex items-center justify-around shadow-xs select-none font-['Segoe_UI',_Tahoma,_Geneva,_Verdana,_sans-serif]">
          {/* Left Text Block */}
          <div className="text-center">
            <div className="text-[13px] sm:text-[14px] font-bold uppercase tracking-tight text-white leading-tight">
              CHANDIGARH UNIVERSITY
            </div>
            <div className="text-[11px] font-normal uppercase tracking-wider text-white/90 mt-0.5">
              WEATHER
            </div>
          </div>

          {/* Center Cloud Icon */}
          <div className="flex items-center justify-center">
            <svg 
              className="w-9 h-9 sm:w-10 sm:h-10 text-white" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            </svg>
          </div>

          {/* Right Temp Block */}
          <div className="text-center">
            <div className="text-[28px] sm:text-[30px] font-normal text-white leading-none tracking-tight">
              35°C
            </div>
            <div className="text-[11px] font-normal text-white/85 lowercase tracking-normal mt-0.5">
              broken clouds
            </div>
          </div>
        </div>

        {/* Download Virtual ID Card (6 cols) - Exact CUIMS styling matching real division */}
        <div className="lg:col-span-6 bg-white border border-[#e2e2e2] rounded-[8px] px-6 py-3.5 flex items-center justify-between shadow-sm select-none">
          <div className="flex items-center font-['Segoe_UI',sans-serif]">
            <h3 className="text-[16px] font-semibold text-[#2a385b] tracking-normal">
              Download Virtual ID Card
            </h3>
          </div>
          <button 
            onClick={handleDownloadPdf}
            disabled={isDownloading}
            className="bg-[#e8f4fe] hover:bg-[#d6e8fa] active:bg-[#c2e0f9] text-[#2a385b] font-semibold text-[15px] px-6 py-2.5 rounded-[12px] transition-colors cursor-pointer flex-shrink-0 ml-2 font-['Segoe_UI',sans-serif] flex items-center space-x-2 disabled:opacity-75"
            id="download-virtual-id-btn"
          >
            {isDownloading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#2a385b]" />
                <span>Downloading...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-[#2a385b]" />
                <span>Download Now</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main 3-Column Grid Arrangement matching actual CUIMS layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        
        {/* COLUMN 1: Important Message, Mentor Details, My Question Or Queries */}
        <div className="space-y-4">
          
          {/* 1. Important Message */}
          <div className="bg-white rounded-[4px] p-4 border border-[#e2e2e2] shadow-sm">
            <h3 className="text-sm font-bold text-[#103260] mb-3 font-['Open_Sans',sans-serif]">Important Message</h3>
            <div className="bg-[#f2f4f8] rounded-xl p-3 text-[11px] text-slate-700 leading-relaxed space-y-2 border border-slate-200/60">
              <p>
                <span className="font-semibold text-slate-800">1.Pending Documents:</span> The status of Pending documents is as given below, you are required to submit the same in Block-B1 (Room No.208(General category) and Room No. 204(Scholarship stds.) (Abbreviation: MIG: Migration, CHAR/ CHR: Character, DIP: Diploma, ORG: Original)
              </p>
              <p className="font-medium text-slate-800 pt-1 border-t border-slate-200/80">
                <span className="font-bold text-slate-900">Document Remarks:</span><span className="text-slate-900 font-semibold"> No Documents Pending</span>
              </p>
            </div>
          </div>

          {/* 2. Mentor Details */}
          <div className="bg-white rounded-[4px] p-4 border border-[#e2e2e2] shadow-sm">
            <div className="flex items-center space-x-2 text-[#103260] mb-3">
              <UserCheck className="w-4 h-4 text-[#103260]" />
              <h3 className="text-sm font-bold font-['Open_Sans',sans-serif]">Mentor Details</h3>
            </div>
            <ul className="text-xs text-slate-700 space-y-1.5 pl-6 list-disc">
              <li>
                <span className="font-bold text-slate-800">Mentor Name:</span> {mentorData.name}
              </li>
              <li>
                <span className="font-bold text-slate-800">Email Id:</span>{' '}
                <a href={`mailto:${mentorData.email}`} className="text-black hover:underline font-medium">
                  {mentorData.email}
                </a>
              </li>
            </ul>
          </div>

          {/* 3. My Question Or Queries */}
          <div className="bg-white rounded-[4px] p-4 border border-[#e2e2e2] shadow-sm">
            <div className="flex items-center space-x-2 text-[#103260] mb-3">
              <HelpCircle className="w-4 h-4 text-[#103260]" />
              <h3 className="text-sm font-bold font-['Open_Sans',sans-serif]">My Question Or Queries</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="text-xs text-center border-collapse w-full">
                <thead>
                  <tr className="bg-[#e8ecf2] font-bold text-slate-800 border border-slate-200">
                    <th className="py-1.5 px-3 border-r border-slate-200">Total</th>
                    <th className="py-1.5 px-3 border-r border-slate-200">Closed</th>
                    <th className="py-1.5 px-3">Open</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border border-slate-200 font-semibold text-slate-800">
                    <td className="py-1.5 px-3 border-r border-slate-200">2</td>
                    <td className="py-1.5 px-3 border-r border-slate-200">2</td>
                    <td className="py-1.5 px-3">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* COLUMN 2: My Course & Attendance, Upcoming Events, Job Alert */}
        <div className="space-y-4">
          
          {/* 1. My Course & Attendance */}
          <div className="bg-white rounded-[4px] p-5 border border-[#e2e2e2] shadow-sm">
            <h3 className="text-xl font-bold text-[#103260] mb-3 font-['Open_Sans',_sans-serif]">
              My Course & Attendance
            </h3>
            <p className="text-[13px] sm:text-[13.5px] font-bold text-slate-900 mb-4 leading-snug">
              {fullCourseDegreeName}
            </p>

            <div className="max-h-[340px] overflow-y-auto custom-scrollbar border border-slate-300 rounded-xs">
              <table className="w-full text-left border-collapse font-['Open_Sans',_sans-serif]">
                <thead className="bg-[#f0f0f0] text-slate-900 font-bold text-[13.5px] sticky top-0 z-10">
                  <tr>
                    <th className="py-2.5 px-3 border border-slate-300 bg-[#f0f0f0]">Subject</th>
                    <th className="py-2.5 px-2 text-center w-16 border border-slate-300 bg-[#f0f0f0]">Sem.</th>
                    <th className="py-2.5 px-2 text-center w-14 border border-slate-300 bg-[#f0f0f0]">%</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-[13px] text-slate-800">
                  {courseAttendanceList.map((course, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="py-2.5 px-3 border border-slate-200 font-normal text-slate-800 leading-snug">
                        {course.subject}
                      </td>
                      <td className="py-2.5 px-2 text-center border border-slate-200 text-slate-800 font-normal">
                        {course.semester}
                      </td>
                      <td className="py-2.5 px-2 text-center border border-slate-200 text-slate-800 font-normal">
                        {course.attendancePercentage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Upcoming Events */}
          <div className="bg-white rounded-[4px] p-4 border border-[#e2e2e2] shadow-sm">
            <h3 className="text-sm font-bold text-[#103260] font-['Open_Sans',sans-serif]">Upcoming Events</h3>
            <p className="text-xs text-gray-500 mt-2 italic">No major upcoming cultural or academic events scheduled today.</p>
          </div>

          {/* 3. Job Alert */}
          <div className="bg-white rounded-[4px] p-4 border border-[#e2e2e2] shadow-sm">
            <div className="flex items-center space-x-2 text-[#103260] mb-2">
              <Briefcase className="w-4 h-4 text-[#103260]" />
              <h3 className="text-sm font-bold font-['Open_Sans',sans-serif]">Job Alert</h3>
            </div>
            <p className="text-xs text-gray-500 italic">DCPD placement drives and internship notifications will appear here.</p>
          </div>

        </div>

        {/* COLUMN 3: Announcements ( ALL ) */}
        <div className="space-y-4">
          <div className="bg-white rounded-[4px] p-4 border border-[#e2e2e2] shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-[#303e67]">Announcements ( ALL )</h3>
            </div>

            {/* Filter + Search */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative flex-1">
                <input 
                  type="text" 
                  placeholder="Search Announcement" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-[#f2f4f8] text-xs py-1.5 pl-3 pr-8 rounded-lg border border-slate-200 focus:outline-none focus:bg-white"
                />
                <Search className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-2" />
              </div>
              <select 
                value={announcementFilter}
                onChange={(e) => setAnnouncementFilter(e.target.value)}
                className="bg-[#f2f4f8] text-xs py-1.5 px-3 rounded-lg border border-slate-200 focus:outline-none font-semibold text-slate-700"
              >
                <option value="ALL">ALL</option>
                <option value="ADMIN">ADMIN</option>
                <option value="ACADEMIC">ACADEMIC</option>
              </select>
            </div>

            {/* Announcement List with Scrollbar */}
            <div className="space-y-3 max-h-[480px] overflow-y-auto custom-scrollbar pr-1">
              {filteredAnnouncements.map((ann) => (
                <div key={ann.id} className="bg-[#f4f6f9] rounded-xl p-3.5 border border-slate-200/80 text-slate-700 text-xs space-y-2">
                  <div className="flex items-start space-x-1.5 text-slate-900 font-extrabold uppercase text-[11px] leading-tight">
                    <span className="text-red-600 flex-shrink-0 mt-0.5">📌</span>
                    <span>{ann.title}</span>
                  </div>

                  {/* Date & Time Badges */}
                  <div className="flex items-center space-x-2 text-[10px]">
                    <span className="bg-[#314a72] text-white px-2 py-0.5 rounded-md font-semibold flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{ann.date}</span>
                    </span>
                    <span className="bg-[#314a72] text-white px-2 py-0.5 rounded-md font-semibold flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{ann.time}</span>
                    </span>
                  </div>

                  {/* Body */}
                  <div className="text-[11px] leading-relaxed text-slate-700 pt-1">
                    <span className="font-bold text-slate-900 block mb-0.5">FROM {ann.department}</span>
                    <p>{ann.content}</p>
                  </div>

                  {/* Attachment if present */}
                  {ann.attachmentName && (
                    <div className="pt-1">
                      <span className="inline-flex items-center space-x-1.5 bg-white border border-slate-300 rounded-md px-2.5 py-1 text-[10px] text-slate-700 font-medium hover:bg-slate-50 cursor-pointer shadow-2xs">
                        <span className="bg-red-600 text-white font-bold text-[8px] px-1 rounded-2xs">PDF</span>
                        <span className="truncate max-w-[160px]">{ann.attachmentName}</span>
                      </span>
                    </div>
                  )}

                  <div className="text-[10px] text-slate-500 font-medium pt-2 border-t border-slate-200/70">
                    Uploaded by: <span className="font-bold text-slate-800">{ann.uploadedBy}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Contact Footer Banner */}
      <div className="bg-[#1f2937] text-white py-3 px-4 rounded-xl shadow-xs text-xs flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left mt-6">
        <div className="font-semibold text-slate-200">
          Chandigarh University, Gharuan, Mohali (Punjab) | 📞 <span className="font-bold text-white">Helpline:</span> 1800 257 1800 | ✉️ <span className="font-bold text-white">Email:</span> studentcare@cumail.in
        </div>
        <div className="text-red-400 font-bold hover:underline cursor-pointer flex-shrink-0">
          Report a Bug 🚩
        </div>
      </div>

    </div>
  );
};

