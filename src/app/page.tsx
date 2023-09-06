import React from 'react'
import { WelcomeBlock } from '@widgets/WelcomeBlock'
import { MobileBlock } from '@widgets/MobileBlock'
import { Header } from '@widgets/Header/Header'

export default function Home() {
  return (
    <main>
      <Header />
      <WelcomeBlock />
      <MobileBlock />
    </main>
  )
}
