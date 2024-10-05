document.addEventListener('DOMContentLoaded', () => {
    // 共通パーツを読み込む関数
    function loadHTML(filePath, targetElementId) {
        fetch(filePath)
            .then(response => response.text())
            .then(data => {
                document.getElementById(targetElementId).innerHTML = data;
            })
            .catch(error => console.error('Error loading HTML:', error));
    }

    // ヘッダーとフッターを読み込む
    loadHTML('components/header.html', 'header-placeholder');
    loadHTML('components/footer.html', 'footer-placeholder');
});
