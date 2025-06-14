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
    const input = document.getElementById("urlInput").value;
    const urls = input.split("\n").map(u => u.trim()).filter(u => u !== "");

    const previewContainer = document.getElementById("urlPreviewContainer");
    previewContainer.innerHTML = ""; // Clear previous images

    urls.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "Preview";
        img.style.maxWidth = "150px";
        img.style.border = "1px solid #ccc";
        img.style.borderRadius = "8px";
        previewContainer.appendChild(img);
    });
}



