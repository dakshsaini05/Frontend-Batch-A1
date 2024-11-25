import React from 'react'

function Footer({array}) {
  return (
    <div className="footerClass">
        {
            array.map((a) => {
                return <p>{a}</p>
            })
        }
    </div>
  )
}

export default Footer
