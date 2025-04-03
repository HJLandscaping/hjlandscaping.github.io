document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");
  const designTool = document.getElementById("design-tool");

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Here is where you will collect the customer's info
      const name = document.getElementById("signup-name").value;
      const email = document.getElementById("signup-email").value;
      const phone = document.getElementById("signup-phone").value;

      // Send their info to your email via FormSubmit
      fetch("https://formsubmit.co/ajax/john.hjlandscaping@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          message: "Started Garden Design Tool"
        }),
      }).then(() => {
        signupForm.style.display = "none";
        designTool.style.display = "block";
      });
    });
  }

  // Drag & Drop
  const elements = document.querySelectorAll(".element");
  const canvas = document.getElementById("design-canvas");

  elements.forEach((el) => {
    el.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", e.target.innerText);
    });
  });

  if (canvas) {
    canvas.addEventListener("dragover", (e) => e.preventDefault());
    canvas.addEventListener("drop", (e) => {
      e.preventDefault();
      const data = e.dataTransfer.getData("text/plain");
      const item = document.createElement("div");
      item.innerText = data;
      item.className = "element";
      canvas.appendChild(item);
    });
  }
});
