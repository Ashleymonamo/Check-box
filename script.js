function Check() {
    let checkAns=document.getElementById("check");
    if (checkAns.checked == true){
        
        alert("Terms and Conditions accepted successfully");
       
    } else {
       
        alert("Please Accept Terms and Conditions");
        return false;
    }
    
}
