export type NavTab = 
  | 'dashboard'
  | 'academics'
  | 'dll'
  | 'dll-proficiency'
  | 'attendance'
  | 'attendance-acp'
  | 'courses'
  | 'timetable'
  | 'timetable-acp'
  | 'project'
  | 'project-dashboard'
  | 'project-request'
  | 'resource-library'
  | 'social-internship'
  | 'accounts'
  | 'accounts-receipt'
  | 'accounts-statement'
  | 'fee-submission'
  | 'administration'
  | 'admission-referral'
  | 'cge'
  | 'complaint-harassment'
  | 'document-upload'
  | 'golf-cart'
  | 'international-student'
  | 'medical-insurance'
  | 'csw'
  | 'mentoring'
  | 'dcpd'
  | 'dcpd-career'
  | 'dcpd-assessments'
  | 'dcpd-exams'
  | 'dcpd-content'
  | 'dcpd-events'
  | 'dcpd-magazines'
  | 'dcpd-policies'
  | 'evening-cucat'
  | 'elibrary'
  | 'ebsco-ebook'
  | 'ebsco-management'
  | 'ebsco-ejournal'
  | 'ieee'
  | 'jgate-science'
  | 'jgate-soc'
  | 'publication-finder'
  | 'web-of-science'
  | 'library-repository'
  | 'library-discussion'
  | 'leave-duty'
  | 'leave-general'
  | 'leave-medical'
  | 'srms-clubs'
  | 'srms-event'
  | 'srms-care'
  | 'srms-talent'
  | 'transport-details'
  | 'transport-consent-1'
  | 'transport-consent-2'
  | 'apply-loan'
  | 'apply-noc'
  | 'csw'
  | 'counseling'
  | 'dcpd'
  | 'mooc'
  | 'elibrary'
  | 'examination'
  | 'hostel-details'
  | 'hostel-refund'
  | 'international'
  | 'library'
  | 'profile'
  | 'research-profile'
  | 'online-test'
  | 'phd'
  | 'id-card'
  | 'leave-application'
  | 'student-placement'
  | 'srms'
  | 'tpp-uilah'
  | 'transport'
  | 'ucmc';

export interface StudentInfo {
  name: string;
  id: string;
  course: string;
  fatherName: string;
  motherName: string;
  contact: string;
  address: string;
  fullAddress?: string;
  religion?: string;
  dob?: string;
  admissionYear?: string;
  university?: string;
  currentSemester?: string;
  bloodGroup?: string;
  currentSection?: string;
  programCode?: string;
  studentStatus?: string;
  caste?: string;
  fatherMobile?: string;
  email?: string;
  validTill: string;
  category: string;
  photoUrl: string;
  signatureUrl: string;
}

export interface HostelInfo {
  status: 'Active' | 'Inactive' | 'Pending';
  seater: string;
  hostelName: string;
  roomNo: string;
  reportingStatus: string;
  imageUrl: string;
}

export interface CourseAttendance {
  subject: string;
  code: string;
  semester: number;
  attendancePercentage: number;
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  time: string;
  department: string;
  content: string;
  attachmentName?: string;
  uploadedBy: string;
  isPinned?: boolean;
}

export interface MentorInfo {
  name: string;
  code: string;
  email: string;
}
