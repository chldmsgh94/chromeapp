const frmLogin = document.querySelector(".login-form");
const wrapLogin = frmLogin.querySelector(".wrap-login");
const loginUser = frmLogin.querySelector(".user");

function loadUser() {
    const user = localStorage.getItem("user");
    const frmToDo = document.querySelector(".todo-form");
    
    if (user !== null) {
        loginUser.style.display = "none";

        const hello = document.createElement("h1");
        hello.innerText = `Hello, ${user}`;

        wrapLogin.appendChild(hello);

        frmToDo.style.display = "inline-block";
    } else {
        loginUser.style.display = "inline-block";
        frmToDo.style.display = "none";
    }
}

loadUser();

function saveUser(e) {
    e.preventDefault();
    localStorage.setItem("user", loginUser.value);

    loadUser();
}

frmLogin.addEventListener("submit", saveUser);