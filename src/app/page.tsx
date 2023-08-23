import React from "react";
import {WelcomeBlock} from "@widgets/WelcomeBlock/WelcomeBlock";
import {Header} from "@widgets/Header/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <WelcomeBlock />
    </main>
  );
}
