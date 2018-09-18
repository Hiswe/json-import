import json from '../public/data.json'
console.log(json)
document.querySelector(`.js-result`).textContent = JSON.stringify(json)
