const loadata = () =>{
    fetch('/user.json')
    .then(res => res.json())
    .then(data => displayUser(data))
    
}
const displayUser = users =>{
    const userDiv = document.getElementById('shohan')
    userDiv.innerText ='';
    users.map(user =>{

        const creatDiv = document.createElement('div')
        creatDiv.innerHTML = `
        <img src='${user.img}'>
        <h2>${user.Name}</h2>
        <p>${user.discription}</p>
        `
        userDiv.appendChild(creatDiv)


        
    })

}


loadata()