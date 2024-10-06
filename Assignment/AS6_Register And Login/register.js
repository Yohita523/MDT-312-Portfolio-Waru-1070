window.onload = pageLoad;

function pageLoad() {
    var form = document.getElementById("myRegister");
    form.onsubmit = validateForm;
}

function validateForm() {
    var form = document.forms["myRegister"];
    var firstName = form["firstname"].value;
    var lastName = form["lastname"].value;
    var gender = form["gender"].value;
    var bday = form["bday"].value;
    var email = form["email"].value;
    var username = form["username"].value;
    var password = form["password"][0].value;
    var retypePassword = form["password"][1].value;
    let errorMessage = "";

    if (!firstName || !lastName || !gender || !bday || !email || !username || !password || !retypePassword) {
        errorMessage += "กรุณากรอกข้อมูลให้ครบถ้วน<br>";
        //errorMessage += "กรุณากรอกข้อมูลให้ครบถ้วน\n"; | ไว้สำหรับ Alert
    }

    if (password !== retypePassword) {
        errorMessage += "หรัสผ่านไม่ตรงกัน!<br>";
        //errorMessage += "หรัสผ่านไม่ตรงกัน!\n"; | ไว้สำหรับ Alert
    }

    if (errorMessage) {
        document.getElementById("errormsg").innerHTML = errorMessage;
        return false;
    }
    // if (errorMessage) {
    //     alert(errorMessage);
    //     return false;
    // }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    return true;
}
