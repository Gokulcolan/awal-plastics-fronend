import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./primaryLayoutStyle.scss";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import {
  elementProvider,
  handleActive,
  pathHandler,
  primaryDataHandler,
} from "@/utils/helper";
import { LayoutData } from "@/utils/layoutData";
import { useRouter } from "next/router";
import useRouterPush from "@/hooks/routerUtils";
const PrimaryLayout = ({
  children,
  search = true,
  searchPlaceholder = "search from insights",
}) => {
  const location = useRouter();
  const push = useRouterPush();

  const [listData, setListData] = useState([]);
  const [path, setPath] = useState([]);
  const [parent, setParent] = useState("sales");

  useEffect(() => {
    setListData(primaryDataHandler(path?.data, 0));
    handlePageData();
    // handleParent();
  }, [children, path]);

  // const handleParent = () => {
  //   const navParent = localStorage.getItem("parent");
  //   if (navParent) {
  //     setParent(navParent);
  //   }
  // };

  const handleClick = (value) => {
    if (value?.endpoint) {
      push(value?.endpoint);
      // console.log(`/SD/${parent}/${value?.endpoint}`);
    }
    handleActive(listData, value?.id, setListData);
  };

  const handlePageData = () => {
    const data = LayoutData?.filter((i) => {
      return location?.pathname.includes(i.path);
    });

    const modified = data.length ? data : [LayoutData[0]];

    setPath(...modified);
    // setParent(modified[0].parent);
  };

  // const parentHandle = () => {
  //   const originalPath = location.pathname;
  //   const newText = originalPath.replace("/SD/", `/SD/${parent}/`);

  //   localStorage.setItem("parent", newText);
  // };

  return listData.length ? (
    <div className="primary-layout">
      <div className="sidebar-menu">
        {search && (
          <div className="search-div">
            <input
              className="search-placeholder"
              placeholder={searchPlaceholder}
            />
            <SearchIcon className="search-icon" />
            <span className="add-icon">
              <AddIcon />
            </span>
          </div>
        )}

        {listData.length ? (
          <List sx={{ color: "#555" }} className="list-wrapper" component="nav">
            {listData?.map((e, i) => {
              return (
                <div key={i}>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      gap: "3px",
                      "&:hover": {
                        // backgroundColor: "#0000000",
                      },
                      "&.Mui-selected": {
                        color: "#ffff",
                        fontWeight: "700",
                        // backgroundColor: "#4844D7 !important",
                      },
                    }}
                    onClick={() => handleClick(e)}
                    // selected={location.pathname.includes(e.endpoint)}
                    button="true"
                    className="list-button"
                  >
                    {e?.icon && (
                      <Image src={e?.icon} alt={e?.name} className="icons" />
                    )}
                    <ListItemText
                      // className="list-child"
                      className={`${e?.class} list-child`}
                      style={{ display: "contents", color: "#21232C" }}
                      primary={e?.name}
                    />
                    {e?.children &&
                      (e?.active ? <ExpandMore /> : <ExpandLess />)}
                  </ListItemButton>

                  {e?.active && (
                    <Collapse
                      in={e?.active}
                      timeout="auto"
                      unmountOnExit
                      //   sx={{ backgroundColor: "rgb(183 181 209 / 20%)" }}
                    >
                      <List component="div" disablePadding>
                        {e?.children?.map((data, index) => {
                          return (
                            <React.Fragment key={index}>
                              <ListItemButton
                                key={`inner${index}`}
                                onClick={() => handleClick(data, true)}
                                selected={pathHandler(
                                  location.pathname,
                                  data.endpoint,
                                  3
                                )}
                                sx={{
                                  padding: data?.children ? "0" : "0 0px 0 15%",
                                  "&:hover": {
                                    color: "#4844D7",
                                    //   backgroundColor: "#0000000",
                                  },

                                  "&.Mui-selected": {
                                    //   backgroundColor: "transparent",
                                    color: data?.children ? "" : "#6150E1",
                                  },
                                }}
                              >
                                {data?.children &&
                                  (data?.active ? (
                                    <ExpandMore />
                                  ) : (
                                    <ExpandLess />
                                  ))}
                                {data?.icon && (
                                  <Image
                                    src={data?.icon}
                                    alt={data?.name}
                                    className="icons"
                                  />
                                )}{" "}
                                <ListItemText
                                  primary={data?.name}
                                  sx={{
                                    "&.Mui-selected": {
                                      color: "red  !important",
                                    },
                                  }}
                                  selected={data?.active}
                                  className={`${
                                    data?.active && !e?.children
                                      ? "inner-list-child inner-child"
                                      : "listitem-nfd inner-child"
                                  }`}
                                />
                              </ListItemButton>

                              {data?.active && (
                                <Collapse
                                  in={data?.active}
                                  timeout="auto"
                                  unmountOnExit
                                  //   sx={{ backgroundColor: "rgb(183 181 209 / 20%)" }}
                                >
                                  <List component="div" disablePadding>
                                    {data?.children?.map((value, index) => {
                                      return (
                                        <React.Fragment key={index}>
                                          <ListItemButton
                                            key={`inner${index}`}
                                            //   onClick={() =>
                                            //     handleClick(data.endpoint, index, true)
                                            //
                                            selected={value?.active}
                                            sx={{
                                              padding: value?.children
                                                ? "0"
                                                : "0 0px 0 15%",
                                              "&:hover": {
                                                color: "#4844D7",
                                                //   backgroundColor: "#0000000",
                                              },

                                              "&.Mui-selected": {
                                                //   backgroundColor: "transparent",
                                                color: value?.children
                                                  ? ""
                                                  : "#6150E1",
                                              },
                                            }}
                                          >
                                            {value?.children &&
                                              (value?.active ? (
                                                <ExpandMore />
                                              ) : (
                                                <ExpandLess />
                                              ))}
                                            {value?.icon && (
                                              <Image
                                                src={value?.icon}
                                                alt={value?.name}
                                                className="icons"
                                              />
                                            )}
                                            <ListItemText
                                              primary={value?.name}
                                              sx={{
                                                "&.Mui-selected": {
                                                  color: "red  !important",
                                                },
                                              }}
                                              selected={value?.active}
                                              className={`${
                                                value?.active && !e?.children
                                                  ? "inner-list-child inner-child"
                                                  : "listitem-nfd inner-child"
                                              }`}
                                            />
                                          </ListItemButton>
                                        </React.Fragment>
                                      );
                                    })}
                                  </List>
                                </Collapse>
                              )}
                            </React.Fragment>
                          );
                        })}
                      </List>
                    </Collapse>
                  )}
                </div>
              );
            })}
          </List>
        ) : (
          ""
        )}
      </div>
      <div className="main-body">
        <div className="primary-top">
          <div className="primary-header">
            {primaryDataHandler(path?.data, 1).length
              ? primaryDataHandler(path?.data, 1).map((e) => elementProvider(e))
              : null}
          </div>
          <div className="primary-actions">
            <div className="first-phase">
              {primaryDataHandler(path?.data, 2).length
                ? primaryDataHandler(path?.data, 2).map((e) =>
                    elementProvider(e)
                  )
                : null}
            </div>
          </div>
        </div>
        <div className="primary-main">{children}</div>
      </div>
    </div>
  ) : null;
  // <Loader />
};

export default PrimaryLayout;
