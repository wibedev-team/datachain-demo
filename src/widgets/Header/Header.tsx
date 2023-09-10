import React from 'react'
import { PlanetImage } from '@shared/ui/PlanetImage'
import { BurgerNavigation } from '@features/BurgerNavigation'
import { ListNavigation } from '@features/ListNavigation'

export const Header = () => {
  return (
    <div
      className="w-full  items-center
        md:pt-20 md:pl-16
        lg:pl-16">
      <ListNavigation />
      <PlanetImage />
      <BurgerNavigation />
    </div>
  )
}
