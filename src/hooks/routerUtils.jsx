import { useRouter } from "next/router";
import { useCallback } from "react";

const useRouterPush = () => {
  const router = useRouter();

  const push = useCallback(
    (path) => {
      router.push(path);
    },
    [router]
  );

  return push;
};

export default useRouterPush;
