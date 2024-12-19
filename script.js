 let EnterText = document.querySelector('.Enter');
 let Add = document.getElementById('spi');
 let TextDisplay = document.querySelector('.tasklist');
 
 
 EnterText.addEventListener('keyup',() =>{
    if(EnterText.value.trim() != 0 )
    {
        Add.classList.add('active');
    }
    else{
        Add.classList.remove('active');
    }
 })

 Add.addEventListener('click', ()=> {
    if(EnterText.value.trim() != 0)
    {
       let Task = document.createElement('div');
       Task.classList.add('item');
       Task.innerHTML=`
       <p class="com">${EnterText.value}  </p>
       <div class="item-btn">
        <i class=" fa-solid fa-circle-check complete "></i>
        <i class=" fa-solid fa-trash complete"></i>
       <div>
      `
       
      TextDisplay.appendChild(Task);
      EnterText.value=" "; 
    }
    else{
        alert('Please enter the task');
    }

      })
      
     TextDisplay.addEventListener('click',(e) =>{
        if(e.target.classList.contains('fa-circle-check')){
            console.log("start");
            e.target.parentElement.parentElement.classList.toggle('completed');
        }
     })
     

     TextDisplay.addEventListener('click',(e) =>{
        if(e.target.classList.contains('fa-trash'))
        {
            e.target.parentElement.parentElement.remove();
        }
     })

     EnterText.addEventListener('keypress',(e)=>{
        if(e.key === 'Enter')
        {
        if(EnterText.value.trim() != 0)
    {
       let Task = document.createElement('div');
       Task.classList.add('item');
       Task.innerHTML=`
       <p class="com">${EnterText.value}  </p>
       <div class="item-btn">
        <i class=" fa-solid fa-circle-check complete "></i>
        <i class=" fa-solid fa-trash complete"></i>
       <div>
      `
       
      TextDisplay.appendChild(Task);
      EnterText.value='  ';
    }
    else{
        alert('Please enter the task');
    }

    }
      })

  TextDisplay.addEventListener('keypress',(s) =>{
     if(s.key === 'Delete')
     {
        TextDisplay.addEventListener('click',(e) =>{
            if(e.target.classList.contains('fa-trash'))
            {
                e.target.parentElement.parentElement.remove();
            }
         })
     }
  })
    
    
     
 