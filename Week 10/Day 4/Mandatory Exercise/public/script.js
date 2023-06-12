const inputLogin = document.querySelectorAll(".loginInput");
const inputRegister = document.querySelectorAll(".registerInput");
const inputLoginButton = document.querySelector("#loginButton");
const inputRegisterButton = document.querySelector("#registerButton");
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");

form1.addEventListener("submit", getFormValueLogin);
form2.addEventListener("submit", getFormValueRegister);

async function getFormValueLogin(event) {
  event.preventDefault();
  const login = {
    username: inputLogin[0].value,
    password: inputLogin[1].value,
  };
  console.log(login);
  try {
    const res = await fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      body: JSON.stringify(login),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      const error = await res.json();
      alert(error.msg);
      return;
    }

    const data = await res.json();
    alert(`OK hello ${data.username}`);
    getFormValueUser();
  } catch (error) {
    console.error(error);
    alert("Something went wrong: " + error.message);
  }
}

async function getFormValueUser() {
  try {
    const login = {
      username: inputLogin[0].value,
      password: inputLogin[1].value,
    };
    const res = await fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      body: JSON.stringify(login),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      const error = await res.json();

      alert(error.msg);
      return;
    }
    const data = await res.json();
    alert(`OK hello ${data.username}`);
  } catch (error) {
    console.error(error);
    alert("Something went wrong: " + error.message);
  }
}

async function getFormValueRegister(event) {
  event.preventDefault();
  const register = {
    first_name: inputRegister[0].value,
    last_name: inputRegister[1].value,
    email: inputRegister[2].value,
    username: inputRegister[3].value,
    password: inputRegister[4].value,
  };
  console.log(register);

  try {
    const res = await fetch("http://127.0.0.1:8000/register", {
      method: "POST",
      body: JSON.stringify({ data: register }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const error = await res.json();

      alert(error.msg);
      return;
    }

    const data = await res.json();
    alert(data.message);
  } catch (error) {
    console.error(error);
    alert("Something went wrong: " + error.message);
  }
}

inputLogin.forEach((input) =>
  input.addEventListener("keyup", checkLoginFields)
);
inputRegister.forEach((input) =>
  input.addEventListener("keyup", checkRegisterFields)
);

function checkLoginFields() {
  const isLoginEmpty = Array.from(inputLogin).some(
    (input) => input.value === ""
  );
  inputLoginButton.disabled = isLoginEmpty;
}

function checkRegisterFields() {
  const isRegisterEmpty = Array.from(inputRegister).some(
    (input) => input.value === ""
  );
  inputRegisterButton.disabled = isRegisterEmpty;
}

checkLoginFields();
checkRegisterFields();
