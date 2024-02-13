import { InputBase, Box, styled } from "@mui/material"
import {Search as SearchIcon } from '@mui/icons-material'

const Component = styled(Box)`
    background: #fff; 
    height: 45px;
    border-bottom: 1px solid #F2F2F2; 
    display: flex;
    align-items: center;
`
const Wrapper = styled(Box)`
    background: #f0f2f5;
    position: relative; 
    margin: 0 13px; 
    border-radius: 10px; 
    width: 100%;
`

const Icon = styled(Box)`
    position: absolute;
    height: 100%; 
    padding: 6px 8px; 
    color: #919191; 
`

const InputField = styled(InputBase)`
    width: 100%;
    padding: 16px;
    padding-left: 65px;
    height: 15px;
    font-size: 14px; 
`


function Search() {
  return (
    <Component>
        <Wrapper>
            <Icon>
                <SearchIcon 
                    fontSize='small'
                />
            </Icon>
            <Box>
                <InputField 
                placeholder="Search or start new chat"
                />
            </Box>
        </Wrapper>
    </Component>
  )
}

export default Search