export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  function criarToolTipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 30}px`;
      this.tooltipBox.style.left = `${event.pageX}px`;
    },
  };
  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  if (tooltips) {
    tooltips.forEach((item) => {
      function onMouseOver(event) {
        const tooltipBox = criarToolTipBox(this);
        tooltipBox.style.top = `${event.pageY}px`;
        tooltipBox.style.left = `${event.pageX}px`;
        console.log(event);

        onMouseMove.tooltipBox = tooltipBox;
        onMouseLeave.tooltipBox = tooltipBox;
        onMouseLeave.element = this;
        this.addEventListener('mouseleave', onMouseLeave);
        this.addEventListener('mousemove', onMouseMove);
      }
      item.addEventListener('mouseover', onMouseOver);
    });
  }
}
