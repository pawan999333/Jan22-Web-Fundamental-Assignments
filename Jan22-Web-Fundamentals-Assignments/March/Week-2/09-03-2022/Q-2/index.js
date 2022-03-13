const toggle = function(){
    var popup = document.getElementsByClassName('popup')[0]
    if(popup.style.display == 'block'){
        popup.style.display = 'none'
    }else{
        popup.style.display = 'block'
    }
    }
    var btn1 = document.getElementById('add_btn')
    btn1.addEventListener('click',toggle)
    
    const list = [];
    const render = function(){
        const parent_child2 = document.getElementById('content')
        parent_child2.innerHTML = " ";
        const parent_child = document.getElementById('list_container')
        parent_child.innerHTML = " ";
        for(let i=0; i<list.length; i+=1){
            const new_h2 = document.createElement('h2');
            const new_li = document.createElement('li');
            new_li.innerText = list[i];
            new_h2.innerText = list[i]
            new_h2.id = 'title'
            new_li.id = `li${i}`
            parent_child.appendChild(new_li);
            parent_child2.appendChild(new_h2);
        }
    }
    
    
    const add_note = function(){
        const ip = document.getElementById('txt')
        
        const new_ip = ip.value
        list.push(new_ip)
        ip.value = "";
        render();
    }
    
    
    const list2 = [];
    const render2 = function(){
        const parent_child2 = document.getElementById('content2')
        parent_child2.innerHTML = " ";
        for(let i=0; i<list2.length; i+=1){
           const new_p = document.createElement('p')
           new_p.innerText = list2[i];
           new_p.id = 'op_p'
           parent_child2.appendChild(new_p)  
        }
    }
    const add_note2 = function(){
        const ip = document.getElementById('txt_area')
        const new_ip = ip.value
        list2.push(new_ip)
        ip.value = "";
        render2();
    }
    const btn = document.getElementById('sub_btn');
    btn.addEventListener('click',add_note );
    
    const btn2 = document.getElementById('sub_btn');
    btn2.addEventListener('click',add_note2 );
    
    