if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/homepage/service-worker.js")
            .then((registration) => {
                console.log("Service Worker registered:", registration);
            })
            .catch((error) => {
                console.log("Service Worker registration failed:", error);
            });
    });
}

let installPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event;
    document.getElementById("install-button").style.display = "block";
});

document.getElementById("install-button").addEventListener("click", () => {
    if (installPrompt) {
        installPrompt.prompt();
    }
});

