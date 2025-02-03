const checkButton=document.getElementById('check-btn');
const result=document.getElementById('result');
const enterInput=document.getElementById('text-input');
const removeExtra=(text)=>{
  return text.replace(/[\W_]/g,'').toLowerCase();
}
const checkPalindrome=(textInput)=>{
 const cleanInput=removeExtra(textInput);
 const reversedInput=cleanInput.split('').reverse().join('');
 return cleanInput===reversedInput;
}
checkButton.addEventListener("click",function(){
  const userInput=enterInput.value;
  if(userInput.trim().length===0){
    alert("Please input a value");
  }
  const isPalindrome=checkPalindrome(userInput);
if(isPalindrome){
  result.innerHTML=`${userInput} is a palindrome`;
}
else{
result.innerHTML=`${userInput} is not a palindrome`;
}
  enterInput.value = "";
});

