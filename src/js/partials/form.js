window.onload = function() {
    document.getElementById('sendingForm').addEventListener('submit', function(event) {
        event.preventDefault();
        debugger;
        emailjs.sendForm('mail_ru', 'landing_send_form', this);
    });
};