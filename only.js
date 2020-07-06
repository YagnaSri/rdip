/*Calculator*/
function input(x)
{
document.getElementById('getinput').value+=x
}
 function result()
{
let a=document.getElementById('getinput').value
let b=eval(a)
document.getElementById('getinput').value=b
return b;
}
function clr()
{
document.getElementById('getinput').value = " "
return 1;
}
function sqrt()
{
let a=document.getElementById('getinput').value
let y=Math.sqrt(parseInt(a))
document.getElementById('getinput').value=y
return  y;
}
function Absolute()
{
let a=document.getElementById('getinput').value
let y= Math.abs(a)
document.getElementById('getinput').value=y
return y;
}

/*Form-TASK-2*/
function validate()
{
  var name =document.getElementById("name");
  var pnumber=document.getElementById("number");
  var mail=document.getElementById("email");
  var patrn= /^[A-Za-z]\w+$/;
  var patrn1=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  var patrn3=  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)| (".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if((name.value.match(patrn))&& (pnumber.value.match(patrn1))&&(mail.value.match(patrn3)))
{
  return true;
  }
else{
         if(!name.value.match(patrn)){
         alert("Name re-enter");
        }
         if(!pnumber.value.match(patrn1)){
         alert("Enter correct number");
        }
         if(!mail.value.match(patrn3)){
          alert("Enter valid mail-Id");
         }
      }
}


/*palindrome*/


function palin()
{
      var a=document.getElementById("str1").value;
      var b="";
      var i;
      for(i=a.length-1;i>=0;i--)
         {
             b=b+a[i];
         }
     if(a==b)
     {  alert("Is a Palindrome");
       return true;}
    else
      { alert(" Not a Palindrome");
       return false;}
}

/*ANAGRAM*/



function Anag()
{
 var str1=document.getElementById("a").value;
var str2=document.getElementById("b").value;
str1=str1.replace(" ","");
str2=str2.replace(" " ,"");
var string1=str1.toUpperCase();
var string2=str2.toUpperCase();
 function sorting(str)
    {
    return str.split('').sort().join('');
    }


    if(sorting(string1) == sorting(string2))
          {
                 alert('Is an Anagram');
                 return true;}
               else
               {
               alert('not an Anagram');
                 return false;
               }
           }


/*GAME OF SURVIVERS*/


function randmnum()
{
	var num1= Math.floor(Math.random()*1001);
	var num2=Math.floor(Math.random()*1001);
	document.getElementById("n1").value=num1;
	document.getElementById("n2").value=num2;
}
function mapping()
{
	var num1 = document.getElementById("n1").value;
	var num2 = document.getElementById("n2").value;
        var x = num1%4;/* mapping by modulous of 4*/
        var y = num2%4;
	var arr=["human","cockroach","Nuclearbomb"];
	var obj1,obj2;
	if(x == 0)
	{
		obj1=arr[0];
	}
        else if(x == 1){
		obj1=arr[1];
	}
	else
	{
		obj1=arr[2];
	}
       if(y == 0)
       {
	       obj2=arr[0];
       }
	else if(y == 1)
	{
		obj2=arr[1];
	}
	else
	{
		obj2=arr[2];
        }
	document.getElementById("obj1").value=obj1;
	document.getElementById("obj2").value=obj2;
	if(((obj1=="human")&&(obj2=="cockroach")) || ((obj1=="cockroach")&&(obj2=="human")))
	{
		alert("Human Survives the battle!!");
		return "human";
	}
	else if(((obj1=="cockroach")&&(obj2=="Nuclearbomb"))||((obj1=="Nuclearbomb")&&(obj2=="cockroach")))
	{
		alert(" The mighty Cockroach Survives!!!");
		return "Cockroach";
	}
	else if(((obj1=="human") && (obj2=="Nuclearbomb")) || ((obj1=="Nuclearbomb") && (obj2=="human")))
	{
		alert(" ALAS!!!..Human DIES!!!! :(");
		return "Nuclearbomb";
	}else if(obj1==obj2)
	{
		alert("It's a TIE!!");
	}

}
