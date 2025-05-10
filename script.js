document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("imageSelect");
  const preview = document.getElementById("previewContainer");
  const input = document.getElementById("userInput");
  const submitBtn = document.getElementById("submitBtn");

  // Se estamos na index.html
  if (select && preview && submitBtn) {
    select.addEventListener("change", () => {
      const value = select.value;
      preview.innerHTML = "";
      if (value) {
        const img = document.createElement("img");
        img.src = value;
        img.alt = "Prévia";
        preview.appendChild(img);
      }
    });

    submitBtn.addEventListener("click", () => {
      const selectedImage = select.value;
      const userText = input.value;

      if (!selectedImage) {
        alert("Por favor, selecione um personagem.");
        return;
      }

      localStorage.setItem("selectedImage", selectedImage);
      localStorage.setItem("userText", userText);
      localStorage.setItem("quantity", Math.floor(Math.random() * 5) + 1);
      window.location.href = "resultado.html";
    });
  }

  // Se estamos na resultado.html
  const resultImage = document.getElementById("resultImageContainer");
  const resultText = document.getElementById("resultText");
  const resultCount = document.getElementById("resultCount");

  if (resultImage && resultText && resultCount) {
    const imgPath = localStorage.getItem("selectedImage");
    const userText = localStorage.getItem("userText");
    const quantity = localStorage.getItem("quantity");

    if (imgPath) {
      const img = document.createElement("img");
      img.src = imgPath;
      img.alt = "Imagem selecionada";
      resultImage.appendChild(img);
    }

    if (userText) {
      resultText.textContent = `Você escreveu: "${userText}"`;
    }

    if (quantity) {
      resultCount.textContent = `Quantidade aleatória: ${quantity}`;
    }
  }
});
