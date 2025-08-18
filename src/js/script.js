import "../sass/style.scss";

const amounts = document.querySelectorAll(".promo__card-amount");

amounts.forEach((amount) => {
    const line = amount.querySelector("span");
    if (line) {
        // Ширина линии равна ширине текста внутри блока
        line.style.width = "100%"; // полностью повторяет ширину родителя
    }
});
