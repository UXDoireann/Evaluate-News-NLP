import { response } from "express";


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
        document.getElementById('confidence').innerHTML = "Feelings of confidence in this text are given a rating of "+ res.confidence +"%.";
        if (res.score_tag === 'N'){
        document.getElementById('polarity').innerHTML = "Overall, the tone is negative." }
        else if(res.score_tag === 'N+'){
            document.getElementById('polarity').innerHTML = "Overall, the tone is very negative."}
        else if(res.score_tag === 'NONE'){
            document.getElementById('polarity').innerHTML = "No sentiment is detected."}
        else if(res.score_tag === 'P+'){
            document.getElementById('polarity').innerHTML = "Overall, the tone is very positive"}
        else if(res.score_tag === 'NEU'){
            document.getElementById('polarity').innerHTML = "Overall, the tone is neutral."}
         else if(res.score_tag === 'P'){
             document.getElementById('polarity').innerHTML = "Overall, the tone is positive."};
        if (res.agreement === 'AGREEMENT'){
            document.getElementById('agreement').innerHTML = "This tone is consistent throughout the text"}
            else if(res.agreement === 'DISAGREEMENT'){
                document.getElementById('agreement').innerHTML = "However, this tone isn't consistent throughout the text"};
         if(res.subjectivity === 'OBJECTIVE'){
             document.getElementById('obj').innerHTML = "Our analysis notes that this article is more objective than subjective."}
         else if(res.subjectivity === 'SUBJECTIVE'){
             document.getElementById('obj').innerHTML = "Our analysis notes that this article is more subjective than objective." };  
         if(res.irony === 'NONIRONIC'){
             document.getElementById('ironic').innerHTML = "We detected no irony."}
             else if(res.irony === 'IRONIC'){
                 document.getElementById('ironic').innerHTML = "Also, we detected a level of irony."}
             else if(res.irony === null){
                 document.getElementById('ironic').innerHTML = ""}    
         

     
    })

    
        
}

    




export { handleSubmit }


