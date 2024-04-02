import React, { useEffect, useState } from "react";
import "./navLayoutStyle.scss";
import Image from "next/image";
import logo from "@/assets/image/awalpastic-logo-update.svg";
import puzzle from "../../assets/icons/puzzle.svg";
import profile from "../../assets/icons/profile.svg";
import tips from "../../assets/icons/tips.svg";
import info from "../../assets/icons/info.svg";
import { sidebarData } from "@/utils/mainData";
import useRouterPush from "@/hooks/routerUtils";
import { useRouter } from "next/router";
import { pathHandler } from "@/utils/helper";
const NavLayout = ({ children }) => {
  const [sideBar, setSideBar] = useState([]);
  const push = useRouterPush();

  useEffect(() => {
    setSideBar(sidebarData);
  }, []);

  const handleNavigate = (value) => {
    const updatedTodos = sideBar?.map((data) =>
      data.id === value.id
        ? { ...data, active: true }
        : { ...data, active: false }
    );
    setSideBar(updatedTodos);
    if (value.path) {
      push(value.path);
      localStorage.setItem('parent',value.path)
    }
  };

  const location = useRouter();

  return sideBar.length ? (
    <div className="nav-layout">
      <div className="side-nav">
        {sideBar?.map((data) => {
          return (
            <div
              onClick={() => handleNavigate(data)}
              className={`${
                pathHandler(location.pathname, data?.parent) ? "active" : ""
              } logo-div`}
              key={data?.id}
            >
              <Image src={data?.image} alt={"side-bar-logos"} />
            </div>
          );
        })}
      </div>

      <div className="body-nav">
        <div className="top-nav">
          <div className="img-div">
            <Image src={logo} alt="company-logo" />
          </div>
          <div className="nav-menu">
            <Image src={puzzle} alt="puzzule-logo" />
            <Image src={info} alt="info-logoD" />
            <Image src={tips} alt="tips-logo" />
            <Image src={profile} alt="profile-logo" />
          </div>
        </div>
        <div className="main-nav">{children}</div>
      </div>
    </div>
  ) : null;
  // <Loader />
};

export default NavLayout;
