import React from 'react'
import { useRouteError } from 'react-router'

const Error = () => {
    const err = useRouteError();
  return (
    <div style={{textAlign:"center",marginTop:"200px"}}>
        <h1>Oops !!!</h1>
        <h2>{err.status}: {err.statusText}</h2>
    </div>
  )
}

export default Error