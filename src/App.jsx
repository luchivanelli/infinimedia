import { useEffect, useRef } from "react"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { animationEnter, cardsHover } from "./utils/animations"
import SplitType from "split-type"
import gsap from "gsap"
import badge from "./assets/badge.png"
import space from "./assets/space.png"

gsap.registerPlugin(ScrollTrigger);

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
  const isMobile = window.innerWidth < 768
  
  useEffect(()=> {
    let mm = gsap.matchMedia();
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

    const gridElements = gsap.utils.toArray(".grid-element")

    mm.add("(max-width: 767px)", () => {
      gridElements.forEach(element => {
        gsap.from(element, {
          scale: 0,
          opacity: 0,
          y: 50,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 70%",
            toggleActions: "play none none reverse",
          }
        })
      })

      // gsap.to("#img-space", {
      //   left: "100%",
      //   top: "60%",
      //   rotate: 120,
      //   ease: "power1.in",
      //   duration: 2.5,
      //   scrollTrigger: {
      //     trigger: "#sect-3",
      //     start: "top 60%",
      //     end: "top top",
      //     toggleActions: "restart none none none",
      //   }
      // })
    });

    mm.add("(min-width: 768px)", () => {
      gridElements.forEach((element, index) => {
        gsap.from(element, {
          scale: 0,
          opacity: 0,
          duration: 0.75,
          x: gsap.utils.random(-200, 200),
          y: gsap.utils.random(-200, 200),
          ease: "back.out",
          scrollTrigger: {
            trigger: "#sect-2-grid",
            start: "top center",
            end: "top 40%",
            toggleActions: "play none none reverse",
          }
        })
      })

      gsap.to("#img-space", {
      left: "100%",
      top: "60%",
      rotate: 120,
      ease: "power1.in",
      duration: 2.5,
      scrollTrigger: {
        trigger: "#sect-3",
        start: "top 60%",
        end: "top top",
        toggleActions: "restart none none none",
      }
    })
    });

    gsap.from("#sect-2-title", {
      opacity: 0,
      y: -200,
      scale: 0.5,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#sect-2-title",
        start: "top 70%",
        end: "top 80%",
        toggleActions: "play none none reverse",
      }
    })

    cardsHover(gridElements)

    gsap.to("#sect-3-content",  {
      opacity: 1,
      duration: 1,
      delay: 2,
      scrollTrigger: {
        trigger: "#sect-3",
        start: "top 70%",
        end: "top top",
        toggleActions: "restart none none reverse",
      }
    })

    gsap.from("#sect-3",  {
      backgroundColor: "#75b9df",
      duration: 1,
      delay: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "#sect-3",
        start: "top 70%",
        end: "top top",
        toggleActions: "restart none none reverse",
      }
    })

    gsap.to("#footer-container", {
      opacity: 1,
      delay: 3,
      duration: 1,
      scrollTrigger: {
        trigger: "#sect-3",
        start: "top 70%",
        end: "top top",
        toggleActions: "restart none none reverse",
      }
    })
       
}, [])

  

  return (
    <main className="overscroll-x-none bg-[#07628b] relative">
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
      <section className="bg-[#75b9df] px-4 pt-6 pb-10 sm:pb-24">
        <h3 id="sect-2-title" className="pb-6 sm:pb-10 text-4xl sm:text-6xl font-semibold text-[#064563] text-center">What we do?</h3>
        <div id="sect-2-grid" className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-[1000px] mx-auto">
            <div className="md:col-span-8 space-y-6">
              <div className="bg-[#cde4f1] cursor-pointer grid-element p-6 rounded-2xl text-base sm:text-xl text-[#064563] border-[#064563] border-2 hover:bg-[#b8dcf3] transition-all space-y-2 hover:scale-[103%]">
                <h5 className="text-lg sm:text-2xl font-semibold">Bespoke software</h5>
                <p>
                  Custom-built software tailored to meet the specific needs of your
                  business, ensuring efficiency, scalability, and seamless integration
                  with your existing operations.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#cde4f1] cursor-pointer grid-element p-6 rounded-2xl text-base sm:text-xl text-[#064563] border-[#064563] border-2 hover:bg-[#b8dcf3] transition-all space-y-2 hover:scale-[103%]">
                  <h5 className="text-lg sm:text-2xl font-semibold">Technology audits</h5>
                  <p>
                    A comprehensive assessment of your current technology
                    infrastructure to identify improvement opportunities, minimize
                    risks, and optimize digital tools across your organization.
                  </p>
                </div>

                <div className="bg-[#cde4f1] cursor-pointer grid-element p-6 rounded-2xl text-base sm:text-xl text-[#064563] border-[#064563] border-2 hover:bg-[#b8dcf3] transition-all space-y-2 hover:scale-[103%]">
                  <h5 className="text-lg sm:text-2xl font-semibold">Software strategy</h5>
                  <p>
                    Strategic planning and guidance to align your business goals with
                    effective, long-term software solutions that drive growth and
                    innovation.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 cursor-pointer flex flex-col items-start justify-center bg-[#cde4f1] grid-element p-6 rounded-2xl text-base sm:text-xl text-[#064563] border-[#064563] border-2 hover:bg-[#b8dcf3] transition-all space-y-4 hover:scale-[103%]">
              <h5 className="text-lg sm:text-2xl font-semibold">Empowering businesses since 1996</h5>
              <p>
                <b>Infini</b> has been solving complex corporate challenges using software
                for over 25 years.
              </p>
              <p>
                If you think your business could be more efficient, we can probably
                help you with custom software solutions tailored to your company.
              </p>
              <a className="border-[#064563] border-2 cursor-pointer font-semibold py-1 sm:py-1.5 px-4 my-1 rounded-full text-sm sm:text-xl hover:bg-[#064563] hover:text-white transition-all">
                Read more
              </a>
            </div>
          </div>
      </section>
      <section id="sect-3" className="h-screen relative w-full px-4">
        <img src={space} id="img-space" className="w-[150px] sm:w-[300px] rotate-150 absolute top-40 -left-[50%] sm:-left-[30%]" />
        <div id="sect-3-content" className="opacity-0 text-center sm:text-start flex flex-col justify-center items-center h-full">
            <h5 ref={h5} className="text-4xl sm:text-6xl text-white font-bold">LET’S BUILD TOGETHER</h5>
            <p className="text-[#75b9df] text-2xl sm:text-4xl">From vision to execution — we make your ideas work.</p>
            <a href="#" className="text-white font-semibold text-lg sm:text-2xl mt-10 py-1 sm:py-2 px-5 border-2 border-white rounded-full hover:bg-white hover:text-[#064563] transition-all">Get started</a>
        </div>
      </section>
      <div id="footer-container" className="opacity-0">
        <Footer/>
      </div>
    </main>
  )
}

export default App
