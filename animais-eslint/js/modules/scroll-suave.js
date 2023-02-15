export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll("[data-tab='menu'] a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // Formal alternativa
    // const topo = section.offsetTop
    // console.log(href,section,topo);
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
