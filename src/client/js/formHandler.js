

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value; 
    Client.checkForName(formText)
   console.log("::: Form Submitted :::")
   
 





    //Fetch request
fetch('http://localhost:8080/addData',{
        method: 'POST',
        credentials: 'same-origin',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({formText}),
    })
    .then(res => res.json())
    .then(function(res) {
     document.getElementById('results').innerHTML = res.message
    })

        
}

    




export { handleSubmit }


