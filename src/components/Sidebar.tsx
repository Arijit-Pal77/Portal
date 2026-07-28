import React from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { NavTab } from '../types';

interface SidebarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  isOpen: boolean;
  expandedMenus: string[];
  onToggleMenu: (menu: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  isOpen,
  expandedMenus,
  onToggleMenu,
}) => {
  const isHostelActive = activeTab === 'hostel-details' || activeTab === 'hostel-refund';
  const isAcademicsActive = ['academics', 'dll', 'attendance', 'attendance-acp', 'courses', 'timetable', 'timetable-acp', 'project', 'resource-library', 'social-internship'].includes(activeTab);
  const isAccountsActive = ['accounts', 'accounts-receipt', 'accounts-statement', 'fee-submission'].includes(activeTab);
  const isAdminActive = ['administration', 'admission-referral', 'cge', 'complaint-harassment', 'document-upload', 'golf-cart', 'international-student', 'medical-insurance'].includes(activeTab);
  const isCswActive = ['csw', 'mentoring'].includes(activeTab);
  const isDcpdActive = ['dcpd', 'dcpd-career', 'dcpd-assessments', 'dcpd-exams', 'dcpd-content', 'dcpd-events', 'dcpd-magazines', 'dcpd-policies', 'evening-cucat'].includes(activeTab);
  const isElibraryActive = ['elibrary', 'ebsco-ebook', 'ebsco-management', 'ebsco-ejournal', 'ieee', 'jgate-science', 'jgate-soc', 'publication-finder', 'web-of-science'].includes(activeTab);
  const isLibraryActive = ['library', 'library-repository', 'library-discussion'].includes(activeTab);
  const isLeaveActive = ['leave-application', 'leave-duty', 'leave-general', 'leave-medical'].includes(activeTab);
  const isSrmsActive = ['srms', 'srms-clubs', 'srms-event', 'srms-care', 'srms-talent'].includes(activeTab);
  const isTransportActive = ['transport', 'transport-details', 'transport-consent-1', 'transport-consent-2'].includes(activeTab);

  const isAcademicsExpanded = expandedMenus.includes('academics');
  const isAccountsExpanded = expandedMenus.includes('accounts');
  const isAdminExpanded = expandedMenus.includes('administration');
  const isCswExpanded = expandedMenus.includes('csw');
  const isDcpdExpanded = expandedMenus.includes('dcpd');
  const isElibraryExpanded = expandedMenus.includes('elibrary');
  const isHostelExpanded = expandedMenus.includes('hostel');
  const isLibraryExpanded = expandedMenus.includes('library');
  const isLeaveExpanded = expandedMenus.includes('leave-application');
  const isSrmsExpanded = expandedMenus.includes('srms');
  const isTransportExpanded = expandedMenus.includes('transport');
  const isDllExpanded = expandedMenus.includes('dll');
  const isProjectExpanded = expandedMenus.includes('project');

  const renderSubItem = (tabId: NavTab, title: string, hasArrow: boolean = false) => (
    <li key={tabId}>
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); onSelectTab(tabId); }}
        className={`block w-full text-left pl-8 pr-4 py-1.5 text-[14px] flex items-center transition-colors font-sans group hover:bg-[#485f8b] hover:text-white ${
          activeTab === tabId ? 'font-bold text-[#001a4d] bg-blue-50/80 border-l-4 border-[#103260]' : 'text-[#3b4a6b] font-normal'
        }`}
      >
        <span className="font-bold mr-2 text-[#3b4a6b] group-hover:text-white">–</span>
        <span>{title}</span>
        {hasArrow && <ChevronRight className="w-4 h-4 ml-auto text-slate-400 group-hover:text-white" />}
      </a>
    </li>
  );

  const renderDropdownHeader = (title: string, menuKey: string, isActive: boolean, isExpanded: boolean) => (
    <a 
      href="#"
      onClick={(e) => { e.preventDefault(); onToggleMenu(menuKey); }}
      className={`w-full flex items-center justify-between px-4 py-2 transition-colors text-left group hover:bg-[#485f8b] hover:text-white ${
        isActive ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'
      }`}
    >
      <span>{title}</span>
      {isExpanded ? (
        <ChevronDown className={`w-4 h-4 text-[#001a4d] group-hover:text-white`} />
      ) : (
        <ChevronRight className={`w-4 h-4 text-[#001a4d] group-hover:text-white`} />
      )}
    </a>
  );

  const renderNestedDropdownHeader = (title: string, menuKey: string, isActive: boolean, isExpanded: boolean) => (
    <li>
      <a 
        href="#"
        onClick={(e) => { e.preventDefault(); onToggleMenu(menuKey); }}
        className={`block w-full text-left pl-8 pr-4 py-1.5 text-[14px] flex items-center justify-between transition-colors font-sans group hover:bg-[#485f8b] hover:text-white ${
          isActive ? 'font-bold text-[#001a4d] bg-blue-50/80 border-l-4 border-[#103260]' : 'text-[#3b4a6b] font-normal'
        }`}
      >
        <div className="flex items-center">
          <span className={`font-bold mr-2 ${isActive ? 'text-[#001a4d]' : 'text-[#3b4a6b]'} group-hover:text-white`}>–</span>
          <span>{title}</span>
        </div>
        {isExpanded ? (
          <ChevronDown className="w-4 h-4 ml-auto text-slate-400 group-hover:text-white" />
        ) : (
          <ChevronRight className="w-4 h-4 ml-auto text-slate-400 group-hover:text-white" />
        )}
      </a>
    </li>
  );

  const renderNestedSubItem = (tabId: NavTab, title: string) => (
    <li key={tabId}>
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); onSelectTab(tabId); }}
        className={`block w-full text-left pl-12 pr-4 py-1.5 text-[14px] flex items-center transition-colors font-sans group hover:bg-[#485f8b] hover:text-white ${
          activeTab === tabId ? 'font-bold text-[#001a4d] bg-blue-50/80 border-l-4 border-[#103260]' : 'text-[#3b4a6b] font-normal'
        }`}
      >
        <span className="font-bold mr-2 text-[#3b4a6b] group-hover:text-white">–</span>
        <span>{title}</span>
      </a>
    </li>
  );

  return (
    <aside 
      id="uims_sidebar" 
      className={`uims-sidebar swipe w-[260px] bg-white border-r border-gray-200 flex-shrink-0 h-full overflow-y-auto custom-scrollbar select-none text-[14px] font-normal py-2 shadow-xs transition-transform duration-300 ease-in-out font-sans absolute md:relative z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full md:hidden'}`}
    >
      <div className="scroll-wrapper scroll-bar" style={{ position: 'relative' }}>
        <div className="scroll-bar scroll-content scroll-scrolly_visible" style={{ height: 'auto', marginBottom: '0px', marginRight: '0px' }}>
          <ul id="menu-content" className="menu-content flex flex-col space-y-0.5">
            
            {/* Academics Dropdown */}
            <li data-toggle="collapse" className="collapsed">
              {renderDropdownHeader('Academics', 'academics', isAcademicsActive, isAcademicsExpanded)}
              {isAcademicsExpanded && (
                <ul className="sub-menu bg-white py-1 space-y-1">
                  {renderNestedDropdownHeader('Department of Life Long(DLL)', 'dll', activeTab === 'dll' || activeTab === 'dll-proficiency', isDllExpanded)}
                  {isDllExpanded && (
                    <ul className="sub-menu space-y-1">
                      {renderNestedSubItem('dll-proficiency', 'General Proficiency Choice')}
                    </ul>
                  )}
                  {renderSubItem('attendance', 'My Attendance')}
                  {renderSubItem('attendance-acp', 'My Attendance ACP/Winning Camp')}
                  {renderSubItem('courses', 'My Courses and Lecture Plan')}
                  {renderSubItem('timetable', 'My Time Table')}
                  {renderSubItem('timetable-acp', 'My Time Table ACP/Winning Camp')}
                  {renderNestedDropdownHeader('Project', 'project', activeTab === 'project' || activeTab === 'project-dashboard' || activeTab === 'project-request', isProjectExpanded)}
                  {isProjectExpanded && (
                    <ul className="sub-menu space-y-1">
                      {renderNestedSubItem('project-dashboard', 'Project Dashboard for Student')}
                      {renderNestedSubItem('project-request', 'Project Request')}
                    </ul>
                  )}
                  {renderSubItem('resource-library', 'Resource Library')}
                  {renderSubItem('social-internship', 'Social Internship', true)}
                </ul>
              )}
            </li>

            {/* Accounts Dropdown */}
            <li data-toggle="collapse" className="collapsed">
              {renderDropdownHeader('Accounts', 'accounts', isAccountsActive, isAccountsExpanded)}
              {isAccountsExpanded && (
                <ul className="sub-menu bg-white py-1 space-y-1">
                  {renderSubItem('accounts-receipt', 'Accounts Reciept')}
                  {renderSubItem('accounts-statement', 'Accounts Statement/ Fee Payment')}
                  {renderSubItem('fee-submission', 'Fee Submission Appointment')}
                </ul>
              )}
            </li>

            {/* Administration Dropdown */}
            <li data-toggle="collapse" className="collapsed">
              {renderDropdownHeader('Administration', 'administration', isAdminActive, isAdminExpanded)}
              {isAdminExpanded && (
                <ul className="sub-menu bg-white py-1 space-y-1">
                  {renderSubItem('admission-referral', 'Admission Referral')}
                  {renderSubItem('cge', 'Centre for Global Education (CGE)', true)}
                  {renderSubItem('complaint-harassment', 'Complaint Against Harassment')}
                  {renderSubItem('document-upload', 'Document Upload')}
                  {renderSubItem('golf-cart', 'Golf Cart Feedback')}
                  {renderSubItem('international-student', 'International Student Application Form')}
                  {renderSubItem('medical-insurance', 'University Medical Insurance')}
                </ul>
              )}
            </li>

            {/* Apply for Loan Documents */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('apply-loan'); }}
                className={`block w-full text-left px-4 py-2 transition-colors group hover:bg-[#485f8b] hover:text-white ${activeTab === 'apply-loan' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-apply-loan"
              >
                Apply for Loan Documents
              </a>
            </li>

            {/* Apply for NOC */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('apply-noc'); }}
                className={`block w-full text-left px-4 py-2 transition-colors group hover:bg-[#485f8b] hover:text-white ${activeTab === 'apply-noc' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-apply-noc"
              >
                Apply for NOC
              </a>
            </li>

            {/* CSW Dropdown */}
            <li data-toggle="collapse" className="collapsed">
              {renderDropdownHeader('Centre For Student Wellbeing (CSW)', 'csw', isCswActive, isCswExpanded)}
              {isCswExpanded && (
                <ul className="sub-menu bg-white py-1 space-y-1">
                  {renderSubItem('mentoring', 'Mentoring')}
                </ul>
              )}
            </li>

            {/* Counseling Therapy Clinic Registration */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('counseling'); }}
                className={`block w-full text-left px-4 py-2 transition-colors group hover:bg-[#485f8b] hover:text-white ${activeTab === 'counseling' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-counseling"
              >
                Counseling Therapy Clinic Registration
              </a>
            </li>

            {/* DCPD Dropdown */}
            <li data-toggle="collapse" className="collapsed">
              {renderDropdownHeader('DCPD', 'dcpd', isDcpdActive, isDcpdExpanded)}
              {isDcpdExpanded && (
                <ul className="sub-menu bg-white py-1 space-y-1">
                  {renderSubItem('dcpd-career', 'Career Options by DCPD')}
                  {renderSubItem('dcpd-assessments', 'DCPD Assessments')}
                  {renderSubItem('dcpd-exams', 'DCPD Competitive Exams')}
                  {renderSubItem('dcpd-content', 'DCPD Content')}
                  {renderSubItem('dcpd-events', 'DCPD Events')}
                  {renderSubItem('dcpd-magazines', 'DCPD Magazines')}
                  {renderSubItem('dcpd-policies', 'DCPD Policies')}
                  {renderSubItem('evening-cucat', 'Evening CUCAT', true)}
                </ul>
              )}
            </li>

            {/* DLL MOOC Coordinator List */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('mooc'); }}
                className={`block w-full text-left px-4 py-2 transition-colors group hover:bg-[#485f8b] hover:text-white ${activeTab === 'mooc' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-mooc"
              >
                DLL MOOC Coordinator List
              </a>
            </li>

            {/* E Library Dropdown */}
            <li data-toggle="collapse" className="collapsed">
              {renderDropdownHeader('E Library', 'elibrary', isElibraryActive, isElibraryExpanded)}
              {isElibraryExpanded && (
                <ul className="sub-menu bg-white py-1 space-y-1">
                  {renderSubItem('ebsco-ebook', 'EBSCO eBook Academic Collection')}
                  {renderSubItem('ebsco-management', 'EBSCO Management Collection')}
                  {renderSubItem('ebsco-ejournal', 'EBSCOhost E-Journal Access(Art and Architecture)')}
                  {renderSubItem('ieee', 'IEEE')}
                  {renderSubItem('jgate-science', 'J-Gate (Science & Technology)')}
                  {renderSubItem('jgate-soc', 'J-Gate (Soc. Science and Humanities)')}
                  {renderSubItem('publication-finder', 'Publication Finder and Open Athens')}
                  {renderSubItem('web-of-science', 'Web of Science')}
                </ul>
              )}
            </li>

            {/* Examination */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('examination'); }}
                className={`w-full flex items-center justify-between px-4 py-2 transition-colors text-left group hover:bg-[#485f8b] hover:text-white ${activeTab === 'examination' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-examination"
              >
                <span>Examination</span>
                <ChevronRight className="w-4 h-4 text-[#001a4d] group-hover:text-white" />
              </a>
            </li>

            {/* Hostel Dropdown Header */}
            <li data-toggle="collapse" className="collapsed">
              {renderDropdownHeader('Hostel', 'hostel', isHostelActive, isHostelExpanded)}
              {/* Sub-items when Hostel is expanded */}
              {isHostelExpanded && (
                <ul className="sub-menu bg-white py-1 space-y-1">
                  {renderSubItem('hostel-details', 'Details')}
                  {renderSubItem('hostel-refund', 'Hostel Refund Policy')}
                </ul>
              )}
            </li>

            {/* International Study Opportunities */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('international'); }}
                className={`block w-full text-left px-4 py-2 transition-colors group hover:bg-[#485f8b] hover:text-white ${activeTab === 'international' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-international"
              >
                International Study Opportunities
              </a>
            </li>

            {/* Library Dropdown */}
            <li data-toggle="collapse" className="collapsed">
              {renderDropdownHeader('Library', 'library', isLibraryActive, isLibraryExpanded)}
              {isLibraryExpanded && (
                <ul className="sub-menu bg-white py-1 space-y-1">
                  {renderSubItem('library-repository', 'CU E-Repository')}
                  {renderSubItem('library-discussion', 'Library Discussion Room Booking')}
                </ul>
              )}
            </li>

            {/* My Profile */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('profile'); }}
                className={`block w-full text-left px-4 py-2 transition-colors group hover:bg-[#485f8b] hover:text-white ${activeTab === 'profile' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-profile"
              >
                My Profile
              </a>
            </li>

            {/* My Research Profile */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('research-profile'); }}
                className={`block w-full text-left px-4 py-2 transition-colors group hover:bg-[#485f8b] hover:text-white ${activeTab === 'research-profile' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-research-profile"
              >
                My Research Profile
              </a>
            </li>

            {/* Online Test */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('online-test'); }}
                className={`block w-full text-left px-4 py-2 transition-colors group hover:bg-[#485f8b] hover:text-white ${activeTab === 'online-test' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-online-test"
              >
                Online Test
              </a>
            </li>

            {/* Ph.D Research & Supervision */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('phd'); }}
                className={`block w-full text-left px-4 py-2 transition-colors group hover:bg-[#485f8b] hover:text-white ${activeTab === 'phd' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-phd"
              >
                Ph.D Research & Supervision
              </a>
            </li>

            {/* Student Leave Application Dropdown */}
            <li data-toggle="collapse" className="collapsed">
              {renderDropdownHeader('Student Leave Application', 'leave-application', isLeaveActive, isLeaveExpanded)}
              {isLeaveExpanded && (
                <ul className="sub-menu bg-white py-1 space-y-1">
                  {renderSubItem('leave-duty', 'Duty Leave')}
                  {renderSubItem('leave-general', 'General Leave')}
                  {renderSubItem('leave-medical', 'Medical Leave')}
                </ul>
              )}
            </li>

            {/* Student Placement */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('student-placement'); }}
                className={`block w-full text-left px-4 py-2 transition-colors group hover:bg-[#485f8b] hover:text-white ${activeTab === 'student-placement' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-student-placement"
              >
                Student Placement
              </a>
            </li>

            {/* Student Relation Management System Dropdown */}
            <li data-toggle="collapse" className="collapsed">
              {renderDropdownHeader('Student Relation Management System', 'srms', isSrmsActive, isSrmsExpanded)}
              {isSrmsExpanded && (
                <ul className="sub-menu bg-white py-1 space-y-1">
                  {renderSubItem('srms-clubs', 'Clubs & Societies', true)}
                  {renderSubItem('srms-event', 'Event Review')}
                  {renderSubItem('srms-care', 'Online Student Care Center Requests')}
                  {renderSubItem('srms-talent', 'Talent Search Program')}
                </ul>
              )}
            </li>

            {/* TPP UILAH */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('tpp-uilah'); }}
                className={`block w-full text-left px-4 py-2 transition-colors group hover:bg-[#485f8b] hover:text-white ${activeTab === 'tpp-uilah' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-tpp-uilah"
              >
                TPP UILAH
              </a>
            </li>

            {/* Transport Dropdown */}
            <li data-toggle="collapse" className="collapsed">
              {renderDropdownHeader('Transport', 'transport', isTransportActive, isTransportExpanded)}
              {isTransportExpanded && (
                <ul className="sub-menu bg-white py-1 space-y-1">
                  {renderSubItem('transport-details', 'Details')}
                  {renderSubItem('transport-consent-1', 'Transport Consent')}
                  {renderSubItem('transport-consent-2', 'Transport Consent')}
                </ul>
              )}
            </li>

            {/* UCMC */}
            <li data-toggle="collapse" className="collapsed">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); onSelectTab('ucmc'); }}
                className={`w-full flex items-center justify-between px-4 py-2 transition-colors text-left group hover:bg-[#485f8b] hover:text-white ${activeTab === 'ucmc' ? 'text-[#001a4d] font-bold bg-blue-50/80' : 'text-[#001a4d]'}`}
                id="nav-ucmc"
              >
                <span>UCMC</span>
                <ChevronRight className="w-4 h-4 text-[#001a4d] group-hover:text-white" />
              </a>
            </li>

          </ul>
        </div>
      </div>
    </aside>
  );
};
