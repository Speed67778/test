
        // Toggle password visibility
        function togglePassword() {
            const passwordInput = document.getElementById('password');
            const toggleButton = document.querySelector('.password-toggle');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggleButton.textContent = '🙈';
            } else {
                passwordInput.type = 'password';
                toggleButton.textContent = '👁️';
            }
        }

        // Show error message
        function showError(message) {
            const errorDiv = document.getElementById('errorMessage');
            errorDiv.textContent = message;
            errorDiv.style.display = 'block';
            document.getElementById('successMessage').style.display = 'none';
        }

        // Show success message
        function showSuccess(message) {
            const successDiv = document.getElementById('successMessage');
            successDiv.textContent = message;
            successDiv.style.display = 'block';
            document.getElementById('errorMessage').style.display = 'none';
        }

        // Hide messages
        function hideMessages() {
            document.getElementById('errorMessage').style.display = 'none';
            document.getElementById('successMessage').style.display = 'none';
        }

        // Login form submission
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value;
            const loginButton = document.getElementById('loginButton');
            
            // Basic validation
            if (!username) {
                showError('Vui lòng nhập tên đăng nhập');
                return;
            }
            
            if (!password) {
                showError('Vui lòng nhập mật khẩu');
                return;
            }
            
            // Show loading state
            loginButton.disabled = true;
            loginButton.innerHTML = '<span class="loading"></span> Đang đăng nhập...';
            hideMessages();
            
            // Simulate login process
            setTimeout(() => {
                // Demo credentials - thay thế bằng logic xác thực thực tế
                if (username === 'admin' && password === '123') {
                    showSuccess('Đăng nhập thành công! Đang chuyển hướng...');
                    
                    // Save login state if remember me is checked
                    if (document.getElementById('remember').checked) {
                        localStorage.setItem('adminRemember', 'true');
                        localStorage.setItem('adminUsername', username);
                    }
                    
                    // Redirect to admin page after 1.5 seconds
                    setTimeout(() => {
                        window.location.href = 'index.html'; // Thay bằng đường dẫn trang admin của bạn
                    }, 1500);
                    
                } else {
                    showError('Tên đăng nhập hoặc mật khẩu không chính xác');
                    loginButton.disabled = false;
                    loginButton.textContent = 'Đăng Nhập';
                }
            }, 1500); // Simulate network delay
        });

        // Forgot password function
        function showForgotPassword() {
            alert('Chức năng khôi phục mật khẩu sẽ được triển khai sau.\n\nLiên hệ quản trị viên để được hỗ trợ.');
        }

        // Help function
        function showHelp() {
            alert('Trợ giúp đăng nhập:\n\n• Sử dụng tên đăng nhập và mật khẩu được cấp\n• Liên hệ quản trị viên nếu quên mật khẩu\n• Đảm bảo kết nối internet ổn định');
        }

        // Contact function
        function showContact() {
            alert('Thông tin liên hệ:\n\nEmail: khiemspeed@example.com\nĐiện thoại: 0123-456-777\nGiờ làm việc: 8:00 - 17:00 (T2-T6)');
        }

        // Check if user was remembered
        document.addEventListener('DOMContentLoaded', function() {
            if (localStorage.getItem('adminRemember') === 'true') {
                const savedUsername = localStorage.getItem('adminUsername');
                if (savedUsername) {
                    document.getElementById('username').value = savedUsername;
                    document.getElementById('remember').checked = true;
                }
            }
            
            // Focus on username field
            document.getElementById('username').focus();
        });

        // Add keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            // Enter key submits form
            if (e.key === 'Enter' && document.activeElement.tagName !== 'BUTTON') {
                document.getElementById('loginForm').dispatchEvent(new Event('submit'));
            }
        });
