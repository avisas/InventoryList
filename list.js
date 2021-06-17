
const addForm = document.getElementById('add-form');
const listItems = document.getElementById('list-items');
const filter = document.getElementById('search');
const resetList = document.getElementById('reset');
let newItem = document.getElementById('item');
const counter = document.getElementById('quantity');

addForm.addEventListener('submit', addItem);
listItems.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);
resetList.addEventListener('click', removeList);

function addItem(e) {
  e.preventDefault();
  let newItemValue = newItem.value;
  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItemValue));  // creates an element then you have to do smth with it.
  const quantityAdded = document.createElement('span');
  quantityAdded.innerHTML = ' 1';
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm delete';
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt" aria-hidden="true"></i>';
  //deleteBtn.appendChild(document.createTextNode('X'));
  li.appendChild(quantityAdded);
  li.appendChild(deleteBtn);
  listItems.appendChild(li);
  console.log(listItems);
  newItem.value = '';
};

// Counter of Items
function itemCounter(item) {
  const newItemVal = newItem.value;
  const arrElements = newItemVal.split(' ');
  const char = Array.from(newItemVal);
  console.log(char);
}

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
listItems.remove();
};
