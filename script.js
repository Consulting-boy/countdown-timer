// Устанавливаем дату, до которой идет отсчет
const countdownDate = new Date("October 15, 2024 13:00:00").getTime();

// Обновляем отсчет каждую секунду
const countdownFunction = setInterval(function() {

  // Получаем текущие дату и время
  const now = new Date().getTime();

  // Вычисляем разницу между текущим временем и временем окончания
  const distance = countdownDate - now;

  // Вычисляем дни, часы, минуты и секунды
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Выводим результат в элемент с id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Если отсчет завершен, выводим текст
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "Отсчет завершен!";
  }
}, 1000);
