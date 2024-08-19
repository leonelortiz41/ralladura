import React from 'react'
import logo from '../assets/logo-arg.png'
export default function Header() {
  return (
    <div className='container d-flex justify-content-center bg-warning align-center'>
      <h2 className='col-7 m-auto text-center'>Notas de rallado</h2>
      <img className='col-3 m-auto' src={logo} alt="" />
    </div>
  )
}
