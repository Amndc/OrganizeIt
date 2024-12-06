document.addEventListener("DOMContentLoaded", function() {
});

function openCloseMenu(){
    let open = document.getElementById('open');
    let close = document.getElementById('close');
  
    open.classList.toggle('hidden');
    close.classList.toggle('hidden');
  
   if (open.classList.contains('hidden')) {
      increaseWidth();
    } else {
      decreaseWith();
    }
  }
  
  function decreaseWith(){
      let menu = document.getElementById('Nav-Bar-Esquerda');
      let content = document.getElementById('contents');
      let profile = document.getElementById('perfil');
  
      content.classList.toggle('hidden');
      menu.style.width = '0px';
      profile.classList.toggle('hidden');
      adjustBtnMenuClosed()
  
  }
  
  function increaseWidth(){
      let menu = document.getElementById('Nav-Bar-Esquerda');
      let content = document.getElementById('contents');
      let profile = document.getElementById('perfil');
  
      profile.classList.toggle('hidden');
      menu.style.width = '270px';
      setTimeout(() => {
          content.classList.toggle('hidden');
        }, "100");
      
      adjustBtnMenuOpened()
  }
  
  function adjustBtnMenuClosed(){
      const element = document.querySelector('#Open-Close');
      Object.assign(element.style, {
          marginLeft: '0px',       
      });
  }
  
  function adjustBtnMenuOpened(){
      const element = document.querySelector('#Open-Close');
      Object.assign(element.style, {
          marginLeft: '270px',       
      });
  }

function insertNewTodo(){
    let input = document.getElementById('input-ToDo')
    let ipluscheck =  document.getElementById('plus-check')
    let addTodo = document.getElementById('add-toDo')
      
    if(!input.classList.contains('active')){
    
    input.classList.add('active')
    
    input.removeAttribute('disabled')
    addTodo.classList.add('divFocus')
    input.focus()
    plusCheck(ipluscheck)  
    }
    validateClickOut(input, ipluscheck, addTodo)
    getNewTodo()
  }

function validateClickOut(input, ipluscheck, addTodo){
   let back = document.getElementById('Background-Container')
   back.addEventListener('click', () =>{
        if(input.classList.contains('active')){
            input.setAttribute('disabled', 'disabled')
            addTodo.classList.remove('divFocus')
            input.classList.remove('active')
            input.blur()
            plusCheck(ipluscheck)  
        }

   })
}

function plusCheck(iplusCheck){
    iplusCheck.classList.toggle('fa-check-square');
    iplusCheck.classList.toggle('fa-plus-square');
}

var arraytemporaria = []
function getNewTodo(){
  var getbtn = document.getElementsByClassName('fa-check-square')
  
      getbtn[0].addEventListener("click", (e) =>{
        e.stopPropagation()
            var valueTodo = document.getElementById('input-ToDo').value
            arraytemporaria.push(valueTodo)
            addNewTodo(valueTodo)
      })
  
}
function addNewTodo(valor){
        let getListaTodo = document.getElementById('lista-Elementos-ToDo')
        let CriaTodo = generateToDo(valor)
        getListaTodo.innerHTML =  getListaTodo.innerHTML + CriaTodo
}

function generateToDo(valor){
        var todo = ` <div id="" class="DivTodo" style="display:block;">        
                  <input type="checkbox">
                  <label>${valor}</label>
        </div>`
    return todo
}
