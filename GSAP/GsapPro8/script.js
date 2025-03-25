// gsap.fromTo("#box",{
    // x:300,
    // y:300,
    // backgroundColor:"orange",
    duration:2,
    // ease: Expo.easeInOut
// }, {
    // x:360,
    // y:400,
    // backgroundColor:"purple",
    // duration:2
    // ease: Expo.easeInOut
// 
// })


gsap.to("#box",{
    x:300,
    ease:Expo.easeOut,
    duration:2,
    // onComplete: function(){
    //     alert("helo")
    // }


    // onStart: function(){
    //     alert("helo")
    // }


    // onprogress : function(){
    //     console.log("helo")
    // }

    onUpdate : function(){
        console.log("helo")
    }



})






