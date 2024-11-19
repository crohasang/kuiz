import { AiFillHome } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
    { id: 'HOME', label: 'HOME', icon: AiFillHome },
    { id: 'QUIZ', label: 'QUIZ', icon: BsPencilFill },
    { id: 'USER', label: 'USER', icon: FaUser },
  ];