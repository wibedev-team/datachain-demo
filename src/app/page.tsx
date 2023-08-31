import React from 'react'
import { WelcomeBlock } from '@widgets/WelcomeBlock/WelcomeBlock'
import { Header } from '@widgets/Header/Header'
import { NFTBlock } from '@widgets/NFTBlock/NFTBlock'

export default function Home() {
  return (
    <main>
      <Header />
      <WelcomeBlock />
      <NFTBlock />
    </main>
  )
}
