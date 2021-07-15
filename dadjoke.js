 const container=document.querySelector('#container');

 function crackjoke(par)
 {
 const container=document.querySelector('#container');
 const li=document.createElement('li');
 li.append(par)
 container.append(li)
 }

 
    const getajoke=async ()=>{
    const res=await axios.get('https://icanhazdadjoke.com/',{headers:{Accept:'Application/json'}});
    await crackjoke(res.data.joke)
    }
    const event=addEventListener('click',getajoke);