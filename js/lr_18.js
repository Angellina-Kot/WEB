document.getElementById('connection-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвратить стандартную отправку формы

    const name = document.getElementById('name-2').value;
    const phone = document.getElementById('phone-2').value;
    const email = document.getElementById('email-2').value;
    const password = document.getElementById('password-2').value;
    const confirmPassword = document.getElementById('confirm-password-2').value;
    const consentCheckbox = document.getElementById('consent-2');
    const consent = consentCheckbox.checked ? "Да" : "Нет";

    // Проверка на согласие
    // if (consent = "Нет") {
    //     alert("Вы должны согласиться на обработку данных!");
    //     return; // Прерываем выполнение
    // }

    // Проверка на совпадение паролей
    if (password !== confirmPassword) {
        alert("Пароли не совпадают!");
        return; // Прерываем выполнение
    }



    alert(`Данные формы:\n\nИмя: ${name}\nТелефон: ${phone}\nEmail: ${email}\nПароль: ${password}\nСогласие на обработку: ${consent}`);

    this.reset(); // Очистить форму
});

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвратить стандартную отправку формы

    const email = document.getElementById('email-3').value;
    const password = document.getElementById('password-3').value;

    // Здесь можно добавить проверку правильности email и пароля (например, через API)
    // Для примера просто проверим, что оба поля заполнены
    // if (!email || !password) {
    //     alert("Пожалуйста, заполните все поля!");
    //     return; // Прерываем выполнение
    // }

    alert(`Данные авторизации:\n\nEmail: ${email}\nПароль: ${password}`);

    this.reset(); // Очистить форму
});