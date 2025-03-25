let Tl = gsap.timeline();
Tl.from("#nav h3",{
    y:-50,
    opacity:0,
    duration:1,
    delay:0.4,
    stagger:.2
})

Tl.from("#main h1",{
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.4
})
Tl.from("img ",{
    x:100,
    rotate:45,
    duration:1,
    stagger:0.4,
    opacity:0

})