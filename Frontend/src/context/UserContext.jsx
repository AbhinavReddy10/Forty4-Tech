import React, { createContext, useState, useEffect } from 'react'
import { fetchUsers } from '../api'

export const UserContext = createContext()

export function UserProvider({ children }) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    fetchUsers()
      .then(data => { if (mounted) setUsers(data) })
      .catch(err => console.error('fetch error', err))
      .finally(() => mounted && setLoading(false))
    return () => (mounted = false)
  }, [])

  const addUser = user => setUsers(prev => [{ ...user, id: Date.now() }, ...prev])

  return (
    <UserContext.Provider value={{ users, setUsers, addUser, loading }}>
      {children}
    </UserContext.Provider>
  )
}
