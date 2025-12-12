console.log("index");
const element = document.getElementById("call");
element.addEventListener("click", async function () {
  const res = await fetch("http://localhost:3000/PlaywrightPOST", {
    method: "POST",
  });
  const finalData = await res.json();
  console.log(finalData.name);
  document.getElementById("text").innerText = finalData.name;
});
