document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".add-to-cart");
  const cartItems = document.getElementById("cart-items");
  const dropArea = document.getElementById("dropArea");
  const fileInput = document.getElementById("fileInput");

  // Add to cart functionality
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const li = document.createElement("li");
      li.textContent = "valo sticker";
      cartItems.appendChild(li);
    });
  });

  // Drag & drop functionality
  dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.style.background = "#eee";
  });

  dropArea.addEventListener("dragleave", () => {
    dropArea.style.background = "transparent";
  });

  dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    dropArea.style.background = "transparent";
    const files = e.dataTransfer.files;
    fileInput.files = files;
    alert(`File "${files[0].name}" selected`);
  });

  fileInput.addEventListener("change", () => {
    alert(`File "${fileInput.files[0].name}" selected`);
  });

  // File upload trigger function
  window.triggerFile = () => {
    fileInput.click();
  };
});

function importFromURL() {
  const urlInput = document.getElementById("urlInput"); // Use same ID as your input field
  const preview = document.getElementById("urlPreview");
  const url = urlInput.value.trim();

  if (!url || !url.startsWith("http")) {
    alert("Please enter a valid image URL!");
    return;
  }

  preview.src = url;
  preview.style.display = "block";

  preview.onerror = () => {
    alert("Failed to load image. Please check the URL.");
    preview.style.display = "none";
  };
}


