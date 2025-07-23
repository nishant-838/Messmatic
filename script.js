function openForm(formId) {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "none";
  document.getElementById(formId).style.display = "block";
}

function closeForm() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "none";
}

function sendOTP() {
  const mobile = document.getElementById("mobile").value;
  if (!mobile || mobile.length !== 10) {
    alert("Enter a valid 10-digit mobile number.");
    return;
  }
  alert("OTP sent to " + mobile + " (simulated)");
}
