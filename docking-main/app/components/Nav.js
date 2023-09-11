"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Popup from "./Popup";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useSession } from "../context/SessionContext";
import { destorySession } from "../../lib/session";
function Nav({ initialActive }) {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(initialActive);
  const [showPopup, setShowPopup] = useState(false);
  const navRef = useRef(null);
  const open = () => {
    setToggle(!toggle);
  };
  function handleLogout() {
    destorySession();
  }
  const session = useSession();

  function closePopupHandler(e) {
    setShowPopup(false);
    change(e);
  }

  const change = (e) => {
    let ids = e.target.id;
    ids = Number(ids);
    setActive(ids);

    if (navRef.current) {
      navRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="shadow-lg p-4 font-semibold ">
      <div className="max-w-[1240px] flex justify-between py-[15px] mx-auto">
        <div className="text-2xl ">My Logo</div>
        {toggle ? (
          <AiOutlineClose onClick={open} className="text-2xl md:hidden block" />) : (
          <AiOutlineMenu onClick={open} className="text-white text-2xl md:hidden block" />
        )}

        <ul className="hidden md:flex gap-6 " ref={navRef}>
          <li className=" hover:bg-[#1a1a64] hover:text-primary hover:border-xl rounded p-2  ">
            <Link href="/" id="0" onClick={change} className={active === 0 ? "bg-secondary" : ""}> Home </Link>
          </li>
          <li className=" hover:bg-[#1a1a64] hover:text-primary hover:border-xl rounded p-2 ">
            <Link
              href="/rentals"
              id="1"
              onClick={change}
              className={active === 1 ? "bg-secondary" : ""}
            >
              Docks Rentals
            </Link>
          </li>
          <li className=" hover:bg-[#1a1a64] hover:text-primary hover:border-xl rounded p-2 ">
            <Link href="/leases" id="2" onClick={change} className={active === 2 ? "bg-secondary" : ""}
            >
              Moring Leasing
            </Link>
          </li>
          <li className=" hover:bg-[#1a1a64] hover:text-primary hover:border-xl rounded p-2 ">
            <Link href="/contact" id="3" onClick={change} className={active === 3 ? "bg-secondary" : ""}>Contact us</Link>
          </li>
          <li className=" hover:bg-[#1a1a64] hover:text-primary hover:border-xl rounded p-2 ">
            <Link href="/about" id="4" onClick={change} className={active === 4 ? "bg-secondary" : ""}>
              About
            </Link>
          </li>
        </ul>

        <ul className="hidden md:flex text-white gap-10 ">
          {(session?.session.email) ? (<>
            <li className="hover:bg-black text-black hover:text-[#1a1a64] hover:underline hover:border-xl rounded px-4 py-2">{session.session.email}</li>
            <li className="bg-[#1a1a64] hover:bg-black text-primary hover:text-primary hover:underline hover:border-xl rounded px-4 py-2"><button onClick={handleLogout}>Logout</button></li>
            </>) : (
            <li className="bg-[#1a1a64] hover:bg-black text-primary hover:text-primary hover:underline hover:border-xl rounded px-4 py-2">
            <Link href="/signin" id="5" onClick={change} className={active === 5 ? "bg-secondary" : ""}>
              Login
            </Link>
          </li>
            )}
        </ul>
        {/* Responsive Menu */}
        <ul
          className={`md:hidden w-full h-screen z-20 text-white fixed bg-black top-[92px] bg-optional text-primary
          ${toggle ? "left-[0]" : "left-[-100%]"}`}
        >
          <li className="p-5">
            <Link
              href="/"
              data-id="7"
              onClick={change}
              style={
                active === 7
                  ? {
                      color: "blue", 
                      fontWeight: "bold", 
                    }
                  : {} 
              }
            >
              Home
            </Link>
          </li>
          {/* Add other mobile menu items here */}
        </ul>
      </div>
      {showPopup && <Popup closePopupHandler={closePopupHandler} />}
    </div>
  );
}
export default Nav;
