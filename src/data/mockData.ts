import { StudentInfo, HostelInfo, CourseAttendance, Announcement, MentorInfo } from '../types';

export const studentData: StudentInfo = {
  name: 'ARIJIT PAL',
  id: '25BAI70040',
  course: 'B.E. (H) (CSE) (AI&ML)',
  fatherName: 'AMIYA KUMAR PAL',
  motherName: 'KRISHNA PAL',
  contact: '9832434164',
  address: 'JUNEBEDIA, BANKURA, WEST BENGAL,BANKURA',
  fullAddress: 'AMIYA KUMAR PAL, VILLAGE BANSHI KHUSIGANJ, VTC BANSHI, P;O BANSICHANDIPUR, SUB DISTRICT JAYPUR, DISTRICT BANKURA, STATE WEST BENGAL',
  religion: 'Hinduism',
  dob: '23 Apr 2007',
  admissionYear: '2025',
  university: 'CU',
  currentSemester: '3',
  bloodGroup: 'B+',
  currentSection: '25AML-3',
  programCode: 'CS221::B.E. (H) (CSE) (AI&ML)',
  studentStatus: 'A',
  caste: 'GEN',
  fatherMobile: '9733224677',
  email: 'arijitpal2350@gmail.com',
  validTill: 'JUN-2029',
  category: 'HOSTELLER',
  photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
  signatureUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Jon_Kirsch_Signature.png',
};

export const fullCourseDegreeName = 'Bachelor of Engineering (Hons.) (Computer Science and Engineering) (with Specialization in Artificial Intelligence and Machine Learning)-CS221';

export const hostelData: HostelInfo = {
  status: 'Active',
  seater: '5 Seater',
  hostelName: 'Zakir B',
  roomNo: '805-B',
  reportingStatus: 'Reported on Jul 13 2026 9:33PM',
  imageUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1000', // Modern high-rise campus building
};

export const courseAttendanceList: CourseAttendance[] = [
  { subject: 'Agile Development Methodologies (25CSH-233)', code: '25CSH-233', semester: 3, attendancePercentage: 100 },
  { subject: 'Object Oriented Programming using Java (25CSH-238)', code: '25CSH-238', semester: 3, attendancePercentage: 100 },
  { subject: 'Advanced Data Structures (25CSH-242)', code: '25CSH-242', semester: 3, attendancePercentage: 100 },
  { subject: 'Database Management System (25CSH-245)', code: '25CSH-245', semester: 3, attendancePercentage: 100 },
  { subject: 'Computer Organization and Architecture (25CST-232)', code: '25CST-232', semester: 3, attendancePercentage: 100 },
  { subject: 'Probability and Statistics (25CST-237)', code: '25CST-237', semester: 3, attendancePercentage: 100 },
  { subject: 'General Proficiency-2 (25GPT-122)', code: '25GPT-122', semester: 3, attendancePercentage: 0 },
  { subject: 'Entrepreneurship Mindset (25INT-221)', code: '25INT-221', semester: 3, attendancePercentage: 100 },
  { subject: 'Critical Enquiry and Research Methodology (25RST-231)', code: '25RST-231', semester: 3, attendancePercentage: 100 },
  { subject: 'APTITUDE - I (25TDT-212)', code: '25TDT-212', semester: 3, attendancePercentage: 100 },
  { subject: 'Social Internship (25UCI-203)', code: '25UCI-203', semester: 3, attendancePercentage: 0 },
  { subject: 'Universal Human Values, Ethics and Life Skills-2 (25UCT-296)', code: '25UCT-296', semester: 3, attendancePercentage: 100 },
  { subject: 'Gender Equity and Empowerment (25UCT-227)', code: '25UCT-227', semester: 3, attendancePercentage: 100 },
];

export const mentorData: MentorInfo = {
  name: 'Choudhary Ravi Singh (E20382)',
  code: 'E20382',
  email: 'ravi.e20382@cumail.in',
};

export const announcementsList: Announcement[] = [
  {
    id: 'ann-1',
    title: 'TRAFFIC ADVISORY: ACADEMIC YEAR 2026-27',
    date: '07 JUL 2026',
    time: '16:27:40',
    department: 'ADMINISTRATION DEPARTMENT',
    content: 'Traffic and Parking instructions for Academic Year 2026-27 are elucidated in the attached pdf file. Cooperation from all faculty, staff & students will be highly appreciated. Regards',
    attachmentName: 'Attachment_1_Pa...',
    uploadedBy: 'Sanjeev Bakshi (ADMINISTRATION)',
    isPinned: true,
  },
  {
    id: 'ann-2',
    title: 'NOTIFICATION: ROUTE CHART FOR CU BUSES W.E.F 07.07.2026 (EVENING)',
    date: '06 JUL 2026',
    time: '14:31:37',
    department: 'DEPARTMENT OF ADMINISTRATION',
    content: 'Detailed bus route schedules and stop timings effective from 07.07.2026 evening session have been uploaded. Students utilizing university transport must verify their bus numbers.',
    attachmentName: 'Bus_Routes_2026.pdf',
    uploadedBy: 'Administration Transport Desk',
    isPinned: true,
  },
  {
    id: 'ann-3',
    title: 'MID-SEMESTER EXAMINATION SCHEDULE & seating plan',
    date: '02 JUL 2026',
    time: '11:15:00',
    department: 'EXAMINATION CONTROLLER',
    content: 'Mid-semester examinations seating plans and hall ticket downloads are now active on CUIMS under the Examination portal tab.',
    attachmentName: 'MidSem_Rules.pdf',
    uploadedBy: 'Controller of Examinations',
    isPinned: false,
  }
];
