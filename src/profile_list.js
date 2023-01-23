import React from "react" 

const ProfileList = (item) => {

    return ( <div>
        <img src={item.images} alt=" "/>
        <p>{item.name}</p>
        <p>{item.email}</p>
        <p>{item.gender}</p>

    </div> );
}
 
export default ProfileList;