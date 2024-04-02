import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Loader from "@/common/commonLoader";
import { useRouter } from "next/router";

const NavLayout = dynamic(() => import("../nav"), {
  loading: () => <Loader />,
});
const PrimaryLayout = dynamic(() => import("../primary"), {
  loading: () => <Loader />,
});

const CommonLayout = ({ children, primaryData, navData }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    // Cleanup event listeners
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <>
      {/* <NavLayout {...navData}>
        <PrimaryLayout {...primaryData}>{children}</PrimaryLayout>
      </NavLayout> */}

      <div className={loading ? "common-loader-layout" : "common-content"}>
        <div className={loading ? "hidden" : ""}>
          <NavLayout {...navData}>
            <PrimaryLayout {...primaryData}>{children}</PrimaryLayout>
          </NavLayout>
        </div>
        <div className={loading ? "" : "common-hidden-layout"}>
          <Loader />
        </div>
      </div>
    </>
  );
};

export default CommonLayout;
