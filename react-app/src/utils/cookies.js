export function setCookie(name, value, days) {
  let expires = ''
  if (days) {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = '; expires=' + date.toUTCString()
  }
  document.cookie = name + '=' + value + expires + '; path=/'
}

export function getCookie(name) {
  const nameEQ = name + '='
  const parts = document.cookie.split(';')

  for (const rawPart of parts) {
    const part = rawPart.trim()
    if (part.indexOf(nameEQ) === 0) {
      return part.substring(nameEQ.length)
    }
  }

  return null
}
