import React, { useRef } from 'react';
import { studentData, hostelData } from '../data/mockData';
import { ExternalLink, PlayCircle, XCircle, GraduationCap, Mail, Camera, RotateCcw } from 'lucide-react';
import { useStudentPhoto } from '../hooks/useStudentPhoto';

export const ProfileView: React.FC = () => {
  const { photo, updatePhoto, resetPhoto } = useStudentPhoto();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          updatePhoto(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="space-y-4 pb-12 text-slate-800">
      
      {/* Quick Action Top Cards (Matches CUIMS Header layout) */}
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

      {/* Blue Header Banner */}
      <div className="bg-[#4051a3] text-white py-2.5 px-6 rounded-lg shadow-xs text-center">
        <h2 className="text-base font-bold tracking-wide">My Profile</h2>
      </div>

      {/* Main Profile Container */}
      <div className="space-y-6">

        {/* SECTION 1: STUDENT PERSONAL INFORMATION */}
        <div className="font-['Arial',sans-serif]">
          {/* Section Pill Badge */}
          <div className="inline-block bg-[#4b559b] text-white text-[11.5px] font-bold px-3.5 py-[5px] rounded-[4px] uppercase tracking-wide mb-[3px]">
            STUDENT PERSONAL INFORMATION
          </div>

          <div className="bg-white border border-slate-200/80 rounded-[4px] p-[20px] shadow-[0_0_15px_4px_rgba(0,0,0,0.02)]">
            <div className="flex flex-col lg:flex-row justify-between gap-6">
              
              {/* Left Column (8 items) */}
              <div className="flex-[0.95] space-y-[11px] text-[13.5px]">
                <div className="flex"><div className="w-[140px] font-bold text-[#333]">UID</div><div className="flex-1 text-[#444] uppercase">{studentData.id}</div></div>
                <div className="flex"><div className="w-[140px] font-bold text-[#333]">Name</div><div className="flex-1 text-[#444] uppercase">{studentData.name}</div></div>
                <div className="flex"><div className="w-[140px] font-bold text-[#333]">Father's Name</div><div className="flex-1 text-[#444] uppercase">{studentData.fatherName}</div></div>
                <div className="flex"><div className="w-[140px] font-bold text-[#333]">Mother Name</div><div className="flex-1 text-[#444] uppercase">{studentData.motherName}</div></div>
                <div className="flex"><div className="w-[140px] font-bold text-[#333]">Religion</div><div className="flex-1 text-[#444]">{studentData.religion}</div></div>
                <div className="flex"><div className="w-[140px] font-bold text-[#333]">D.O.B.</div><div className="flex-1 text-[#444]">{studentData.dob}</div></div>
                <div className="flex"><div className="w-[140px] font-bold text-[#333]">Admission Year</div><div className="flex-1 text-[#444]">{studentData.admissionYear}</div></div>
                <div className="flex"><div className="w-[140px] font-bold text-[#333]">University</div><div className="flex-1 text-[#444] uppercase">{studentData.university}</div></div>
              </div>

              {/* Middle Column (7 items) */}
              <div className="flex-[1.3] space-y-[11px] text-[13.5px]">
                <div className="flex"><div className="w-[140px] font-bold text-[#333]">Current Semester</div><div className="flex-1 text-[#444]">{studentData.currentSemester}</div></div>
                <div className="flex"><div className="w-[140px] font-bold text-[#333]">Blood Group</div><div className="flex-1 text-[#444] uppercase">{studentData.bloodGroup}</div></div>
                <div className="flex"><div className="w-[140px] font-bold text-[#333]">Current Section</div><div className="flex-1 text-[#444] uppercase">{studentData.currentSection}</div></div>
                <div className="flex"><div className="w-[140px] font-bold text-[#333]">Program Code</div><div className="flex-1 text-[#444]">{studentData.programCode}</div></div>
                <div className="flex"><div className="w-[140px] font-bold text-[#333]">Student Status</div><div className="flex-1 text-[#444] uppercase">{studentData.studentStatus}</div></div>
                <div className="flex"><div className="w-[140px] font-bold text-[#333]">Cast</div><div className="flex-1 text-[#444] uppercase">{studentData.caste}</div></div>
                <div className="flex"><div className="w-[140px] font-bold text-[#333]">Address</div><div className="flex-1 text-[#444] uppercase leading-tight pr-4">{studentData.fullAddress}</div></div>
              </div>

              {/* Right Column - Photo */}
              <div className="w-[100px] flex-shrink-0 flex justify-end items-start">
                <div className="relative cursor-pointer group" onClick={() => document.getElementById('profile-photo-file-input')?.click()}>
                  <input type="file" ref={fileInputRef} onChange={handlePhotoUpload} accept="image/*" className="hidden" id="profile-photo-file-input"/>
                  <div className="w-[100px] h-[125px] border-[1.5px] border-black border-r-[12px] rounded-[6px] overflow-hidden bg-white">
                    <img src={photo} alt={studentData.name} className="w-full h-full object-cover"/>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* SECTION 2: QUALIFICATION DETAILS */}
        <div className="font-['Arial',sans-serif]">
          <div className="inline-block bg-[#4b559b] text-white text-[11.5px] font-bold px-3.5 py-[5px] rounded-[4px] uppercase tracking-wide mb-[3px]">
            QUALIFICATION DETAILS
          </div>
          <div className="bg-white border border-[#e2e2e2]">
            <table className="w-full text-left text-[13.5px] border-collapse">
              <thead>
                <tr className="bg-[#f0f0f0] text-[#111] border-b border-[#e2e2e2]">
                  <th className="font-bold py-[8px] px-3 border-r border-[#e2e2e2]">Qualification</th>
                  <th className="font-bold py-[8px] px-3 border-r border-[#e2e2e2]">Stream</th>
                  <th className="font-bold py-[8px] px-3 border-r border-[#e2e2e2]">Collage School Institute</th>
                  <th className="font-bold py-[8px] px-3 border-r border-[#e2e2e2]">University Board</th>
                  <th className="font-bold py-[8px] px-3 border-r border-[#e2e2e2]">Passign Year</th>
                  <th className="font-bold py-[8px] px-3 border-r border-[#e2e2e2]">Percent Marks</th>
                  <th className="font-bold py-[8px] px-3">Remarks</th>
                </tr>
              </thead>
              <tbody className="text-[#444] divide-y divide-[#e2e2e2]">
                <tr>
                  <td className="align-top py-[10px] px-3 border-r border-[#e2e2e2]">10th</td>
                  <td className="align-top py-[10px] px-3 border-r border-[#e2e2e2]">GENERAL</td>
                  <td className="align-top py-[10px] px-3 border-r border-[#e2e2e2] leading-tight">PATRASAYER BAMIRA<br/>GURUDAS<br/>INSTITUTION<br/>PATRASAYER</td>
                  <td className="align-top py-[10px] px-3 border-r border-[#e2e2e2] leading-tight">WEST BENGAL<br/>BOARD OF<br/>SECONDARY<br/>EDUCATION</td>
                  <td className="align-top py-[10px] px-3 border-r border-[#e2e2e2]">2023</td>
                  <td className="align-top py-[10px] px-3 border-r border-[#e2e2e2]">89.14</td>
                  <td className="align-top py-[10px] px-3"></td>
                </tr>
                <tr>
                  <td className="align-top py-[10px] px-3 border-r border-[#e2e2e2]">10+2</td>
                  <td className="align-top py-[10px] px-3 border-r border-[#e2e2e2]">PCM</td>
                  <td className="align-top py-[10px] px-3 border-r border-[#e2e2e2] leading-tight">BANKURA HINDU<br/>HIGH SCHOOL<br/>BANKURA</td>
                  <td className="align-top py-[10px] px-3 border-r border-[#e2e2e2] leading-tight">WEST BENGAL<br/>COUNCIL OF HIGHER<br/>SECONDARY<br/>EDUCATION</td>
                  <td className="align-top py-[10px] px-3 border-r border-[#e2e2e2]">2025</td>
                  <td className="align-top py-[10px] px-3 border-r border-[#e2e2e2]">90.6</td>
                  <td className="align-top py-[10px] px-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 3: CONTACT DETAILS */}
        <div className="font-['Arial',sans-serif]">
          <div className="inline-block bg-[#4b559b] text-white text-[11.5px] font-bold px-3.5 py-[5px] rounded-[4px] uppercase tracking-wide mb-[3px]">
            CONTACT DETAILS
          </div>
          <div className="bg-white border border-[#e2e2e2]">
            <table className="w-full text-left text-[13.5px] border-collapse">
              <thead>
                <tr className="bg-[#f0f0f0] text-[#111] border-b border-[#e2e2e2]">
                  <th className="font-bold py-[8px] px-3 border-r border-[#e2e2e2] w-40">Contact Type</th>
                  <th className="font-bold py-[8px] px-3 border-r border-[#e2e2e2]">Residence</th>
                  <th className="font-bold py-[8px] px-3 border-r border-[#e2e2e2]">Office</th>
                  <th className="font-bold py-[8px] px-3 border-r border-[#e2e2e2]">Mobile</th>
                  <th className="font-bold py-[8px] px-3">EmailId</th>
                </tr>
              </thead>
              <tbody className="text-[#444] divide-y divide-[#e2e2e2]">
                <tr>
                  <td className="align-top py-[10px] px-3 border-r border-[#e2e2e2]">Father</td>
                  <td className="align-top py-[10px] px-3 border-r border-[#e2e2e2]"></td>
                  <td className="align-top py-[10px] px-3 border-r border-[#e2e2e2]"></td>
                  <td className="align-top py-[10px] px-3 border-r border-[#e2e2e2]">{studentData.fatherMobile}</td>
                  <td className="align-top py-[10px] px-3"></td>
                </tr>
                <tr>
                  <td className="align-top py-[10px] px-3 border-r border-[#e2e2e2]">Student</td>
                  <td className="align-top py-[10px] px-3 border-r border-[#e2e2e2]"></td>
                  <td className="align-top py-[10px] px-3 border-r border-[#e2e2e2]"></td>
                  <td className="align-top py-[10px] px-3 border-r border-[#e2e2e2]">{studentData.contact}</td>
                  <td className="align-top py-[10px] px-3">{studentData.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 4: SUSPENSION DETAILS */}
        <div className="font-['Arial',sans-serif]">
          <div className="inline-block bg-[#4b559b] text-white text-[11.5px] font-bold px-3.5 py-[5px] rounded-[4px] uppercase tracking-wide mb-[3px]">
            SUSPENSION DETAILS
          </div>
        </div>

        {/* SECTION 5: STUDENT MENTOR DETAILS */}
        <div className="font-['Arial',sans-serif]">
          <div className="inline-block bg-[#4b559b] text-white text-[11.5px] font-bold px-3.5 py-[5px] rounded-[4px] uppercase tracking-wide mb-[3px]">
            STUDENT MENTOR DETAILS
          </div>
          <div className="bg-white border border-[#e2e2e2]">
            <table className="w-full text-left text-[13.5px] border-collapse">
              <thead>
                <tr className="bg-[#f0f0f0] text-[#111] border-b border-[#e2e2e2]">
                  <th className="font-bold py-[8px] px-3 border-r border-[#e2e2e2]">Mentor Name</th>
                  <th className="font-bold py-[8px] px-3 border-r border-[#e2e2e2]">MentorId</th>
                  <th className="font-bold py-[8px] px-3 border-r border-[#e2e2e2]">Mentor Department</th>
                  <th className="font-bold py-[8px] px-3">Mentor Designation</th>
                </tr>
              </thead>
              <tbody className="text-[#444] divide-y divide-[#e2e2e2]">
                <tr>
                  <td className="align-top py-[10px] px-3 border-r border-[#e2e2e2]">NA</td>
                  <td className="align-top py-[10px] px-3 border-r border-[#e2e2e2]">E20382</td>
                  <td className="align-top py-[10px] px-3 border-r border-[#e2e2e2]">NA</td>
                  <td className="align-top py-[10px] px-3">NA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 6: FACILITIES AVAILED */}
        <div className="font-['Arial',sans-serif]">
          <div className="inline-block bg-[#4b559b] text-white text-[11.5px] font-bold px-3.5 py-[5px] rounded-[4px] uppercase tracking-wide mb-[3px]">
            FACILITIES AVAILED
          </div>
        </div>

      </div>

      {/* Bottom Contact Footer Banner */}
      <div className="bg-[#1f2937] text-white py-3 px-4 rounded-xl shadow-xs text-xs flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left mt-8">
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
