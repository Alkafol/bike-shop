function submitSignUp() {
    fetch(
        window.location.origin + '/auth/signup',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                "formFields": [
                    {
                        "id": "email",
                        "value": document.logging_form.elements.email.value,
                    },
                    {
                        "id": "password",
                        "value": document.logging_form.elements.password.value,
                    }
                ]
            })
        }
    )
        .then(response => response.json())
        .then(response => {
            console.log(response)
            /*fetch(
                'https://evgeny-backend-itmo.herokuapp.com/users',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        'STUserid': response.user.id,
                        'name': document.auth_form.user_name.value,
                        'surname': document.auth_form.user_surname.value,
                        'login': document.auth_form.auth_email.value,
                    })
                }
            )*/
        });
}