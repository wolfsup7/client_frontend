import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Add from './components/Add';
import Edit from './components/Edit';

import './App.css';

const App = () => {
  const [clients, setClients] = useState([])
  const [addClient, setAddClient] = useState(false)
  const [editClient, setEditClient] = useState(false)

  const getClients = () => {
    axios.get('https://k9nails.herokuapp.com/api/clients')
      .then((response) => setClients(response.data))
      .catch((error) => console.error(error))
  }

  const handleCreate = (data) => {
    axios.post('https://k9nails.herokuapp.com/api/clients', data)
      .then((response) => {
        console.log(response)
        let newClients = [...clients, response.data]
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
    axios.put('https://k9nails.herokuapp.com/api/clients/' + editClient.id, editClient)
      .then((response) => {
        console.log(response)
  
        let newClients = clients.map((client) => {
            return client.id !== editClient.id ? client : editClient
          })
          setClients(newClients)
        })
        setEditClient(false)
  }
  
  
  const toggleAddClient = () => {
    setAddClient(prev => !prev)
  }

  const toggleEditClient = () => {
    setEditClient(prev => !prev)
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
              <img src={client.picture} alt="" height={300} width={300}/>
              <h5>Address: {client.address}</h5>
              <h5>Phone: {client.phone}</h5>
              <h5>Appointment: {client.appointment}</h5>
              <button class="btn btn-warning" onClick={toggleEditClient}>Edit</button>
              <div>
                {
                  editClient ? <Edit client={client} handleUpdate={handleUpdate}/> : null
                }
              </div>
              <button className="btn btn-danger" onClick={handleDelete} value={client.id}>
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

