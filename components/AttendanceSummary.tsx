
import React from 'react';
import { PresentIcon, AbsentIcon, LateIcon, TotalIcon } from './icons';

interface AttendanceSummaryProps {
  counts: {
    present: number;
    absent: number;
    late: number;
    total: number;
  };
}

const SummaryCard: React.FC<{
  title: string;
  count: number;
  icon: React.ReactNode;
  colorClasses: string;
}> = ({ title, count, icon, colorClasses }) => (
  <div className={`flex items-center p-4 bg-white rounded-lg shadow-sm ${colorClasses}`}>
    <div className="p-3 me-4 text-white rounded-full bg-opacity-80">
      {icon}
    </div>
    <div>
      <p className="text-sm font-medium text-gray-600">{title}</p>
      <p className="text-lg font-bold text-gray-900">{count}</p>
    </div>
  </div>
);

const AttendanceSummary: React.FC<AttendanceSummaryProps> = ({ counts }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">ملخص الحضور</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <SummaryCard 
          title="إجمالي الطلاب"
          count={counts.total}
          icon={<TotalIcon />}
          colorClasses="border-e-4 border-blue-500"
        />
        <SummaryCard
          title="حاضر"
          count={counts.present}
          icon={<PresentIcon />}
          colorClasses="border-e-4 border-green-500"
        />
        <SummaryCard
          title="غائب"
          count={counts.absent}
          icon={<AbsentIcon />}
          colorClasses="border-e-4 border-red-500"
        />
        <SummaryCard
          title="متأخر"
          count={counts.late}
          icon={<LateIcon />}
          colorClasses="border-e-4 border-yellow-500"
        />
      </div>
    </section>
  );
};

export default AttendanceSummary;
