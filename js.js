function validateform(){
let name=document.getElementById("name").value.trim();
let password=document.getElementById("p").value.trim()
let passwordconfirm=document.getElemrnt("cp").value.trim()
let error=document.querySelector("p");
error.textContent=""
let n_p="/^[a-zA-Z]$/";

if(!n_p.test(name)){
    // alert("not matched")
    error.textContent="name not matched the format pls use only chars in cpas and smalls "

}
letp_p=/^[a-zA-Z0-9_]$/
if(password.length<8){
    error.textContent="password should be 8 char length"
}else if(!n_p.test(password)){
error.textContent="unmatched format"
}else{
    console.log("aa");
}
if(password!==passwordConfirm){
 error.textContent="passwords dont match with each other"
}
}