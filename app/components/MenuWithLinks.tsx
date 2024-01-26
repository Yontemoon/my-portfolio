import { Transition, Popover } from "@headlessui/react";
import { myLinks } from "../lib/myLinks";
import { useState, Fragment, useRef } from "react";


const MenuWithLinks = () => {

    const buttonRef = useRef<any | null>(null)
    const timeoutDuration = 200
    let timeout: any

    const closePopover = () => {
        return buttonRef.current?.dispatchEvent(
          new KeyboardEvent("keydown", {
            key: "Escape",
            bubbles: true,
            cancelable: true
          })
        )
      }

      const onMouseEnter = (open: boolean) => {
        clearTimeout(timeout)
        if (open) return
        return buttonRef.current?.click()
      }

      const onMouseLeave = (open: boolean) => {
        if (!open) return
        timeout = setTimeout(() => closePopover(), timeoutDuration)
      }

    return (
        <div className="fixed bottom-0 right-0 m-4 flex">
            <Popover className="relative">
                {({open}) => (
                    <>
                        <div
                            onMouseLeave={onMouseLeave.bind(null, open)}
                            className="flex"
                        >
                            <Popover.Button
                                ref={buttonRef}
                                onMouseEnter={onMouseEnter.bind(null, open)}
                                onMouseLeave={onMouseLeave.bind(null, open)}
                            >
                                My Links
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                // enter="transition ease-out duration-200"
                                // enterFrom="opacity-0 translate-y-1"
                                // enterTo="opacity-100 translate-y-0"
                                // leave="transition ease-in duration-150"
                                // leaveFrom="opacity-100 translate-y-0"
                                // leaveTo="opacity-0 translate-y-1"
                            >
                            <Popover.Panel
                                className="absolute top-0 left-0 mt-2"
                                style={{ minWidth: "200px" }}
                            >
                                <div 
                                    onMouseEnter={onMouseEnter.bind(null, open)}
                                    onMouseLeave={onMouseLeave.bind(null, open)}
                                    className="flex"
                                >
                                    {myLinks.map((myLink) => (
                                        <span key={myLink.label}>
                                            <a href={myLink.href} rel="noopener noreferrer" target="_blank">
                                                {myLink.label}
                                            </a>
                                        </span>
                                    ))}
                                </div>
                            </Popover.Panel>
                            </Transition>
                        </div>
                    </>
                )}
            </Popover>
        </div>
    );
};

export default MenuWithLinks;