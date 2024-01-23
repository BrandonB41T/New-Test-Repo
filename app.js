let mainDiv = document.querySelector("#div");


mainDiv.addEventListener("click", function(e) {
    mainDiv.classList.toggle("green");
    console.log(mainDiv.classList)
}
)