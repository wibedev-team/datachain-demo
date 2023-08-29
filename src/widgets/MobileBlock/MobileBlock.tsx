import React from 'react'
import Image from 'next/image'

import { SectionTitle } from '@shared/ui/SectionTitle'

export const MobileBlock = () => {
  return (
    <section className="container mt-[60px]">
      <SectionTitle text="Mobile E-commerce Application Builder" />

      <Image className="mt-[60px] mb-[60px]" src="/media/images/devices.png" alt="" width={817} height={423} />
    </section>
  )
}
