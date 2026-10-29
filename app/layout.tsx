import './css/style.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import Header from '@/components/header';
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className="website-app"
      >
        <div className="flex flex-col min-h-screen">
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right"/>
          </ActiveSectionContextProvider>
        </div>
      </body>
    </html>
  );
}
