import Head from 'next/head'
import Filters from '../components/Filters'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

export default function Home() {
 

  return (
    <div dir="rtl">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Filters />

          
    </div>
  )
}
