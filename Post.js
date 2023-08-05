import React from 'react';
import "./Post.css";
import {Avatar} from "@mui/material";
import { VerifiedUserRounded } from '@mui/icons-material';
import { ChatBubbleOutline } from '@mui/icons-material';
import { Repeat } from '@mui/icons-material';
import { FavoriteBorder } from '@mui/icons-material';
import { Publish } from '@mui/icons-material';

function Post({

}
) {
  return (
    <div className="post">
      <div className="post__avatar">
      <Avatar src ="https://media.licdn.com/dms/image/D5603AQEEEXRK_bcMZQ/profile-displayphoto-shrink_100_100/0/1686389294759?e=1693440000&v=beta&t=Eh70t3_ftFH6w0d-fzXnW2u_Dmj3tFCd8-duS_JPGfs"></Avatar>
  </div>
  <div className="post__body"> 
  <div className ="post__header">
    <div className ="post__headerText">
        <h3>
         bhojaraj............
         <span className="post__headerSpecial">
            <VerifiedUserRounded className="post__badge" />@bhoj
         </span>
        </h3>
    </div>
    <div className="post__headerDescription">
        <p> I challenge ypu to build a Twitter clone with react js</p>
    </div>
  </div>
  <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0VvJv211JuAcOavmBz-dfIYTWVzU8rjYA-Q&usqp=CAU"></img>
  <div className="post__footer">
  <ChatBubbleOutline fontSize="small" />
  <Repeat fontSize="small" />
  <FavoriteBorder fontSize="small" />
  <Publish fontSize="small" />
  </div>
  </div>
  </div>
  );
}

export default Post
