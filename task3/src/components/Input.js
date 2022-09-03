import React , {useState} from 'react'
import Enrolled from './Enrolled';

const Input = ( ) => {
    const [first, setfirst] = useState('');
    const [last, setlast] = useState('');
    const [email, setemail] = useState('');
    const [address, setaddress] = useState('');
    const [website, setwebsite] = useState('');
    const [image, setimage] = useState('');

    const [enrolled, setenrolled] = useState([])

const handleSubmit = () => {

    let current = {
        fn : first ,
        ln : last ,
        e : email ,
        a : address,
        w : website,
        i : image 
    }

    setenrolled([...enrolled,current]);
    setfirst('');setlast('');setemail('');
    setwebsite('');setimage('');setaddress('');

    console.log(enrolled);
}

  return (
      <>
    <div className='left'>
      <ul >
          <label> 
            First Name :
            <input className='input'
            value={first}
            onChange={(e) => setfirst(e.target.value)}
            />
         </label>
         <label>
             Last Name :
             <input className='input'
             value={last}
             onChange={(e) => setlast(e.target.value)}
             />
         </label>
         <label>
             Email :
             <input className='input' 
             value={email}
             onChange={(e) => setemail(e.target.value)}/>
         </label>
         <label>
             Address :
             <input className='input'
             value={address} 
             onChange={(e) => setaddress(e.target.value)}/>
         </label>
         <label>
             Website :
             <input className='input' 
             value={website}  
             onChange={(e) => setwebsite(e.target.value)}/>
         </label>
         <label>
             Image Link :
             <input  className='input'
             value={image} 
             onChange={(e) => setimage(e.target.value)} />
         </label>
      </ul>
      <button className='submit' onClick={handleSubmit}  >Submit</button>
    </div>
    <div className='right'>
       <h2 style={{marginTop : -57 , marginLeft : 150 } }>
        Enrolled Students
        </h2>
        <Enrolled enrolled={enrolled}  />
    </div>
    </>
  )
}

export default Input
