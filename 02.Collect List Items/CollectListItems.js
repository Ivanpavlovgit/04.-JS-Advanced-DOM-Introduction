function extractText() {
   let htmlliElements = Array.from( document.getElementsByTagName('li'));
   let result='';
    for (const line of htmlliElements) {
        result+=line.innerHTML+'\n';
    }
    document.getElementById("result").innerHTML=result;

}