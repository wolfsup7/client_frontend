import React, { useState } from 'react'


const Add = (props) => {
    let emptyClient = {name: '', breed: '', age:'', picture:'', address:'', phone:'', appointment:''}
    const [client, setClient] = useState(emptyClient)

    const handleChange = (event) => {
        setClient({ ...client, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(client)
    }

    return (
    <>
        <form onSubmit={handleSubmit}>
            <br />
            <div className="form-floating mb-3">
            <input className="form-control" type="text" name="name" placeholder="Name" onChange={handleChange}/>
            </div>
            <br />
            <div className="form-floating mb-3">
            <input className="form-control" type="text" name="breed" placeholder="Breed" onChange={handleChange}/>
            </div>
            <br />
            <div className="form-floating mb-3">
            <input className="form-control" type="number" name="age" placeholder="Age" onChange={handleChange}/>
            </div>
            <br />
            <div className="form-floating mb-3">
            <input className="form-control" type="text" name="picture" placeholder="Picture URL" onChange={handleChange}/>
            </div>
            <br />
            <div className="form-floating mb-3">
            <input className="form-control" type="text" name="address" placeholder="Address" onChange={handleChange}/>
            </div>
            <br />
            <div className="form-floating mb-3">
            <input className="form-control" type="text" name="phone" placeholder="Phone Number" onChange={handleChange}/>
            </div>
            <br />
            <div className="form-floating mb-3">
            <input className="form-control" type="text" name="appointment" placeholder="Appointment" onChange={handleChange}/>
            </div>
            <br />
            <input className="form-control btn-success" type="submit"/>
        </form>
    </>
    )
}

export default Add
