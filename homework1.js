
const dismissToggle = (clickId) =>{
    const thisButton = document.getElementById(clickId)

    if (thisButton.innerText === "Dismiss") {
        thisButton.innerHTML = "Dismissed";
        thisButton.classList = "btn btn-outline-danger";
    }else {
        thisButton.innerHTML = "Dismiss";
        thisButton.classList = "btn btn-outline-secondary";
    }
};

const searchInput = document.getElementById("input");
searchInput.oninput = () => document.getElementById("searchterm").innerText = searchInput.value
