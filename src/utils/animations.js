import gsap from "gsap"

export const animationEnter = (text)=> {
    text.chars.forEach((char, index) => {
        gsap.from(char, {
            x: gsap.utils.random(-200, 200),
            y: gsap.utils.random(-200, 200),
            rotate: gsap.utils.random(-360, 360),
            scale: gsap.utils.random(1, 2),
            duration: 0.75,
            ease: "back.out",
            delay: index * 0.02,
            opacity: 0
        })
     
        const charsHover = ()=> {
            gsap.timeline()
            .to(char, {
                y: gsap.utils.random(-30, 0),
                x: gsap.utils.random(-20, 20),
                rotate: gsap.utils.random(-30, 30),
                scale: gsap.utils.random(0.5, 1.5),
                duration: .3,
                ease: "back.out",
                color: "#75b9df",
                onStart: () => {
                    char.removeEventListener("mouseenter", charsHover);
                }
            })
            .to(char, {
                y: 0,
                x: 0,
                rotate: 0,
                scale: 1,
                color: "#fff",
                delay: 1,
                duration: .5,
                ease: "back.out",
                onComplete: () => {
                    setTimeout(() => {
                        char.addEventListener("mouseenter", charsHover);
                    }, 100);
                }
            })
        }

        char.addEventListener("mouseenter", charsHover);
    })
}

export const cardsHover = (cards)=> {
    cards.forEach(card => {
        const tl = gsap.timeline({ paused: true });

        tl.to(card, {
            scale: 1.05,
            backgroundColor: "#75b9df",
            duration: 0.01,
            ease: "power1.in"
        });

        card.addEventListener("mouseenter", () => {
            tl.play();
        });

        card.addEventListener("mouseleave", () => {
            gsap.to(card, {
            scale: 1,
            backgroundColor: "#cde4f1",
            duration: 0.1,
            ease: "back.out(1.7)"
            });
            tl.pause(0);
        });
    });
}
