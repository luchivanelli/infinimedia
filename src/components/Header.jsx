import badge from "../assets/badge.png"
import gsap from "gsap"
import { useRef, useEffect, use } from "react"

export const Header = ()=> {
    const header = useRef()

    useEffect(()=> {
        gsap.from(header.current, {
            y: -200,
            duration: 1.5,
            opacity: 0,
            ease: "power2.out"
        })
    })

    return (
        <header ref={header} className="fixed z-40 top min-w-[330px] max-w-[500px] w-1/2 left-1/2 -translate-x-1/2 bg-[#00000080] flex justify-between items-center py-2 px-4 my-2 rounded-4xl">
            <img src={badge} alt="badge" className="w-7 sm:w-10"/>
            <ul className="flex gap-3 text-white text-sm sm:text-lg text-nowrap">
                <li className="cursor-pointer">About Infini</li>
                <li className="cursor-pointer">Services</li>
                <li className="cursor-pointer">Contact</li>
            </ul>
        </header>
    )
}