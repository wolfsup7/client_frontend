import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Add from './components/Add';
import Edit from './components/Edit';

import './App.css';

const App = () => {
  const [clients, setClients] = useState([])
  const [addClient, setAddClient] = useState(false)

  const getClients = () => {
    axios.get('https://k9nails.herokuapp.com/api/clients')
      .then((response) => setClients(response.data))
      .catch((error) => console.error(error))
  }

  const handleCreate = (addClient) => {
    axios.post('https://k9nails.herokuapp.com/api/clients', addClient)
      .then((response) => {
        console.log(response)
        let newClients = [...clients, response.addClient]
        setClients(newClients)
      })
      setAddClient(false)
  }

  const handleDelete = (event) => {
    axios
      .delete('https://k9nails.herokuapp.com/api/clients/' + event.target.value)
      .then((response) => {
        getClients()
      })
  }

  const handleUpdate = (editClient) => {
    console.log(editClient)
    axios
      .put('https://k9nails.herokuapp.com/api/clients/' + editClient.id, editClient)
      .then((response) => {
        getClients()
      })
  }
  
  
  const toggleAddClient = () => {
    setAddClient(prev => !prev)
  }

  useEffect(() => {
    getClients()
  }, [])



  return (
    <div className="container-fluid">
      <nav className="navbar navbar-light bg-dark" data-bs-theme="dark">
        <h1 className="text-success">K9-Nails</h1>
        <button className="btn btn-outline-success" onClick={toggleAddClient}>Add Client</button>
      </nav>
      <div>
        {
          addClient ? <Add handleCreate={handleCreate}/> : null
        }
      </div>
      <br/>
      <div className="d-flex justify-content-around flex-wrap">
        {clients.map((client) => {
          return (
            <div className="card bg-light border-info" key={client.id}>
              <h4>Name: {client.name}</h4>
              <h5>Breed: {client.breed}</h5>
              <h5>Age: {client.age}</h5>
              <img src={client.picture} alt="" height={200} width={200}/>
              <h5>Address: {client.address}</h5>
              <h5>Phone: {client.phone}</h5>
              <h5>Appointment: {client.appointment}</h5>
              <Edit handleUpdate={handleUpdate} id={client.id} />
              <button onClick={handleDelete} value={client.id}>
                Delete
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App

