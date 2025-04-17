
import { PropsWithChildren } from "react";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import NavigationBar from "./components/navigation-bar/NavigationBar";



const RootLayout = ( props : PropsWithChildren) =>{

  return (
    <html  suppressHydrationWarning >
      <body> 
          
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