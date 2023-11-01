import React from 'react'
import { Hero, Contact, FeaturedProducts, Services } from '../components'


export default function HomePage() {
    return (
      <main>
        <Hero />
        <FeaturedProducts />
        <Services />
        <Contact />
      </main>
    )
  }
