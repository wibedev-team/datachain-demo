import React from 'react'
import { WelcomeBlock } from '@widgets/WelcomeBlock/WelcomeBlock'
import { Header } from '@widgets/Header/Header'
import { IndustryBlock } from '@widgets/IndustryBlock/IndustryBlock'
import { NFTBlock } from '@widgets/NFTBlock/NFTBlock'
import { WaterSection } from '@widgets/WaterSection/WaterSection'
import { TeamBlock } from 'src/widgets/TeamBlock'

export default function Home() {
  return (
    <main>
      <Header />
      <WelcomeBlock />
      <IndustryBlock />
      <NFTBlock />
      <WaterSection />
      <TeamBlock />
    </main>
  )
}
