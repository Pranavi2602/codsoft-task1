const todolist=[]

function rendertodo(){
let todolistHTML='';


for(let i=0;i<todolist.length;i++){
    const todoobj=todolist[i];
    const name=todoobj.name;
    const dueDate=todoobj.dueDate;
    const html=`
        <div class="js-nn">${name}</div>
        <div class="js-nn">${dueDate}</div>
        <button class="jb" onclick="
            todolist.splice(${i},1);
            rendertodo();
            ">Delete</button> 
            `;                   
    todolistHTML+=html;

}
document.querySelector('.js-text').innerHTML=todolistHTML;
}


function addtodo(){
    const inputelement=document.querySelector('.js-input');
     const name=inputelement.value;
     const dateinput=document.querySelector('.jsd-input');
     const dueDate=dateinput.value;
     todolist.push({
        name:name,
        dueDate:dueDate,

     });
    inputelement.value='';
    
    rendertodo();

}