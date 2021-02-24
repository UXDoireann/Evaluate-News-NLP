

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
       mode: 'cors',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({formText: formText}),
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('confidence').innerHTML = "The tone of confidence in this text is rated at "+ res.confidence;
        if (res.score_tag === 'N'){
        document.getElementById('polarity').innerHTML = "Polarity of this text is given a rating of negative" }
        else if(res.score_tag === 'NEU'){
            document.getElementById('polarity').innerHTML = "Polarity of this text is given a rating of neutral"}
         else if(res.score_tag === 'P'){
             document.getElementById('polarity').innerHTML = "Polarity of this text is given a rating of positive"}

     document.getElementById('other').innerHTML = "Other details are " + res.segment_list;
    })

    
        
}

    




export { handleSubmit }


