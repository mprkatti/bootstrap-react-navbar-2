import React from 'react'

const Main = (props) => {
  return (
    <div className="main d-flex justify-content-center" >
      {props.children}
    </div>
  )
}

export default Main
