import { CardContent, Card } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SingIn() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      dateLove: "",
    },

    onSubmit: (values) => {
      if (values.name === "Tăng Kim Ngân" && values.dateLove === "2023-07-17") {
        toast("Đúng cậu rồi nè! yêu em");

        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else {
        toast("Nhập sai thông tin rùi kìa nhập lại đi");
        formik.resetForm();
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 dark:bg-gradient-to-b dark:from-pink-100 dark:to-pink-200">
        <Card className="w-full max-w-md p-8 bg-white shadow-md">
          <div className=" flex flex-col gap-2">
            <div className="flex items-center justify-center">
              <HeartIcon className="h-6 w-6 text-pink-500" />
              <label className="mx-2 text-pink-500 font-bold text-3xl">
                My Love
              </label>
              <HeartIcon className="h-6 w-6 text-pink-500" />
            </div>
            <label className="text-center text-gray-500">
              Nhập thông tin để xác nhận cậu là người yêu tôi nhé
            </label>
          </div>
          <CardContent>
            <form className="grid gap-4">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="name" className=" font-bold">
                  Tên của cậu
                </label>

                <input
                  className=" border-pink-300 border-solid focus:outline-none focus:ring focus:ring-violet-300 p-2 rounded-md"
                  id="name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  placeholder="Cái tên siêu đáng yêu"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="name" className=" font-bold">
                  Ngày mình yêu nhau
                </label>

                <input
                  className=" border-pink-300 border-solid focus:outline-none focus:ring focus:ring-violet-300 p-2 rounded-md"
                  id="dateLove"
                  name="dateLove"
                  type="date"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dateLove}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="message" className=" font-bold">
                  Love Message
                </label>
                <textarea
                  className="min-h-[100px] border-pink-300 focus:outline-none focus:ring focus:ring-violet-300 p-2 rounded-md"
                  id="message"
                  placeholder="Cậu nhập gì ở đây cũng được "
                />
              </div>
            </form>
          </CardContent>

          <div className=" flex justify-center">
            <button
              type="submit"
              className="bg-pink-300 hover:bg-pink-400 p-2 rounded-md"
            >
              Send Love
            </button>
          </div>
        </Card>
      </div>
      <ToastContainer />
    </form>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
