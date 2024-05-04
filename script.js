gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  larp:0.1
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


// var nav = document.querySelector(".top-nav");
// var btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click",function () {
//     btn1.style.scale = "200%";

// })


var page1 = document.querySelector(".page1");
var box = document.querySelector(".box");
var box2 = document.querySelector(".box2");
var h5 = document.querySelector("h5");
var nav = document.querySelector("nav");
var h2 = document.querySelector("h2");


h5.addEventListener("click", function () {
  box.style.height = "60%";
  h2.style.display = "initial";
  h5.style.display = "none";
  nav.style.display = "initial";
  box2.style.transform = "scale(-100%)";

});


h2.addEventListener("click", function () {
  box.style.height = "0%";
  h5.style.display = "initial";
  h2.style.display = "none";
  nav.style.display = "none";
  box2.style.transform = "scale(-5%)";

});


h5.addEventListener("click", function () {
  gsap.from("h4", {
    y: 300,
    duration: 1,
    delay: 0.5,
    stagger: 0.2,
    opacity: 0,
  })

  gsap.from(".page1 button", {
    y: 100,
    duration: 0.5,
    delay: 1.6,
    opacity: 0,
    display: "none",

  })
});



var tl = gsap.timeline()

tl.from("#loader h3", {
  x: 50,
  opacity: 0,
  duration: 0.5,
  delay: 1,
  stagger: 0.2
})


tl.to("#loader h3", {
  x: -50,
  opacity: 0,
  stagger: -0.2
})

tl.to("#loader", {
  height: "0%",
  duration: 0.8
})
tl.to("#loader", {
  display: "none",

})

gsap.from(".page1 h1", {
  y: 100,
  opacity: 0,
  duration: 0.7,
  delay: 3,
  stagger: 0.2
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,

  autoplay: {
    delay: 800,
    disableOnInteraction: false,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
});



Shery.imageEffect("#back", { style: 5, config: { "a": { "value": 0, "range": [0, 30] }, "b": { "value": 0.75, "range": [-1, 1] }, "zindex": { "value": "9996999", "range": [-9999999, 9999999] }, "aspect": { "value": 1.9632136711330945 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.6, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.2, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } }, gooey: true })


gsap.from("#back", {
  y: 200,
  width: "30%",
  scrollTrigger: {
    trigger: "#back",
    scroller: "#main",
    // markers: true,
    top: "20%",
    start: "top 80%",
    end: "top 20%",
    scrub: true
  }
})




var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var form1 = document.querySelector(".form1");
var form2 = document.querySelector(".form2");
var close2 = document.querySelector(".close2");
var close3 = document.querySelector(".close3");

btn1.addEventListener("click", function () {
  gsap.to(".form1", {
    right: "0%",
    duration: 0.5,
    display: "initial"
  })

});

close2.addEventListener("click", function () {
  gsap.to(".form1", {
    right: "-25%",
    duration: 0.5,
    display: "none"
  })

});


btn2.addEventListener("click", function () {
  gsap.to(".form2", {
    right: "0%",
    duration: 0.5,
    display: "initial"
  })

});

close3.addEventListener("click", function () {
  gsap.to(".form2", {
    right: "-25%",
    duration: 0.5,
    display: "none"
  })

});


// gsap.to(".page5 #box1", {
//   transform: `translateX(-200%)`,
//   delay:3,
//   scrollTrigger: {
//     trigger: ".page5",
//     scroller: "#main",
//     start: "top 0%",
//     end: "top -250%",
//     // markers: true,
//     pin: true,
//     scrub: true
//   }
// })

// gsap.from(".page5 #box1", {
//   transform: `scale(0.6)`,
//   scrollTrigger: {
//     trigger: ".page5",
//     scroller: "#main",
//     start: "top 20%",
//     end: "top 10%",
//     // markers: true,
//     scrub: true

//   }

// })

// gsap.to(".page5 #box2", {
//   transform: `translateX(-250%)`,
//   scrollTrigger: {
//     trigger: ".page5",
//     scroller: "#main",
//     start: "top 1.5%",
//     end: "top -350%",
//     // markers: true,
//     pin: true,
//     scrub: true
//   }
// })


// gsap.from(".page5 #box2", {
//   transform: `scale(0.6)`,
//   delay:1.5,
//   scrollTrigger: {
//     trigger: ".page5",
//     scroller: "#main",
//     start: "top 5%",
//     end: "top -100%",
//     markers: true,
//     scrub: true

//   }

// })

// gsap.to(".page5 #box3", {
//   transform: `translateX(-200%)`,
//   scrollTrigger: {
//     trigger: ".page5",
//     scroller: "#main",
//     start: "top 1.8%",
//     end: "top -450%",
//     // markers: true,
//     pin: true,
//     scrub: true
//   }
// })

// gsap.to(".page5 h2",{
//   transform : `translateX(-200%)`,
//   scrollTrigger:{
//       trigger:".page5",
//       scroller:"#main",
//       start:"top 5%",
//       end: "top -150%",
//       markers:true,
//       // pin:true,
//       scrub:5
//   }
// })


gsap.to(".page5 #box1", {
  transform: `translateX(-200%)`,
  scrollTrigger: {
    trigger: ".page5",
    scroller: "#main",
    start: "top 0%",
    end: "top -250%",
    // markers: true,
    pin: true,
    scrub: true
  }
})

gsap.from(".page5 #box1", {
  transform: `scale(0.6)`,
  scrollTrigger: {
    trigger: ".page5",
    scroller: "#main",
    start: "top 20%",
    end: "top 10%",
    // markers: true,
    scrub: 2

  }

})

gsap.to(".page5 #box2", {
  transform: `translateX(-250%)`,
  scrollTrigger: {
    trigger: ".page5",
    scroller: "#main",
    start: "top 1.5%",
    end: "top -350%",
    // markers: true,
    pin: true,
    scrub: true
  }
})


gsap.from(".page5 #box2", {
  transform: `scale(0.6)`,
  scrollTrigger: {
    trigger: "#box2",
    scroller: "#main",
    start: "top -50%",
    end: "top -100%",
    // markers: true,
    scrub: 1

  }

})

gsap.to(".page5 #box3", {
  transform: `translateX(-200%)`,
  scrollTrigger: {
    trigger: ".page5",
    scroller: "#main",
    start: "top 1.8%",
    end: "top -400%",
    // markers: true,
    pin: true,
    scrub: true
  }
})

gsap.from(".page5 #box3", {
  transform: `scale(0.6)`,
  scrollTrigger: {
    trigger: "#box3",
    scroller: "#main",
    start: "top -300%",
    end: "top -450%",
    // markers: true,
    scrub: 1

  }

})






// gsap.to(".page5 #box1", {
//   transform: `translateX(-200%)`,
//   delay: 0, // No delay for the first box
//   scrollTrigger: {
//     trigger: ".page5",
//     scroller: "#main",
//     start: "top 0%",
//     end: "top -250%",
//     pin: true,
//     scrub: true
//   }
// })

// gsap.from(".page5 #box1", {
//   transform: `scale(0.6)`,
//   right: "20%",
//   scrollTrigger: {
//     trigger: ".page5",
//     scroller: "#main",
//     start: "top 0%", // Start the animation from the same point as the previous animation
//     end: "top -250%", // End the animation before the next box animation starts
//     scrub: true
//   }
// })

// gsap.to(".page5 #box2", {
//   transform: `translateX(-200%)`,
//   delay: 0.5, // Delay the animation for the second box by 0.5 seconds
//   scrollTrigger: {
//     trigger: ".page5",
//     scroller: "#main",
//     start: "top 0%", // Start the animation from the same point as the previous animation
//     end: "top -250%", // End the animation before the next box animation starts
//     pin: true,
//     scrub: true
//   }
// })

// gsap.from(".page5 #box2", {
//   transform: `scale(0.6)`,
//   right: "20%",
//   scrollTrigger: {
//     trigger: ".page5",
//     scroller: "#main",
//     start: "top 0%", // Start the animation from the same point as the previous animation
//     end: "top -250%", // End the animation before the next box animation starts
//     scrub: true
//   }
// })

// gsap.to(".page5 #box3", {
//   transform: `translateX(-200%)`,
//   delay: 1, // Delay the animation for the third box by 1 second
//   scrollTrigger: {
//     trigger: ".page5",
//     scroller: "#main",
//     start: "top 0%", // Start the animation from the same point as the previous animation
//     end: "top -250%", // End the animation before the next box animation starts
//     pin: true,
//     scrub: true
//   }
// })