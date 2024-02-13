import { AppBar, Box, Toolbar, styled } from "@mui/material";
import LoginDialog from "./account/LoginDialog";
import ChatDialog from './chat/ChatDialog';
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";

const Header = styled(AppBar)`
  height: 125px;
  background-color: #00A884;
`;

const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
`;

const Component = styled(Box)`
  height: 100vh;
  background: #A9A9A9;
`;

const Messenger= () => {

  const {account} = useContext(AccountContext);

  return (
    <Component>
      {
        account ? 
        <>
          <Header>
            <Toolbar>

            </Toolbar>
          </Header>
        <ChatDialog />
        </>
        : 
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialog />
        </>
      }
    </Component>
  );
}

export default Messenger;
