document.getElementById("search").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        search(); // Trigger search on Enter key press
    }
});

function search() {
    const query = document.getElementById("search").value;
    if (!query) return;
    const proxyUrl = `https://delta-proxy.unlockedgamedev.workers.dev/?q=${encodeURIComponent(query)}`;
    
    // Show loading indicator and hide iframe while waiting
    showLoadingIndicator();

    document.getElementById("browser").src = proxyUrl;
}

function showLoadingIndicator() {
    document.getElementById("loading-indicator").style.display = "block"; // Show loading
    document.getElementById("browser").style.display = "none"; // Hide iframe during load
}

document.getElementById("browser").onload = function() {
    document.getElementById("loading-indicator").style.display = "none"; // Hide loading
    document.getElementById("browser").style.display = "block"; // Show iframe when content is loaded
    document.getElementById("search").style.top = "10px"; // Move search bar to the top
};
