document.addEventListener('DOMContentLoaded', function() {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');
    const contentDiv = document.getElementById('content');
    const backButton = document.getElementById('back-button');

    dropbtn.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownContent.classList.toggle('show');
    });

    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const contentType = this.getAttribute('data-content');
            const template = document.getElementById(`${contentType}-template`);
            
            if (template) {
                contentDiv.innerHTML = template.innerHTML;
                contentDiv.style.display = 'block';
                backButton.style.display = 'block';
                dropbtn.textContent = this.textContent;
                dropdownContent.classList.remove('show');

                if (contentType === 'background-plot') {
                    setupBackgroundPlot();
                }
            } else {
                contentDiv.innerHTML = '<p>Nội dung đang được cập nhật.</p>';
            }
        });
    });

    backButton.addEventListener('click', function() {
        contentDiv.innerHTML = '';
        contentDiv.style.display = 'none';
        this.style.display = 'none';
        dropbtn.textContent = 'Chọn thông tin bạn muốn xem';
    });

    function setupBackgroundPlot() {
        // Mã xử lý cho Background Plot (nếu cần)
    }

    // Đóng dropdown khi click bên ngoài
    document.addEventListener('click', function(event) {
        if (!dropbtn.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.remove('show');
        }
    });
});