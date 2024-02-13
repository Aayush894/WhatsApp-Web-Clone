import { useContext } from "react"

import { AccountContext } from "../../../context/AccountProvider"; 
import { Box, styled } from "@mui/material";
import { Chat as MessageIcon } from '@mui/icons-material'; 
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';

// components 
import MoreVertMenu from "./MoreVertMenu";

const Component = styled(Box)`
  height: 44px; 
  background: #ededed;
  padding: 8px 16px;
  display: flex; 
  align-items: center; 

`
const Wrapper = styled(Box)`
  margin-left: auto;
  & > * {
    margin-left: 2px;
    padding: 8px; 
    color: #000; 
  }; 
  & :first-of-type {
    font-size: 22px; 
    margin-right: 8px; 
    margin-top: 3px;
  }
`
const Image = styled('img')({
  height: 40,
  width: 40,
  borderRadius: '50%', 

})
function Header() {

  const { account } = useContext(AccountContext) ;

  return (
    <Component>
      <Image src={account.picture} alt="dp" />
      <Wrapper>
        <PeopleOutlinedIcon 
          fontSize='small'
        />
       
        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="none"><title>newsletter-unread-outline</title><path d="M19 7.5C19.8 7.5 20.56 7.18 21.12 6.62C21.68 6.06 22 5.29 22 4.5C22 3.71 21.68 2.94 21.12 2.38C20.56 1.82 19.79 1.5 19 1.5C18.21 1.5 17.44 1.82 16.88 2.38C16.32 2.94 16 3.71 16 4.5C16 5.29 16.32 6.06 16.88 6.62C17.44 7.18 18.21 7.5 19 7.5Z" fill="#009588"></path><path fillRule="evenodd" clipRule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 12.5523 3.55228 13 3 13C2.44772 13 2 12.5523 2 12C2 6.47715 6.47715 2 12 2C12.3748 2 12.7451 2.02066 13.1099 2.06098C13.6588 2.12167 14.0546 2.61586 13.9939 3.1648C13.9333 3.71374 13.4391 4.10956 12.8901 4.04887C12.5982 4.0166 12.3012 4 12 4ZM20.8352 10.0061C21.3841 9.94537 21.8783 10.3412 21.939 10.8901C21.9793 11.2549 22 11.6252 22 12C22 17.5228 17.5228 22 12 22C11.4477 22 11 21.5523 11 21C11 20.4477 11.4477 20 12 20C16.4183 20 20 16.4183 20 12C20 11.6988 19.9834 11.4018 19.9511 11.1099C19.8904 10.5609 20.2863 10.0667 20.8352 10.0061Z" fill="currentColor"></path><path d="M12 2C6.48 2 2 6.48 2 12C2 13.7 2.43 15.3 3.18 16.7C2.63 18.54 2 20.69 2 21C2 21.55 2.45 22 3 22C3.31 22 5.46 21.37 7.3 20.82C8.7 21.57 10.3 22 12 22C17.52 22 22 17.52 22 12H20C20 16.4154 16.4154 20 12 20C10.6412 20 9.36447 19.6571 8.24444 19.057L7.51743 18.6676L6.72722 18.9038C5.95126 19.1357 5.12931 19.3791 4.41748 19.5825C4.62086 18.8707 4.86428 18.0487 5.09622 17.2728L5.33243 16.4826L4.94296 15.7556C4.34295 14.6355 4 13.3588 4 12C4 7.58457 7.58457 4 12 4V2Z" fill="currentColor"></path><path d="M15.8301 8.63404C16.3081 8.35745 16.9198 8.52076 17.1964 8.9988C17.7077 9.88244 18 10.9086 18 12C18 13.0914 17.7077 14.1176 17.1964 15.0012C16.9198 15.4792 16.3081 15.6425 15.8301 15.366C15.352 15.0894 15.1887 14.4776 15.4653 13.9996C15.8052 13.4122 16 12.7304 16 12C16 11.2696 15.8052 10.5878 15.4653 10.0004C15.1887 9.52237 15.352 8.91063 15.8301 8.63404Z" fill="currentColor"></path><path d="M8.16995 8.63404C8.64798 8.91063 8.81129 9.52237 8.5347 10.0004C8.19484 10.5878 8 11.2696 8 12C8 12.7304 8.19484 13.4122 8.5347 13.9996C8.81129 14.4776 8.64798 15.0894 8.16995 15.366C7.69191 15.6425 7.08017 15.4792 6.80358 15.0012C6.29231 14.1176 6 13.0914 6 12C6 10.9086 6.29231 9.88244 6.80358 8.9988C7.08017 8.52076 7.69191 8.35745 8.16995 8.63404Z" fill="currentColor"></path><path d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z" fill="currentColor"></path></svg>

        <MessageIcon />
        <MoreVertMenu />
      </Wrapper>
    </Component>
  )
}

export default Header