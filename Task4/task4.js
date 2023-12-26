function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(username)) {
      alert("Please enter a valid email address for the username.");
      return false;
    }
  
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]*$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must contain at least one uppercase letter, one number, and only @ as a special character."
      );
  
      return false;
    }

    alert("Successfully Login");
    if(password=="SmartServTest@123"){
        window.open("./dashbord.html");
    }
  }
  