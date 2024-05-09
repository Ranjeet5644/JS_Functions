function nice(){

console.log("I am very good");
console.log("and you ?")


}


nice();

 function sum(a ,b){

  //console.log(a+b);
  return a+b;

 }

  result1 = sum(2,9);
  result2 = sum(2,15);
  result3 = sum(2,19);

console.log(result1);
console.log(result2);
console.log(result3);


const fun1 = (x) =>{

console.log(" I am an arrow function",x)

}
fun1(34);


function countVowels(str){

    let count =0;

    for (const char of str){

  if(char=="a" ||char=="i"||char=="o" || char=="e"|| char=="u"){

        count++;


  }


    }
   console.log(count);
         
}

countVowels("Ranjeet kumar" ) 




const countvow=(str)=>{
    let count =0;

    for (const char of str){

  if(char=="a" ||char=="i"||char=="o" || char=="e"|| char=="u"){

        count++;


  }


    }
   console.log(count);


}
countvow("Rakesh");




