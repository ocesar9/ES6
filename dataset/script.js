const h1 = document.querySelector('h1');
console.log(Object.prototype.toString.call(h1));
console.log(h1.dataset)

const div = document.querySelector('div');
console.log(div.dataset)
console.log(div.dataset.cor)

const dataCor = document.querySelector('[data-cor]');
console.log(dataCor)

dataCor.dataset.height = 1000;
console.log(dataCor.dataset)

delete div.dataset.width;
console.log(dataCor.dataset);

const dataAnimaScroll = document.querySelector('[data-tab="scroll"]');
console.log(dataAnimaScroll.dataset)
dataAnimaScroll.dataset.totalHeight = 2000
console.log(dataAnimaScroll.dataset)

// Exercicios


