const countup = (startDate) => {
  const now = new Date();

  if (now < startDate) {
    requestAnimationFrame(() => countup(startDate));
    return;
  }

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  let hours = now.getHours() - startDate.getHours();
  let minutes = now.getMinutes() - startDate.getMinutes();
  let seconds = now.getSeconds() - startDate.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += prevMonth;
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }

  // Atualiza os spans
  document.querySelector(".countdown-year").textContent = `${years
    .toString()
    .padStart(2, "0")} anos`;
  document.querySelector(".countdown-month").textContent = `${months
    .toString()
    .padStart(2, "0")} meses`;
  document.querySelector(".countdown-day").textContent = `${days
    .toString()
    .padStart(2, "0")} dias`;
  document.querySelector(".countdown-hour").textContent = `${hours
    .toString()
    .padStart(2, "0")} horas`;
  document.querySelector(".countdown-minute").textContent = `${minutes
    .toString()
    .padStart(2, "0")} minutos`;
  document.querySelector(".countdown-second").textContent = `${seconds
    .toString()
    .padStart(2, "0")} segundos`;

  setTimeout(() => countup(startDate), 1000);
};

// Exemplo
countup(new Date("2024-10-16T22:10:00"));
