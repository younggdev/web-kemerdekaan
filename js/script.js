// Section 1
let text = document.getElementsByClassName("text")[0];

// Layer Gambar Section 1
let s1_l1 = document.querySelector(".section_1 .layer img:nth-child(2)");
let s1_l2 = document.querySelector(".section_1 .layer img:nth-child(3)");
let s1_l3 = document.querySelector(".section_1 .layer img:nth-child(4)");
let s1_l4 = document.querySelector(".section_1 .layer img:nth-child(5)");
let s1_l5 = document.querySelector(".section_1 .layer img:nth-child(6)");

// Section 2
let content = document.getElementById("content");
let judul = document.getElementById("judul");
let p = document.getElementsByClassName("paragraf")[0];

// Section 3
let pesawat = document.querySelector(".pesawat img");
let bom = document.querySelector(".section_2 .bg img:nth-child(4)");
let kisahBomAtom = document.querySelector(".kisahBomAtom");

// Section 4
let content2 = document.querySelectorAll("section");
let judul2 = document.querySelectorAll(".judul");
let p2 = document.querySelectorAll(".paragraf");
let p3 = document.querySelector(".paragraf2");

window.addEventListener("scroll", function () {
    var value = window.scrollY;

    // Section 1
    if (this.window.innerWidth >= 1280) {
        s1_l1.style.top = value * 0.2 + "px";
        s1_l2.style.top = value * 0.4 + "px";
        s1_l3.style.top = value * 0.4 + "px";
        s1_l4.style.top = value * 0.6 + "px";
        s1_l5.style.right = value * 0.5 + "px";
        text.style.bottom = value / 4 + "px";
    }

    // Section 2
    if (value > content.offsetTop - 550 && this.window.innerWidth <= 480) {
        judul.classList.add("muncul");
        p.classList.add("muncul");
    } else if (value > content.offsetTop - 900 && this.window.innerWidth >= 480) {
        judul.classList.add("muncul");
        p.classList.add("muncul");
    } else {
        judul.classList.remove("muncul");
        p.classList.remove("muncul");
    }

    // Section 4
    if (value > content2[1].offsetTop - 550 && this.window.innerWidth <= 480) {
        judul2[1].classList.add("show");
        p2[1].classList.add("show");
        if (value > content2[1].offsetTop - 100 && this.window.innerWidth <= 480) {
            bom.classList.add("show");
        } else {
            bom.classList.remove("show");
        }
    } else if (value > content2[1].offsetTop - 1000 && this.window.innerWidth >= 480) {
        judul2[1].classList.add("show");
        p2[1].classList.add("show");
        if (value > content2[1].offsetTop - 400 && this.window.innerWidth >= 480) {
            bom.classList.add("show");
        } else {
            bom.classList.remove("show");
        }
    } else {
        judul2[1].classList.remove("show");
        p2[1].classList.remove("show");
    }

    if (value > content2[2].offsetTop - 400 && this.window.innerWidth <= 480) {
        judul2[2].classList.add("show");
        p2[2].classList.add("show");
    } else if (value > content2[2].offsetTop - 1000 && this.window.innerWidth >= 480) {
        judul2[2].classList.add("show");
        p2[2].classList.add("show");
    } else {
        judul2[2].classList.remove("show");
        p2[2].classList.remove("show");
    }

    if (value > content2[2].offsetTop - 200 && this.window.innerWidth <= 480) {
        p3.classList.add("show");
    } else if (value > content2[2].offsetTop - 200 && this.window.innerWidth >= 480) {
        p3.classList.add("show");
    } else {
        p3.classList.remove("show");
    }

    let prok = this.document.getElementsByClassName("prok")[0];
    let prok2 = this.document.querySelector(".prok.pr");

    if (value > content2[3].offsetTop - 400 && this.window.innerWidth <= 480) {
        prok.classList.add("show");
    } else if (value > content2[3].offsetTop - 800 && this.window.innerWidth >= 480) {
        prok.classList.add("show");
    } else {
        prok.classList.remove("show");
    }

    if (value > content2[3].offsetTop - 100 && this.window.innerWidth <= 480) {
        prok2.classList.add("show");
    } else if (value > content2[3].offsetTop - 400 && this.window.innerWidth >= 480) {
        prok2.classList.add("show");
    } else {
        prok2.classList.remove("show");
    }
});

// Munculkan text ketika halaman di load
window.addEventListener("load", function () {
    text.style.opacity = 1;
    if (this.window.innerWidth <= 480) {
        text.style.fontSize = 1.2 + "em";
    } else if (this.window.innerWidth >= 480) {
        text.style.fontSize = 2.5 + "em";
    }
});
