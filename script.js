document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".add-to-cart");
  const cartItems = document.getElementById("cart-items");
  const dropArea = document.getElementById("dropArea");
  const fileInput = document.getElementById("fileInput");
  const filePreviewContainer = document.getElementById("filePreviewContainer");

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
    const event = new Event('change');
    fileInput.dispatchEvent(event);


    
  });

  fileInput.addEventListener("change", () => {
    previewLocalFiles(fileInput.files);
  });

  // Trigger file input
  window.triggerFile = () => {
    fileInput.click();
  };

  function previewLocalFiles(files) {
    filePreviewContainer.innerHTML = "";

    Array.from(files).forEach(file => {
      const reader = new FileReader();

      reader.onload = (e) => {
        const wrapper = document.createElement("div");
        wrapper.className = "preview-item";

        const img = document.createElement("img");
        img.src = e.target.result;

        const controls = document.createElement("div");

        const minusBtn = document.createElement("button");
        minusBtn.textContent = "−";

        const qtyInput = document.createElement("input");
        qtyInput.type = "number";
        qtyInput.min = "1";
        qtyInput.value = "1";
        qtyInput.dataset.filename = file.name;
        qtyInput.name = "quantity";

        const plusBtn = document.createElement("button");
        plusBtn.textContent = "+";

        minusBtn.onclick = () => {
          let val = parseInt(qtyInput.value);
          if (val > 1) qtyInput.value = val - 1;
        };

        plusBtn.onclick = () => {
          qtyInput.value = parseInt(qtyInput.value) + 1;
        };

        controls.appendChild(minusBtn);
        controls.appendChild(qtyInput);
        controls.appendChild(plusBtn);

        wrapper.appendChild(img);
        wrapper.appendChild(controls);
        filePreviewContainer.appendChild(wrapper);
      };

      reader.readAsDataURL(file);
    });


    filePreviewContainer.appendChild(document.createElement("br"));
    filePreviewContainer.appendChild(submitBtn);
  }
});



//for incresing or decreasing the quantity of images

function importFromURL() {
  const input = document.getElementById("urlInput").value;
  const urls = input.split("\n").map(u => u.trim()).filter(u => u !== "");

  const previewContainer = document.getElementById("urlPreviewContainer");
  previewContainer.innerHTML = "";

  urls.forEach((url, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "preview-item";
    wrapper.style.marginBottom = "15px";

    const img = document.createElement("img");
    img.src = url;
    img.style.maxWidth = "150px";
    img.style.border = "1px solid #ccc";
    img.style.borderRadius = "8px";

    const controls = document.createElement("div");
    controls.style.marginTop = "5px";

    const minusBtn = document.createElement("button");
    minusBtn.textContent = "−";
    minusBtn.onclick = () => {
      let val = parseInt(qtyInput.value);
      if (val > 1) qtyInput.value = val - 1;
    };

    const qtyInput = document.createElement("input");
    qtyInput.type = "number";
    qtyInput.min = "1";
    qtyInput.value = "1";
    qtyInput.dataset.url = url;
    qtyInput.style.width = "40px";
    qtyInput.name = "quantity";

    const plusBtn = document.createElement("button");
    plusBtn.textContent = "+";
    plusBtn.onclick = () => {
      let val = parseInt(qtyInput.value);
      qtyInput.value = val + 1;
    };

    controls.appendChild(minusBtn);
    controls.appendChild(qtyInput);
    controls.appendChild(plusBtn);

    wrapper.appendChild(img);
    wrapper.appendChild(controls);
    previewContainer.appendChild(wrapper);
  });

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit Order";
  submitBtn.onclick = submitOrder;
  previewContainer.appendChild(document.createElement("br"));
  previewContainer.appendChild(submitBtn);
}




