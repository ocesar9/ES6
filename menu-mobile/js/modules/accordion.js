export default function initAccordion(){
  const accordionList = document.querySelectorAll("[data-tab='accordion'] dt");
  const activeClass = 'ativo'
  accordionList[0].classList.add(activeClass);
  accordionList[0].nextElementSibling.classList.add(activeClass);

  if(accordionList.length){
    function activeAccordion(){
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) =>{
      item.addEventListener("click", activeAccordion)
    })
  }
}

