import React from 'react';

import "./TweetBox.css";
import {Avatar,Button} from "@mui/material";
function TweetBox() {
  return (
    <div className ="tweetBox">
      <form>
      <div className="tweetBox__input">
      <Avatar src="https://media.licdn.com/dms/image/D5603AQEEEXRK_bcMZQ/profile-displayphoto-shrink_100_100/0/1686389294759?e=1693440000&v=beta&t=Eh70t3_ftFH6w0d-fzXnW2u_Dmj3tFCd8-duS_JPGfs"></Avatar>
      <input placeholder="what's happening?" type="text"/>
      
      </div>
      <input
      className ="tweetBox__imageInput"
      placeholder="Optional: Enter image URL"
      type="text"
      />
      <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
