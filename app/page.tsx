import Navbar from '@/ui/Navbar'
import Image from 'next/image'

export default function Home({children}: {children: React.ReactNode}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar/>
      {children}
    </main>
  )
}
