
import { PropsWithChildren } from "react";
import "./globals.css";

import { Inter } from "next/font/google";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import { ThemeProvider } from "next-themes";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "SUhas Y Sunkad",
  openGraph: {
    title: "SUhas Y Sunakd - Fullstack AI Developer",
    description: "Welcome to the portfolio of SUhas Y Sunkad. Explore my work as a Fullstack AI Developer.",
    images: {
      url: "C:\Users\suhas\Downloads\Suhas_Profile_picture.jpeg", 
      width: 1200,
      height: 628,
    },
  },
};


const RootLayout = ( props : PropsWithChildren) =>{


  return (
    <html  suppressHydrationWarning >
      <body className={inter.className}> 
          
    
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
        <div>
           <NavigationBar/>
           </div>
          {props.children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout;