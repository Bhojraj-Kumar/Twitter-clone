import React from 'react';
import "./Sidebar.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div classname="sidebar">
      {/*twitter icon*/ }
      <TwitterIcon className="sidebar__twitterIcon"/>
      <SidebarOption active Icon ={HomeIcon} text ="Home"/>
      <SidebarOption Icon ={TagIcon} text ="Explore"/>
      <SidebarOption Icon ={NotificationsIcon} text ="Notifications"/>
      <SidebarOption Icon ={EmailIcon} text ="Messages"/>
      <SidebarOption Icon ={BookmarkIcon} text ="Bookmarks"/>
      <SidebarOption Icon ={ListAltIcon} text ="Lists"/>
      <SidebarOption Icon ={PersonIcon} text ="Profile"/>
      <SidebarOption Icon ={MoreHorizIcon} text ="More"/>
      
      <Button variant="outlined" className ="sidebar__tweet" fullWidth>Tweet</Button>

    </div>
  );
}

export default Sidebar;
