import {  useEffect, useState } from "react"
import axios from "axios"
import ProfileList from "./profile_list";

const Profile = () => {
    const [profile,setProfile]=useState([]);

    useEffect(() =>{
        axios
        .get ("https://randomuser.me/api/?nat=in&results=5&page=2")
        .then((value) =>{
            setProfile(value.data.results);
        })
        .catch((err)=>{
            alert(err.message);
        });
    },[]);
    

    // JSON.stringify(profile)
    return ( 
        <div>
            {
                profile.map((element,index)=>{
                    const person_name=element.name.title + " " + element.name.first + " " + element.name.last
                    const photo=element.picture.large

                    return (
                        <div className="profile_style" key={index}>
                            <ProfileList  images={photo} name={person_name} email={element.email} gender={element.gender}/>

                        </div>
                    )

                })
            }
        </div>
     );
}

 
export default Profile;