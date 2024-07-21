//  prompt("let")
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
let tl = gsap.timeline();
tl
    .to(".page1", {
        y: "100vh",
        duration: 0,
        scale: .6,
        ease: Expo.easeInOut
    })
    .to(".page1", {
        y: "10vh",
        duration: 1,
        delay: 1,
        ease: Expo.easeInOut
    })
    .to(".page1", {
        y: "0vh",
        duration: 1,
        rotate: "360deg",
        scale: 1,
        duration: .9,
        ease: Expo.easeInOut
    })
document.querySelector(".work").addEventListener("mousemove", function () {
    gsap.to(".work2>h2", {
        left: "-100px",
        duration: .2,
        // ease: Expo.easeInOut
    })
    gsap.to(".work2>h1", {
        left: "370px",
        duration: .2,
        // ease: Expo.easeInOut
    })
})
document.querySelector(".work").addEventListener("mouseleave", function () {
    gsap.to(".work2>h2", {
        left: "-430px",
        duration: .2,
        // ease: Expo.easeInOut
    })
    gsap.to(".work2>h1", {
        left: "-160px",
        duration: .2,
        // ease: Expo.easeInOut
    })
})
document.querySelector(".hope3").addEventListener("mousemove", function () {
    gsap.to(".hope4", {
        left: "980px",
        duration: .2,
        // ease: Expo.easeInOut
    })
  
})
document.querySelector(".hope3").addEventListener("mouseleave", function () {
    gsap.to(".hope4", {
        left: "57%",
        duration: .2,
        // ease: Expo.easeInOut
    })
   
})
document.querySelector(".hope2").addEventListener("mousemove", function () {
    gsap.to(".hope4", {
        left: "980px",
        duration: .2,
        // ease: Expo.easeInOut
    })
    gsap.to(".hope3", {
        left: "60%",
        duration: .2,
        // ease: Expo.easeInOut
    })
  
})
document.querySelector(".hope2").addEventListener("mouseleave", function () {
    gsap.to(".hope4", {
        left: "57%",
        duration: .2,
        // ease: Expo.easeInOut
    })
    gsap.to(".hope3", {
        left: "40%",
        duration: .2,
        // ease: Expo.easeInOut
    })
   
})
document.querySelector(".hope1").addEventListener("mousemove", function () {
    gsap.to(".hope4", {
        left: "980px",
        duration: .2,
        // ease: Expo.easeInOut
    })
    gsap.to(".hope3", {
        left: "60%",
        duration: .2,
        // ease: Expo.easeInOut
    })
    gsap.to(".hope2", {
        left: "40%",
        duration: .2,
        // ease: Expo.easeInOut
    })
  
})
document.querySelector(".hope1").addEventListener("mouseleave", function () {
    gsap.to(".hope4", {
        left: "57%",
        duration: .2,
        // ease: Expo.easeInOut
    })
    gsap.to(".hope3", {
        left: "40%",
        duration: .2,
        // ease: Expo.easeInOut
    })
    gsap.to(".hope2", {
        left: "20%",
        duration: .2,
        // ease: Expo.easeInOut
    })
   
})