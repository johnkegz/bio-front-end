import React from 'react'
import ReactDOM from 'react-dom'

function reactPortal() {
    return ReactDOM.createPortal(
        <h1>
          Portals Component  
        </h1>,
        document.getElementById('portal-root')
    )
}

export default reactPortal
