var counterEls = document.querySelectorAll(".counter");

window.addEventListener("load", initializeCounter);

function initializeCounter() {
  counterEls.forEach((counter) => {
    var counterValue = parseInt(counter.innerText, 10);
    counter.innerText = 0;
    incrementCounter(counter, counterValue);
  });
}

function incrementCounter(el, counterValue) {
  var incrementBy = parseInt(0.005 * counterValue, 10);
  var interval = setInterval(() => {
    var currentValue = parseInt(el.innerText, 10) + incrementBy;
    el.innerText = currentValue;
    if (currentValue >= counterValue) {
      clearInterval(interval);
      el.innerText = counterValue;
    }
  }, 1);
}
