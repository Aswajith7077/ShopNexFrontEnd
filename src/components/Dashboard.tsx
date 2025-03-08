import React from 'react'
import Banner from '@/components/dashboard/Banner'
import FeaturedCategories from '@/components/dashboard/FeaturedCategories'
import AdCards from './dashboard/AdCards'
import { ScrollArea } from '@/components/ui/scroll-area'

const Dashboard = () => {
  return (
    <ScrollArea className='p-5'>
        <Banner />
        <FeaturedCategories />
        <AdCards />
    </ScrollArea>
  )
}

export default Dashboard