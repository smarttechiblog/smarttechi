function addItems(){
    let taskInput = document.querySelector('.taskInput');
        let taskvalue = taskInput.value.trim();
       
       if (taskvalue === "") return;
       
        let listItem = document.createElement('li');
        listItem.textContent = taskvalue;
        listItem.onclick = function(){
        listItem.remove()
        };
       
        document.querySelector('.list').appendChild(listItem);  
        taskInput.value ="";
    }

const userTask = document.getElementById('inputTaskName')

userTask.addEventListener('keydown', function(event){
    if (event.key =="Enter"){
        const elements = document.getElementsByClassName('todolist');
        this.style.display='none';
        for(let i =0; i < elements.length; i++){
            elements[i].style.display='block';
           
        }
        let spanElement = document.getElementsByTagName('span');
        spanElement[0].innerText = userTask.value;
    }
})
function userTaskName(e){
    debugger;
    if (e.value){

    }
}


function initialLoad(){
    const elements = document.getElementsByClassName('todolist');
    //userTask.style.visibility = 'hidden';
    for(let i =0; i < elements.length; i++){
        elements[i].style.display='none';
       
    }
    
}