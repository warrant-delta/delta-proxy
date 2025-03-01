function search() {
    const query = document.getElementById("search").value;
    if (!query) return;
    const proxyUrl = `https://delta-proxy.unlockedgamedev.workers.dev/?q=${encodeURIComponent(query)}`;
    document.getElementById("browser").src = proxyUrl;
    document.getElementById("browser").style.display = "block";
}
