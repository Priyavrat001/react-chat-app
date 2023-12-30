import { Box, Typography, IconButton, styled, alpha, InputBase, Button, Divider } from '@mui/material'
import React from 'react'
import { Stack } from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react';


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.paper, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

const Chat = () => {
  return (
    <>
      <Box sx={{ position: "relative", height: "100vh", width: 320, backgroundColor: "#F8FAFF", boxShadow: "0px 1px 0px 1px rgba(0, 0, 0, 0.25)" }}>
        <Stack
        p={3}
        spacing={2}
        >

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between">
          <Typography variant='h5'>
            Chats
          </Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
          
        <Stack 
        sx={{width:"100%"}}
        >
          <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color='#709CE6'/>
                </SearchIconWrapper>
                <StyledInputBase placeholder='search...'/>
          </Search>

          </Stack>
          <Stack
          spacing={1}
          >
            <Stack direction="row" alignItems="center" spacing={1.5}>

            <ArchiveBox size={24}/>
            <Button>Archive</Button>
            </Stack>
            <Divider/>
          </Stack>
        </Stack>

      </Box>
    </>
  )
}

export default Chat