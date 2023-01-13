import React from 'react'
import './LinkCard.css'
import ImgTwitter from './../img/img-twitter.jpg'
import ImgFacebook from './../img/img-facebook.jpg'
import ImgLinkdin from './../img/img-linkdin.jpg'
const ImgMap = {
  "twitter": ImgTwitter,
  "facebook": ImgFacebook,
  "linkdin": ImgLinkdin
}



function LinkCard(props) {
  return ( 
    <div className={`Link-Card bg-${props.title}`}>
      <a href={props.link} className="hyperlink">
      <div className="container-link-handle">
        <div>
        <img src={ImgMap[props.title]} className="Card-img"/> 
        </div> 
        <div className="handle-name">
        <h3 className="usernsme">{props.username}</h3>
        </div>
      </div>
      <div className="handle-description">
        <p>{props.tagline}</p>
      </div>
      </a>
      
       
      
    </div>
  )
}

export default LinkCard
