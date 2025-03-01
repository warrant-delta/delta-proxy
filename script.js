function search() {
    const query = document.getElementById("search").value;
    if (!query) return;

    // Ensure the query is URL-encoded properly
    const encodedQuery = encodeURIComponent(query); 
    const proxyUrl = `https://delta-proxy.unlockedgamedev.workers.dev/?q=${encodedQuery}`;

    document.getElementById("browser").src = proxyUrl;
    document.getElementById("browser").style.display = "block";
}

// Add enter key functionality
document.getElementById("search").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        search();
    }
});
