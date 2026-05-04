import "./styles.css";

const buttons = document.querySelectorAll(".filterbar__button");
const cards = document.querySelectorAll(".source-card");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    buttons.forEach((item) => item.classList.toggle("is-active", item === button));

    cards.forEach((card) => {
      const tags = card.dataset.tags.split(" ");
      const visible = filter === "all" || tags.includes(filter);
      card.classList.toggle("is-hidden", !visible);
    });
  });
});
