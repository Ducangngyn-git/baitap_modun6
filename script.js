// --- CẢI TIẾN 4: Chuyển đổi Dark/Light Mode (Sửa đổi DOM) ---
const themeToggleBtn = document.getElementById('themeToggle');
const bodyElement = document.body;

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');
    
    // Đổi chữ của nút bấm
    if(bodyElement.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Giao Diện Sáng';
    } else {
        themeToggleBtn.textContent = 'Giao Diện Tối';
    }
});

// --- CẢI TIẾN 3: JavaScript Form Validation (Xác thực biểu mẫu) ---
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', function(event) {
    // Ngăn chặn form submit mặc định (tải lại trang)
    event.preventDefault();

    let isValid = true;

    // Kiểm tra trường Tên
    if (nameInput.value.trim() === '') {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    // Kiểm tra trường Email (Sử dụng biểu thức chính quy Regex)
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Kiểm tra trường Lời nhắn (ít nhất 10 ký tự)
    if (messageInput.value.trim().length < 10) {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('messageError').style.display = 'none';
    }

    // Nếu tất cả hợp lệ, hiển thị tin nhắn thành công
    if (isValid) {
        successMessage.classList.remove('hidden');
        contactForm.reset(); // Xóa trắng form

        // Ẩn thông báo sau 3 giây
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 3000);
    }
});