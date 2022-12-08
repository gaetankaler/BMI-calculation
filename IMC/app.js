const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];
const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");
const result = document.querySelector(".result");
const bmiResult = document.querySelector(".text-result");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  calculBMI();
});

function calculBMI() {
  const size = inputs[0].value;
  const weight = inputs[1].value;

  if (!size || !weight || size <= 0 || weight <= 0) {
    handleError();
    return;
  }
  const resultBMI = (weight / Math.pow(size / 100, 2)).toFixed(1);
  showResult(resultBMI);
}

function handleError() {
  result.textContent = "Wops";
  bmiResult.textContent = "Remplissez correctement les inputs.";
}

function showResult(BMI) {
  const rank = BMIData.find((data) => {
    if (BMI >= data.range[0] && BMI < data.range[1]) return data;
    else if (typeof data.range === "number" && BMI >= data.range) return data;
  });

  result.textContent = BMI;
  result.style.color = `${rank.color}`;
  bmiResult.textContent = `Résultat : ${rank.name}`;
}
