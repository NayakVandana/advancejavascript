let display = document.querySelector("#display h2");
let buttons = document.getElementsByTagName("button");

for(let i=0 ;i<buttons.length ;i++)
{
    buttons[i].addEventListener("click",function(e){
        switch(event.target.innerText)
        {
            case "C" :
                    display.innerText = "";
                    break;
            case "=":
                    display.innerText = eval(display.innerText);
                    break;
            case "←" :
                    display.innerText = display.innerText.slice(0 , -1);

                break;
                    
            default : display.innerText += event.target.innerText;
        }
    })

    
}