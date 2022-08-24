import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'

function Registar() {

  const [registred, setRegistred] = useState(false)





  return (
    <div className='register'>

      
      { registred ?  <Login/> : <SignUp/> }



      
    </div>
  )
}

export default Registar