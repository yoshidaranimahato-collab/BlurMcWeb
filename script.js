// ==========================================
// 1. COPY IP ADDRESS TO CLIPBOARD
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
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
      }).catch(err => {
        console.error("Failed to copy IP: ", err);
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
      alert("Server IP (play.blurmc.net) copied to clipboard! Open Minecraft and join.");
    });
  }

  // ==========================================
  // 3. STAFF APPLICATION FORM SUBMIT HANDLER
  // ==========================================
  const staffForm = document.querySelector("form");
  if (staffForm) {
    staffForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      // Simple Success Alert
      alert("Thank you! Your Staff Application has been submitted successfully.");
      staffForm.reset(); // Form clear kar dega
    });
  }
});
