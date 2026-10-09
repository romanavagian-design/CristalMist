document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('subscription-form');
    const message = document.getElementById('form-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        if (name === '' || email === '') {
            alert('Пожалуйста, заполните все поля.');
            return;
        }

        if (!email.includes('@')) {
            alert('Пожалуйста, введите корректный Email.');
            return;
        }

        message.textContent = `Спасибо, ${name}! Вы успешно подписаны.`;
        message.style.display = 'block';
        message.style.color = 'green';
        
        form.reset();
        
        setTimeout(() => {
            message.style.display = 'none';
        }, 3000);
    });
});