
import { PropsWithChildren } from "react";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import { Inter } from "next/font/google";
import NavigationBar from "./components/navigation-bar/NavigationBar";

const inter = Inter({
  subsets: ["latin"],
});


const RootLayout = ( props : PropsWithChildren) =>{


  return (
    <html  suppressHydrationWarning >
      <body className={inter.className}> 
          
      <ThemeProvider  >
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