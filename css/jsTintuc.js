
// Comment form validation
function validateCommentForm() {
    let isValid = true;
    
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(error => {
        error.style.display = 'none';
        error.textContent = '';
    });

    // Validate name
    const name = document.getElementById('comment-name').value.trim();
    if (!name) {
        showError('name-error', 'Vui lòng nhập họ tên');
        isValid = false;
    } else if (name.length < 2) {
        showError('name-error', 'Họ tên phải có ít nhất 2 ký tự');
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('comment-email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        showError('email-error', 'Vui lòng nhập địa chỉ email');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        showError('email-error', 'Địa chỉ email không hợp lệ');
        isValid = false;
    }

    // Validate content
    const content = document.getElementById('comment-content').value.trim();
    if (!content) {
        showError('content-error', 'Vui lòng nhập nội dung bình luận');
        isValid = false;
    } else if (content.length < 10) {
        showError('content-error', 'Bình luận phải có ít nhất 10 ký tự');
        isValid = false;
    } else if (content.length > 500) {
        showError('content-error', 'Bình luận không được vượt quá 500 ký tự');
        isValid = false;
    }

    return isValid;
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

// Social sharing functions
function shareToFacebook() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`, '_blank', 'width=600,height=400');
}

function shareToTwitter() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank', 'width=600,height=400');
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(function() {
        alert('Đã sao chép link bài viết!');
    }).catch(function() {
        // Fallback for older browsers
        const tempInput = document.createElement('input');
        tempInput.value = window.location.href;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('Đã sao chép link bài viết!');
    });
}

// Event listeners
document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validateCommentForm()) {
        alert('Cảm ơn bạn đã bình luận! Bình luận sẽ được duyệt trước khi hiển thị.');
        this.reset();
    }
});

// Real-time validation
document.getElementById('comment-name').addEventListener('blur', function() {
    const name = this.value.trim();
    if (name && name.length < 2) {
        showError('name-error', 'Họ tên phải có ít nhất 2 ký tự');
    } else {
        document.getElementById('name-error').style.display = 'none';
    }
});

document.getElementById('comment-email').addEventListener('blur', function() {
    const email = this.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
        showError('email-error', 'Địa chỉ email không hợp lệ');
    } else {
        document.getElementById('email-error').style.display = 'none';
    }
});

document.getElementById('comment-content').addEventListener('input', function() {
    const content = this.value.trim();
    const errorElement = document.getElementById('content-error');
    
    if (content.length > 500) {
        showError('content-error', 'Bình luận không được vượt quá 500 ký tự');
    } else if (content.length > 0 && content.length < 10) {
        showError('content-error', 'Bình luận phải có ít nhất 10 ký tự');
    } else {
        errorElement.style.display = 'none';
    }
});

// Load article based on URL parameter (simulation)
function loadArticleFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    
    // Simulation - in real website, you would fetch article data from server
    if (articleId) {
        console.log(`Loading article with ID: ${articleId}`);
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadArticleFromURL();
});
