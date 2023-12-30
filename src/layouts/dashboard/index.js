import React from "react";
import { useTheme } from "@emotion/react";
import { Box, IconButton, Stack, Divider, Avatar, Switch } from "@mui/material";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data"
import { Gear } from "phosphor-react";
import { useState } from "react";
import { faker } from "@faker-js/faker";
import styled from "@emotion/styled";
import useSettings from "../../hooks/useSettings"
import { Outlet } from "react-router-dom";


const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 16,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

const DashboardLayout = () => {
  const [selected, setSelected] = useState(0)
  const { onToggleMode } = useSettings();
  const theme = useTheme();
  return (
    <>
    <div style={{display:"flex"}}>
    <Box
        p={2}
        sx={{ backgroundColor: theme.palette.background.paper, height: "100vh", width: 100, boxShadow: "0px 1px 0px 1px rgba(0, 0, 0, 0.25)" }}>

        <Stack direction="column" alignItems="center" justifyContent="space-between" sx={{ width: "100%", height: "100%" }} spacing={3}>

          <Stack alignItems="center" spacing={3}>

            <Box sx={{ backgroundColor: theme.palette.primary.main, height: 64, width: 64, borderRadius: 1.5 }}>
              <img src={Logo} alt="logoIcon" />

            </Box>
            <Stack spacing={3}
              sx={{ width: "max-content" }}
              direction="column"
              alignItems="center"
              >

              {Nav_Buttons.map((elem) => (
                elem.index === selected ?
                <Box sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                    <IconButton
                      sx={{ width: "max-content", color: "white" }} key={elem.index}>
                      {elem.icon}
                    </IconButton>
                  </Box>

                  : <IconButton
                  onClick={() => { setSelected(elem.index) }}
                  sx={{ width: "max-content", color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }} key={elem.index}>
                  {elem.icon}
                  </IconButton>
                  ))}
              <Divider sx={{ width: "48px" }} />
              {selected === 3 ?
                <Box sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                  <IconButton sx={{ width: "max-content", color: "#fff" }}>
                    <Gear />
                  </IconButton>
                </Box>
                : <IconButton onClick={() => { setSelected(3) }}
                sx={{ width: "max-content", color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }}
                >
                  <Gear />
                </IconButton>

              }
            </Stack>
          </Stack>
          <Stack spacing={4}>
            <AntSwitch
              onChange={() => {
                onToggleMode();
              }}
              defaultChecked />
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box >
      <Outlet/>
    </div>
    </>
  );
};

export default DashboardLayout;
