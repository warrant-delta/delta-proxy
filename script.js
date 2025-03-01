function search() {
    const query = document.getElementById("search").value;
    if (!query) return;
    const proxyUrl = `https://your-cloudflare-worker-url/?q=${encodeURIComponent(query)}`;
    document.getElementById("browser").src = proxyUrl;
    document.getElementById("browser").style.display = "block";
}
