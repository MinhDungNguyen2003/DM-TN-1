import { Link } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import React, { useState, useEffect } from "react";
import Music from "./Music";
import { FaHeartCircleCheck } from "react-icons/fa6";

export default function Home() {
  const [daysTogether, setDaysTogether] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const start = new Date(2023, 6, 17, 23, 41);
    const interval = setInterval(() => {
      const now = new Date();
      const timeDiff = now - start;

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDiff / 1000) % 60);

      setDaysTogether(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    // Clear interval when component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 dark:bg-gradient-to-b dark:from-pink-100 dark:to-pink-200">
      <header className="flex items-center h-16 px-4 border-b border-pink-200 dark:border-purple- shrink-0 md:px-6">
        <nav className="flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 lg:gap-6">
          <Link
            className="flex items-center gap-2 text-lg font-semibold text-pink-600 dark:text-purple-300 md:text-base"
            href="#"
          >
            <HeartIcon className="w-6 h-6 text-red-600 hover:animate-bounce" />
            <span className="sr-only">Love Dashboard</span>
          </Link>
          <Link
            className="font-bold hover:bg-purple-400 hover:py-1 hover:rounded-md hover:duration-300 "
            href="#"
          >
            <span className=" p-2">Home</span>
          </Link>
          <Link
            className=" hover:bg-purple-400 hover:py-1 hover:rounded-md hover:duration-300"
            href="#"
          >
            <span className=" p-2">Photos</span>
          </Link>

          <Link
            className=" hover:bg-purple-400 hover:py-1 hover:rounded-md hover:duration-300"
            href="#"
          >
            <span className=" p-2">Note</span>
          </Link>
          <Link
            className=" hover:bg-purple-400 hover:py-1 hover:rounded-md hover:duration-300"
            href="#"
          >
            <span className=" p-2">Make a travel plan</span>
          </Link>
        </nav>
      </header>

      <div className=" flex justify-center pt-4">
        <Music></Music>
      </div>

      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          <Card className="bg-pink-200 dark:bg-purple-800">
            <CardContent className=" font-bold text-2xl text-pink-500">
              Welcome My love
            </CardContent>

            <CardContent>
              <div className="text-xl font-bold text-pink-600 ">
                Hello, Kim Ngân!
              </div>
              <p className="text-sm text-pink-500 ">
                Một chiếc web cute dành cho cậu nó sẽ lưu trữ những kỉ niệm của
                tớ và cậu về những điều vui buồn, những chuyển đi, những tấm
                hình đáng yêu
              </p>
            </CardContent>
          </Card>

          <Card className="bg-pink-200 dark:bg-purple-800">
            <CardContent className=" font-bold text-2xl text-pink-500">
              Chúng ta đã bên nhau được
            </CardContent>

            <CardContent>
              <div className="text-2xl font-bold text-pink-600 ">
                {daysTogether} Ngày {hours} Giờ {minutes} Phút {seconds} Giây
              </div>
            </CardContent>
          </Card>
          <Card className="bg-pink-200 dark:bg-purple-800 md:col-span-2 lg:col-span-1">
            <CardContent className=" font-bold text-2xl text-pink-500">
              Memorable Moments
            </CardContent>
            <CardContent>
              <div className="grid grid-cols-6 gap-2">
                <img
                  alt="Memorable moment"
                  className="aspect-square object-cover rounded-md hover:scale-105 cursor-pointer hover:duration-100 "
                  height={100}
                  src="/pic/pic1.png"
                  width={100}
                />
                <img
                  alt="Memorable moment"
                  className="aspect-square object-cover rounded-md hover:scale-105 cursor-pointer hover:duration-100 "
                  height={100}
                  src="/pic/pic2.png"
                  width={100}
                />
                <img
                  alt="Memorable moment"
                  className="aspect-square object-cover rounded-md hover:scale-105 cursor-pointer hover:duration-100 "
                  height={100}
                  src="/pic/pic3.png"
                  width={100}
                />
                <img
                  alt="Memorable moment"
                  className="aspect-square object-cover rounded-md hover:scale-105 cursor-pointer hover:duration-100 "
                  height={100}
                  src="/pic/pic4.png"
                  width={100}
                />
                <img
                  alt="Memorable moment"
                  className="aspect-square object-cover rounded-md hover:scale-105 cursor-pointer hover:duration-100 "
                  height={100}
                  src="/pic/pic5.png"
                  width={100}
                />
                <img
                  alt="Memorable moment"
                  className="aspect-square object-cover rounded-md hover:scale-105 cursor-pointer hover:duration-100 "
                  height={100}
                  src="/pic/pic6.png"
                  width={100}
                />
                <img
                  alt="Memorable moment"
                  className="aspect-square object-cover rounded-md hover:scale-105 cursor-pointer hover:duration-100 "
                  height={100}
                  src="/pic/pic7.png"
                  width={100}
                />
                <img
                  alt="Memorable moment"
                  className="aspect-square object-cover rounded-md hover:scale-105 cursor-pointer hover:duration-100 "
                  height={100}
                  src="/pic/pic8.png"
                  width={100}
                />
                <img
                  alt="Memorable moment"
                  className="aspect-square object-cover rounded-md hover:scale-105 cursor-pointer hover:duration-100 "
                  height={100}
                  src="/pic/pic9.png"
                  width={100}
                />
                <img
                  alt="Memorable moment"
                  className="aspect-square object-cover rounded-md hover:scale-105 cursor-pointer hover:duration-100 "
                  height={100}
                  src="/pic/pic10.png"
                  width={100}
                />
                <img
                  alt="Memorable moment"
                  className="aspect-square object-cover rounded-md hover:scale-105 cursor-pointer hover:duration-100 "
                  height={100}
                  src="/pic/pic11.png"
                  width={100}
                />
                <img
                  alt="Memorable moment"
                  className="aspect-square object-cover rounded-md hover:scale-105 cursor-pointer hover:duration-100 "
                  height={100}
                  src="/pic/pic12.png"
                  width={100}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-pink-200 dark:bg-purple-800">
            <CardContent className=" font-bold text-2xl text-pink-500">Travel</CardContent>

            <CardContent>
              <div className=" text-pink-600 ">
                <div className=" flex gap-4 items-center">
                  <FaHeartCircleCheck className=" text-xl text-pink-300" />
                  <span className=" text-lg">Vũng tàu</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
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
