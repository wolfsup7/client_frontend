import {useState} from 'react'

const Edit = (props) => {
    const [client, setClient] = useState({...props.client})


    const handleChange = (event) => {
        setClient({ ...client, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleUpdate(client)
    }


    return (
    <>
        <details>
        <summary>Edit Client</summary>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" onChange={handleChange} value={client.name}/>
            <br />
            <br />
            <label htmlFor="breed">Breed: </label>
            <input type="text" name="breed" onChange={handleChange} value={client.breed}/>
            <br />
            <br />
            <label htmlFor="age">Age: </label>
            <input type="number" name="age" onChange={handleChange} value={client.age}/>
            <br />
            <br />
            <label htmlFor="picture">Picture: </label>
            <input type="text" name="picture" onChange={handleChange} value={client.picture}/>
            <br />
            <br />
            <label htmlFor="address">Address: </label>
            <input type="text" name="address" onChange={handleChange} value={client.address}/>
            <br />
            <br />
            <label htmlFor="phone">Phone: </label>
            <input type="text" name="phone" onChange={handleChange} value={client.phone}/>
            <br />
            <br />
            <label htmlFor="appointment">Appointment: </label>
            <input type="text" name="appointment" onChange={handleChange} value={client.appointment}/>
            <br />
            <input type="submit"/>
        </form>
        </details>
    </>
    )
}

export default Edit
