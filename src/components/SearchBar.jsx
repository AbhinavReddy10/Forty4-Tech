import React from 'react'

export default function SearchBar({ value, onChange }) {
  return <input className="form-control" placeholder="Search by name" value={value} onChange={e => onChange(e.target.value)} />
}
