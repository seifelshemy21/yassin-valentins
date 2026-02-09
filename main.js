document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // يمنع الـ refresh

  let password = document.getElementById("pass").value.trim();

  if (password === "18102024") {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
    typeText();
    typeTextSip();
  } else {
    document.getElementById("error").innerText = "Wrong password 😢";
  }
});

let text = "You are the most beautiful thing in my life ❤️";
let i = 0;

function typeText() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 50);
  }
}

function showSurprise() {
  // اخفاء الزرار
  document.getElementById("clickBtn").classList.add("hidden");
  
  // اظهار السوربرايز
  document.getElementById("surprise").classList.remove("hidden");

  // نكتب النص الطويل
  typeTextSip();
}

let text_sip = "Happy Valentine’s Day my love. Every day with you feels special but today is just another reminder of how lucky I am to have you in my life. You’re not just my girlfriend, you’re my comfort, my happiness, and the reason I smile. I love you more than words can explain ❤️";
let x = 0;

function typeTextSip() {
  if (x < text_sip.length) {
    document.getElementById("typing_sip").innerHTML += text_sip.charAt(x);
    x++;
    setTimeout(typeTextSip, 30);
  }
}

