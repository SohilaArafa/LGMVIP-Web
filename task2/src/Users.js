import React , {useState} from 'react'
const Users = () => {
  const [users, setUsers] = useState([])
  const load = async() => {
    let response = await fetch('https://reqres.in/api/users?page=1');
    let jsonRes = await response.json();
    const data = jsonRes.data;
    setUsers(data);
    console.log(users)
  }
  return (
    <div>
    <button className='getData' onClick={load}>
      Get Users
    </button>
    <div>
      {
        users?.map(  ({id , first_name, last_name ,email}) => {
          return(
          <li key={id}> {first_name} </li>
  
        )} )
      }
    </div>
    </div>
  )
}

export default Users
