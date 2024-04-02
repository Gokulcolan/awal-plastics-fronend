import React, { useState, useEffect } from "react";
import { Backdrop } from "@mui/material";
import "@/common.scss"
const Loader=()=> {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    handleToggle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
        <div
          className="loader__wrap"
          role="alertdialog"
          aria-busy="true"
          aria-live="polite"
          aria-label="Loading…"
        >
          <div className="spinner"></div>
        </div>
      </Backdrop>
    </>
  );
}


export default Loader