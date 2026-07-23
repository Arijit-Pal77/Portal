import React, { useState } from 'react';
import { NavTab } from './types';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { HostelDetails } from './components/HostelDetails';
import { VirtualIDCard } from './components/VirtualIDCard';
import { ProfileView } from './components/ProfileView';
import { GenericView } from './components/GenericView';
import { Bug, Phone, Mail } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isHostelExpanded, setIsHostelExpanded] = useState(true);

  const handleSelectTab = (tab: NavTab) => {
    setActiveTab(tab);
    if (tab === 'hostel-details' || tab === 'hostel-refund') {
      setIsHostelExpanded(true);
    }
  };

  const renderMainContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <Dashboard 
            onGoToIDCard={() => setActiveTab('id-card')} 
            onGoToHostel={() => {
              setIsHostelExpanded(true);
              setActiveTab('hostel-details');
            }} 
          />
        );
      case 'hostel-details':
        return <HostelDetails />;
      case 'hostel-refund':
        return <GenericView title="Hostel Refund Policy" description="Official hostel fee refund regulations, eligibility terms, and refund request submission procedures for resident students." />;
      case 'id-card':
        return <VirtualIDCard onBack={() => setActiveTab('dashboard')} />;
      case 'profile':
        return <ProfileView />;
      case 'academics':
        return <GenericView title="Academics" description="Access course registrations, syllabus structures, credit breakdowns, and semester timetables." />;
      case 'accounts':
        return <GenericView title="Accounts & Fees" description="View fee payment histories, download fee receipts, and check pending tuition dues." />;
      case 'administration':
        return <GenericView title="Administration" description="Submit administrative requests, track application statuses, and download official campus passes." />;
      case 'apply-loan':
        return <GenericView title="Apply for Loan Documents" description="Request official fee structure certificates and bonafide student certificates for education loan applications." />;
      case 'apply-noc':
        return <GenericView title="Apply for NOC" description="Submit online applications for No Objection Certificates (NOC) for internships, passports, or higher studies." />;
      case 'csw':
        return <GenericView title="Centre For Student Wellbeing (CSW)" description="Access counseling support, wellness initiatives, and student mentorship resources." />;
      case 'counseling':
        return <GenericView title="Counseling Therapy Clinic Registration" description="Register for confidential health & psychological therapy sessions." />;
      case 'dcpd':
        return <GenericView title="DCPD (Department of Career Planning & Development)" description="Explore placement preparation modules, soft-skill training schedules, and mock interview slots." />;
      case 'mooc':
        return <GenericView title="DLL MOOC Coordinator List" description="Contact departmental coordinators for NPTEL, Coursera, and MOOC credit transfer equivalencies." />;
      case 'elibrary':
        return <GenericView title="E Library" description="Access IEEE Xplore, ScienceDirect, SpringerLink, and digital textbook repositories." />;
      case 'examination':
        return <GenericView title="Examination Portal" description="Download exam hall tickets, view mid-term & end-term result sheets, and re-evaluation forms." />;
      case 'international':
        return <GenericView title="International Study Opportunities" description="Explore semester-exchange programs, dual-degree pathways, and global university partnerships." />;
      case 'library':
        return <GenericView title="Central Library" description="Check book circulation records, reserve physical library books, and pay library fines." />;
      case 'research-profile':
        return <GenericView title="My Research Profile" description="Track research publication submissions, patents filed, and conference paper acceptances." />;
      case 'online-test':
        return <GenericView title="Online Test Portal" description="Access scheduled quizzes, mock competitive tests, and online assessment modules." />;
      case 'phd':
        return <GenericView title="Ph.D Research & Supervision" description="Doctoral candidate progress tracking, RAC meeting logs, and thesis submission portal." />;
      case 'leave-application':
        return <GenericView title="Student Leave Application" description="Submit digital leave requests, track warden/HOD approvals, and view active gate pass logs." />;
      case 'student-placement':
        return <GenericView title="Student Placement" description="View drive schedules, eligibility status, company shortlists, and placement offer letters." />;
      case 'srms':
        return <GenericView title="Student Relation Management System (SRMS)" description="Lodge student grievances, track ticket resolution progress, and contact campus helpline." />;
      case 'tpp-uilah':
        return <GenericView title="TPP UILAH" description="Training & Placement Program resources for University Institute of Liberal Arts and Humanities." />;
      case 'transport':
        return <GenericView title="Transport Service" description="Bus route allocation, daily route timetables, transport pass renewal, and vehicle tracking." />;
      case 'ucmc':
        return <GenericView title="UCMC" description="University Campus Medical Centre records, health insurance claims, and emergency contact directory." />;
      default:
        return <Dashboard onGoToIDCard={() => setActiveTab('id-card')} onGoToHostel={() => setActiveTab('hostel-details')} />;
    }
  };

  return (
    <div className="h-screen bg-[#f3f5f9] flex flex-col font-sans selection:bg-blue-200 overflow-hidden">
      {/* Top Header */}
      <Header 
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        onOpenProfile={() => setActiveTab('profile')}
        onGoHome={() => setActiveTab('dashboard')}
      />

      {/* Main Workspace Layout */}
      <div className="flex flex-1 overflow-hidden min-h-0">
        {/* Left Sidebar */}
        <Sidebar 
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
          isOpen={isSidebarOpen}
          isHostelExpanded={isHostelExpanded}
          onToggleHostel={() => setIsHostelExpanded(!isHostelExpanded)}
        />

        <div className="flex-1 flex flex-col min-w-0 bg-slate-50 relative overflow-hidden">
          <main className="flex-1 overflow-y-auto custom-scrollbar transition-all w-full flex flex-col">
            <div className="flex-1 p-4 sm:p-5 min-h-max">
              {renderMainContent()}
            </div>

            {/* Footer at the bottom of the main content */}
            <footer id="footer" className="w-full shrink-0 pb-4 px-4 sm:px-5 mt-auto">
              <div className="footer-content relative">
                <div style={{ fontFamily: 'Arial, sans-serif', background: '#2c3e50', color: '#fff', padding: '12px 20px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} className="text-[13px] flex items-center justify-center flex-wrap">
                   <span className="font-semibold tracking-wide">Chandigarh University, Gharuan, Mohali (Punjab)</span>
                   <span className="mx-2.5 text-gray-400">|</span>
                   <Phone className="w-[14px] h-[14px] mr-1 text-[#e83e8c]" fill="currentColor" strokeWidth={1} /> 
                   <span className="font-bold mr-1">Helpline:</span> 
                   <span>1800 257 1800</span>
                   <span className="mx-2.5 text-gray-400">|</span>
                   <Mail className="w-[14px] h-[14px] mr-1 text-[#e0e0e0]" fill="currentColor" strokeWidth={1} /> 
                   <span className="font-bold mr-1">Email:</span> 
                   <span>studentcare@cumail.in</span>
                </div>
                <a href="#" id="a_bugreport" title="Report a bug" className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-[#ff4d4d] font-semibold cursor-pointer hover:text-red-400 transition-colors text-[13px]">
                  Report a Bug <Bug size={14} className="ml-1" />
                </a>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
