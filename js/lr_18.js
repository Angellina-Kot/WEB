document.getElementById('submit-button').addEventListener('click', function () {
    // Сбрасываем предыдущие ошибки
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.style.display = 'none');

    const inputs = document.querySelectorAll('.connection__input');
    let valid = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            valid = false;
            input.classList.add('error');
            const errorMessage = document.getElementById(input.id + '-error');
            if (errorMessage) {
                errorMessage.style.display = 'block';
            }
        } else {
            input.classList.remove('error');
        }
    });

    const consent = document.getElementById('consent');
    if (!consent.checked) {
        valid = false;
        const consentError = document.createElement('div');
        consentError.className = 'error-message';
        consentError.textContent = 'Необходимо дать согласие на обработку персональных данных.';
        document.querySelector('.popup__down__agree').appendChild(consentError);
    }

    const successMessage = document.getElementById('success-message');
    if (valid) {
        // Здесь можно добавить код для отправки формы, например, AJAX-запрос
        successMessage.style.display = 'block';
    } else {
        successMessage.style.display = 'none';
    }
});