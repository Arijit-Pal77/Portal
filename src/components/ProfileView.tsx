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
        <div>
          {/* Section Pill Badge */}
          <div className="inline-block bg-[#324b72] text-white text-[10px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider mb-2 shadow-2xs">
            STUDENT PERSONAL INFORMATION
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-2xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Fields Grid (9 or 10 cols) */}
              <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-xs">
                
                {/* Col 1 */}
                <div className="space-y-2">
                  <div className="grid grid-cols-12">
                    <span className="col-span-5 font-bold text-slate-800">UID</span>
                    <span className="col-span-7 font-medium text-slate-900">: {studentData.id}</span>
                  </div>

                  <div className="grid grid-cols-12">
                    <span className="col-span-5 font-bold text-slate-800">Name</span>
                    <span className="col-span-7 font-bold text-slate-900">: {studentData.name}</span>
                  </div>

                  <div className="grid grid-cols-12">
                    <span className="col-span-5 font-bold text-slate-800">Father's Name</span>
                    <span className="col-span-7 font-medium text-slate-900">: {studentData.fatherName}</span>
                  </div>

                  <div className="grid grid-cols-12">
                    <span className="col-span-5 font-bold text-slate-800">Mother's Name</span>
                    <span className="col-span-7 font-medium text-slate-900">: {studentData.motherName}</span>
                  </div>

                  <div className="grid grid-cols-12">
                    <span className="col-span-5 font-bold text-slate-800">Religion</span>
                    <span className="col-span-7 font-medium text-slate-900">: {studentData.religion}</span>
                  </div>

                  <div className="grid grid-cols-12">
                    <span className="col-span-5 font-bold text-slate-800">D.O.B.</span>
                    <span className="col-span-7 font-medium text-slate-900">: {studentData.dob}</span>
                  </div>

                  <div className="grid grid-cols-12">
                    <span className="col-span-5 font-bold text-slate-800">Admission Year</span>
                    <span className="col-span-7 font-medium text-slate-900">: {studentData.admissionYear}</span>
                  </div>

                  <div className="grid grid-cols-12">
                    <span className="col-span-5 font-bold text-slate-800">University</span>
                    <span className="col-span-7 font-medium text-slate-900">: {studentData.university}</span>
                  </div>
                </div>

                {/* Col 2 */}
                <div className="space-y-2">
                  <div className="grid grid-cols-12">
                    <span className="col-span-5 font-bold text-slate-800">Current Semester</span>
                    <span className="col-span-7 font-medium text-slate-900">: {studentData.currentSemester}</span>
                  </div>

                  <div className="grid grid-cols-12">
                    <span className="col-span-5 font-bold text-slate-800">Blood Group</span>
                    <span className="col-span-7 font-medium text-slate-900">: {studentData.bloodGroup}</span>
                  </div>

                  <div className="grid grid-cols-12">
                    <span className="col-span-5 font-bold text-slate-800">Current Section</span>
                    <span className="col-span-7 font-medium text-slate-900">: {studentData.currentSection}</span>
                  </div>

                  <div className="grid grid-cols-12">
                    <span className="col-span-5 font-bold text-slate-800">Program Code</span>
                    <span className="col-span-7 font-medium text-slate-900">: {studentData.programCode}</span>
                  </div>

                  <div className="grid grid-cols-12">
                    <span className="col-span-5 font-bold text-slate-800">Student Status</span>
                    <span className="col-span-7 font-medium text-slate-900">: {studentData.studentStatus}</span>
                  </div>

                  <div className="grid grid-cols-12">
                    <span className="col-span-5 font-bold text-slate-800">Cast</span>
                    <span className="col-span-7 font-medium text-slate-900">: {studentData.caste}</span>
                  </div>

                  <div className="grid grid-cols-12">
                    <span className="col-span-5 font-bold text-slate-800">Address</span>
                    <span className="col-span-7 font-medium text-slate-900 leading-tight">
                      : {studentData.fullAddress}
                    </span>
                  </div>
                </div>

              </div>

              {/* Photo Box Column (3 cols) */}
              <div className="lg:col-span-3 flex flex-col items-center lg:items-end space-y-2">
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handlePhotoUpload} 
                  accept="image/*" 
                  className="hidden" 
                  id="profile-photo-file-input"
                />
                <div 
                  className="w-32 h-40 border-2 border-black rounded-lg overflow-hidden bg-gray-100 p-0.5 shadow-2xs relative"
                  id="profile-student-photo-box"
                >
                  <img 
                    src={photo} 
                    alt={studentData.name} 
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* SECTION 2: QUALIFICATION DETAILS */}
        <div>
          <div className="inline-block bg-[#324b72] text-white text-[10px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider mb-2 shadow-2xs">
            QUALIFICATION DETAILS
          </div>

          <div className="bg-white border border-slate-200 rounded-lg overflow-x-auto shadow-2xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#f2f4f8] text-slate-900 font-bold border-b border-slate-300">
                  <th className="py-2.5 px-3 border-r border-slate-200">Qualification</th>
                  <th className="py-2.5 px-3 border-r border-slate-200">Stream</th>
                  <th className="py-2.5 px-3 border-r border-slate-200">Collage School Institute</th>
                  <th className="py-2.5 px-3 border-r border-slate-200">University Board</th>
                  <th className="py-2.5 px-3 border-r border-slate-200 text-center">Passign Year</th>
                  <th className="py-2.5 px-3 border-r border-slate-200 text-center">Percent Marks</th>
                  <th className="py-2.5 px-3">Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-2.5 px-3 border-r border-slate-200 font-semibold">10th</td>
                  <td className="py-2.5 px-3 border-r border-slate-200">GENERAL</td>
                  <td className="py-2.5 px-3 border-r border-slate-200 font-medium">PATRASAYER BAMIRA GURUDAS INSTITUTION PATRASAYER</td>
                  <td className="py-2.5 px-3 border-r border-slate-200">WEST BENGAL BOARD OF SECONDARY EDUCATION</td>
                  <td className="py-2.5 px-3 border-r border-slate-200 text-center">2023</td>
                  <td className="py-2.5 px-3 border-r border-slate-200 text-center font-bold">89.14</td>
                  <td className="py-2.5 px-3"></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-2.5 px-3 border-r border-slate-200 font-semibold">10+2</td>
                  <td className="py-2.5 px-3 border-r border-slate-200">PCM</td>
                  <td className="py-2.5 px-3 border-r border-slate-200 font-medium">BANKURA HINDU HIGH SCHOOL BANKURA</td>
                  <td className="py-2.5 px-3 border-r border-slate-200">WEST BENGAL COUNCIL OF HIGHER SECONDARY EDUCATION</td>
                  <td className="py-2.5 px-3 border-r border-slate-200 text-center">2025</td>
                  <td className="py-2.5 px-3 border-r border-slate-200 text-center font-bold">90.6</td>
                  <td className="py-2.5 px-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 3: CONTACT DETAILS */}
        <div>
          <div className="inline-block bg-[#324b72] text-white text-[10px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider mb-2 shadow-2xs">
            CONTACT DETAILS
          </div>

          <div className="bg-white border border-slate-200 rounded-lg overflow-x-auto shadow-2xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#f2f4f8] text-slate-900 font-bold border-b border-slate-300">
                  <th className="py-2.5 px-3 border-r border-slate-200 w-36">Contact Type</th>
                  <th className="py-2.5 px-3 border-r border-slate-200">Residence</th>
                  <th className="py-2.5 px-3 border-r border-slate-200">Office</th>
                  <th className="py-2.5 px-3 border-r border-slate-200">Mobile</th>
                  <th className="py-2.5 px-3">EmailId</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-2.5 px-3 border-r border-slate-200 font-semibold">Father</td>
                  <td className="py-2.5 px-3 border-r border-slate-200"></td>
                  <td className="py-2.5 px-3 border-r border-slate-200"></td>
                  <td className="py-2.5 px-3 border-r border-slate-200 font-medium">{studentData.fatherMobile}</td>
                  <td className="py-2.5 px-3"></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-2.5 px-3 border-r border-slate-200 font-semibold">Student</td>
                  <td className="py-2.5 px-3 border-r border-slate-200"></td>
                  <td className="py-2.5 px-3 border-r border-slate-200"></td>
                  <td className="py-2.5 px-3 border-r border-slate-200 font-medium">{studentData.contact}</td>
                  <td className="py-2.5 px-3 text-black font-medium">{studentData.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 4: SUSPENSION DETAILS */}
        <div>
          <div className="inline-block bg-[#324b72] text-white text-[10px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider mb-2 shadow-2xs">
            SUSPENSION DETAILS
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-3 text-xs text-slate-500 shadow-2xs">
            No disciplinary suspensions or records found.
          </div>
        </div>

        {/* SECTION 5: STUDENT MENTOR DETAILS */}
        <div>
          <div className="inline-block bg-[#324b72] text-white text-[10px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider mb-2 shadow-2xs">
            STUDENT MENTOR DETAILS
          </div>

          <div className="bg-white border border-slate-200 rounded-lg overflow-x-auto shadow-2xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#f2f4f8] text-slate-900 font-bold border-b border-slate-300">
                  <th className="py-2.5 px-3 border-r border-slate-200">Mentor Name</th>
                  <th className="py-2.5 px-3 border-r border-slate-200">MentorId</th>
                  <th className="py-2.5 px-3 border-r border-slate-200">Mentor Department</th>
                  <th className="py-2.5 px-3">Mentor Designation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-2.5 px-3 border-r border-slate-200 font-semibold">NA</td>
                  <td className="py-2.5 px-3 border-r border-slate-200 font-bold text-slate-900">E20382</td>
                  <td className="py-2.5 px-3 border-r border-slate-200">NA</td>
                  <td className="py-2.5 px-3">NA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 6: FACILITIES AVAILED */}
        <div>
          <div className="inline-block bg-[#324b72] text-white text-[10px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider mb-2 shadow-2xs">
            FACILITIES AVAILED
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-3 text-xs text-slate-800 font-medium shadow-2xs">
            <span className="font-bold text-slate-900">Hostel Resident:</span> {hostelData.status} ({hostelData.hostelName}, Room {hostelData.roomNo})
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
