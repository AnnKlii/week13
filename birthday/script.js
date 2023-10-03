const bday = document.querySelector('#bday').value;
const button = document.querySelector('.btn');
const result = document.querySelector('.result');

function getDiff() {
    const currentDay = Date.now();
    const bdayMsec = new Date(document.querySelector('#bday').value);
    const diffDay = Math.round((bdayMsec - currentDay) / (1000 * 60 * 60 * 24));
    if (diffDay >= 0) {
        if (diffDay % 10 === 1 && diffDay !== 11) {
            result.textContent = `До вашего дня рождения остался ${diffDay} день`;
        } else if (diffDay === 0) {
            result.textContent = `Ваш день рождения сегодня!!!`;
        } else if (diffDay % 10 === 2 || diffDay % 10 === 3 || diffDay % 10 === 4) {
            result.textContent = `До вашего дня рождения осталось ${diffDay} дня`;
        } else {
            result.textContent = `До вашего дня рождения осталось ${diffDay} дней`;
        }
    } else if (diffDay < 0) {
        result.textContent = 'Выберите дату следующего дня рождения, а не прошедшего';
    } else {
        result.textContent = 'Выберите дату';
    }
}


button.addEventListener('click', getDiff);