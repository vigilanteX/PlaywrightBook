const input = document.getElementById("input");

input.addEventListener("input", () => {
  console.log("Input event fired");
});
input.addEventListener("change", () => {
  console.log("Change event fired");
});
input.addEventListener("focus", () => {
  console.log("focus available event fired");
});
