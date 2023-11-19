
const increaseBtn = document.getElementById("increase")

increaseBtn.addEventListener("click", function() {
    const counterNumber = document.getElementById("count").innerText;
    const currentCount = parseFloat(counterNumber);
    const addOne = currentCount + 1

    document.getElementById("count").innerText = addOne;
})

const decreaseBtn = document.getElementById("decrease")

decreaseBtn.addEventListener("click", function() {
    const counterNumber = document.getElementById("count").innerText;
    const currentCount = parseFloat(counterNumber);
    const subtractOne = currentCount - 1
    document.getElementById("count").innerText = subtractOne;
})

const resetBtn = document.getElementById("reset")

resetBtn.addEventListener("click", function() {
    document.getElementById("count").innerText = 0;
})
