import React from 'react'
import { Header } from './Header'
import { StatsCard } from './StatsCard'
import { AffiliateLinks } from './AffiliateLinks'
import { ListingsTable } from './ListingsTable'
import { ContactForm } from './ContactForm'

export const UserEffilateDashboardComponent = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen w-full">
    

    <div className=" p-8 space-y-8">
      <Header />

      <div className="flex space-x-6">
        <StatsCard title="Total Views" count="75" />
        <StatsCard title="Tasks Done" count="75" />
        <StatsCard title="Tasks Pending" count="75" />
      </div>

      <AffiliateLinks />
      <ListingsTable />
    </div>

    <div className="w-1/4 ml-8">
      <ContactForm />
    </div>
  </div>
  )
}
