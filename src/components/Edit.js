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
        <div className="container">
        <form onSubmit={handleSubmit}>
            <br />
            <div className="form-floating mb-3">
            <input className="form-control" type="text" name="name" placeholder="Name" value={client.name} onChange={handleChange}/>
            </div>
            <br />
            <div className="form-floating mb-3">
            <input className="form-control" type="text" name="breed" placeholder="Breed" value={client.breed} onChange={handleChange}/>
            </div>
            <br />
            <div className="form-floating mb-3">
            <input className="form-control" type="number" name="age" placeholder="Age" value={client.age} onChange={handleChange}/>
            </div>
            <br />
            <div className="form-floating mb-3">
            <input className="form-control" type="text" name="picture" placeholder="Picture URL" value={client.picture} onChange={handleChange}/>
            </div>
            <br />
            <div className="form-floating mb-3">
            <input className="form-control" type="text" name="address" placeholder="Address" value={client.address} onChange={handleChange}/>
            </div>
            <br />
            <div className="form-floating mb-3">
            <input className="form-control" type="text" name="phone" placeholder="Phone Number" value={client.phone} onChange={handleChange}/>
            </div>
            <br />
            <div className="form-floating mb-3">
            <input className="form-control" type="text" name="appointment" placeholder="Appointment" value={client.appointment} onChange={handleChange}/>
            </div>
            <br />
            <input className="form-control btn-success" type="submit"/>
        </form>
    </div>
    )
}

export default Edit
