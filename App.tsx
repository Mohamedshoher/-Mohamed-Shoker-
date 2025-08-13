
import React, { useState, useCallback, useMemo } from 'react';
import { Student, AttendanceStatus } from './types';
import { INITIAL_STUDENTS } from './constants';
import Header from './components/Header';
import AttendanceSummary from './components/AttendanceSummary';
import StudentList from './components/StudentList';

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>(INITIAL_STUDENTS);

  const handleUpdateStatus = useCallback((studentId: number, newStatus: AttendanceStatus) => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === studentId ? { ...student, status: newStatus } : student
      )
    );
  }, []);

  const attendanceCounts = useMemo(() => {
    return students.reduce(
      (counts, student) => {
        if (student.status === AttendanceStatus.PRESENT) {
          counts.present++;
        } else if (student.status === AttendanceStatus.ABSENT) {
          counts.absent++;
        } else if (student.status === AttendanceStatus.LATE) {
          counts.late++;
        }
        return counts;
      },
      { present: 0, absent: 0, late: 0, total: students.length }
    );
  }, [students]);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <AttendanceSummary counts={attendanceCounts} />
        <StudentList students={students} onUpdateStatus={handleUpdateStatus} />
      </main>
    </div>
  );
};

export default App;
