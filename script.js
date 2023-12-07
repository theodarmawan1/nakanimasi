var nav = document.querySelector("nav")
var navBrand = document.querySelector(".navbar-brand")

    window.addEventListener("scroll", function (){
        if(window.scrollY >= 56){
        nav.classList.add("bg-white")
        
        }
        else if(window.scrollY < 56){
            nav.classList.remove("bg-white")
        }
})

        AOS.init();

        // You can also pass an optional settings object
        // below listed default settings
        AOS.init({
          // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
          offset: 120, // offset (in px) from the original trigger point
          delay: 0, // values from 0 to 3000, with step 50ms
          duration: 900, // values from 0 to 3000, with step 50ms
          easing: 'ease', // default easing for AOS animations
          once: false, // whether animation should happen only once - while scrolling down
          mirror: true, // whether elements should animate out while scrolling past them
          anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
        
        });