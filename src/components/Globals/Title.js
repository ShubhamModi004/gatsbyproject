import React from 'react'

export default function Title({title}) {
    return (
        <div className="text-center mt-3 py-3">
            <h1 className="display-4 text-capitalize font-weight-bold">{title}</h1>
        </div>
    )
}
