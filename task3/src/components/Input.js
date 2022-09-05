import React , {useState} from 'react'
import {v4 as uuidv4} from "uuid"

const Input = ( ) => {
    const [first, setfirst] = useState('');
    const [last, setlast] = useState('');
    const [email, setemail] = useState('');
    const [website, setwebsite] = useState('');
    const [image, setimage] = useState('');
    const [gender, setgender] = useState('');
    const [skills, setskills] = useState([]);
    const [checkedJ, setcheckedJ] = useState(false);
    const [checkedH, setcheckedH] = useState(false)
    const [checkedC, setcheckedC] = useState(false)

    const [enrolled, setenrolled] = useState([]);


const handleSubmit = () => {
    if(!first || !last || !email || !website || !image || !gender) {
        alert("Please make sure you entered all data");
    }
    else {
 
    let current = {
        fn : first ,
        ln : last ,
        e : email ,
        w : website,
        i : image ,
        g : gender ,
        s : skills,
        id : uuidv4() 
    }

    setenrolled([...enrolled,current]);
    setfirst('');setlast('');setemail('');
    setwebsite('');setimage('');
    setskills([]); setgender(''); 
    setcheckedJ(false); setcheckedH(false) ; setcheckedC(false);

    console.log(enrolled);
}
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
         <label style={{marginTop : 10}}>
             Gender :
             <input style={{marginLeft : 10}}
             type="radio"
             value="male" 
             id="male"
             checked={gender === 'male'}
             onChange={(e) =>setgender(e.target.value)} />
             <label> Male </label>
            <input 
             type="radio"
             value="female" id="female"
            checked={gender === 'female'}
             onChange={(e) => setgender(e.target.value)} />
             <label> Female </label>
         </label>
         <label style={{marginTop : 20}}>
             Skills :

             <input style={{marginLeft : 10}}
             type='checkbox'
             value='JavaScript' 
             checked={checkedJ}
             onClick={() => setcheckedJ(!checkedJ)}
             onChange={(e) =>  setskills([...skills,e.target.value])  } />
             <label>JavaScript</label>

            <input style={{marginLeft : 10}}
            type='checkbox'
             value='HTML'
             checked={checkedH}
             onClick={() => setcheckedH(!checkedH)}
             onChange={(e) => setskills([...skills,e.target.value])} />
             <label> HTML </label>

            <input style={{marginLeft : 10}}
            type='checkbox'
             value='CSS'
             checked={checkedC}
             onClick={() => setcheckedC(!checkedC)}
             onChange={(e) => setskills([...skills,e.target.value])} />
             <label> CSS </label>

         </label>

      </ul>
      <button className='submit' onClick={handleSubmit}  >Submit</button>
    </div>
    <div className='right'>
       <h2 style={{marginTop : -57 , marginLeft : 95 } }>
        Enrolled Students
        </h2>
             {
            enrolled.map( s  => {
                return (
                <ul className='Card' key={s.id} >
                 <div className='container2'>
                    <h2 >{s.fn} {s.ln} </h2>
                    <hr/>
                 </div>
                 <div className='test'>
                    <li> {s.g} </li>
                    <li > {s.e} </li>
                    <li><a href={s.w}> {s.w} </a></li>
                    { s.s && s.s.map( skill => {
                        return (  <li> {skill} </li>)
                    } ) }
                 </div>
                 <div className='test2'>
                    <img className='Img' src={s.i} /> 
                 </div>
 
                </ul>
                )
            })
        }
        </div>


    </>
  )
}

export default Input
