



function addText(){
    var fieldText=document.getElementById("text");
    var newElement= document.createElement('li');
    var inputText= document.createTextNode(fieldText.value);
    var delBtn=document.createElement('button');
    var delBtnText= document.createTextNode('X');
    var editBtn= document.createElement('button');
    var editBtnText=document.createTextNode('Edit');
    var space=document.createElement('p');
    var spaceText=document.createTextNode("\t");
    var ul=document.getElementById('list');
    ul.appendChild(newElement);
    newElement.style.fontSize+='2em';
    newElement.appendChild(inputText);
    newElement.appendChild(spaceText);
    newElement.appendChild(editBtn);
    newElement.appendChild(delBtn);
    editBtn.appendChild(editBtnText);
    editBtn.setAttribute('onClick','editText()');
    delBtn.appendChild(delBtnText);
    delBtn.setAttribute('onClick',"deleteText(this.parentNode)");
    fieldText.value=""
}
function deleteAll(){
    
}
function deleteText(elementTodel){
    
    console.log(elementTodel);
}
function editText(){

}

