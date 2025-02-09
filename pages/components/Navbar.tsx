import Link from "next/link";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io"; 
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">NEXTMAP</div>
        <div className="navbar__list">
          <Link href="/stores" className="navbar__list--item">맛집 목록</Link>
          <Link href="/stores/new" className="navbar__list--item">맛집 등록</Link>
          <Link href="/users/likes" className="navbar__list--item">찜한 가게</Link>
          <Link href="/users/login" className="navbar__list--item">로그인</Link>
        </div>
        {/* Mobile Button */}
        <div role="presentation" className="navbar__button" 
        onClick={() => setIsOpen((val) => !val)}>
          {isOpen ? <IoClose /> : <IoIosMenu />}
        </div>
      </div>
      {/* Mobile Navbar */}
      {isOpen ? (
        <div className="navbar--mobile">
           <div className="navbar__list--mobile">
            <Link href="/stores" className="navbar__list--item--mobile">맛집 목록</Link>
            <Link href="/stores/new" className="navbar__list--item--mobile">맛집 등록</Link>
            <Link href="/users/likes" className="navbar__list--item--mobile">찜한 가게</Link>
            <Link href="/users/login" className="navbar__list--item--mobile">로그인</Link>
          </div>
        </div>
      ): ""}
    </>
  )
}