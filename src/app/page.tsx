import React from "react";
import {WelcomeBlock} from "@widgets/WelcomeBlock/WelcomeBlock";
import {Header} from "@widgets/Header/Header";
import {AboutUsBlock} from "@widgets/AboutUsBlock/AboutUs" 
import {Footer} from "@widgets/Footer/Footer"

export default function Home() {
  return (
    <main>
      <Header />
      <WelcomeBlock />
      <AboutUsBlock/>
      <Footer/>
    </main>
  );
}
