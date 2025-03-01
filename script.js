function search() {
    const query = document.getElementById("search").value;
    if (!query) return;

    // Ensure the query is URL-encoded properly
    const encodedQuery = encodeURIComponent(query); 
    const proxyUrl = `https://delta-proxy.unlockedgamedev.workers.dev/?q=${encodedQuery}`;

    // Add a loading indicator
    document.getElementById("browser").style.display = "none"; // Hide iframe initially

    // Handle iframe load error
    document.getElementById("browser").onerror = function() {
        alert("There was an error loading the page.");
        document.getElementById("browser").style.display = "none";
    };

    // Display the iframe once content loads
    document.getElementById("browser").onload = function() {
        document.getElementById("browser").style.display = "block"; // Show iframe after load
    };

    document.getElementById("browser").src = proxyUrl;
}

// Add enter key functionality
document.getElementById("search").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        search();
    }
});
