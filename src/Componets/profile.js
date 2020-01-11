import React from 'react';
import img from './gomycode.png';




const profile =() =>
{
    const profile =
    {
        photo: img,
        name:{firstName:"Marwa", 
        lastName:"Dahmani"},
        profileLink:"/https://www.facebook.com/?stype=lo&jlou=Afd8_vBqVX6q9XFWlvUIQRbWIyualOztaNBZ7PF8KAPlANzNsmC5xJoRtQThso6DVux71U1tto92bQuKpAo0p1x-G4MENkLFhoh3quRSdyXMsA&smuh=18336&lh=Ac_Xf9yWKmLWSfBX"


    }
  return (
  <div>  
<p>{profile.name.firstName}</p>
<p>{profile.name.lastName}</p>
<img src={profile.photo} alt="4"/>
<button style={{width:"250px",height:"200px",backgroundColor:"red"}} onClick={()=>{window.location.replace(profile.profileLink)}}>
    LinkButton</button>
   
  </div>

  );
  



  }


export default profile;