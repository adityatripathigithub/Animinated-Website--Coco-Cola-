gsap.from(".page1 h1", {
    y: -60,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: "body",
        stagger:0.2,
    }
})

// var page1 = document.querySelector(".page1");
// var button = document.querySelector("button");

// button.addEventListener("click", function () {
//     button.innerHTML = "Thanks"
    
// })