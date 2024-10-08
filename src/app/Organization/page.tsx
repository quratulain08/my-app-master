"use client";
import React, { useState } from 'react';
import { HiDocumentReport, HiViewList, HiChartBar, HiLogout, HiMenu, HiX } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import Layout from '../components/Layout'; // Ensure the Layout component is imported

const OrganizationSidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false); 
  const [showWelcomeMessage, setShowWelcomeMessage] = useState<boolean>(true);

  const router = useRouter();

  const handleLogout = () => {
    console.log('Logging out...');
    router.push('/');
  };

  const handleNavigation = (path: string) => {
    setShowWelcomeMessage(false);
    router.push(path);
  };

  return (
    <Layout>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-[#112d60] text-white p-4 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
        >
          <div className="flex flex-col items-start mt-12 mb-6"> {/* Adjusted margin-top */}
            <div className="text-2xl font-bold text-white">Organization</div>
          </div>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => handleNavigation('/ViewAllStudents')} // Navigate to View All Students
                className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
              >
                <HiViewList className="mr-3 text-xl" />
                <span>View All Students</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('/Forms/PostInternship')} // Navigate to Post an Internship
                className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
              >
                <HiDocumentReport className="mr-3 text-xl" />
                <span>Post an Internship</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('/StudentsProgress')} // Navigate to Students Progress
                className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
              >
                <HiChartBar className="mr-3 text-xl" />
                <span>Students Progress</span>
              </button>
            </li>
            {/* Logout Button */}
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
              >
                <HiLogout className="mr-3 text-xl" />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Sidebar Toggle Button (visible on small screens) */}
        <button
          className="fixed top-4 right-4 z-50 md:hidden bg-gray-200 p-2 rounded"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
        </button>

        {/* Main Content */}
        <div className={`flex-1 p-4 transition-transform ${isSidebarOpen ? 'ml-64' : 'ml-0'} md:ml-64`}>
          {showWelcomeMessage && (
            <div className="flex justify-center items-center h-full">
              <div className="p-4 w-full max-w-4xl text-center text-xl text-[#112d60]">
                <h1 className="font-serif">Welcome to the Organization Portal</h1>
                <p>Select an option from the sidebar to get started.</p>
              </div>
            </div>
          )}
          {/* Other content */}
        </div>
      </div>
    </Layout>
  );
};

export default OrganizationSidebar;
