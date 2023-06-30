//Javascript

//Declaring Variables
const itemForm=document.querySelector('#item-form');
const itemInput=document.querySelector('#item-input');
const itemList=document.querySelector('#item-list');

//Creating Functions
function addItem(e){//e=event object
    e.preventDefault();//prevents the form from submitting the file

const newItem=itemInput.value;
    if(newItem===''){
        alert('Please enter an item.');
        return;
    }
  const li= document.createElement('list');
  li.appendChild(document.createTextNode(newItem));
  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);
 itemList.appendChild(li);
itemInput.value='';
}

function createButton(buttonClass){
const button=document.createElement('button');
button.className=buttonClass;
button.appendChild(createXIcon("fa-solid fa-x"));
return button;
}

function createXIcon(iconClass){
    const icon=document.createElement('i');
    icon.className=iconClass;
    return icon;
}










//Adding Event Listeners
itemForm.addEventListener('submit',addItem);
g