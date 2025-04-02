import React from 'react'

const Delete = () => {
    const handleDelete = async (e) =>{
        e.preventDefault()
        const id = e.target.id.value;
        await axios.delete('https://localhost:9000/users/${id}')
        alert('Product deleted successfuly')
    }
  return (
    <div>
        <form onSubmit={handleDelete}>
            <input type='text' placeholder='enter product id' name='id'/>
            <button type="submit">Delete</button>
        </form>

    </div>
  )
}

export default Delete