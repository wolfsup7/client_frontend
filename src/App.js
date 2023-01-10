import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  let [clients, setClients] = useState([])

  const getClients = () => {
    axios
      .get('http://localhost:8000/clients_api/clients/')
      .then(
        (response) => setClients(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    getClients()
  }, [])



  return (
    <>
      <div className="clients">
        {clients.map((client) => {
          return (
            <div className="client" key={client.id}>
              <h4>Name: {client.name}</h4>
              <h5>Age: {client.age}</h5>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App

