
import { PropsWithChildren } from "react";
import "./globals.css";

import { Inter } from "next/font/google";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
});


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