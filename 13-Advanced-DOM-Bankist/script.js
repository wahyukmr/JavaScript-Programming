"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

///////////////////////////////////////
/* Modal window */
function openModal(e) {
    e.preventDefault();
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

function closeModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

///////////////////////////////////////
/* Button Scrolling */
btnScrollTo.addEventListener("click", function (e) {
    // coordinate scrolling
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);

    console.log(e.target.getBoundingClientRect());

    console.log("current scroll (X/Y", window.pageXOffset, window.pageYOffset);
    // display port dimensions
    console.log(
        "height/width viewport",
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
    );

    /* Real case Scrolling */
    // old way
    // window.scrollTo({
    //     // current position + scroll
    //     left: s1coords.left + window.pageXOffset,
    //     top: s1coords.top + window.pageYOffset,
    //     behavior: "Smooth",
    // });
    // modern way
    section1.scrollIntoView({ behavior: "smooth" });
});

///////////////////////////////////////
// Event Delegation: implementing Page Navigation
// 1. add Event listener to common parent element
// 2. Determine what element originated the event
document.querySelector(".nav__links").addEventListener("click", function (e) {
    e.preventDefault();

    // Matching strategy
    if (e.target.classList.contains("el")) {
        const ID = e.target.getAttribute("href");
        document.querySelector(ID).scrollIntoView({ behavior: "smooth" });
    }
});

///////////////////////////////////////
// Tabbed components
tabsContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".operations__tab");

    // Guard clause
    if (!clicked) return;

    // Remove active class
    tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
    tabsContent.forEach((content) =>
        content.classList.remove("operations__content--active")
    );

    // Active tab
    clicked.classList.add("operations__tab--active");

    // active content area
    document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add("operations__content--active");
});

///////////////////////////////////////
// Menu fade animations
/* 
Note:   - opposite of mouseenter is mouseleave
        - opposite of mouseover is mouseout */
function handleHover(element) {
    if (element.target.classList.contains("nav__link")) {
        const link = element.target;
        const siblings = link.closest(".nav").querySelectorAll(".nav__link");
        const logo = link.closest(".nav").querySelector("img");

        siblings.forEach((el) => {
            if (el !== link) el.style.opacity = this;
        });
        logo.style.opacity = this;
    }
}
// method bind can refer this to any object
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

///////////////////////////////////////
// Intersection Observer API
/* 
Note:
    - This API allows our code to observe changes to a specific target element, truncate other elements, or the way the element intercepts the viewport
    - The root property = null ,is the Viewed document area
    - The threshold property is the percentage of intersections where observer callbacks will be called
    - 0 in property threshold basically our callback will be triggered whenever the target element moves completely out of the view and after entering the view
    - The rootMargin property is the apply size outside our target element
    */
// concept of Intersection Observer API
// const obsCallback = function (entries, observer) {
//     entries.forEach((entry) => {
//         console.log(entry);
//     });
// };

// const obsOptions = {
//     root: null,
//     threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

// practice on the website
const headers = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

function stickyNav(entries) {
    const [entry] = entries; // assigns the initial value when an object is created (constructor function)

    if (!entry.isIntersecting) nav.classList.add("sticky");
    else nav.classList.remove("sticky");
}

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`, // A string, formatted similar to the margin value in a CSS property
});
// // Declares what to observe, and observes its properties.
headerObserver.observe(headers);

///////////////////////////////////////
// Reveal section
const allSelections = document.querySelectorAll(".section");

function revealSection(entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target); // stoped
}

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15, // revealed when it has 15% view
});

allSelections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add("section--hidden");
});

///////////////////////////////////////
// Lazy loading images
const imgTargets = document.querySelectorAll("img[data-src]");

function loadImg(entries, observer) {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) return;

    // Replace src with data-src
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener("load", function () {
        entry.target.classList.remove("lazy-img");
    });

    observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: "-200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

///////////////////////////////////////
// Sliders
function slider() {
    const slides = document.querySelectorAll(".slide");
    const btnLeft = document.querySelector(".slider__btn--left");
    const btnRight = document.querySelector(".slider__btn--right");
    const dotContainer = document.querySelector(".dots");

    let curSlide = 0;
    const maxSlide = slides.length;

    // Create dots
    function createDots() {
        slides.forEach(function (_, i) {
            dotContainer.insertAdjacentHTML(
                "beforeend",
                `<button class="dots__dot" data-slide="${i}"></button>`
            );
        });
    }
    // Activate dots
    function activateDot(slide) {
        document
            .querySelectorAll(".dots__dot")
            .forEach((dot) => dot.classList.remove("dots__dot--active"));

        document
            .querySelector(`.dots__dot[data-slide="${slide}"]`)
            .classList.add("dots__dot--active");
    }
    // Main slide (0%, 100%, 200%,...)
    function gotoSlide(slide) {
        slides.forEach(
            (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
        );
    }
    // next slide (-100%, 0%, 100%, 200%,...)
    function nextSlide() {
        if (curSlide === maxSlide - 1) {
            curSlide = 0; // back to the beginning
        } else {
            curSlide++; // add and return the previous value
        }

        gotoSlide(curSlide); // 100*-1, 100*0, 100*1
        activateDot(curSlide);
    }
    // prev slide (..., -300%, -200%, -100%, 0%)
    function prevSlide() {
        if (curSlide === 0) {
            curSlide = maxSlide - 1;
        } else {
            curSlide--;
        }
        gotoSlide(curSlide);
        activateDot(curSlide);
    }
    // init
    function init() {
        gotoSlide(0);
        createDots();

        activateDot(0);
    }
    init();

    // Event handlers
    btnRight.addEventListener("click", nextSlide);
    btnLeft.addEventListener("click", prevSlide);
    // attach event handler to keyboard event
    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") prevSlide();
        if (e.key === "ArrowRight") nextSlide();
    });
    dotContainer.addEventListener("click", function (e) {
        if (e.target.classList.contains("dots__dot")) {
            // destructure
            const { slide } = e.target.dataset; // dataset.slide
            gotoSlide(slide);
            activateDot(slide);
        }
    });
}
slider();

/////////////////////////////////////////////////////
// LECture;
/*  ***************************************************************************************************
 *   Selecting element
 *  ***************************************************************************************************/
// {
//     console.log(document.documentElement);
//     console.log(document.head);
//     console.log(document.body);

//     const allSelections = document.querySelectorAll(".section");
//     console.log(allSelections);

//     document.getElementById("section--1");
//     const allButton = document.getElementsByTagName("button");
//     console.log(allButton);

//     console.log(document.getElementsByClassName("btn"));
// }

/*  ***************************************************************************************************
 *   Creating, inserting, displaying, and delete elements
 *  ***************************************************************************************************/
/////////////////////////////////////////////////////
// Creating elements
// {
//     /* Create elements from scratch */
//     const message = document.createElement("div");
//     message.classList.add("cookie-message");
//     message.innerHTML =
//         'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

//     /* another way create element */
//     // - insert element before headers
//     headers.before(message);

//     // - insert element after
//     headers.after(message);
// }

/////////////////////////////////////////////////////
// inserting elements
// {
//     /* Insert a text in HTML or XML format */
//     insertAdjacentHTML()

//     /* insert multiple copies of the same element */
//     headers.append(message.cloneNode(true));
// }

/////////////////////////////////////////////////////
// displaying elements
// {
//     /* displaying elements in DOM */
//     // add or move element as first child
//     headers.prepend(message);

//     // add or move element as last child
//     headers.append(message);
// }

/////////////////////////////////////////////////////
// delete elements
// {
//     document
//     .querySelector(".btn--close-cookie")
//     .addEventListener("click", function () {
//         message.remove();

//         /* old way */
//         // message.parentElement.removeChild(message);
//     });
// }

/*  ***************************************************************************************************
 *   Styles
 *  ***************************************************************************************************/
// {
//     /////////////////////////////////////////////////////
//     // inline style
//     message.style.backgroundColor = "#37383d";
//     message.style.width = "120%";

//     console.log(message.style.color);
//     console.log(message.style.backgroundColor);

//     /////////////////////////////////////////////////////
//     // get all css properties and values from the specified element.
//     console.log(getComputedStyle(message).color);
//     console.log(getComputedStyle(message).height);

//     /////////////////////////////////////////////////////
//     // increase height
//     message.style.height =
//         Number.parseFloat(getComputedStyle(message).height, 10) + 20 + "px";

//     /////////////////////////////////////////////////////
//     // CSS variables
//     document.documentElement.style.setProperty("--color-primary", "red");
// }

/*  ***************************************************************************************************
 *   Attributes
 *  ***************************************************************************************************/
// {
//     /////////////////////////////////////////////////////
//     // get attributes
//     const logo = document.querySelector(".nav__logo");
//     console.log(logo.alt);
//     console.log(logo.className);

//     /////////////////////////////////////////////////////
//     // get attributes non standard
//     console.log(logo.designer);
//     console.log(logo.getAttribute("designer"));

//     /////////////////////////////////////////////////////
//     // set attributes
//     logo.alt = "beautiful minimalist logo";

//     /////////////////////////////////////////////////////
//     // add new attributes
//     logo.setAttribute("company", "Bankist");

//     /////////////////////////////////////////////////////
//     // attribute src absolute and relative version
//     console.log(logo.src); // absolute version
//     console.log(logo.getAttribute("src")); // relative version

//     /////////////////////////////////////////////////////
//     // attribute href absolute and relative version
//     const link = document.querySelector(".nav__link--btn");
//     console.log(link.href); // absolute version
//     console.log(link.getAttribute("href")); // relative version

//     /////////////////////////////////////////////////////
//     // data attribute
//     console.log(logo.dataset.versionNumber);
// }

/*  ***************************************************************************************************
 *   Classes
 *  ***************************************************************************************************/
// {
//     logo.classList.add("c", "j"); // add some classes
//     logo.classList.remove("c", "j"); // delete some classes
//     logo.classList.toggle("c"); // if the class exists then delete it, if not add it
//     logo.classList.contains("c"); // Returns true if the list contains a class
//     logo.classList.replace("c", "m"); // replace class "c" with class "m"
// }

/*  ***************************************************************************************************
 *   Types of Events and Event Handlers
 *  **************************************************************************************************
Note: - Event mouseenter similar to hover in css
    */
// {
//     const h1 = document.querySelector("h1");
//     function alertH1() {
//         alert("great");
//     }

//     /////////////////////////////////////////////////////
//     /* old way to attach event listener to element */
//     // h1.onmouseenter = function (e) {
//     //     alert("great");
//     // };

//     /////////////////////////////////////////////////////
//     /* modern way to attach event listener to element */
//     h1.addEventListener("mouseenter", alertH1);

//     /////////////////////////////////////////////////////
//     /* delete event listener from element */
//     setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 2000);
// }

/*  ***************************************************************************************************
 *   Event Propagation: Bubbling and Cupturing
 *  ***************************************************************************************************/
/////////////////////////////////////////////////////
/* Bubbling Phase */
// {
//     // rgb(255, 255, 255)
//     const randomInt = (min, max) =>
//         Math.floor(Math.random() * (max - min + 1) + min);
//     const randomColor = () =>
//         `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

//     document
//         .querySelector(".nav__link")
//         .addEventListener("click", function (e) {
//             this.style.backgroundColor = randomColor();
//             console.log("link", e.target, e.currentTarget);
//             console.log(e.currentTarget === this);

//             /* Stop Propagation is stop deployment to parent element*/
//             // e.stopPropagation();
//         });

//     document
//         .querySelector(".nav__links")
//         .addEventListener("click", function (e) {
//             this.style.backgroundColor = randomColor();
//             console.log("Container", e.target, e.currentTarget);
//         });

//     document.querySelector(".nav").addEventListener("click", function (e) {
//         this.style.backgroundColor = randomColor();
//         console.log("Nav", e.target, e.currentTarget);
//     });
// }

/*  ***************************************************************************************************
 *   DOM Traversing
 *  ***************************************************************************************************/
const h1 = document.querySelector("h1");
// {
//     /* Going downwards: child */
//     console.log(h1.querySelectorAll(".highlight"));
//     console.log(h1.childNodes);
//     console.log(h1.children); // get the children element
//     h1.firstElementChild.style.color = "white";
//     h1.lastElementChild.style.color = "orangered";

//     /* Going upwards: parent */
//     // closest is useful method when doing event delegation
//     console.log(h1.parentNode);
//     console.log(h1.parentElement); // get the parent element
//     h1.closest(".header").style.background = "var(--gradient-secondary)"; // find the nearest header element
//     h1.closest("h1").style.background = "var(--gradient-primary)"; // find the nearest h1 element

//     /* Going sideways: siblings */
//     console.log(h1.previousElementSibling);
//     console.log(h1.nextElementSibling);
//     // property node
//     console.log(h1.previousSibling);
//     console.log(h1.nextSibling);
//     console.log(h1.parentElement.children);

//     [...h1.parentElement.children].forEach(function (child) {
//         if (child !== h1) child.style.transform = "scale(0.5)";
//     });
// }

/*  ***************************************************************************************************
 *   lifecycle DOM Event
 *  ***************************************************************************************************/
// {
//     document.addEventListener("DOMContentLoaded", function (e) {
//         console.log("HTML parsed and DOM tree built!", e);
//     });

//     window.addEventListener("load", function (e) {
//         console.log("Page fully loaded", e);
//     });

//     window.addEventListener("beforeunload", function (e) {
//         e.preventDefault();
//         console.log(e);
//         e.returnValue = "";
//     });
// }
