document.addEventListener("DOMContentLoaded", () => {
  
  // ==========================================
  // 1. COPY IP ADDRESS TO CLIPBOARD
  // ==========================================
  const serverIpElement = document.querySelector(".stats-bar .stat-item:last-child");

  if (serverIpElement) {
    serverIpElement.style.cursor = "pointer";
    serverIpElement.title = "Click to copy IP";

    serverIpElement.addEventListener("click", () => {
      const ipText = "play.blurmc.net";
      
      navigator.clipboard.writeText(ipText).then(() => {
        const originalHTML = serverIpElement.innerHTML;
        serverIpElement.innerHTML = `<i class="fa-solid fa-check" style="color: #2eb85c;"></i> IP Copied!`;
        
        setTimeout(() => {
          serverIpElement.innerHTML = originalHTML;
        }, 2000);
      });
    });
  }

  // ==========================================
  // 2. JOIN SERVER BUTTON CLICK
  // ==========================================
  const joinBtn = document.querySelector(".btn-red");
  if (joinBtn) {
    joinBtn.addEventListener("click", (e) => {
      e.preventDefault();
      navigator.clipboard.writeText("play.blurmc.net");
      alert("Server IP (play.blurmc.net) copied to clipboard!");
    });
  }

  // ==========================================
  // 3. DISCORD WEBHOOK FOR STAFF APPLICATION
  // ==========================================
  const staffForm = document.querySelector("form");
  
  // ⚠️ YAHAN APNA DISCORD WEBHOOK URL PASTE KARO ⚠️
  const DISCORD_WEBHOOK_URL = "YOUR_DISCORD_WEBHOOK_URL_HERE"; 

  if (staffForm) {
    staffForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Form values nikalna
      const ign = document.getElementById("ign").value;
      const discord = document.getElementById("discord").value;
      const age = document.getElementById("age").value;
      const position = document.getElementById("position").value;
      const experience = document.getElementById("experience").value;
      const why = document.getElementById("why").value;

      // Discord Embed Message Data
      const webhookData = {
        username: "BlurMC Staff Bot",
        avatar_url: "https://i.imgur.com/4M34hi2.png", // Koi bhi logo URL
        embeds: [
          {
            title: "📌 New Staff Application Received!",
            color: 15009812, // Red Color Code
            fields: [
              { name: "🎮 Minecraft IGN", value: ign, inline: true },
              { name: "💬 Discord Username", value: discord, inline: true },
              { name: "🎂 Age", value: age, inline: true },
              { name: "🛡️ Position Applied For", value: position, inline: false },
              { name: "💼 Previous Experience", value: experience },
              { name: "❓ Why Join BlurMC?", value: why }
            ],
            footer: {
              text: "BlurMC Staff System"
            },
            timestamp: new Date()
          }
        ]
      };

      // Webhook ko Data Bhejna
      fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(webhookData)
      })
      .then(response => {
        if (response.ok) {
          alert("Success! Your Staff Application has been sent to our Discord!");
          staffForm.reset();
        } else {
          alert("Error sending application. Please check Webhook URL.");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong! Please try again later.");
      });
    });
  }
});
