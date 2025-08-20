export interface FacultyMember {
  name: string;
  photo: string;
  designation: string;
  department: string;
}

const facultyData: FacultyMember[] = [
  {
    name: 'Jane Doe',
    photo: '/images/faculty/jane_doe.png',
    designation: 'Mathematics Teacher',
    department: 'Mathematics'
  },
  {
    name: 'John Smith',
    photo: '/images/faculty/john_smith.png',
    designation: 'Science Teacher',
    department: 'Science'
  },
  {
    name: 'Emily Chen',
    photo: '/images/faculty/emily_chen.png',
    designation: 'English Teacher',
    department: 'Languages'
  },
  // Add more as needed
];

export default facultyData;
