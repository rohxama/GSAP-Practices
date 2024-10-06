gsap.to("#box", {
    x: 400,
    backgroundColor: "red",
    duration: 1,
    delay: 2,
    yoyo: true,
    repeat: -1
})

gsap.to("#box",{
    x : 900,
    y: 300,
    backgroundColor: "red",
    duration: 2,
    delay: 2,
    yoyo: true,
    repeat: -1,
    rotate: 350,
    width: 100,
    height: 100,
    stagger: 1
})

var tl = gsap.timeline();
tl.to("h1",{
    x: 800,
    duration: 2
})
tl.to("h2",{
    x: 800,
    duration: 2
})
tl.to("h3",{
    x: 800,
    duration: 2
})



