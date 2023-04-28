async function submitSignIn() {
    await fetch(
        window.location.origin + '/auth/signin',
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
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
    ).then(response => response.json())
        .then(response => {
            console.log(response)
        });
}