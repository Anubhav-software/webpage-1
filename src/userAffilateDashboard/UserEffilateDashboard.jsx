import { Outlet } from 'react-router-dom'; 
import { UserAffiliateSidebar } from './leftPanel/UserAffilateSidebar';


export const UserEffilateDashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
    {/* Sidebar */}
    <UserAffiliateSidebar />
    
    {/* Main Content */}
    <div className="flex-1 flex flex-col ml-72 overflow-y-auto overflow-x-hidden"> 
 
      <main>
        <div className="mx-auto max-w-screen-2xl ">
          <Outlet />
        </div>
      </main>
    </div>
  </div>
  )
}

