import dynamic from "next/dynamic";

const loadWebFont = async () => {
  const WebFontLoader = await import("webfontloader");

  if (typeof window !== "undefined") {
    WebFontLoader.load({
      google: {
        families: ["Inter", "sans-serif"],
      },
    });
  }
};

// Use dynamic import to ensure it runs only on the client side
const DynamicWebFontLoader = dynamic(() => loadWebFont(), { ssr: false });

export default DynamicWebFontLoader;
