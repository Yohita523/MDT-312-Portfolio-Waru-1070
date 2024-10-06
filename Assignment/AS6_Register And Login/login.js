window.onload = loginLoad;

function loginLoad() {
    var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin() {
    var form = document.forms["myLogin"];
    var usernameInput = form["username"].value;
    var passwordInput = form["password"].value;
    
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    if (usernameInput == storedUsername && passwordInput == storedPassword) {
        alert("Login สำเร็จ!");
        return true;
    } else {
        alert("ชื่อผู้ใช้และหรัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง!");
        return false;
    }
}
