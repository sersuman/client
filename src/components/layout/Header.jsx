import React, { Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import {
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { textColor, themeColor } from "../../constants/color";

const SearchDialog = React.lazy(() => import("../specific/Search"));
const NewGroupDialog = React.lazy(() => import("../specific/NewGroup"));
const NotificationDialog = React.lazy(() =>
  import("../specific/Notifications")
);

const BackDrop = () => {
  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

const Header = () => {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };
  const openSearch = () => {
    setIsSearch((prev) => !prev);
  };
  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };
  const openNotification = () => {
    setIsNotification((prev) => !prev);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    // Perform logout logic here
    // For example, clear user session, redirect to login page, etc.
    navigate("/login");
  };

  const navigateToGroup = () => navigate("/groups");

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
        }}
        height={"4rem"}
      >
        <AppBar
          position="static"
          sx={{ bgcolor: themeColor, color: textColor }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block", color: "black" } }}
            >
              日本喋る
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconBtn
                icon={<MenuIcon />}
                onClick={handleMobile}
                tooltip={"Mobile Menu"}
              />
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconBtn
                icon={<SearchIcon />}
                onClick={openSearch}
                tooltip={"Search"}
              />
              <IconBtn
                icon={<AddIcon />}
                onClick={openNewGroup}
                tooltip={"New Group"}
              />
              <IconBtn
                icon={<GroupIcon />}
                onClick={navigateToGroup}
                tooltip={"Groups"}
              />
              <IconBtn
                icon={<NotificationsIcon />}
                onClick={openNotification}
                tooltip={"Notifications"}
              />
              <IconBtn
                icon={<LogoutIcon />}
                onClick={handleLogout}
                tooltip={"Logout"}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSearch && (
        <Suspense fallback={<BackDrop />}>
          <SearchDialog />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<BackDrop />}>
          <NewGroupDialog />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<BackDrop />}>
          <NotificationDialog />
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ icon, onClick, tooltip }) => {
  return (
    <Tooltip title={tooltip}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};
export default Header;
