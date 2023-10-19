import { Header } from '@widgets/Header/Header'
import { IndustryBlock } from '@widgets/IndustryBlock/IndustryBlock'
import { WaterSection } from '@widgets/WaterSection/WaterSection'
import { WelcomeBlock } from '@widgets/WelcomeBlock/WelcomeBlock'
import React from 'react'

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
