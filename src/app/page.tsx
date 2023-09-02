import React from 'react'
import { WelcomeBlock } from '@widgets/WelcomeBlock/WelcomeBlock'
import { IndustryBlock } from '@widgets/IndustryBlock/IndustryBlock'
import { Header } from '@widgets/Header/Header'
import { WaterSection } from '@widgets/WaterSection/WaterSection'

export default function Home() {
  return (
    <main>
      <Header />
      <WelcomeBlock />
      <IndustryBlock />
      <WaterSection />
    </main>
  )
}
