
const birthDate = new Date('May 19, 2022 15:33:00').getTime();

const hitungMundur = setInterval(function(){
    
const now = new Date().getTime();
const distance = birthDate - now;

const day = Math.floor(distance / (1000 * 60 * 60 * 24));
const hour = Math.floor((distance % (1000 * 60 * 60 *24 )) / (1000 * 60 * 60));
const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const second = Math.floor((distance % (1000 * 60)) / 1000);

const hari = document.getElementById('day');
const jam = document.getElementById('hour');
const menit = document.getElementById('minute');
const detik = document.getElementById('second');
hari.innerHTML = day;
jam.innerHTML = hour;
menit.innerHTML = minute;
detik.innerHTML = second;

if (distance < 0) {
    clearInterval(hitungMundur);
    hari.innerHTML = "-";
    jam.innerHTML = "-";
    menit.innerHTML = "-";
    detik.innerHTML = "-";
}

},1000);





