const switcher = document.getElementById("switcher");
const switchBttn = document.querySelector('.switch')
const switchBg = document.querySelector('.toggle')
const monthlyLabel = document.getElementById("monthly");
const yearlyLabel = document.getElementById("yearly");
const planPrices = Array.from(document.getElementsByClassName("plan_price"));
const pricesLabel = Array.from(document.getElementsByClassName("per_span"));

function changePrice(arr, bool) {
  for (let item of arr) {
    if (bool) {
      const yearlyprice = parseInt(item.textContent) * 10;
      item.textContent = `${yearlyprice}.00`;
      switchBttn.style.background ="#FFF";
      switchBg.style.background = "#000"
      for (label of pricesLabel) {
        label.textContent = "per year";
      }
    } else {
      const yearlyprice = parseInt(item.textContent) / 10;
      item.textContent = `${yearlyprice}.00`;
      switchBttn.style.background ="#000";
      switchBg.style.background = "#dfdfdf";
      for (label of pricesLabel) {
        label.textContent = "per month";
      }
    }
  }
}

switcher.addEventListener("click", () => {
  const checkedState = switcher.checked;
  if (checkedState) {
    monthlyLabel.classList.remove("active");
    yearlyLabel.classList.add("active");
  } else {
    monthlyLabel.classList.add("active");
    yearlyLabel.classList.remove("active");
  }
  changePrice(planPrices, checkedState);
});
