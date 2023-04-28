function loginUser() {
    const username = document.getElementById('usernamee').value;
    const password = document.getElementById('pwdd').value;

    const userLoginInfo = {
        username,
        password
    };

    console.log(userLoginInfo)

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(userLoginInfo)
    }).then(async res => {
        const jsonRes = await res.json();
        localStorage.setItem('user', JSON.stringify(jsonRes))
        window.location.href="indexxx.html"
        //MERHABALAR AYOL
    });
}

function signupUser() {
    const firstName = document.getElementById('fname').value
    const lastName = document.getElementById('lname').value
    const email = document.getElementById('email').value
    const username = document.getElementById('username').value
    const password = document.getElementById('pwd').value

    const signupInfo = {
        firstName,
        lastName,
        email,
        username,
        password
    };

    fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(signupInfo)
    }).then(res => console.log(res));
    }