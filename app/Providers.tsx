'use client'

import { useEffect, useState } from "react";
import { ThemeProvider } from 'next-themes';
import Navbar from "../components/Navbar";

const Providers = ({children}: {children: React.ReactNode}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) {
      return null; 
    }
  
    return (

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <div className="bg-[#F8F9FA] dark:bg-[#0D1117]">

            <Navbar />
        {children}
            </div>
      </ThemeProvider>
    );
}

export default Providers