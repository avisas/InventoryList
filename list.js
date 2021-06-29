
const addForm = document.getElementById('add-form');
let listItems = document.getElementById('list-items');
const filter = document.getElementById('search');
const resetList = document.getElementById('reset');
let newItem = document.getElementById('item');
const counter = document.getElementById('quantity');

addForm.addEventListener('submit', addItem);
listItems.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);
resetList.addEventListener('click', removeList);
counter.addEventListener('click', itemCounter);

function addItem(event) {
  event.preventDefault();
  let newItemValue = newItem.value;
  const li = document.createElement('li');
  li.className = 'list-group-item';
  //li.appendChild(document.createTextNode(newItemValue));  // creates an element then you have to do smth with it.
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
  //deleteBtn.appendChild(document.createTextNode('X'));
  p.appendChild(quantityAdded);
  li.appendChild(deleteBtn);
  listItems.appendChild(li);
  newItem.value = '';
};

// Counter of Items
function itemCounter(item) {
  const newItemVal = newItem.value;
  const arrElements = newItemVal.split('');  // returns an array with characters

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
  // update or render interface
};

function removeList() {
  let items = listItems.getElementsByTagName('li');
  for (let i = 0; i < items.length; i++) {
    let l = items[i];
    l.remove();
  //  let ph = listItems.getElementsByClassName('cont-item');
  //  document.getElementById('quantity').innerHTML = '';
  //  let bt = listItems.getElementsByClassName('btn btn-danger btn-sm delete');
  //  ph.value = '';
  //  bt.remove();
};
  //document.getElementById('quantity').innerHTML = '';
  //let bt = listItems.getElementsByClassName('btn btn-danger btn-sm delete');
  //items = [];
  //bt.remove();
  //addItem(event);

  //for(let i=0; i <= items.length -1; i++){
  //  items = [];
//  };
};
