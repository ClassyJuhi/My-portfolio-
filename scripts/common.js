let logoReload = document.getElementById('logoReload');
let navLi = document.getElementById('navLi');
let openSidebar = document.getElementById('openSidebar');
let closeSidebar = document.getElementById('closeSidebar');
let sidebar = document.getElementById('sidebar');
let sidebarLi = document.getElementById('sidebarLi');

logoReload.addEventListener('click',() => {
    location.reload();
})

openSidebar.addEventListener('click',() => {
    sidebar.style.display = 'block';
    openSidebar.style.display = 'none';
    closeSidebar.style.display = 'block';
    sidebarLi.style.display = 'block';
});

closeSidebar.addEventListener('click', () =>{
    sidebarLi.style.display = 'none';
    closeSidebar.style.display = 'none';
    openSidebar.style.display = 'block';
})










// document.addEventListener("DOMContentLoaded", function () {
//     const header = document.querySelector(".animate");
  
//     // Function to check if an element is in the viewport
//     function isInViewport(element) {
//         const rect = element.getBoundingClientRect();
//         return (
//             rect.top >= 0 &&
//             rect.left >= 0 &&
//             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//             rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//         );
//     }
  
//     // Function to handle scroll events
//     function handleScroll() {
//         console.log("Scrolling");
//         if (isInViewport(header)) {
//             header.style.animationPlayState = "running";
//         }
//     }
  
//     // Add scroll event listener
//     window.addEventListener("scroll", handleScroll);
  
//     // Initial check on page load
//     handleScroll();
//   });
  


  
//   document.addEventListener("DOMContentLoaded", function () {
//     const observerTargets = document.querySelectorAll('.animate');

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('animate-active');
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, {
//         root: null,
//         threshold: 0.5,
//     });

//     observerTargets.forEach(target => {
//         observer.observe(target);
//     });
// });


















let sections = document.querySelectorAll('.animate');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let halfway = window.innerHeight * 0.75; // 50% of the viewport height

    if (top + halfway >= offset && top < offset + height) {
      sec.classList.add('show-animate');
    } else {
      sec.classList.remove('show-animate');
    }
  });
};
