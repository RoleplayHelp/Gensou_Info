document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    function loadContent(tabId) {
        const contentElement = document.getElementById(tabId);
        fetch(`${tabId}.html`)
            .then(response => response.text())
            .then(data => {
                // Tìm nội dung trong thẻ có class 'plot-content'
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                const plotContent = doc.querySelector('.plot-content');
                if (plotContent) {
                    contentElement.innerHTML = plotContent.innerHTML;
                } else {
                    contentElement.innerHTML = data;
                }
            })
            .catch(error => console.error('Error:', error));
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
            
            loadContent(tabId);
        });
    });

    // Load background plot by default
    loadContent('background-plot');
});