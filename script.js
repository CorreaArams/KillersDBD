const icons = {
  apple: "🍎",
  banana: "🍌",
  cherry: "🍒"
};

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("itemSelect");
  const submitBtn = document.getElementById("submitBtn");

  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      const selected = select.value;
      if (!selected) {
        alert("Por favor, escolha um item.");
        return;
      }

      const quantity = Math.floor(Math.random() * 5) + 1; // 1 a 5
      localStorage.setItem("item", selected);
      localStorage.setItem("quantity", quantity);
      window.location.href = "resultado.html";
    });
  }

  // Lógica da página de resultado
  const iconsContainer = document.getElementById("iconsContainer");
  const countDisplay = document.getElementById("countDisplay");

  if (iconsContainer && countDisplay) {
    const item = localStorage.getItem("item");
    const quantity = parseInt(localStorage.getItem("quantity"), 10);

    if (item && icons[item] && quantity) {
      for (let i = 0; i < quantity; i++) {
        const icon = document.createElement("span");
        icon.textContent = icons[item];
        iconsContainer.appendChild(icon);
      }
      countDisplay.textContent = `Quantidade: ${quantity}`;
    } else {
      countDisplay.textContent = "Nenhum item selecionado.";
    }
  }
});
