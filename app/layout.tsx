
import { PropsWithChildren } from "react";
import "./globals.css";


const RootLayout = ( props : PropsWithChildren) =>{

  return (
    <html>
      <body>
        {props.children}
      </body>
    </html>
  )
}

export default RootLayout;