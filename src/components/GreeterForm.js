import React, { useState } from 'react'

import { AxiosInstance } from './util/AxiosInstance';

const GreeterForm = () => {

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const callGreeringApi = async (e) => {
    e.preventDefault();
    console.log('Invoking API...');

    try {
      const result = await AxiosInstance.post('/api/greet', { name });
      setName('');
      console.log(result.data.message);
      setMessage(result.data.message);

    } catch (error) {

      console.log(error)

    }

  }

  return (
    <div className="my-form">
      <h3>Greeting Service</h3>
      <form onSubmit={callGreeringApi} className="form-group">
        <input type="text" placeholder="Enter your name .." className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="mt-2">
          <button type="submit" className="btn btn-primary btn-block" disabled={!name}> Send </button>
        </div>
      </form>
      <div className="message" style={{ display: message ? 'block' : 'none', color: 'orange' }} >
        {message}
      </div>
    </div >
  )
}

export default GreeterForm
