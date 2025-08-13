
import React from 'react';
import { Student, AttendanceStatus } from '../types';

interface StudentCardProps {
  student: Student;
  onUpdateStatus: (studentId: number, newStatus: AttendanceStatus) => void;
}

const getStatusClasses = (status: AttendanceStatus) => {
    switch (status) {
        case AttendanceStatus.PRESENT:
            return 'bg-green-50 border-e-4 border-green-500';
        case AttendanceStatus.ABSENT:
            return 'bg-red-50 border-e-4 border-red-500';
        case AttendanceStatus.LATE:
            return 'bg-yellow-50 border-e-4 border-yellow-500';
        default:
            return 'bg-white border-e-4 border-transparent';
    }
};

const ActionButton: React.FC<{
  onClick: () => void;
  isActive: boolean;
  activeClasses: string;
  children: React.ReactNode;
}> = ({ onClick, isActive, activeClasses, children }) => {
  const baseClasses = 'px-3 py-1 text-sm font-semibold rounded-full transition-all duration-200 ease-in-out transform hover:scale-105';
  const inactiveClasses = 'bg-gray-200 text-gray-700 hover:bg-gray-300';
  const finalClasses = isActive ? `${baseClasses} ${activeClasses}` : `${baseClasses} ${inactiveClasses}`;
  
  return (
    <button onClick={onClick} className={finalClasses}>
      {children}
    </button>
  );
};


const StudentCard: React.FC<StudentCardProps> = ({ student, onUpdateStatus }) => {
  const statusClasses = getStatusClasses(student.status);

  return (
    <li className={`flex flex-col md:flex-row items-center justify-between p-4 transition-colors duration-300 ${statusClasses}`}>
      <div className="flex items-center mb-4 md:mb-0">
        <img
          className="h-14 w-14 rounded-full object-cover me-4 border-2 border-white shadow-sm"
          src={student.avatar}
          alt={`صورة ${student.name}`}
        />
        <div>
          <p className="text-lg font-bold text-gray-900">{student.name}</p>
          <p className="text-sm text-gray-500">معرف الطالب: {student.id}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2 space-x-reverse">
        <ActionButton
          onClick={() => onUpdateStatus(student.id, AttendanceStatus.PRESENT)}
          isActive={student.status === AttendanceStatus.PRESENT}
          activeClasses="bg-green-500 text-white"
        >
          حاضر
        </ActionButton>
        <ActionButton
          onClick={() => onUpdateStatus(student.id, AttendanceStatus.LATE)}
          isActive={student.status === AttendanceStatus.LATE}
          activeClasses="bg-yellow-500 text-white"
        >
          متأخر
        </ActionButton>
        <ActionButton
          onClick={() => onUpdateStatus(student.id, AttendanceStatus.ABSENT)}
          isActive={student.status === AttendanceStatus.ABSENT}
          activeClasses="bg-red-500 text-white"
        >
          غائب
        </ActionButton>
      </div>
    </li>
  );
};

export default StudentCard;
