import React, { useEffect, useState } from 'react';
import api from '../api';
import { useParams, Link } from 'react-router-dom';

export default function UserDetails(){
  const { id } = useParams();
  const [user, setUser] = useState(null);
  useEffect(()=>{ api.get(`/users/${id}`).then(r=>setUser(r.data)).catch(()=>alert('Not found')); }, [id]);
  if(!user) return <p>Loading...</p>;
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.company}</p>
      <p>{user.address.city} - {user.address.zipcode}</p>
      <Link to={`/edit/${id}`}>Edit</Link>
    </div>
  );
}
