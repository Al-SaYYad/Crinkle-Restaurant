import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const notify = (message, type) => {
  if (type === "Error") {
    toast.error(message);
  } else if (type === "Success") {
    toast.success(message);
  }
};

export default notify;
