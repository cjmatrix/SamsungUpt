

addEventListener("DOMContentLoaded",()=>{


    gsap.registerPlugin(ScrollTrigger);

    
    ScrollTrigger.matchMedia({
        "(min-width:1501px)": function(){
            const tl=gsap.timeline({
                scrollTrigger:{
                    trigger:"#bg-video",
                    start:"top top",
                    end:"bottom 40%",
                    scrub:1,
                 
                }
               })
               tl.to("#bg-video",{padding:"0 15rem"})
            
        }
    })


    document.querySelectorAll(".mobile-wrapper").forEach(wrapper=>{
        const items=wrapper.querySelectorAll(".items");

        gsap.from(items,{
            y:50,
            opacity:0,
            duration:0.5,
            ease:"power2.out",
            stagger:0.2,
            scrollTrigger:{
                trigger:wrapper,
            
                toggleActions:"play none none none",
                start:"top 70%"
            }
        })
    })

    const heading= document.querySelectorAll(".title")
   

      heading.forEach(head=>{
        gsap.from(head,{
          y:0,
          opacity:0,
          duration:1,
          delay:0.2,
          scrollTrigger:{
            trigger:head,
            start:"top 70%",
            toggleActions:"play none none none"
          
          }
        })
      })


     ScrollTrigger.create({
        start:0,
        end:"max",
        onUpdate:(event)=>{
                if(event.direction==1 && event.scroll()>100){
                  gsap.to("#navbar",{
                    y:"-100%",
                    opacity:0,
                    duration:0.3
                  })
                }
                else
                {
                  gsap.to("#navbar",{
                    y:"0%",
                    opacity:1,
                    duration:0.3,
                
                  })
                }
        }
      })

      gsap.to("#navbar",{
          backgroundColor:"black",
          duration:0.3,
          scrollTrigger:{
            trigger:"#bg-video",
            start:"bottom top",
          
            toggleActions:"play none reverse none",
      
          }
      })
     




    /*document.querySelectorAll(".mobile-wrapper").forEach((wrapper) => {
        const items = wrapper.querySelectorAll(".items");

        console.log(items);
      
        gsap.from(items, {
          y: 300,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: wrapper,
            start: "top bottom",
            toggleActions: "play none none none",
            markers: true
          }
        });
      });*/
      

  /* const items = document.querySelectorAll(".maini .items");

    console.log(items);

    items.forEach((item)=>{

     // gsap.set(item, { y: 100, opacity: 0 });

        gsap.from(item,{
            
            y:300 ,
            opacity:0,
            duration:1,
            ease:"power2.out",
            delay:1,
            scrollTrigger:{
                trigger:item,
                start:"top bottom",
                toggleActions:"play none none none",
                markers:true
            }
        })
    });*/



   /* const items = document.querySelectorAll(".maini .items");

    console.log(items);
    
    items.forEach((item) => {
      // Set initial state
     // gsap.set(item, { y: 100, opacity: 0 });

      gsap.to(item, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top bottom", // When item top reaches 80% of viewport
          toggleActions: "play none none none",
          markers: true // remove this in production
        }
      });
    });*/
  

  /* const tl=gsap.timeline({
    scrollTrigger:{
        trigger:".box",
        toggleActions:"restart none none reset ",
        start:"top bottom",
        end:"tom tom",
        markers:true
    } 
    })

    tl.to(".box",{x:100,duration:3,backgroundColor:"purple"});


*/

})
