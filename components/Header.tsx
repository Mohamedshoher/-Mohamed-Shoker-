
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 md:px-8">
        <h1 className="text-3xl font-bold text-gray-900">سجل حضور الطلاب</h1>
        <p className="text-gray-600 mt-1">نظام بسيط لتسجيل الحضور والغياب اليومي</p>
      </div>
    </header>
  );
};

export default Header;
