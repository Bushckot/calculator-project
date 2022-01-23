const clear=document.querySelector('.clear');
const content =document.querySelectorAll("button");
const add=document.querySelector('.add')
const mul=document.querySelector('.mul')
const sub=document.querySelector('.sub')
const equal=document.querySelector('.equal')
const backspace=document.querySelector('.backspace')
const divide=document.querySelector('.divide')
var result=document.querySelector('.screen')
var prevValue=0;
var prevOp;
for(let i=0;i<content.length;i++)
content[i].addEventListener('click',function()
{  if(result.innerText==="0") {result.innerText=""}

 switch(content[i])
 {case backspace:
    result.innerText=result.innerText.substring(0,result.innerText.length-1)
    break;
      case clear:
    result.innerText="";
    break;
     case add:
         if(result.innerText)
        prevValue=parseInt(result.innerText);
        else prevValue=0;
         result.innerText="";
         prevOp="+";
         break;
         case sub:
            if(result.innerText)
            prevValue=parseInt(result.innerText);
            else prevValue=0;
            result.innerText="";
            prevOp="-"
            break;
            case mul:
                if(result.innerText)
                prevValue=parseInt(result.innerText);
                else prevValue=0;
                result.innerText=""
                prevOp="*"
                break;
                case divide:
                    if(result.innerText)
                    prevValue=parseInt(result.innerText);
                    else prevValue=0;
                    result.innerText=""
                    prevOp="/"
                    break;
                    case equal:
                        switch(prevOp)
                        {case "+":
                       if(result.innerText)
                    result.innerText=(parseInt(result.innerText) + prevValue).toString();
                    else result.innerText=prevValue.toString();
                    prevOp="";
                    break;
                case "-":
                    result.innerText=(prevValue-parseInt(result.innerText)).toString();
                    prevOp="";
                    break;
                case "*":
                    if(result.innerText)
                    result.innerText=(parseInt(result.innerText) * prevValue).toString();
                    else result.innerText=prevValue.toString();
                    prevOp="";
                    break;
                case "/":
                    if(result.innerText==0)
                    {result.innerText="Error";
                setTimeout(function op(){result.innerText=""},1000)}
            else
            result.innerText=(prevValue/result.innerText).toString();
            prevOp="";
        break;
    default:
        prevValue=0;}
        break;
       default:
           result.innerText+=content[i].innerText;     
 } 
    
}



)
