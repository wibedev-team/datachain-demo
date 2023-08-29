import React from "react";
import {WelcomeBlock} from "@widgets/WelcomeBlock/WelcomeBlock";
import {Header} from "@widgets/Header/Header";
import {AboutUsBlock} from "@widgets/AboutUsBlock/AboutUs" 

export default function Home() {
  return (
    <main>
      <Header />
      <WelcomeBlock />
      <AboutUsBlock/>
    </main>
  );
}
