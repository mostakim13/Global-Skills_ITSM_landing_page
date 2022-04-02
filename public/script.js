function sendMail(params) {
    var tempParams = {
        user_name: document.getElementById("user_name").value,
        user_phone: document.getElementById("user_phone").value,
        user_email: document.getElementById("user_email").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_ttq46pf", "template_w4v5owc", tempParams)
        .then(function (res) {
            document.getElementById("user_name").value = '',
                document.getElementById("user_phone").value = '',
                document.getElementById("user_email").value = '',
                document.getElementById("message").value = ''

            alert("Thank you for contacting us!")
        })
}
