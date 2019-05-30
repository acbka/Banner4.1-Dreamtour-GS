var tl = new TimelineLite();



tl.from(".img11", 2.5, {alpha: 0, rotation:"360deg", ease: Back.easeInOut, x: 300})
    .from(".img12", 2.5, {alpha: 0, rotation:"360deg", ease: Back.easeInOut, x: 300}, "-=2")
    .from(".img13", 2.5, {alpha: 0, rotation:"360deg", ease: Back.easeInOut, x: 250}, "-=2")
    .from(".logo", .5, {alpha: 0, ease: Back.easeInOut, x:-50}, "-=.8")
    .from(".plan", 2, {alpha: 0, opacity: 1}, "-=.3")
    .from(".all", 1, {alpha: 0, opacity: 1}, "-=.9")
    .from(".dreamtour", 1.5, {alpha: 0, ease: Back.easeInOut, y: -50}, "-=1")
    .from(".button", 0.5, {alpha: 0, ease: Power0.easeNone, y: -50}, "-=.5")
    .from(".click", 1, {alpha: 0, opacity: 1}, "-=.1")