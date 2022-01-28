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
var prevOp=null;
function calcul(el1,el2,op)
{ switch(op)
    {case'+':
       return parseInt(el1)+parseInt(el2);
    break;
case'-':
return el1-el2;
break;
case'*':
return el1*el2;
break;
case'/':
return el1/el2;
break;
}
}
function operator(operator){
    if(prevOp!=null)
     {prevValue=calcul(prevValue,result.innerText,prevOp)}
    else {prevValue=parseInt(result.innerText)}
    switch(operator)
    {  case '+':
    prevOp='+';
    break;
    case '-':
        prevOp='-';
        break;
        case'*':
        prevOp='*';
        break;
        case'/':
        prevOp='/';
        break;
    
    }
    result.innerText=""
}
for(let i=0;i<content.length;i++)
content[i].addEventListener('click',function()
{  if(result.innerText==="0") {result.innerText=""}

 switch(content[i])
 {case backspace:
    result.innerText=result.innerText.substring(0,result.innerText.length-1)
    break;
      case clear:
    result.innerText="";
    prevValue=0;
    prevOp=null;
    break;
     case add:
       operator('+');
         break;
         case sub:
           operator('-');
            break;
            case mul:
          operator('*')
                break;
                case divide:
                 operator('/');
                    break;
                    case equal:
                        if(prevOp!=null)
                        {result.innerText= calcul(prevValue,result.innerText,prevOp)
                  prevValue=result.innerText
               prevOp=null;}
                break;
       default:
           {result.innerText+=content[i].innerText; }
    
}
}
)


