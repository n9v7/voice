document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("button[onclick='goToVoice()']").addEventListener("click", () => {
    const tokensInput = document.getElementById("tokens").value.trim();
    if (!tokensInput) {
      alert("اكتب التوكنات");
      return;
    }
    localStorage.setItem("tokens", tokensInput);
    document.querySelector(".container").style.display = "none";
    document.getElementById("voiceForm").style.display = "block";
  });
});

function startVoice() {
  const tokens = localStorage.getItem("tokens").split("\n");
  const channelId = document.getElementById("channelId").value.trim();

  if (!channelId) {
    alert("اكتب ID الروم");
    return;
  }

  tokens.forEach(token => {
    fetch(`https://discord.com/api/v9/channels/${channelId}/call`, {
      method: "POST",
      headers: {
        "Authorization": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ video: false, stream: false })
    }).then(res => {
      if (res.status === 200) {
        console.log(`✅ دخل: ${token.slice(0, 20)}`);
      } else {
        console.log(`❌ فشل: ${token.slice(0, 20)} - ${res.status}`);
      }
    });
  });
}
