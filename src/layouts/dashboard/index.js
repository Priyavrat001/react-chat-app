import React from "react";
import { useTheme } from "@emotion/react";
import { Outlet } from "react-router-dom";
import { Box, IconButton, Stack, Divider } from "@mui/material";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data"
import { Gear } from "phosphor-react";
import { useState } from "react";

const DashboardLayout = () => {
  const [selected, setSelected] = useState(0)
  const theme = useTheme();
  return (
    <>
      <Box
        p={2}
        sx={{ backgroundColor: theme.palette.background.paper, height: "100vh", width: 100, boxShadow: "0px 1px 0px 1px rgba(0, 0, 0, 0.25)" }}>

        <Stack direction="column" alignItems="center" sx={{ width: "100%" }} spacing={3}>


          <Box sx={{ backgroundColor: theme.palette.primary.main, height: 64, width: 64, borderRadius: 1.5 }}>
            <img src={Logo} alt="logoIcon" />

          </Box>
          <Stack spacing={3}
            sx={{ width: "max-content" }}
            direction="column"
            alignItems="center"
          >

            {Nav_Buttons.map((elem) => {
              return <Box>
                <IconButton key={elem.index}>
                  {elem.icon}
                </IconButton>
              </Box>
            })}
            <Divider />
            <IconButton>
              <Gear />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
