import React from 'react'

function Login({users,login}) {
  return (
    <div>

<div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Login</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <form onSubmit={login} >
    <input  name= "user" type="text" placeholder="Enter your name" className="input input-bordered w-full max-w-xs" />
    <input name="password" type="text" placeholder="password" className="input input-bordered w-full max-w-xs" />
 
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Sumbit</button>
      
    </div>
    </form>
  </div>
</div>




  
    </div>
  )
}

export default Login