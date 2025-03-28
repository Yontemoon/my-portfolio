import { Inter, Fira_Sans, Play } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const fira_sans = Fira_Sans({ subsets: ['latin'], weight: ['400', '500'] })

const play = Play({
  weight: '400',
  subsets: ['latin'],
})

export { inter, fira_sans, play }
