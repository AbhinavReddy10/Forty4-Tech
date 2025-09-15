import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export default function UserDetails() {
  const { id } = useParams()
  const { users } = useContext(UserContext)
  const user = users.find(u => String(u.id) === String(id))

  if (!user) return <div><p>User not found.</p><Link to="/">Back</Link></div>

  const { address = {}, company = {} } = user

  return (
    <div>
      <Link to="/" className="btn btn-sm btn-outline-secondary mb-3">Back</Link>
      <div className="card"><div className="card-body">
        <h3>{user.name}</h3>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Phone:</b> {user.phone}</p>
        <p><b>Company:</b> {company.name}</p>
        <hr />
        <h5>Address</h5>
        <p>{address.suite} {address.street}</p>
        <p>{address.city} - {address.zipcode}</p>
        {address.geo && <p><b>Geo:</b> lat {address.geo.lat}, lng {address.geo.lng}</p>}
      </div></div>
    </div>
  )
}
