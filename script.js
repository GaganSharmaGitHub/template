const timeForSvg= 2500;

function checkForm(){
    var email= document.getElementById("email").value;
    var password= document.getElementById("password").value;
    const phone = document.getElementById("phone");
    if(email=="noo"){idNotExistSvg()}
    else{
    if(password=="wrong"){
    incorrectPasswordSvg()}
else{
  succesfullLoginSvg();
}
}
}
function succesfullLoginSvg(){
  document.getElementById("emoji1InSvg").style.opacity="1";
  document.getElementById("succesfullLoginMessInSvg").style.opacity="1";
  setTimeout(function(){document.getElementById("emoji1InSvg").style.opacity="0";
  document.getElementById("succesfullLoginMessInSvg").style.opacity="0";}, timeForSvg)}


function incorrectPasswordSvg(){
  phone.classList.add("shake");
  document.getElementById("redPopUpInSvg").style.opacity="1";
  document.getElementById("icpasswordInSvg").style.opacity="1";
  document.getElementById("alertExclInSvg").style.opacity="1";
  setTimeout(function(){document.getElementById("icpasswordInSvg").style.opacity="0";
  document.getElementById("redPopUpInSvg").style.opacity="0";
  document.getElementById("alertExclInSvg").style.opacity="0";}, timeForSvg)
setTimeout(function(){phone.classList.remove("shake")}, timeForSvg)}

function idNotExistSvg(){
  phone.classList.add("shake");
  document.getElementById("redPopUpInSvg").style.opacity="1";
  document.getElementById("idNotFoundInSvg").style.opacity="1";
  document.getElementById("questnmarkInSvg").style.opacity="1";
  setTimeout(function(){document.getElementById("questnmarkInSvg").style.opacity="0";
  document.getElementById("redPopUpInSvg").style.opacity="0";
  document.getElementById("idNotFoundInSvg").style.opacity="0";}, timeForSvg)
  setTimeout(function(){phone.classList.remove("shake")}, timeForSvg)

}