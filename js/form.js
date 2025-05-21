document.getElementById('return-to-form').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('success-message').style.display = 'none';
});

document.getElementById('open-form-button').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'flex';    
});

document.getElementById('return-to-site').addEventListener('click', function () {
    document.getElementById('success-message').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Возвращаемся плавно в начало страницы
});

//переключатель "Это срочная задача?"
function toggleUrgency(checkbox) {
    console.log("Срочность:", checkbox.checked ? "Да" : "Нет");
}
//валидация полей формы
document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault(); // Отменяем переход по ссылке

    const nameInput = document.querySelectorAll('.popup__input')[0];
    const emailInput = document.querySelectorAll('.popup__input')[1];
    const phoneInput = document.querySelectorAll('.popup__input')[2];
    const commentInput = document.querySelectorAll('.popup__input')[3];
    const consentCheckbox = document.getElementById('consent');

    let valid = true;
    let messages = [];

    // Проверка имени
    if (nameInput.value.trim() === '') {
        valid = false;
        messages.push("Введите ваше имя.");
    }

    // Проверка email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;
    if (emailInput.value.trim() === '') {
        valid = false;
        messages.push("Введите email.");
    } else if (!emailPattern.test(emailInput.value.trim())) {
        valid = false;
        messages.push("Введите корректный email.");
    }

    // Проверка телефона
    if (phoneInput.value.trim() === '') {
        valid = false;
        messages.push("Введите номер телефона.");
    }

    if (valid) {
        // alert("Форма успешно отправлена!");
        document.getElementById('submit').addEventListener('click', function () {
            document.getElementById('popup').style.display = 'none';
            document.getElementById('success-message').style.display = 'flex';
        });
        // Здесь можно отправить форму через AJAX или просто очистить поля
    } else {
        alert(messages.join("\n"));
    }
});
//маска на ввод номера телефона
document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.querySelectorAll('.popup__input')[2]; // поле "Мой номер"

    phoneInput.addEventListener("input", function (e) {
        let input = phoneInput.value.replace(/\D/g, '').substring(0, 11); // Убираем всё, кроме цифр, максимум 11 цифр
        let formatted = '+7';

        if (input.length > 1) {
            formatted += ' (' + input.substring(1, 4);
        }
        if (input.length >= 4) {
            formatted += ') ' + input.substring(4, 7);
        }
        if (input.length >= 7) {
            formatted += '-' + input.substring(7, 9);
        }
        if (input.length >= 9) {
            formatted += '-' + input.substring(9, 11);
        }

        phoneInput.value = formatted;
    });

    phoneInput.addEventListener("focus", function () {
        if (phoneInput.value === '') {
            phoneInput.value = '+7 ';
        }
    });

    phoneInput.addEventListener("blur", function () {
        if (phoneInput.value === '+7 ') {
            phoneInput.value = '';
        }
    });
});