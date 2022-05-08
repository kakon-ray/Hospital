//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Dashboard.css";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import img from "../../assets/img/user.png";
import Profile from "../Profile/Profile";
import { Link } from "react-router-dom";

const Dashboard = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);
  const [user] = useAuthState(auth);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  console.log(user);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div id="header">
              {/* collapsed props to change menu size using menucollapse state */}
              <ProSidebar collapsed={menuCollapse}>
                <SidebarHeader>
                  <div className="logotext d-flex justify-content-center">
                    {/* small and big change using menucollapse state */}
                    {user ? (
                      <img
                        src={user.photoURL}
                        alt=""
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50px",
                        }}
                      ></img>
                    ) : (
                      <img
                        src={img}
                        alt=""
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50px",
                        }}
                      ></img>
                    )}
                  </div>
                  <h5 className="text-center">{user.displayName}</h5>
                  <div className="closemenu" onClick={menuIconClick}>
                    {/* changing menu collapse icon on click */}
                    {menuCollapse ? (
                      <FiArrowRightCircle />
                    ) : (
                      <FiArrowLeftCircle />
                    )}
                  </div>
                </SidebarHeader>
                <SidebarContent>
                  <Menu iconShape="square">
                    <Link to="/dashboard/profile">
                      <MenuItem active={true} icon={<FiHome />}>
                        Profile
                      </MenuItem>
                    </Link>

                    <MenuItem icon={<FaList />}>Patient</MenuItem>
                    <MenuItem icon={<FaRegHeart />}>Message</MenuItem>
                    <MenuItem icon={<RiPencilLine />}>Pement</MenuItem>
                    <MenuItem icon={<BiCog />}>Blog Post</MenuItem>
                  </Menu>
                </SidebarContent>
                <SidebarFooter>
                  <Menu iconShape="square">
                    <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                  </Menu>
                </SidebarFooter>
              </ProSidebar>
            </div>
          </div>
          <div className="col-md-9">
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
