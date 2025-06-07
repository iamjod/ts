document.getElementById("secretBtn").addEventListener("click", function () {
    document.getElementById("codeModal").style.display = "block";
});

document.querySelector(".close-button").addEventListener("click", function () {
    document.getElementById("codeModal").style.display = "none";
    resetModal();
});

document.getElementById("checkCode").addEventListener("click", function () {
    const input = document.getElementById("codeInput").value.trim();
    const correctCode = "bold gurl"; 

    if (input === correctCode) {
        document.getElementById("privateMessage").classList.remove("hidden");
        document.getElementById("error").classList.add("hidden");
    } else {
        document.getElementById("error").classList.remove("hidden");
    }
});

function resetModal() {
    document.getElementById("codeInput").value = "";
    document.getElementById("privateMessage").classList.add("hidden");
    document.getElementById("error").classList.add("hidden");
}