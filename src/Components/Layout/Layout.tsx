import { Outlet} from 'react-router-dom';

// Adjust path if needed

export default function Layout() {
  

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1 p-6">
        {/* <Outlet /> renders the current active page (Dashboard, Setting, etc.) */}
        <Outlet />
      </main>
    </div>
  );
}
