const inputs = [...document.querySelectorAll(".input")];
const root = document.querySelector(":root");

const handleUpdate = function () {
  const unit = this.dataset.sizing || "";
  root.style.setProperty(`--${this.name}`, ` ${this.value}${unit} `);
};

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
