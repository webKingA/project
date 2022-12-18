import {
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Menu,
} from "@mui/material";
import Logo from "../public/images/logo.png";
import React, { useCallback, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Image from "next/image";
import { menuItemAdminPanel } from "../utils/data";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
interface Props {
  children: React.ReactNode;
}
const LayoutAdmin = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const onClose = useCallback(() => {
    setOpen(!open);
  }, [open]);
  const [anchorEl, setAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = (route: any) => {
    router.push(route);
    setOpen(!open);
  };
  return (
    <div className="w-[90%] mx-auto min-h-screen h-full pt-16">
      <div className="flex justify-between">
        <button
          onClick={() => setOpen(!open)}
          className="bg-[#3498db] w-9 rounded-lg text-white flex justify-center items-center h-9"
        >
          <HiOutlineMenuAlt3 size={26} />
        </button>
        <React.Fragment>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={
                open ? "account-menu" : undefined
              }
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 42, height: 42 }}>
                M
              </Avatar>
            </IconButton>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={openMenu}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter:
                  "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",

                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  left: 10,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform:
                    "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
          >
            <div className="px-10 py-1 cursor-pointer font-yekan-bold text-xs">
              <p>خروج</p>
            </div>
          </Menu>
        </React.Fragment>
        <Drawer
          anchor="right"
          open={open}
          onClose={onClose}
        >
          <div className="min-w-[300px]">
            <div className="flex justify-center mt-10 pb-8">
              <Image alt="" src={Logo} />
            </div>
            <Divider />
            {menuItemAdminPanel.map((menuItem) => (
              <div
                onClick={() => navigate(menuItem.route)}
                className={` border-b font-yekan-bold cursor-pointer text-[14px] ${
                  router.pathname === menuItem.route
                    ? " bg-gray-100"
                    : ""
                }`}
                key={menuItem.id}
              >
                <div className="flex gap-4 items-end mx-10 py-4">
                  <p>{menuItem.name}</p>
                  <IoIosArrowBack size={20} />
                </div>
              </div>
            ))}
          </div>
        </Drawer>
      </div>
      <div className="mt-14">{children}</div>
    </div>
  );
};

export default LayoutAdmin;
