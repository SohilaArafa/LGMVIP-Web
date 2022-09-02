import React from 'react'

const Enrolled = ( {enrolled} ) => {
  return (
    <div>
        <div>
            {
                enrolled?.map( (s,i) => {
                    return (
            <div className='card' key={i}>  
          <div class="container">
            <h4><b> {s.first } {s.last} </b></h4> 
            <p> 📧 {s.email}</p> 
           </div>
          </div>
                    )

                }  )
            }
        </div>
      
    </div>
  )
}

export default Enrolled
