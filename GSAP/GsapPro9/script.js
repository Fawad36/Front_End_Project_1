// gsap.from("#left",{
//     width: 0,
//     duration: 1,
//     ease: Expo.easeInOut   
// })
let tl = gsap.timeline();
tl
.from("#left",{
    width:0,
    ease:Expo.easeInOut,
    duration: 1.5
})
.from("#right",{
    width:0,
    ease:Expo.easeInOut,
    duration: 1.5
})