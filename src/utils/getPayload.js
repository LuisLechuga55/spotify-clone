export default function (token) {
  if (token) {
    /* eslint-disable no-unused-vars */
    const [header, payload, signature] = token.split('.')

    const base64 = payload.replace('-', '+').replace('-', '/')

    const payloadObject = JSON.parse(window.atob(base64))

    return payloadObject
  } else {
    return null
  }
}
