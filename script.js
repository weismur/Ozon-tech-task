document.addEventListener("DOMContentLoaded", () => {
  const valueInput = document.getElementById("value__input");
  const animateButton = document.getElementById("animate__button");
  const hiddenButton = document.getElementById("hidden__button");
  const progressBarComponent = document.querySelector("progress-bar-component");
  const progressBarValue = progressBarComponent.getAttribute([
    "progress-value",
  ]);
  const progressBarAnimatedState = progressBarComponent.getAttribute([
    "is-animated",
  ]);
  const progressBarHiddenState = progressBarComponent.getAttribute([
    "is-hidden",
  ]);

  valueInput.value =
    0 <= progressBarValue && progressBarValue <= 100 ? progressBarValue : 0;
  animateButton.dataset.checked =
    progressBarAnimatedState === "false" || progressBarAnimatedState === "true"
      ? progressBarAnimatedState
      : "false";
  hiddenButton.dataset.checked =
    progressBarHiddenState === "false" || progressBarHiddenState === "true"
      ? progressBarHiddenState
      : "false";

  changeButtonUI(animateButton);
  changeButtonUI(hiddenButton);

  document.querySelectorAll(".switch__button").forEach((button) => {
    button.addEventListener("click", () => {
      button.dataset.checked =
        button.dataset.checked === "false" ? "true" : "false";
      progressBarComponent.setAttribute(
        [button.id === "hidden__button" ? "is-hidden" : "is-animated"],
        button.dataset.checked,
      );
      changeButtonUI(button);
    });
  });

  function changeButtonUI(button) {
    if (button.dataset.checked) {
      button.style.background =
        button.dataset.checked === "false" ? "#DAE6EC" : "#005CFF";
      button.querySelector(".switch__indicator").style.transform =
        button.dataset.checked === "false"
          ? "translateX(10%)"
          : "translateX(70%)";
    }
  }

  valueInput.addEventListener("input", () => {
    if (valueInput.value < 0) {
      valueInput.value = 0;
    } else if (valueInput.value > 100) {
      valueInput.value = 100;
    }
    progressBarComponent.setAttribute(["progress-value"], valueInput.value);
  });
});
