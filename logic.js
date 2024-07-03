class landing {
  dataBase = {};
  registerUser() {
    if (localStorage.getItem("userData") != null) {
      this.getData();
    }
    let firstName = userName.value;
    let email = inputEmail.value;
    let password = inputPassword.value;
    if (firstName !== "" && email !== "" && password !== "") {
      if (email in this.dataBase) {
        alert(`${email} Already Exists`);
      } else {
        this.dataBase[email] = {
          name: firstName,
          email: email,
          password: password,
        };
        this.saveData();
        alert("Registration Succesfull");
        window.location = "index.html";
      }
    } else {
      alert("please Enter Valid Credentials");
    }
  }
  getData() {
    this.dataBase = JSON.parse(localStorage.getItem("userData"));
  }
  saveData() {
    localStorage.setItem("userData", JSON.stringify(this.dataBase));
  }
  login(){
    let loggedEmail=userEmail.value;
    let loggedPassword=userPassword.value;
    this.getData();
    if (loggedEmail =='' || loggedPassword ==''){
      alert("Please Enter Values")
    }
    else{
      if(this.dataBase[loggedEmail]){
        if(this.dataBase[loggedEmail].password === loggedPassword){
          localStorage.setItem("firstname",this.dataBase[loggedEmail].name)
          window.location='home.html'
        }
        else{
          alert("Password Mismatch")
        }

      }
      else{
        alert(`${loggedEmail} not found`)
      }
    }
  }
  logout(){
    window.location="index.html";
    localStorage.removeItem("firstname")
  }
  signupreset(){
    userName.value="";
    inputEmail.value="";
    inputPassword.value="";
  }
  reset(){
    userEmail.value="";
    userPassword.value="";
  }
  dynamic(){
    let name= localStorage.getItem("firstname")
    firstname.innerHTML =name;
  }

}const obj = new landing();

window.onload = function() {
  if (document.getElementById("firstname")) {
      obj.dynamic();
  }
};
