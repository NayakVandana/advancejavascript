let url = "http://localhost:1999/city";
function getCity(){
    fetch(url)
    .then((res)=> res.json())
    .then((data)=>
    {
        for(i=0;i<data.length;i++){
            let element = document.createElement("option");//<option></option>
            let text = document.createTextNode(data[i].cityName);//Delhi
            element.appendChild(text);//<option>Delhi</option>
            element.value = data[i]._id;//<option value="1">Delhi</option>
            document.getElementById("city").appendChild(element);
        }
    })
}