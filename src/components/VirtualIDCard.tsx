import React, { useRef } from 'react';
import { studentData } from '../data/mockData';
import { Download, ArrowLeft, Camera } from 'lucide-react';
import { useStudentPhoto } from '../hooks/useStudentPhoto';
import { downloadIdCardPdf } from '../utils/downloadIdCardPdf';

interface VirtualIDCardProps {
  onBack: () => void;
}

export const VirtualIDCard: React.FC<VirtualIDCardProps> = ({ onBack }) => {
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

  const handleResetPhoto = () => {
    resetPhoto();
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Top Controls Bar (hidden during printing) */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex flex-wrap items-center justify-between gap-3 print:hidden">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-xs font-bold text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl transition-colors cursor-pointer"
          id="back-to-portal-btn"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portal</span>
        </button>

        <div className="flex flex-wrap items-center gap-3">
          <button 
            onClick={() => downloadIdCardPdf()}
            className="flex items-center space-x-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-xl transition-colors shadow-xs cursor-pointer"
            id="download-id-pdf-btn"
          >
            <Download className="w-4 h-4" />
            <span>Download Document</span>
          </button>
        </div>
      </div>

      {/* Main Container for ID Card */}
      <div className="flex justify-center items-center py-4 print:py-0 print:m-0">
        <div 
          id="printable-id-card"
          className="w-full max-w-[720px] bg-white border-2 border-slate-300 rounded-lg shadow-xl overflow-hidden text-black font-sans relative print:shadow-none print:border-black print:max-w-none print:w-[700px]"
          style={{ fontFamily: "'Arial', 'Helvetica', sans-serif" }}
        >
          {/* Header Section */}
          <div className="px-5 py-3 border-b-2 border-slate-200 flex items-center justify-between bg-white">
            {/* CU Logo & Title */}
            <div className="flex items-center space-x-2.5">
              <img 
                src="/logo.png" 
                alt="CUIMS Logo" 
                className="h-11 w-auto object-contain flex-shrink-0"
              />
              <div>
                <h1 className="text-[#d9232a] font-extrabold text-2xl tracking-tight leading-none uppercase">
                  CHANDIGARH UNIVERSITY
                </h1>
                <p className="text-[10px] text-gray-600 font-bold italic tracking-wide mt-0.5">
                  Discover. Learn. Empower.
                </p>
              </div>
            </div>

            {/* Barcode & University ID */}
            <div className="text-right flex flex-col items-end">
              {/* SVG Simulated Barcode */}
              <div className="bg-white p-1 rounded">
                <svg className="h-9 w-48" viewBox="0 0 200 40">
                  <rect x="0" y="0" width="4" height="30" fill="black" />
                  <rect x="6" y="0" width="2" height="30" fill="black" />
                  <rect x="10" y="0" width="6" height="30" fill="black" />
                  <rect x="18" y="0" width="2" height="30" fill="black" />
                  <rect x="22" y="0" width="4" height="30" fill="black" />
                  <rect x="28" y="0" width="2" height="30" fill="black" />
                  <rect x="32" y="0" width="8" height="30" fill="black" />
                  <rect x="42" y="0" width="2" height="30" fill="black" />
                  <rect x="46" y="0" width="4" height="30" fill="black" />
                  <rect x="52" y="0" width="6" height="30" fill="black" />
                  <rect x="60" y="0" width="2" height="30" fill="black" />
                  <rect x="64" y="0" width="4" height="30" fill="black" />
                  <rect x="70" y="0" width="2" height="30" fill="black" />
                  <rect x="74" y="0" width="6" height="30" fill="black" />
                  <rect x="82" y="0" width="2" height="30" fill="black" />
                  <rect x="86" y="0" width="4" height="30" fill="black" />
                  <rect x="92" y="0" width="8" height="30" fill="black" />
                  <rect x="102" y="0" width="2" height="30" fill="black" />
                  <rect x="106" y="0" width="4" height="30" fill="black" />
                  <rect x="112" y="0" width="6" height="30" fill="black" />
                  <rect x="120" y="0" width="2" height="30" fill="black" />
                  <rect x="124" y="0" width="4" height="30" fill="black" />
                  <rect x="130" y="0" width="2" height="30" fill="black" />
                  <rect x="134" y="0" width="6" height="30" fill="black" />
                  <rect x="142" y="0" width="2" height="30" fill="black" />
                  <rect x="146" y="0" width="4" height="30" fill="black" />
                  <rect x="152" y="0" width="8" height="30" fill="black" />
                  <rect x="162" y="0" width="2" height="30" fill="black" />
                  <rect x="166" y="0" width="4" height="30" fill="black" />
                  <rect x="172" y="0" width="6" height="30" fill="black" />
                  <rect x="180" y="0" width="2" height="30" fill="black" />
                  <rect x="184" y="0" width="4" height="30" fill="black" />
                  <rect x="190" y="0" width="8" height="30" fill="black" />
                  <text x="100" y="38" textAnchor="middle" fontSize="9" fontWeight="bold">
                    *{studentData.id}*
                  </text>
                </svg>
              </div>
              <div className="text-[12px] font-bold text-black mt-0.5">
                UNIVERSITY ID <span className="text-red-600 font-extrabold">{studentData.id}</span>
              </div>
            </div>
          </div>

          {/* Middle Body Section */}
          <div className="p-4 flex items-start justify-between relative bg-white">
            
            {/* Left: Photo + Signature */}
            <div className="w-32 flex flex-col items-center flex-shrink-0">
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handlePhotoUpload} 
                accept="image/*" 
                className="hidden" 
                id="student-photo-input"
              />
              <div 
                className="w-28 h-32 border-2 border-black overflow-hidden bg-gray-100 shadow-2xs relative"
              >
                <img 
                  src={photo} 
                  alt={studentData.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Signature */}
              <div className="mt-2 text-center w-full">
                <div className="h-7 flex items-center justify-center">
                  <span className="font-serif italic text-sm font-bold tracking-widest text-slate-800 select-none">
                    A. Pal
                  </span>
                </div>
                <div className="border-t border-slate-400 pt-0.5 text-[9px] font-bold uppercase text-gray-700 tracking-tight">
                  Issuing Authority
                </div>
              </div>
            </div>

            {/* Center: Details Grid */}
            <div className="flex-1 px-4 text-[11px] font-bold text-black space-y-1">
              <div className="grid grid-cols-12 leading-tight">
                <span className="col-span-4 uppercase text-black font-extrabold">NAME</span>
                <span className="col-span-8 uppercase font-black text-black">: {studentData.name}</span>
              </div>

              <div className="grid grid-cols-12 leading-tight">
                <span className="col-span-4 uppercase text-black font-extrabold">COURSE</span>
                <span className="col-span-8 uppercase font-bold text-black">: {studentData.course}</span>
              </div>

              <div className="grid grid-cols-12 leading-tight">
                <span className="col-span-4 uppercase text-black font-extrabold">FATHER'S NAME</span>
                <span className="col-span-8 uppercase font-bold text-black">: {studentData.fatherName}</span>
              </div>

              <div className="grid grid-cols-12 leading-tight">
                <span className="col-span-4 uppercase text-black font-extrabold">MOTHER'S NAME</span>
                <span className="col-span-8 uppercase font-bold text-black">: {studentData.motherName}</span>
              </div>

              <div className="grid grid-cols-12 leading-tight">
                <span className="col-span-4 uppercase text-black font-extrabold">CONTACT</span>
                <span className="col-span-8 uppercase font-bold text-black">: {studentData.contact}</span>
              </div>

              <div className="grid grid-cols-12 leading-tight pt-1">
                <span className="col-span-4 uppercase text-red-600 font-extrabold">ADDRESS</span>
                <span className="col-span-8 uppercase font-extrabold text-black text-[10px] break-words">
                  : {studentData.address}
                </span>
              </div>

              <div className="pt-1 text-right text-[10px]">
                <span className="text-red-600 font-extrabold uppercase">VALID TILL : {studentData.validTill}</span>
              </div>
            </div>

            {/* Right: Vertical Badge HOSTELLER */}
            <div className="w-8 flex items-center justify-center flex-shrink-0 self-stretch">
              <div className="rotate-90 origin-center text-emerald-600 font-extrabold text-sm tracking-widest uppercase border border-emerald-600/40 px-3 py-0.5 rounded-sm bg-emerald-50 whitespace-nowrap">
                {studentData.category}
              </div>
            </div>

          </div>

          {/* Sub certification text line */}
          <div className="px-4 py-1 text-center text-[9.5px] italic font-semibold text-slate-800 border-t border-slate-200 bg-gray-50/50">
            Certified that above mentioned student is registered under Chandigarh University
          </div>

          {/* Bottom Banner Row */}
          <div className="grid grid-cols-12 bg-black text-white text-[9.5px] font-sans">
            {/* Red Left Box */}
            <div className="col-span-8 bg-[#c8102e] p-2.5 leading-tight flex flex-col justify-center">
              <p className="font-bold">1. Student must carry & wear this card during the campus hour</p>
              <p className="font-bold">2. This card is issued for identification purpose only.</p>
              <p className="text-[8.5px] italic text-red-100 font-normal mt-0.5">
                (This Virtual ID Card is valid only up to commencement of regular on-campus classes.)
              </p>
            </div>

            {/* Dark Right Box */}
            <div className="col-span-4 bg-black p-2.5 text-right flex flex-col justify-center border-l border-red-900 leading-tight">
              <a href="https://www.cuchd.in" target="_blank" rel="noreferrer" className="text-white font-bold hover:underline">
                www.cuchd.in
              </a>
              <p className="font-extrabold text-white">1800 200 0025</p>
              <p className="text-[7.5px] text-gray-300 font-medium mt-0.5">
                If found please return to Chandigarh University Tel +91-160 3014444, 3014424
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
