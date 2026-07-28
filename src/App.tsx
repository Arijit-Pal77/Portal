import React, { useState, useEffect } from 'react';
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

  const toggleMenu = (menu: string) => {
    setExpandedMenus(prev => {
      const isCurrentlyOpen = prev.includes(menu);
      
      if (isCurrentlyOpen) {
        // If closing academics, also close its nested menus
        if (menu === 'academics') {
           return prev.filter(m => m !== 'academics' && m !== 'dll' && m !== 'project');
        }
        return prev.filter(m => m !== menu);
      } else {
        // If opening a nested menu, keep parent academics open, but close other nested menus
        if (menu === 'dll' || menu === 'project') {
          return ['academics', menu];
        }
        // If opening a top-level menu, close all other top-level menus
        return [menu];
      }
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSelectTab = (tab: NavTab) => {
    setActiveTab(tab);
    const academicsTabs = ['dll', 'dll-proficiency', 'attendance', 'attendance-acp', 'courses', 'timetable', 'timetable-acp', 'project', 'project-dashboard', 'project-request', 'resource-library', 'social-internship'];
    const accountsTabs = ['accounts-receipt', 'accounts-statement', 'fee-submission'];
    const adminTabs = ['admission-referral', 'cge', 'complaint-harassment', 'document-upload', 'golf-cart', 'international-student', 'medical-insurance'];
    const cswTabs = ['mentoring'];
    const dcpdTabs = ['dcpd-career', 'dcpd-assessments', 'dcpd-exams', 'dcpd-content', 'dcpd-events', 'dcpd-magazines', 'dcpd-policies', 'evening-cucat'];
    const elibraryTabs = ['ebsco-ebook', 'ebsco-management', 'ebsco-ejournal', 'ieee', 'jgate-science', 'jgate-soc', 'publication-finder', 'web-of-science'];
    const libraryTabs = ['library-repository', 'library-discussion'];
    const leaveTabs = ['leave-duty', 'leave-general', 'leave-medical'];
    const srmsTabs = ['srms-clubs', 'srms-event', 'srms-care', 'srms-talent'];
    const transportTabs = ['transport-details', 'transport-consent-1', 'transport-consent-2'];

    if (tab === 'hostel-details' || tab === 'hostel-refund') {
      if (!expandedMenus.includes('hostel')) toggleMenu('hostel');
    } else if (academicsTabs.includes(tab)) {
      if (!expandedMenus.includes('academics')) toggleMenu('academics');
      if (tab === 'dll-proficiency' && !expandedMenus.includes('dll')) toggleMenu('dll');
      if (['project-dashboard', 'project-request'].includes(tab) && !expandedMenus.includes('project')) toggleMenu('project');
    } else if (accountsTabs.includes(tab)) {
      if (!expandedMenus.includes('accounts')) toggleMenu('accounts');
    } else if (adminTabs.includes(tab)) {
      if (!expandedMenus.includes('administration')) toggleMenu('administration');
    } else if (cswTabs.includes(tab)) {
      if (!expandedMenus.includes('csw')) toggleMenu('csw');
    } else if (dcpdTabs.includes(tab)) {
      if (!expandedMenus.includes('dcpd')) toggleMenu('dcpd');
    } else if (elibraryTabs.includes(tab)) {
      if (!expandedMenus.includes('elibrary')) toggleMenu('elibrary');
    } else if (libraryTabs.includes(tab)) {
      if (!expandedMenus.includes('library')) toggleMenu('library');
    } else if (leaveTabs.includes(tab)) {
      if (!expandedMenus.includes('leave-application')) toggleMenu('leave-application');
    } else if (srmsTabs.includes(tab)) {
      if (!expandedMenus.includes('srms')) toggleMenu('srms');
    } else if (transportTabs.includes(tab)) {
      if (!expandedMenus.includes('transport')) toggleMenu('transport');
    }

    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  const renderMainContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <Dashboard 
            onGoToIDCard={() => setActiveTab('id-card')} 
            onGoToHostel={() => {
              if (!expandedMenus.includes('hostel')) toggleMenu('hostel');
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
      case 'dll':
        return <GenericView title="Department of Life Long(DLL)" description="Information and resources from the Department of Life Long." />;
      case 'dll-proficiency':
        return <GenericView title="General Proficiency Choice" description="Select your general proficiency courses." />;
      case 'attendance':
        return <GenericView title="My Attendance" description="Check your daily and overall attendance records." />;
      case 'attendance-acp':
        return <GenericView title="My Attendance ACP/Winning Camp" description="View attendance for ACP and Winning Camp modules." />;
      case 'courses':
        return <GenericView title="My Courses and Lecture Plan" description="Access course materials, lecture plans, and registered subjects." />;
      case 'timetable':
        return <GenericView title="My Time Table" description="Check your weekly schedule, class timings, and room allocations." />;
      case 'timetable-acp':
        return <GenericView title="My Time Table ACP/Winning Camp" description="Special timetable for ACP and Winning Camp." />;
      case 'project':
        return <GenericView title="Project" description="Manage your academic projects, submissions, and mentor interactions." />;
      case 'resource-library':
        return <GenericView title="Resource Library" description="Access academic papers, past year questions, and university resources." />;
      case 'social-internship':
        return <GenericView title="Social Internship" description="Track and submit your social internship details." />;
      case 'accounts':
        return <GenericView title="Accounts & Fees" description="View fee payment histories, download fee receipts, and check pending tuition dues." />;
      case 'accounts-receipt':
        return <GenericView title="Accounts Reciept" description="Download and view your fee payment receipts." />;
      case 'accounts-statement':
        return <GenericView title="Accounts Statement/ Fee Payment" description="View your account statement and make fee payments." />;
      case 'fee-submission':
        return <GenericView title="Fee Submission Appointment" description="Book an appointment for offline fee submission." />;
      case 'administration':
        return <GenericView title="Administration" description="Submit administrative requests, track application statuses, and download official campus passes." />;
      case 'admission-referral':
        return <GenericView title="Admission Referral" description="Submit and track your admission referrals." />;
      case 'cge':
        return <GenericView title="Centre for Global Education (CGE)" description="Explore global education and exchange programs." />;
      case 'complaint-harassment':
        return <GenericView title="Complaint Against Harassment" description="Submit a formal complaint against harassment." />;
      case 'document-upload':
        return <GenericView title="Document Upload" description="Upload required administrative documents." />;
      case 'golf-cart':
        return <GenericView title="Golf Cart Feedback" description="Submit feedback regarding the campus golf cart service." />;
      case 'international-student':
        return <GenericView title="International Student Application Form" description="Access forms for international students." />;
      case 'medical-insurance':
        return <GenericView title="University Medical Insurance" description="View and manage your university medical insurance details." />;
      case 'apply-loan':
        return <GenericView title="Apply for Loan Documents" description="Request official fee structure certificates and bonafide student certificates for education loan applications." />;
      case 'apply-noc':
        return <GenericView title="Apply for NOC" description="Submit online applications for No Objection Certificates (NOC) for internships, passports, or higher studies." />;
      case 'csw':
        return <GenericView title="Centre For Student Wellbeing (CSW)" description="Access counseling support, wellness initiatives, and student mentorship resources." />;
      case 'mentoring':
        return <GenericView title="Mentoring" description="Connect with your assigned mentor and view mentoring session details." />;
      case 'counseling':
        return <GenericView title="Counseling Therapy Clinic Registration" description="Register for confidential health & psychological therapy sessions." />;
      case 'dcpd':
        return <GenericView title="DCPD (Department of Career Planning & Development)" description="Explore placement preparation modules, soft-skill training schedules, and mock interview slots." />;
      case 'dcpd-career':
        return <GenericView title="Career Options by DCPD" description="Explore various career options and pathways provided by DCPD." />;
      case 'dcpd-assessments':
        return <GenericView title="DCPD Assessments" description="View your assessment scores and feedback." />;
      case 'dcpd-exams':
        return <GenericView title="DCPD Competitive Exams" description="Information and preparation materials for competitive exams." />;
      case 'dcpd-content':
        return <GenericView title="DCPD Content" description="Access study materials and resources provided by DCPD." />;
      case 'dcpd-events':
        return <GenericView title="DCPD Events" description="Register for upcoming DCPD events and workshops." />;
      case 'dcpd-magazines':
        return <GenericView title="DCPD Magazines" description="Read the latest DCPD magazines and publications." />;
      case 'dcpd-policies':
        return <GenericView title="DCPD Policies" description="View policies and guidelines from the Department of Career Planning & Development." />;
      case 'evening-cucat':
        return <GenericView title="Evening CUCAT" description="Details and registration for the Evening CUCAT program." />;
      case 'mooc':
        return <GenericView title="DLL MOOC Coordinator List" description="Contact departmental coordinators for NPTEL, Coursera, and MOOC credit transfer equivalencies." />;
      case 'elibrary':
        return <GenericView title="E Library" description="Access IEEE Xplore, ScienceDirect, SpringerLink, and digital textbook repositories." />;
      case 'ebsco-ebook':
        return <GenericView title="EBSCO eBook Academic Collection" description="Access the EBSCO eBook academic collection." />;
      case 'ebsco-management':
        return <GenericView title="EBSCO Management Collection" description="Access the EBSCO management collection." />;
      case 'ebsco-ejournal':
        return <GenericView title="EBSCOhost E-Journal Access(Art and Architecture)" description="Access EBSCOhost E-Journals for Art and Architecture." />;
      case 'ieee':
        return <GenericView title="IEEE" description="Access IEEE digital library resources." />;
      case 'jgate-science':
        return <GenericView title="J-Gate (Science & Technology)" description="Access J-Gate resources for Science and Technology." />;
      case 'jgate-soc':
        return <GenericView title="J-Gate (Soc. Science and Humanities)" description="Access J-Gate resources for Social Science and Humanities." />;
      case 'publication-finder':
        return <GenericView title="Publication Finder and Open Athens" description="Search for publications using Publication Finder and Open Athens." />;
      case 'web-of-science':
        return <GenericView title="Web of Science" description="Access the Web of Science database." />;
      case 'examination':
        return <GenericView title="Examination Portal" description="Download exam hall tickets, view mid-term & end-term result sheets, and re-evaluation forms." />;
      case 'international':
        return <GenericView title="International Study Opportunities" description="Explore semester-exchange programs, dual-degree pathways, and global university partnerships." />;
      case 'library':
        return <GenericView title="Central Library" description="Check book circulation records, reserve physical library books, and pay library fines." />;
      case 'library-repository':
        return <GenericView title="CU E-Repository" description="Access the university electronic repository." />;
      case 'library-discussion':
        return <GenericView title="Library Discussion Room Booking" description="Book a discussion room in the central library." />;
      case 'research-profile':
        return <GenericView title="My Research Profile" description="Track research publication submissions, patents filed, and conference paper acceptances." />;
      case 'online-test':
        return <GenericView title="Online Test Portal" description="Access scheduled quizzes, mock competitive tests, and online assessment modules." />;
      case 'phd':
        return <GenericView title="Ph.D Research & Supervision" description="Doctoral candidate progress tracking, RAC meeting logs, and thesis submission portal." />;
      case 'leave-application':
        return <GenericView title="Student Leave Application" description="Submit digital leave requests, track warden/HOD approvals, and view active gate pass logs." />;
      case 'leave-duty':
        return <GenericView title="Duty Leave" description="Apply for duty leave." />;
      case 'leave-general':
        return <GenericView title="General Leave" description="Apply for general leave." />;
      case 'leave-medical':
        return <GenericView title="Medical Leave" description="Apply for medical leave." />;
      case 'student-placement':
        return <GenericView title="Student Placement" description="View drive schedules, eligibility status, company shortlists, and placement offer letters." />;
      case 'srms':
        return <GenericView title="Student Relation Management System (SRMS)" description="Lodge student grievances, track ticket resolution progress, and contact campus helpline." />;
      case 'srms-clubs':
        return <GenericView title="Clubs & Societies" description="Explore university clubs and societies." />;
      case 'srms-event':
        return <GenericView title="Event Review" description="Review past events and provide feedback." />;
      case 'srms-care':
        return <GenericView title="Online Student Care Center Requests" description="Submit a request to the student care center." />;
      case 'srms-talent':
        return <GenericView title="Talent Search Program" description="Participate in the university talent search program." />;
      case 'tpp-uilah':
        return <GenericView title="TPP UILAH" description="Training & Placement Program resources for University Institute of Liberal Arts and Humanities." />;
      case 'transport':
        return <GenericView title="Transport Service" description="Bus route allocation, daily route timetables, transport pass renewal, and vehicle tracking." />;
      case 'transport-details':
        return <GenericView title="Transport Details" description="View details of your assigned transport." />;
      case 'transport-consent-1':
        return <GenericView title="Transport Consent" description="Submit your transport consent form." />;
      case 'transport-consent-2':
        return <GenericView title="Transport Consent" description="Submit your transport consent form." />;
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
      <div className="flex flex-1 overflow-hidden min-h-0 relative">
        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-slate-900/50 z-30 md:hidden backdrop-blur-sm transition-opacity"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Left Sidebar */}
        <Sidebar 
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
          isOpen={isSidebarOpen}
          expandedMenus={expandedMenus}
          onToggleMenu={toggleMenu}
        />

        <div className="flex-1 flex flex-col min-w-0 bg-slate-50 relative overflow-hidden">
          <main className="flex-1 overflow-y-auto custom-scrollbar transition-all w-full flex flex-col">
            <div className="flex-1 p-4 sm:p-5 min-h-max">
              {renderMainContent()}
            </div>

            {/* Footer at the bottom of the main content */}
            <footer id="footer" className="w-full shrink-0 pb-4 px-4 sm:px-5 mt-auto">
              <div className="footer-content">
                <div style={{ fontFamily: 'Arial, sans-serif', background: '#2c3e50', color: '#fff', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} className="relative px-4 py-3 pb-10 md:pb-3 text-[13px] text-center">
                  
                  <div className="flex items-center justify-center flex-wrap gap-x-2 gap-y-1.5 max-w-full md:max-w-[calc(100%-140px)] mx-auto">
                     <span className="font-semibold tracking-wide w-full lg:w-auto">Chandigarh University, Gharuan, Mohali (Punjab)</span>
                     <span className="hidden lg:inline text-gray-400">|</span>
                     <span className="flex items-center justify-center">
                       <Phone className="w-[14px] h-[14px] mr-1 text-[#e83e8c]" fill="currentColor" strokeWidth={1} /> 
                       <span className="font-bold mr-1">Helpline:</span> 
                       <span>1800 257 1800</span>
                     </span>
                     <span className="hidden sm:inline text-gray-400">|</span>
                     <span className="flex items-center justify-center">
                       <Mail className="w-[14px] h-[14px] mr-1 text-[#e0e0e0]" fill="currentColor" strokeWidth={1} /> 
                       <span className="font-bold mr-1">Email:</span> 
                       <span>studentcare@cumail.in</span>
                     </span>
                  </div>

                  <a href="#" id="a_bugreport" title="Report a bug" className="absolute bottom-2.5 md:bottom-auto md:top-1/2 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-4 md:-translate-y-1/2 flex items-center text-[#ff4d4d] font-semibold cursor-pointer hover:text-red-400 transition-colors text-[13px]">
                    Report a Bug <Bug size={14} className="ml-1" />
                  </a>

                </div>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
