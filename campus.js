document.getElementById('search-bar').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const items = document.querySelectorAll('#items-section > div');
    items.forEach(item => {
        const itemName = item.querySelector('h3').textContent.toLowerCase();
        if (itemName.includes(searchQuery)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});