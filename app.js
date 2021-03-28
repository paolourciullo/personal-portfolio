const button = document.getElementById('button-toast')
const toasts = document.getElementById('toasts')

const messages = [
  'You look great today 😍',
  'You are the BEST! 😎',
  'I think you are amazing! 🤯',
  'You are number one! 🎉'
]

const types = ['info', 'success', 'error']

// console.log("is this working?");

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.classList.add(type ? type : getRandomType())

  notif.innerText = message ? message : getRandomMessage()

  toasts.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  }, 3000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}
function getRandomType() {
  return types[Math.floor(Math.random() * types.length)]
}