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
      let perfil = document.getElementById('perfil');
  
      content.classList.toggle('hidden');
      menu.style.width = '0px';
      perfil.classList.toggle('hidden');
      adjustBtnMenuClosed()
  
  }
  
  function increaseWidth(){
      let menu = document.getElementById('Nav-Bar-Esquerda');
      let content = document.getElementById('contents');
      let perfil = document.getElementById('perfil');
  
      perfil.classList.toggle('hidden');
      menu.style.width = '270px';
      content.classList.toggle('hidden');
      adjustBtnMenuOpened()
  }
  
  function adjustBtnMenuClosed(){
      const element = document.querySelector("#Open-Close");
      Object.assign(element.style, {
          marginLeft: "0px",       
      });
  }
  
  function adjustBtnMenuOpened(){
      const element = document.querySelector("#Open-Close");
      Object.assign(element.style, {
          marginLeft: "270px",       
      });
  }