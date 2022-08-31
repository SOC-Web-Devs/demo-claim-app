import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
// import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '98vh'}}>
      <CDBSidebar textColor="#fff" backgroundColor="#1D2024">
        <CDBSidebarHeader className="mx-auto">
            <span> Demo Page </span>
        </CDBSidebarHeader>

        <CDBSidebarContent className="mx-auto mt-5">
          <CDBSidebarMenu>
              <CDBSidebarMenuItem icon="columns" style={{fontSize: "25px"}}></CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="book" style={{fontSize: "25px"}}></CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="bars" style={{fontSize: "25px"}}></CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="clock" style={{fontSize: "25px"}}></CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="calendar" style={{fontSize: "25px"}}></CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="book" style={{fontSize: "25px"}}></CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="columns" style={{fontSize: "25px"}}></CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="bars" style={{fontSize: "25px"}}></CDBSidebarMenuItem>              
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '20px 5px 100px 5px',
            }}
          >
            <i class="fa-solid fa-message" style={{fontSize: "25px"}}></i>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
     </div>
  );
};

export default Sidebar;