import React, { useContext, useMemo, useState } from 'react'
import { UserContext } from '../context/UserContext'
import UserCard from '../components/UserCard'
import CreateUserForm from '../components/CreateUserForm'
import SearchBar from '../components/SearchBar'

export default function Dashboard() {
  const { users, loading } = useContext(UserContext)
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return q ? users.filter(u => u.name.toLowerCase().includes(q)) : users
  }, [users, query])

  return (
    <div>
      <div className="row mb-3">
        <div className="col-md-6"><SearchBar value={query} onChange={setQuery} /></div>
        <div className="col-md-6 d-flex justify-content-md-end mt-2 mt-md-0"><CreateUserForm /></div>
      </div>
      {loading ? <div>Loading...</div> : (
        <div className="row g-3">
          {filtered.map(user => <div className="col-12 col-sm-6 col-lg-4" key={user.id}><UserCard user={user} /></div>)}
        </div>
      )}
      {!loading && filtered.length === 0 && <p>No users found.</p>}
    </div>
  )
}
