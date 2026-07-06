import toast from "react-hot-toast";

/* BASE STYLE */

const baseStyle = {
  borderRadius: "14px",
  padding: "14px 16px",
  background: "rgba(13, 18, 36, 0.95)",
  color: "#fff",
  border: "1px solid rgba(96,165,250,0.25)",
  backdropFilter: "blur(10px)",
  fontSize: "13px",
  fontWeight: 500,
};

/* SUCCESS */

export const toastSuccess = (message: string) => {
  return toast.success(message, {
    duration: 3500,
    style: baseStyle,
    iconTheme: {
      primary: "#3b82f6",
      secondary: "#ffffff",
    },
  });
};

/* ERROR */

export const toastError = (message: string) => {
  return toast.error(message, {
    duration: 4000,
    style: {
      ...baseStyle,
      border: "1px solid rgba(239,68,68,0.35)",
    },
    iconTheme: {
      primary: "#ef4444",
      secondary: "#ffffff",
    },
  });
};

/* INFO */

export const toastInfo = (message: string) => {
  return toast(message, {
    duration: 3000,
    style: {
      ...baseStyle,
      border: "1px solid rgba(59,130,246,0.35)",
    },
    icon: "💡",
  });
};

/* LOADING */

export const toastLoading = (message: string) => {
  return toast.loading(message, {
    style: {
      ...baseStyle,
      border: "1px solid rgba(59,130,246,0.35)",
    },
  });
};

/* DISMISS */

export const toastDismiss = (id: string) => {
  toast.dismiss(id);
};
