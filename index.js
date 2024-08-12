const countdown = (date) => {
  const $countdown = document.querySelector('.countdown')
  const now = new Date();
  const distance = date - now;
  const milliseconds = distance
  const seconds = milliseconds / 1000
  const minutes = seconds / 60
  const hours = minutes / 60
  const days = hours / 24

  const fSeconds = (Math.floor(seconds) % 60).toString().padStart(2, '0')
  const fMinutes = (Math.floor(minutes) % 60).toString().padStart(2, '0')
  const fHours = (Math.floor(hours) % 24).toString().padStart(2, '0')
  const fDays = (Math.floor(days)).toString().padStart(2, '0')

  if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
    $countdown.textContent = '00:00:00:00'

    return;
  }

  $countdown.textContent = `${fDays}:${fHours}:${fMinutes}:${fSeconds}`

  setTimeout(() => countdown(date), 1000)
}

countdown(new Date('10/29/2024 12:00:00'))