
import { PropsWithChildren } from "react";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";



const RootLayout = ( props : PropsWithChildren) =>{

  return (
    <html  className="dark" suppressHydrationWarning >
      <body>
      <ThemeProvider >
          {props.children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout;