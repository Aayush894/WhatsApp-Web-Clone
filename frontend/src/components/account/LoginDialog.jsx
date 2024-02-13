import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import { GoogleLogin } from "@react-oauth/google";
import {jwtDecode} from 'jwt-decode';
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const Component = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const QRcode = styled("img")({
  height: 275,
  width: 275,
  margin: "50px 0 0 50px",
});

const Title = styled(Typography)`
  font-size: 30px;
  color: #41525d;
  font-weight: 300;
  font-family: "Segoe UI";
  margin-bottom: 30px;
`;

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 25px;
    color: #4a4a4a;
  }
`;

const dialogStyle = {
  height: "95%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
  backgroundColor: 'none'
};

const LoginDialog = () => {

  const { setAccount } = useContext(AccountContext); 

  const onLoginSuccess = (res) => {
    const decoded =  jwtDecode(String(res.credential));
    console.log(decoded) ; 
    setAccount(decoded) ;
  };

  const onLoginError = (error) => {
    console.log("Login Failed", error);
  };

  return (
    <Dialog 
    open={true}
    PaperProps={{ sx: dialogStyle }}
    hideBackdrop={true}
    >
      <Component>
        <Container>
          <Title>To use WhatsApp on your Computer:</Title>
          <StyledList>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>
              2. Tap &nbsp;<b>Menu</b>&nbsp; on Android, or &nbsp;
              <b>Settings</b>&nbsp;on iPhone
            </ListItem>
            <ListItem>
              3. Tap&nbsp;<b>Linked devices</b>&nbsp;and then&nbsp;
              <b>Link a device</b>&nbsp;
            </ListItem>
            <ListItem>
              4. Point your phone at this screen to capture the QR code
            </ListItem>
          </StyledList>
        </Container>
        <Box style={{ position: "relative" }}>
          <QRcode src={qrCodeImage} alt="bar-code" />
          <Box
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateX(55%)",
            }}
          >
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
}

export default LoginDialog;
