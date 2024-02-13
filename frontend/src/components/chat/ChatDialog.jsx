import { Box, Dialog, styled} from "@mui/material"

// component imports 
import Menu from "./menu/Menu";
import EmptyChat from "./chat/EmptyChat";

const dialogStyle = {
    height: "95%",
    width: "100%",
    margin: '20px', 
    maxWidth: "100%",
    borderRadius: 0,
    maxHeight: "100%",
    boxShadow: "none",
    overflow: "hidden",
    backgroundColor: 'white'
};

const Component = styled(Box)`
    display: flex; 
`
const LeftComponent = styled(Box)`
    min-width: 30%;
`
const RightComponent = styled(Box)`
    width: 70%; 
    min-width: 250px;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.14); 

`
const ChatDialog = () => {
  return (
    <Dialog
        open = {true}
        PaperProps={{ style: dialogStyle}}
        hideBackdrop = {true}
        maxWidth={'md'}
    >
        <Component>
            <LeftComponent>
                <Menu />
            </LeftComponent>
            <RightComponent>
                <EmptyChat />
            </RightComponent>
        </Component>
       
    </Dialog>
  )
}

export default ChatDialog