 


/*--------------------------*/
/*         INDEX            */
/*###########################
 *     01.  Loader          *
 *     02.  Menu            *
 *     03.  Sticky Menu     *
 *     03.  Back to top     *
############################*/

window.addEventListener('load',   fn , false )

//  window.onload = function loader() {
function fn() {
    // Preloader
    setTimeout(() => {
        document.getElementById('preloader').style.visibility = 'hidden';
        document.getElementById('preloader').style.opacity = '0';
    }, 350);
}

// Menu sticky
function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
    ) {
        navbar.classList.add("nav-sticky");
    } else {
        navbar.classList.remove("nav-sticky");
    }
}

window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
})


// Back-to-top
var mybutton = document.getElementById("back-to-top");
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if(mybutton!=null){
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Feather icon
feather.replace();

 // Smooth scroll and update active link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            // Prevent default anchor click behavior
            e.preventDefault();
            // Get target section id
            const targetId = this.getAttribute('href');
            // Scroll to the target section smoothly
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });

            // Remove active class from all links
            document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
            // Add active class to the clicked link
            this.classList.add('active');
        });
    });

    // Highlight active link on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section'); // Assuming sections have the <section> tag
        let scrollPos = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                const id = section.getAttribute('id');
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
