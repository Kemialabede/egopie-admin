import React from 'react'
import { createContext, useMemo, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { $storage } from '../utilities/storage'
const AuthContext = createContext({})

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn] = useState($storage.get('loggedIn') || false)

  return (
    <AuthContext.Provider value={useMemo(() => ({ isLoggedIn }), [isLoggedIn])}>
      {children}
    </AuthContext.Provider>
  )
}

AuthContextProvider.propTypes = {
  children: PropTypes.node,
}

export const useAuthContext = () => useContext(AuthContext)
