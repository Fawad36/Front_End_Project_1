gsap.to("#page2 h1",{
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        scrub:2,
        markders:true,
        start:"top 0",
        end:"top -100%",
        pin:true,
        

    }
})