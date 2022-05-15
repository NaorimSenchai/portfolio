// Making the logo button a scroll back to top button
(() => {
    document.querySelector("#navbar-x .logo").addEventListener("click", () => window.scrollTo(0, 0));
})();

// Lightening current page on navbar-y
(() => {
    const siteLocation = window.location.pathname;

    document.querySelectorAll(".nav-links a").forEach(a => {
        if (siteLocation === a.getAttribute("href")) {
            a.classList.add("active");
        }
    });
})();

(() => {
    // Making time be dynamic
    const hour = document.querySelector(".time .hour");
    const minute = document.querySelector(".time .minute");
    const second = document.querySelector(".time .second");

    const middle = document.querySelectorAll(".time .middle");
    // middle.style.opacity = 0;
    
    let now = new Date();
    hour.textContent = (now.getHours()).toString().length < 2 ? `0${now.getHours()}` : now.getHours();
    minute.textContent = (now.getMinutes()).toString().length < 2 ? `0${now.getMinutes()}` : now.getMinutes();
    second.textContent = (now.getSeconds()).toString().length < 2 ? `0${now.getSeconds()}` : now.getSeconds();
    setInterval(() => {
        now = new Date();

        // middle.style.opacity = middle.style.opacity == 1 ? 0 : 1;
        hour.textContent = (now.getHours()).toString().length < 2 ? `0${now.getHours()}` : now.getHours();
        minute.textContent = (now.getMinutes()).toString().length < 2 ? `0${now.getMinutes()}` : now.getMinutes();
        second.textContent = (now.getSeconds()).toString().length < 2 ? `0${now.getSeconds()}` : now.getSeconds();
    }, 1000);
})();

(() => {
    const pixelToRem = (pixel) => {
        try {
            return (parseFloat(pixel.split("px")[0]) / 10);
        } catch (err) {
            return err.message;
        };
    };
    const remToPixel = (rem) => {
        try {
            return (parseFloat(rem.split("rem")[0]) * 10);
        } catch (err) {
            return err.message;
        };
    };
    console.log(remToPixel("4.8rem"));
    window.addEventListener("resize", () => {
        if (window.innerWidth > 800) {
            
        };
        document.querySelector("#navbar-y").style.removeProperty("left");
        document.body.style.removeProperty("left");
        document.querySelectorAll(".wire-1, .wire-2, .wire-3").forEach(wire => {
            wire.style.removeProperty("left");
        });
    });
    const toggleNavbarY = () => {
        const navY = document.querySelector("#navbar-y");
        const overlayShadow = document.querySelector(".overlay-shadow");
        const navbarSize = getComputedStyle(document.documentElement).getPropertyValue('--navbar-size');
        
        const wires = document.querySelectorAll(".wire-1, .wire-2, .wire-3");
        if (pixelToRem(window.getComputedStyle(navY).left) < 0) {
            navY.style.setProperty("left", 0);
            overlayShadow.style.setProperty("display", "flex");
            wires.forEach(wire => {
                wire.style.setProperty("left", `${navbarSize.split("rem")[0] * 4}rem`);
            });
        } else {
            navY.style.setProperty("left", `${-(navbarSize.split("rem")[0] * 4)}rem`);
            overlayShadow.style.setProperty("display", "none");
            wires.forEach(wire => {
                wire.style.setProperty("left", 0);
            });
        };
    };
    document.querySelector(".navbar-y-toggler").addEventListener("click", toggleNavbarY);
})();