
import React from 'react';
import { Student, AttendanceStatus } from '../types';
import StudentCard from './StudentCard';

interface StudentListProps {
  students: Student[];
  onUpdateStatus: (studentId: number, newStatus: AttendanceStatus) => void;
}

const StudentList: React.FC<StudentListProps> = ({ students, onUpdateStatus }) => {
  return (
    <section>
       <h2 className="text-2xl font-bold mb-4 text-gray-700">قائمة الطلاب</h2>
       <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <ul className="divide-y divide-gray-200">
            {students.map(student => (
            <StudentCard
                key={student.id}
                student={student}
                onUpdateStatus={onUpdateStatus}
            />
            ))}
        </ul>
       </div>
    </section>
  );
};

export default StudentList;
