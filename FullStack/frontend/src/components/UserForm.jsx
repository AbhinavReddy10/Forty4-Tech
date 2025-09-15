import React, { useState } from 'react';

export default function UserForm({ initial = {}, onSubmit }) {
  const [form, setForm] = useState({
    name: initial.name || '',
    email: initial.email || '',
    phone: initial.phone || '',
    company: initial.company || '',
    address: initial.address || { street: '', city: '', zipcode: '', geo: { lat: '', lng: '' } }
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name) e.name = 'Name required';
    if (!form.email || !/.+@.+\..+/.test(form.email)) e.email = 'Valid email required';
    if (!form.phone) e.phone = 'Phone required';
    if (!form.address.city) e.city = 'City required';
    if (!form.address.zipcode) e.zipcode = 'Zip required';
    if (!form.address.geo.lat || !form.address.geo.lng) e.geo = 'Geo lat/lng required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (path, value) => {
    const copy = JSON.parse(JSON.stringify(form));
    const keys = path.split('.');
    let cur = copy;
    for (let i = 0; i < keys.length - 1; i++) cur = cur[keys[i]];
    cur[keys[keys.length - 1]] = value;
    setForm(copy);
  };

  const submit = (e) => { e.preventDefault(); if (!validate()) return; onSubmit(form); };

  return (
    <form onSubmit={submit}>
      <div>
        <label>Name</label>
        <input value={form.name} onChange={e=>handleChange('name', e.target.value)} />
        {errors.name && <div>{errors.name}</div>}
      </div>
      <div>
        <label>Email</label>
        <input value={form.email} onChange={e=>handleChange('email', e.target.value)} />
        {errors.email && <div>{errors.email}</div>}
      </div>
      <div>
        <label>Phone</label>
        <input value={form.phone} onChange={e=>handleChange('phone', e.target.value)} />
        {errors.phone && <div>{errors.phone}</div>}
      </div>
      <div>
        <label>Company</label>
        <input value={form.company} onChange={e=>handleChange('company', e.target.value)} />
      </div>

      <h3>Address</h3>
      <div>
        <label>City</label>
        <input value={form.address.city} onChange={e=>handleChange('address.city', e.target.value)} />
        {errors.city && <div>{errors.city}</div>}
      </div>
      <div>
        <label>Zipcode</label>
        <input value={form.address.zipcode} onChange={e=>handleChange('address.zipcode', e.target.value)} />
        {errors.zipcode && <div>{errors.zipcode}</div>}
      </div>
      <div>
        <label>Latitude</label>
        <input value={form.address.geo.lat} onChange={e=>handleChange('address.geo.lat', e.target.value)} />
      </div>
      <div>
        <label>Longitude</label>
        <input value={form.address.geo.lng} onChange={e=>handleChange('address.geo.lng', e.target.value)} />
      </div>
      {errors.geo && <div>{errors.geo}</div>}

      <button type="submit">Save</button>
    </form>
  );
}
