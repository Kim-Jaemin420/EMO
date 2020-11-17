let ingredientes = [];
let ingredientName = '';

//Dom
const $ingredientes = document.querySelector('.ingredientes');
const $ingreItem = document.querySelector('.ingre-item');
const $ingreItemContainer = document.querySelector('.ingre-item-container');

//fn
const render = () => {
  $ingreItemContainer.innerHTML += `<li class="ingre-item"><span>${ingredientName}</span><button class="remove-ingre-item">X</button></li>`;
};

$ingredientes.onclick = (e) => {
  if (!e.target.matches('.ingredient > ul > li')) return;
  ingredientName = e.target.textContent;

  if (ingredientes.some((item) => item === ingredientName)) return;
  ingredientes = ingredientes.concat(ingredientName);
  render();
};

$ingreItemContainer.onclick = (e) => {
  if (!e.target.matches('.remove-ingre-item')) return;
  $ingreItemContainer.removeChild(e.target.parentNode);

  const ingredientAdded = e.target.previousSibling.textContent;
  ingredientes = ingredientes.filter((item) => item !== ingredientAdded);
};
