import React from 'react'

export default function Aleart(props) {
  return (
           props.aleart &&<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{props.aleart.msg}</strong> 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
  )
}