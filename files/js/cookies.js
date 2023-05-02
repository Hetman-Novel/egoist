function checkCookie() {
// задаем имя куки и период действия в днях
const cookieName = 'myCookie';
const cookieDuration = 7;

// проверяем, существует ли куки с заданным именем
const cookieValue = document.cookie.replace(
    new RegExp(
    "(?:(?:^|.*;)\\s*" +
        cookieName.replace(/[\-\.\+\*]/g, "\\$&") +
        "\\s*\\=\\s*([^;]*).*$)|^.*$"
    ),
    "$1"
);
const currentTime = new Date().getTime();

if (!cookieValue) {
    // если куки не существует, добавляем классы
    document.getElementById('popup-cookies').classList.add('open');
    document.body.classList.add('lock');
} else {
    // если куки существует, проверяем период действия
    const cookieTime = parseInt(cookieValue);
    const expireTime = cookieTime + cookieDuration * 24 * 60 * 60 * 1000;
    if (currentTime > expireTime) {
    // если период действия истек, добавляем классы
    document.getElementById('popup-cookies').classList.add('open');
    document.body.classList.add('lock');
    }
}

// устанавливаем новое значение куки
document.cookie = `${cookieName}=${currentTime}; expires=${new Date(
    currentTime + cookieDuration * 24 * 60 * 60 * 1000
).toUTCString()}; path=/`;
}

// вызываем функцию при загрузке страницы
window.addEventListener('load', checkCookie);

document.querySelector('.popup__cookies-button').addEventListener('click', () => {
    document.getElementById('popup-cookies').classList.remove('open');
    document.body.classList.remove('lock');
});