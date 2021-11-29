import React from "react"

function IdCard(props) {

    return (
        <div>
      <p>First name: {props.firstName}</p>
      <p>Last name: {props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Heigt: {props.height}</p>
      <p>Birth: {props.birth.toDateString()}</p>
      <img src={props.picture} alt={props.firstName}/>
    </div>
    )
}

export default IdCard