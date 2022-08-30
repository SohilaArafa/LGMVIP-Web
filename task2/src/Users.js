import React , {useState} from 'react'
const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
    
  const load = async() => {
    setLoading(true);
    let response = await fetch('https://reqres.in/api/users');
    let jsonRes = await response.json();
    const data = jsonRes.data;
    setUsers(data);
    if(data)
      setLoading(false);
    console.log(users)
  }

  const LoadingSpinner = () => {
    <div className="spinner-container">
      <div className="loading-spinner">
      </div>
    </div>
  }

  return (
    <>
    <button className='getData' onClick={load}>
      Get Users
    </button>
    <div className='big'>
      {loading? <LoadingSpinner/> : ""}
      {
        users?.map(  ({id , first_name, last_name ,email , avatar}) => {
          return(
          <ul className='card' key={id}> 
          <img src={avatar} alt="Avatar"  />
          <div class="container">
            <h4><b> {first_name } {last_name} </b></h4> 
            <p> 📧 {email}</p> 
           </div>
          </ul>
  
        )} )
      }
    </div>
    </>
  )
}

export default Users
