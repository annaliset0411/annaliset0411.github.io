const field = "Plant health and security";

function describeResearch(field) {
    return "My research focuses on " + field + " . ";
}

if (field === "Plant health and security") {
    console.log("This research has significant positive implications");
} else {
    console.log("This is an exciting area of research");
}

console.log(describeResearch(field));

const statusEl = document.querySelector("#status");
statusEl.textContent = "Status: Updated by JavaScript";

const helloBtn = document.querySelector("#helloBtn");

helloBtn.addEventListener("click", () => {
  alert("Hello! JavaScript is working");
});

document.addEventListener("DOMContentLoaded", () => {
  // Select the button and the details area
  const btn = document.querySelector(".toggle-details");
  const details = document.querySelector("#proj1-details");

  // If either element is missing, stop (prevents errors)
  if (!btn || !details) return;

  // Run code when the button is clicked
  btn.addEventListener("click", () => {
    // Check whether the details are hidden
    const isHidden = details.hasAttribute("hidden");

    if (isHidden) {
      // Show details
      details.removeAttribute("hidden");
      btn.textContent = "Hide details";
      btn.setAttribute("aria-expanded", "true");
    } else {
      // Hide details
      details.setAttribute("hidden", "");
      btn.textContent = "Show details";
      btn.setAttribute("aria-expanded", "false");
    }
  });
});



