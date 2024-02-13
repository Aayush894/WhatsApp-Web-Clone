import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem, styled } from "@mui/material";
import { useState } from "react";

const MenuOption = styled(MenuItem)`
    font-size: 14px; 
    padding: 15px 60px 5px 24px; 
    color: #4A4A4A; 
`
function MoreVertMenu() {
    const [open, setOpen] = useState(null); 
    const openBool = Boolean(open);

    const handleClose = () => {
        setOpen(null) ; 
    }

    const handleClick = (e) => {
        setOpen(e.currentTarget); 
    }
  return (
    <>
      <MoreVert onClick={handleClick} />
      <Menu
        id="basic-menu"
        keepMounted={true}
        anchorEl={open}
        open={openBool}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom', 
            horizontal: 'center', 
        }}
        transformOrigin={{
            vertical: 'top', 
            horizontal: 'right',
        }}
      >
        <MenuOption onClick={handleClose}>New Group</MenuOption>
        <MenuOption onClick={handleClose}>New Community</MenuOption>
        <MenuOption onClick={handleClose}>Starred Messages</MenuOption>
        <MenuOption onClick={handleClose}>Select Chats</MenuOption>
        <MenuOption onClick={handleClose}>Settings</MenuOption>
        <MenuOption onClick={handleClose}>Logout</MenuOption>
      </Menu>
    </>
  );
}

export default MoreVertMenu;
