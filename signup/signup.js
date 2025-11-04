
const signupForm = document.getElementById("signup-form");
const signupButton = document.getElementById("signup-form-submit");
const signupErrorMsg = document.getElementById("signup-error-msg");

signupButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = signupForm.username.value;
    const password = signupForm.password.value;

    alert("Account created, sending you to dashboard.");
    window.location.href = "../user/dashboard/dashboard.html"
    
})

signupForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Treat "username" as the user's email
  const email = signupForm.username.value.trim();
  const password = signupForm.password.value;

  if (!email || !password) {
    alert("Please enter an email and password.");
    return;
  }

  // Create the account in Supabase
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    alert(error.message || "Signup failed.");
    return;
  }

  // If email confirmations are ON, user must confirm via email first
  alert("Success! Check your email to confirm your account (if confirmations are enabled).");

  // Optional: send them to login or your dashboard
  location.href = "../user/dashboard/dashboard.html";
});