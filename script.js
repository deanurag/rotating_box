gsap.to("#outerBox",{
    x: 1155,
    y: 305,
    duration: 2,
    delay: 1,
    rotate: 3600,
    repeat: -1,
    yoyo: true,
    scale: 0.5
})


gsap.to("#innerBox",{
    x: 0,
    y: 0,
    duration: 2,
    rotate: 1000,
    delay: 1.2,
    repeat: -1,
    yoyo: true
})