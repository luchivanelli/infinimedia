import { useEffect, useRef } from "react"
import { Header } from "./components/Header"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import SplitType from "split-type"
import { animationEnter } from "./utils/animations"
import badge from "./assets/badge.png"

gsap.registerPlugin(ScrollTrigger)

//Limpiar archivo App y pasar contenido a componente Home
//Empezar con pantalla About

function App() {
  const sect1Ref = useRef()
  const sect2Ref = useRef()
  const sect3Ref = useRef()
  const h1 = useRef()
  const h2 = useRef()
  const h5 = useRef()
  const badgeRef = useRef()
  
  useEffect(()=> {
    const textH1 = new SplitType(h1.current, { types: 'words, chars' })
    const textH2 = new SplitType(h2.current, { types: 'words, chars' })
    const textH5 = new SplitType(h5.current, { types: 'words, chars' })

    animationEnter(textH1)
    animationEnter(textH2)
    animationEnter(textH5)

    gsap.from(badgeRef.current, {
      opacity: 0,
      duration: 1,
      x: -50,
      ease: "power4.out",
      delay: 0.75
    })

    const sect1Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sect1Ref.current,
        start: "top top",
        end: "bottom top",
        scrub: 2,
      },
      ease: "power4.out"
    })

    sect1Timeline
      .to(h1.current, { scale: 1, opacity: 0, ease: "power4.out" })
      .to(h2.current, { y: -50, scale: 1.2, ease: "power4.out" }, "<=")
      .to(".subtitle", { opacity: 1, x: 0, stagger: 0.25 }, "<+=0.3")
       

    if (window.innerWidth > 768) {
      gsap.to("#sect-2-title", {
        y: 100,
        opacity: 1,
        scale: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sect2Ref.current,
          start: "center bottom",
          end: "top 200px",
          scrub: 2,
        }
      })
    }

    gsap.from("#sect-2-grid", {
      y: window.innerWidth > 768 ? -200 : -100,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sect2Ref.current,
        start: "top 80%",
        end: "top 20%",
      }
    })

    const sect2Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sect2Ref.current,
        start: "bottom bottom",
        end: "+=2000",
        scrub: 2,
        pin: true,
      },
      ease: "power4.out"
    })

    sect2Timeline
      .to(sect2Ref.current, {opacity:0, x: -2000, ease: "power3.out"})

    gsap.timeline({
      scrollTrigger: {
        trigger: sect3Ref.current,
        start: "top top",
        end: "bottom top",
        scrub: 2
      }
    })
    .to(sect3Ref.current, {x: 0, y: 0, opacity: 1})
    
    gsap.to("#sect-3-content", {
      opacity: 1,
      scrollTrigger: {
        trigger: sect3Ref.current,
        start: "bottom 20%",
        toggleActions: "play none none reset",
        scrub: 2
      }
    })
}, [])

  

  return (
    <main className="w-full relative">
      <Header/>
      <div className="h-[200vh]">
        <section ref={sect1Ref} id="sect-1" className="h-screen z-20 w-full sticky top-0 flex flex-col justify-center items-center">
          <div ref={h2} className="flex justify-center items-center gap-2 mb-6">
            <img ref={badgeRef} src={badge} alt="badge" className="w-12 sm:w-20"/>
            <h2 className="text-white text-3xl sm:text-6xl"><b>Infini</b>media Inc.</h2>
          </div>
          <h1 ref={h1} className="mx-12 z-20 font-semibold text-white text-[50px] leading-12 sm:leading-22 text-center tracking-wide scale-110 sm:text-8xl">Software solutions <br /> consulting</h1>
          <div className="text-3xl sm:text-5xl absolute text-center">
            <p className="text-white subtitle opacity-0">Optimize your firm</p>
            <p className="text-white subtitle opacity-0">Transform your business</p>
            <p className="text-white subtitle opacity-0">Achieve greater efficiency</p>
          </div>
        </section>
      </div>
      <div className="h-auto z-20 bg-[#75b9df] flex justify-center px-4 relative">
        <section ref={sect2Ref} id="sect-2"className="w-full max-w-[1200px] pb-20 sm:pb-[150px] flex flex-col items-center">
          {/* <img src={space} className="w-[200px] absolute right-0 bottom-0" /> */}
          <h3 id="sect-2-title" className="text-4xl sm:text-6xl font-semibold text-[#064563] md:opacity-0 text-center pb-12 sm:pb-42">What we do?</h3>
          <div id="sect-2-grid" className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
            <div className="md:col-span-4 flex flex-col items-start justify-center bg-[#cde4f1] grid-element p-6 rounded-2xl text-base sm:text-2xl text-[#064563] border-[#064563] border-2 hover:bg-[#b8dcf3] transition-all space-y-4 hover:scale-[103%]">
              <p>
                <b>Infini</b> has been solving complex corporate challenges using software
                for over 25 years.
              </p>
              <p>
                If you think your business could be more efficient, we can probably
                help you with custom software solutions tailored to your company.
              </p>
              <a className="border-[#064563] border-2 cursor-pointer font-semibold py-1 sm:py-2 px-4 rounded-full text-sm sm:text-xl hover:bg-[#064563] hover:text-white transition-all">
                Read more
              </a>
            </div>
            <div className="md:col-span-8 space-y-6">
              <div className="bg-[#cde4f1] grid-element p-6 rounded-2xl text-base sm:text-xl text-[#064563] border-[#064563] border-2 hover:bg-[#b8dcf3] transition-all space-y-2 hover:scale-[103%]">
                <h5 className="text-lg sm:text-2xl font-semibold">Bespoke software</h5>
                <p>
                  Custom-built software tailored to meet the specific needs of your
                  business, ensuring efficiency, scalability, and seamless integration
                  with your existing operations.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#cde4f1] grid-element p-6 rounded-2xl text-base sm:text-xl text-[#064563] border-[#064563] border-2 hover:bg-[#b8dcf3] transition-all space-y-2 hover:scale-[103%]">
                  <h5 className="text-lg sm:text-2xl font-semibold">Technology audits</h5>
                  <p>
                    A comprehensive assessment of your current technology
                    infrastructure to identify improvement opportunities, minimize
                    risks, and optimize digital tools across your organization.
                  </p>
                </div>

                <div className="bg-[#cde4f1] grid-element p-6 rounded-2xl text-base sm:text-xl text-[#064563] border-[#064563] border-2 hover:bg-[#b8dcf3] transition-all space-y-2 hover:scale-[103%]">
                  <h5 className="text-lg sm:text-2xl font-semibold">Software strategy</h5>
                  <p>
                    Strategic planning and guidance to align your business goals with
                    effective, long-term software solutions that drive growth and
                    innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="h-[100vh] bg-[#75b9df] relative flex justify-center items-start">
        <section ref={sect3Ref} className="h-screen absolute bottom-0 right-0 w-full bg-[#064563] opacity-0 -translate-y-[100vh] translate-x-[100vw]">
          <div id="sect-3-content" className="text-center sm:text-start flex flex-col justify-center items-center opacity-0 h-full">
              <h5 ref={h5} className="text-4xl sm:text-6xl text-white font-bold">LET’S BUILD TOGETHER</h5>
              <p className="text-[#75b9df] text-2xl sm:text-4xl">From vision to execution — we make your ideas work.</p>
              <a href="#" className="text-white font-semibold text-lg sm:text-2xl mt-10 py-1 sm:py-2 px-5 border-2 border-white rounded-full hover:bg-white hover:text-[#064563] transition-all">Get started</a>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
