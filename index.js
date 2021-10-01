// Add your code here

function submitData(newName,newEmail){

   
    return fetch('http://localhost:3000/users',{
        method:'POST',
        headers:{
            "Content-Type": "application/json",
             "Accept":"application/json",
        },
        body: JSON.stringify({
            name: newName,
            email: newEmail,
          }),
    })
    .then(res=>res.json())

    .then(object=>{
        console.log(object)
        const body=document.querySelector('body')
        body.innerHTML=object.id

    })
    .catch(error=>{
        console.log(error)
        const body=document.querySelector('body')
        const p=document.createElement('p')
        p.innerHTML=error.message
        body.append(p)

    })
}
submitData()