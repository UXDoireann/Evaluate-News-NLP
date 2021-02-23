let baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const json = '&of=json&txt=';
const apiKey = process.env.API_KEY
const end = '&model=General&lang=en';
let formText = document.getElementById('name').value;




    //POST request
const postData = async(url = '', data = {})=>{
    console.log(data);
    const response = await fetch('https://localhost:8081/',{
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
    

    postData('/addData', {test:'it works'});


    function handleSubmit(event) {
        event.preventDefault()
    
        // check what text was put into the form field
        
        Client.checkForName(formText)
       console.log("::: Form Submitted :::")
       
       getSentiment(baseURL, apiKey, json, formText, end)
    
    }

    const getSentiment = async(baseURL, apiKey, json, formtext, end) =>{
        const res = await fetch (baseURL + apiKey + json + formText + end)
        try{
            const data = await res.json();
            console.log (data)
            return data;
        }catch(error){
            console.log("error", error);
        }
    }

    //.then(res => res.json())
    //.then(function(res) {
    //    document.getElementById('results').innerHTML = res.message
   // })

   export{ postData }


export { handleSubmit }


