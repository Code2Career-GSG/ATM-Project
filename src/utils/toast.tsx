import { Toaster } from "react-hot-toast";



const ToastNotification = () => {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 3000,
      }}
    />
    
  );
};










export default ToastNotification;