import React from 'react'

function User(props) {

    const removeUserHandler = (uuid)  => {
        props.remove(uuid)
    }
  return (
    <div className='card mb-3'>
        <div className='row'>
            <div className='col-2'>
                <img src={props.data.image} 
                alt='...' 
                width="50px" height="50px"/>
            </div>
            <div className='col-5 mt-2'>
                <strong>Phone : {props.data.phone}</strong> <br />
                <strong>Cell : {props.data.cell}</strong>
            </div>
            <div className='col-3 mt-3'>
                <h6>{props.data.name}</h6>
            </div>
            <div className='col-1'>
                <button className='btn btn-danger btn-sm mt-3'
                    onClick={() => removeUserHandler(props.data.uuid)}
                >
                    <i className='fa fa-trash'></i>
                </button>
            </div>
        </div>
    </div>
  )
}

export default User
