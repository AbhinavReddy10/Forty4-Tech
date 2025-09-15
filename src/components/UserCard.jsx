import React from 'react'
import { Link } from 'react-router-dom'

export default function UserCard({ user }) {
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column">
        <h5>{user.name}</h5>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Phone:</b> {user.phone}</p>
        <p><b>Company:</b> {user.company?.name}</p>
        <div className="mt-auto d-flex justify-content-between">
          <Link to={`/user/${user.id}`} className="btn btn-primary btn-sm">View</Link>
          <small>ID: {user.id}</small>
        </div>
      </div>
    </div>
  )
}
