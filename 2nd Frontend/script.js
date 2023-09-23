
var crsr=document.querySelector('.cursor')
var crsr_blur=document.querySelector('.cursor-blur')
document.addEventListener("mousemove",function(dets) {
    crsr.style.left=dets.x+30+"px"
    crsr.style.top=dets.y+"px"
    crsr_blur.style.left=dets.x-200+"px"
    crsr_blur.style.top=dets.y-200+"px"
});


gsap.to(".nav",{    
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1

    }

})

gsap.to(".main ,.page2",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers:true,
        start:"top -50%",
        end:"top -80%",
        scrub:2
    }
})


var h4all=document.querySelectorAll(".nav .nav-ele")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.transition = "transform 1s ease-in";
        crsr.style.scale=3
        crsr.style.border="0.1px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.transition = "transform 2s ease-out";
        crsr.style.scale=1
        crsr.style.border="0px solid #95C11E"
        crsr.style.backgroundColor="#95C11E"
    })
})


gsap.from(".about-us img,.about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    Stagger:0.4,
    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})

gsap.from(".cards",{
    scale:0.8,
    opacity:0,
    duration:1,
    Stagger:0.1,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2

    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub:4
        
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub:4
        
    }
})

gsap.from("#page-4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page-4 h1",
        scroller:"body",
        start:"top 80%",
        end:"top 60%",
        scrub:3

    }
})