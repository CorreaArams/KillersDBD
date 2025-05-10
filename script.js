const select = document.getElementById("itemSelect");
const iconsContainer = document.getElementById("iconsContainer");
const countDisplay = document.getElementById("countDisplay");

const icons = {
  apple: "🍎",
  banana: "🍌",
  cherry: "🍒"
};

select.addEventListener("change", () => {
  const selectedItem = select.value;
  iconsContainer.innerHTML = "";
  countDisplay.textContent = "";

  if (selectedItem && icons[selectedItem]) {
    const quantity = Math.floor(Math.random() * 5) + 1; // de 1 a 5

    for (let i = 0; i < quantity; i++) {
      const icon = document.createElement("span");
      icon.textContent = icons[selectedItem];
      iconsContainer.appendChild(icon);
    }

    countDisplay.textContent = `Quantidade: ${quantity}`;
  }
});
