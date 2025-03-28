import { play } from '../lib/fonts'
import clsx from 'clsx'
import MyLinks from './MyLinks'
import ThemeButton from './ThemeButton'

const MaxHomePage = ({ ...props }) => {
  return (
    <div
      className={clsx(
        { ...props },
        play.className,
        'delayed-fade-animation relative flex flex-col z-10 min-h-28 h-full w-full',
      )}>
      <div className="absolute bottom-0 left-0 lg:top-0">
        <h1>Monte Yoon</h1>
        <h2 className="mb-2">Software Developer.</h2>
      </div>
      <div className="absolute lg:right-0 lg:bottom-64 bottom-11 right-0 cursor-pointer">
        <ThemeButton className="lg:absolute lg:-rotate-90 lg:origin-right lg:right-6" />
      </div>
      <div className={clsx('absolute bottom-0 right-0 origin-left')}>
        <MyLinks />
      </div>
    </div>
  )
}

export default MaxHomePage
