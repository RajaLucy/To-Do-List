const inbox=document.getElementById('input-box');
const list1=document.getElementById('list-contain');
function TASK(){
if(inbox.value === '')
{
    alert("enter text");
    inbox.focus();
}
else{
let li=document.createElement('li');
li.innerHTML = inbox.value;
list1.appendChild(li);
let span=document.createElement('span');
span.innerHTML='REMOVE';
li.appendChild(span);
}
inbox.value="";
inbox.focus();   

}
list1.addEventListener('click',function(e){
  
   if(e.target.tagName === 'SPAN')
   {
    alert("Do you want to remove list")
    e.target.parentElement.remove();
   }
   else if(e.target.tagName === 'LI')
   {
    e.target.classList.add('chek')
   }
});
