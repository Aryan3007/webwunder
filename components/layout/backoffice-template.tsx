import Header from './backoffice-template/header';
import MenuSide from './backoffice-template/menu-side';

interface Props {
  showBanner?: boolean;
  children: React.ReactNode;
}

export default function AdminLayoutTemplate({ children }: Readonly<Props>) {
  return (
    <div className="h-screen flex flex-col">

      {/* Sidebar + Main Content Wrapper */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Fixed Width */}
        <MenuSide className="w-64 bg-gray-800 text-white flex-shrink-0" />

        {/* Main Content - Scrollable */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
        <Header />

          {children}
        </main>
      </div>
    </div>
  );
}
