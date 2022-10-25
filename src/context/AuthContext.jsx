import { createContext, useState, useEffect } from 'react'
import getPayload from '../utils/getPayload.js'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false)
  const [token, setToken] = useState('')
  const [client, setClient] = useState(null)

  const loginClient = (token) => {
    window.localStorage.setItem('token', token)
    const decode = getPayload(token)
    setClient(decode)
    setIsAuth(true)
  }

  const logoutClient = () => {
    setToken('')
    window.localStorage.removeItem('token')
  }

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem('token')

    if (!token && hash) {
      token = hash.substring(1).split('&').find(item => item.startsWith('access_token')).split('=')[1]
      
      window.location.hash = ''
      window.localStorage.setItem('token', token)
    }
    setToken(token)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth, token, client, loginClient, logoutClient
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
