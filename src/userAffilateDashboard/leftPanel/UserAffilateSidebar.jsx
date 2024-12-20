import React from 'react';
import { 
  BarChart, 
  ShoppingBag, 
  Inbox, 
  User, 
  Settings, 
  Power 
} from 'lucide-react'; // Importing Lucide Icons

export const UserAffiliateSidebar = () => {
  return (
    <div className="h-screen w-full max-w-[17rem] p-4 shadow-xl bg-white rounded-lg">
      <div className="mb-4 p-4">
        <h1 className="text-lg font-semibold text-blue-gray-800">Sidebar</h1>
      </div>
      <ul className="space-y-4">
        <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
          <BarChart className="h-5 w-5 text-gray-600" />
          <span className="text-sm text-gray-800">Dashboard</span>
        </li>
        <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
          <ShoppingBag className="h-5 w-5 text-gray-600" />
          <span className="text-sm text-gray-800">E-Commerce</span>
        </li>
        <li className="flex items-center justify-between space-x-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
          <div className="flex items-center space-x-2">
            <Inbox className="h-5 w-5 text-gray-600" />
            <span className="text-sm text-gray-800">Inbox</span>
          </div>
          <span className="text-xs bg-blue-500 text-white rounded-full px-2 py-1">14</span>
        </li>
        <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
          <User className="h-5 w-5 text-gray-600" />
          <span className="text-sm text-gray-800">Profile</span>
        </li>
        <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
          <Settings className="h-5 w-5 text-gray-600" />
          <span className="text-sm text-gray-800">Settings</span>
        </li>
        <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
          <Power className="h-5 w-5 text-gray-600" />
          <span className="text-sm text-gray-800">Log Out</span>
        </li>
      </ul>
    </div>
  );
};
