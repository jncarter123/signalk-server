import React from 'react'

function AddonPanel(props) {
  return (
    <ul>
      {props.webapps.map(webapp => <li>{webapp.name}({webapp.version})</li>)}
    </ul>
  )


}

export default AddonPanel
