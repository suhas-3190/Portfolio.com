import React from "react";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import Hero from "./pages/hero/page";

const RootPage = () => {
  return (
    <>
    <div>
      <NavigationBar/>
    </div>
    <div>
       <Hero />
    </div>
    </>
  )
};

export default RootPage;

