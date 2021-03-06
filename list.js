const addForm = document.getElementById('add-form');
let listItems = document.getElementById('list-items');
const filter = document.getElementById('search');
const resetList = document.getElementById('reset');
let newItem = document.getElementById('item');

addForm.addEventListener('submit', addItem);
listItems.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);
resetList.addEventListener('click', removeList);

function addItem(event) {
  event.preventDefault();
  let newItemValue = newItem.value;
  const li = document.createElement('li');
  li.className = 'list-group-item';
  const p = document.createElement('p');
  p.className = 'cont-item';
  li.appendChild(p);
  p.appendChild(document.createTextNode(newItemValue));
  const quantityAdded = document.createElement('span');
  quantityAdded.className = 'quantity';
  quantityAdded.innerHTML = ' 1';
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm delete';
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt" aria-hidden="true"></i>';
  p.appendChild(quantityAdded);
  li.appendChild(deleteBtn);
  listItems.appendChild(li);
  newItem.value = '';
};

function removeItem(item) {
  if(item.target.classList.contains('delete')) {
    if(confirm("Are you sure?")) {
      const li = item.target.parentElement;
      listItems.removeChild(li);
    };
  };
};

function filterItems(e){
  const text = e.target.value.toLowerCase();
  const items = listItems.getElementsByTagName('li');
  // array(from) creates arrays  // for each -> executes func x each elm of array
  Array.from(items).forEach((item) => {
    const itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().includes(text)){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    };
  });
};

function removeList() {
  let items = listItems.getElementsByTagName('li');
  Array.from(items).forEach((item) => {
    item.remove();
  });
};
