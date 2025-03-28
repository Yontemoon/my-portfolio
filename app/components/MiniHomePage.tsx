import React, { Dispatch, SetStateAction } from 'react'

import BackArrow from '../icons/back-arrow'
import { play } from '../lib/fonts'
import MyLinks from './MyLinks'
import clsx from 'clsx'
import ThemeButton from './ThemeButton'

const MiniHomePage = ({
  setCurrent,
}: {
  setCurrent: Dispatch<SetStateAction<string>>
}) => {
  return (
    <div
      className={clsx(
        'relative w-full h-full delayed-fade-animation z-10 flex flex-col',
        play.className,
      )}
      onClick={() => setCurrent('/')}>
      <h2 className="absolute lg:-rotate-90 lg:-right-16 lg:top-20 z-30 lg:mr-5 lg:mt-3 text-nowrap overflow-hidden ">
        Monte Yoon
      </h2>

      <div
        className="absolute lg:right-2 lg:bottom-64 bottom-0 right-0 cursor-pointer z-50 my-1 "
        onClick={(e) => e.stopPropagation()}>
        <ThemeButton className="lg:absolute lg:-rotate-90 lg:origin-right lg:right-4" />
      </div>

      <div className="absolute lg:bottom-0 lg:right-0 bottom-0 ">
        <MyLinks />
      </div>
    </div>
  )
}

export default MiniHomePage
