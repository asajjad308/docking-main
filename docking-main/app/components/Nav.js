import React, { useState, useRef } from "react";
import Link from "next/link";
import Popup from "./Popup";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useSession } from "../context/SessionContext";
import { destroySession } from "../../lib/session";


function Nav({ initialActive }) {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(initialActive);
  const [showPopup, setShowPopup] = useState(false);
  const navRef = useRef(null);

  const open = () => {
    setToggle(!toggle);
  };

  const session = useSession();

  const closePopupHandler = (e) => {
    setShowPopup(false);
    change(e);
  };

  const change = (e) => {
    const id = Number(e.target.id);
    setActive(id);

    if (navRef.current) {
      navRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleLogout = () => {
    destroySession();
  };

  return (
    <div className="shadow-lg p-4 font-semibold">
      <div className="max-w-[1240px] flex justify-between py-[15px] mx-auto">
        <div className="text-2xl">My Logo</div>
        {toggle ? (
          <AiOutlineClose
            onClick={open}
            className="text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={open}
            className="text-white text-2xl md:hidden block"
          />
        )}

        <ul className="hidden md:flex gap-6" ref={navRef}>
          {menuItems.map((menuItem, index) => (
            <NavItem
              key={index}
              id={index}
              active={active}
              change={change}
              {...menuItem}
            />
          ))}
        </ul>

        <ul className="hidden md:flex text-white gap-10">
          {session?.session.email ? (
            <>
              <li className="hover:bg-black text-black text-[#1a1a64] hover:underline hover:border-xl rounded px-4 py-2">
                {session.session.email}
              </li>
              <li className="bg-[#1a1a64] hover:bg-black text-primary hover:text-primary hover:underline hover:border-xl rounded px-4 py-2">
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <li className="bg-[#1a1a64] hover:bg-black text-primary hover:text-primary hover:underline hover:border-xl rounded px-4 py-2">
              <Link href="/signin" id="5" onClick={change}>
                Login
              </Link>
            </li>
          )}
        </ul>

        <ResponsiveMenu active={active} change={change} toggle={toggle} />
      </div>
      {showPopup && <Popup closePopupHandler={closePopupHandler} />}
    </div>
  );
}

function NavItem({ id, active, change, text, href }) {
  return (
    <li
      className={`${
        active === id ? "bg-[#1a1a64] text-primary" : ""
      } transition-all duration-300 hover:bg-[#1a1a64] hover:text-primary hover:border-xl rounded p-2`}
    >
      <Link href={href} id={id} onClick={change}>
        {text}
      </Link>
    </li>
  );
}

const menuItems = [
  { text: "Home", href: "/", id: 0 },
  { text: "Docks Rentals", href: "/rentals", id: 1 },
  { text: "Moring Leasing", href: "/leases", id: 2 },
  { text: "Contact us", href: "/contact", id: 3 },
  { text: "About", href: "/about", id: 4 },
];

function ResponsiveMenu({ active, change, toggle }) {
  return (
    <ul
      className={`md:hidden w-full h-screen z-20 text-white fixed bg-black top-[92px] bg-optional text-primary ${
        toggle ? "left-[0]" : "left-[-100%]"
      }`}
    >
      {menuItems.map((menuItem, index) => (
        <li key={index} className="p-5">
          <Link
            href={menuItem.href}
            id={index}
            onClick={change}
            style={
              active === index
                ? { color: "blue", fontWeight: "bold" }
                : {}
            }
          >
            {menuItem.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
