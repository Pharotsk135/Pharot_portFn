window.onload = pageLoad;
function pageLoad(){
	var from = document.getElementById("myForm");
    from.onsubmit = validateForm;
}
function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var erremg = document.getElementById("errormsg")
    var pass = document.forms["myForm"]["password"].value;
    var retype = document.forms["myForm"]["retypepassword"].value;
    if(pass == retype){
        alert("successs")
        return true;
    }
    else
    {
        erremg.innerHTML = "error";
    }
    return false;
}

    