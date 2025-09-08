import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Admin from "../admin/Admin";
import { useTheme } from "@emotion/react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, Toolbar, useMediaQuery } from "@mui/material";
import { ArchiveBoxIcon, EnvelopeOpenIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon, EnvelopeIcon, InboxIcon, MegaphoneIcon, PlusCircleIcon, UserIcon, UsersIcon } from "@heroicons/react/20/solid";

const AdminRouters = () => {
  

  return (
    <>
      <Routes>
        <Route path="/*" element={<Admin />}></Route>
      </Routes>
    </>
  );
};

export default AdminRouters;
