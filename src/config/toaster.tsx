import { Toaster } from "react-hot-toast";

export const AppToaster = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={12}
      containerStyle={{
        top: 20,
        right: 20,
      }}
      toastOptions={{
        duration: 3500,

        /* DEFAULT STYLE */
        style: {
          background: "rgba(13, 18, 36, 0.95)",
          color: "#fff",
          borderRadius: "14px",
          border: "1px solid rgba(96,165,250,0.25)",
          padding: "14px 16px",
          fontSize: "13px",
          backdropFilter: "blur(12px)",
        },

        /* SUCCESS */
        success: {
          iconTheme: {
            primary: "#3b82f6",
            secondary: "#ffffff",
          },
        },

        /* ERROR */
        error: {
          iconTheme: {
            primary: "#ef4444",
            secondary: "#ffffff",
          },
        },
      }}
    />
  );
};
