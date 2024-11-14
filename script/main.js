/** Changement d'aspect header quand on scroll depuis l'accueil */
window.addEventListener("scroll", () => {
   var header = document.getElementById("header");
   header.classList.toggle("sticky", window.scrollY > 0);
});

/** Toggle du menu burger mobile */
const toggleMenu = () => {
    const menuToggle = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
};

/** Surbrillance navbar en fonction de la section à l'écran */
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("header ul#menu li");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / sections.length) {
            current = section.getAttribute("id");
        }
    });
    
    navLi.forEach( li => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
});

/** Accordéon de la section réalisations*/
const btns = document.querySelectorAll(".acc-btn");
btns.forEach((btn) => {
    btn.addEventListener("click", function () {
        this.classList.toggle("is-open");
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});


// event
btns.forEach((el) => el.addEventListener("click", accordion));

/** Dropdown menu */
const dropdownSpan = document.querySelectorAll(".dropdown span");
function dropdownOpen() {
    this.parentNode.classList.toggle("is-open");
}
dropdownSpan.forEach((el) => el.addEventListener("click", dropdownOpen));

/** Fermeture du dropdown menu quand on clique en dehors */
const dropdown = document.getElementsByClassName("dropdown");
document.addEventListener('click', (e) => {
    let targetElement = e.target;
    if (!(targetElement.matches('.dropdown-content') || targetElement.matches('.dropdown-btn') )){   
        for (el of dropdown) {
            if (el.classList.contains('is-open')) {
                el.classList.remove('is-open');
            }
        }
    }
});