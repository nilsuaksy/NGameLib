const itemSet = (localStorage.getItem('user') !== null);

if (itemSet)  {
    console.log(localStorage.getItem('user'));
} else { alert('Kullanıcı  bulunamadı.');
window.location.href="login.html"
}


const localDeger = document.getElementById('ownName');
const localGelenDeger = JSON.parse(localStorage.getItem('user')).firstName;
const localGelenDeger2 = JSON.parse(localStorage.getItem('user')).lastName;  



localDeger.innerHTML = (localGelenDeger.charAt(0).toUpperCase() + localGelenDeger.slice(1) + ' ' + localGelenDeger2.charAt(0).toUpperCase() + localGelenDeger2.slice(1));