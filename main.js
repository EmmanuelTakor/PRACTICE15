let keys = document.querySelectorAll("a");
console.log(keys)
let divs = document.querySelectorAll("div");
console.log(divs);
divs.forEach(function (item) {
    item.classList.add("handle");
})
let divElements = document.querySelectorAll(".handle");
console.log(divElements)

keys.forEach(function(element) {
    element.addEventListener("click", function() {
        divElements.forEach(
            function (divEl) {
                divEl.classList.remove("hide")
            }
        )
    })
})
