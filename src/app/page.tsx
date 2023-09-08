import React from 'react'
import { WelcomeBlock } from '@widgets/WelcomeBlock'
import { IndustryBlock } from '@widgets/IndustryBlock'
import { Header } from '@widgets/Header/Header'
import { WaterSection } from '@widgets/WaterSection'
import { TechFeedBlock } from '@widgets/TechFeedBlock'

export default function Home() {
  return (
    <main>
      <Header />
      <WelcomeBlock />
      <TechFeedBlock />
      <IndustryBlock />
      <WaterSection />
    </main>
  )
}
