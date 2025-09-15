import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function CreateUserForm() {
  const { addUser } = useContext(UserContext)
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '' })

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.name) return alert('Name required')
    addUser({ ...form, company: { name: form.company } })
    setForm({ name: '', email: '', phone: '', company: '' })
    setOpen(false)
  }

  return (
    <div>
      <button className="btn btn-success btn-sm" onClick={() => setOpen(true)}>Create</button>
      {open && <div className="card mt-2 p-2">
        <form onSubmit={handleSubmit}>
          {['name','email','phone','company'].map(f => (
            <input key={f} name={f} value={form[f]} onChange={handleChange} placeholder={f} className="form-control form-control-sm mb-1" />
          ))}
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary btn-sm">Add</button>
            <button type="button" className="btn btn-secondary btn-sm" onClick={() => setOpen(false)}>Cancel</button>
          </div>
        </form>
      </div>}
    </div>
  )
}
