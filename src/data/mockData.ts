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
  photoUrl: '/profile.png',
  signatureUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Jon_Kirsch_Signature.png',
};

export const fullCourseDegreeName = 'Bachelor of Engineering (Hons.) (Computer Science and Engineering) (with Specialization in Artificial Intelligence and Machine Learning)-CS221';

export const hostelData: HostelInfo = {
  status: 'Active',
  seater: '5 Seater',
  hostelName: 'Zakir B',
  roomNo: '805-B',
  reportingStatus: 'Reported on Jul 13 2026 9:33PM',
  imageUrl: '/hostel-cu.png',
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
    title: 'TRAFFIC & PARKING ADVISORY FOR STUDENTS ONLY: ORIENTATION 2026',
    date: '17 JUL 2026',
    time: '14:59:28',
    department: '',
    content: `
      <div class="font-bold mb-1">TRAFFIC & PARKING ADVISORY FOR STUDENTS ONLY: ORIENTATION PROGRAMME FOR THE ACADEMIC YEAR 2026-27</div>
      <div class="mb-2">1. The Orientation Programme for The Academic Year 2026-27 is scheduled at the Chandigarh University Campus from 23-29 July 2026. Traffic and Parking Instructions for the Event are elucidated in succeeding paragraphs. <i>The provisions of this Traffic & Parking Advisory will be effective from 7 PM on 17 Jul 2026 to till further orders.</i></div>
      <div class="mb-2">(Emergency Contact for Parking - 7087110581 & Transport - 7087039349)</div>
      <div class="mb-1">2. Guidelines for South Campus Area For Students Only</div>
      <div class="ml-4 mb-1">(a) Restricted Parking Areas</div>
      <ul class="list-disc pl-8 mb-2">
        <li>South Campus Student Parking Area</li>
      </ul>
      <div class="ml-4 mb-1">(b) Available Parking Areas</div>
      <ul class="list-disc pl-8 mb-2">
        <li>Adhesh Campus Student Parking</li>
      </ul>
      <div class="mb-1">3. Pedestrian Pathways for Students & Staff</div>
      <ul class="list-disc pl-8 mb-2">
        <li>A - Block Entry VIP Gate ---As per scheduled Timing</li>
        <li>A - Block Entry Gate No. 2 ---Block A1 ---Block A2 ---BlockA-3</li>
        <li>B & C - Block Entry Gate No. 2 ---Block-B1 ---Block B2 ---Block B3 ---Block B4 ---Block-B5 ---Block-C1 ---Block-C2 ---Block-C3</li>
        <li>South Campus Entry Gate No.3 & Gate No.07 ---Block D1 ---Block-D2 ---Block-D3 ---Block-D4 ---Block-D5 ---Block-D6</li>
      </ul>
    `,
    attachmentName: '',
    uploadedBy: 'Administration Transport Desk',
    isPinned: true,
  }
];
