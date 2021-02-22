function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let articleUrl = document.getElementById('url').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")

}
    //POST request
const postData = async(url = '', data = {})=>{
    console.log(data);
    const response = await fetch('http://localhost:8081',{
        method: 'POST',
        credentials: 'same-origin',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data),
    });

         try{
             const newData = await response.json();
             console.log(newData);
             return newData;
         }catch(error){
             console.log("error", error);
         }
        }
    

    postData('/add', {test:'it works'});

    //.then(res => res.json())
    //.then(function(res) {
    //    document.getElementById('results').innerHTML = res.message
   // })

   export{ postData }


export { handleSubmit }
