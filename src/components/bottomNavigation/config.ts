import HomeIcon from '../../assets/home.svg?react'
import QuizIcon from '../../assets/quiz.svg?react'
import UserIcon from '../../assets/user.svg?react'

import { NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
    { id: 'HOME', label: 'HOME', icon: HomeIcon, path: '/'},
    { id: 'QUIZ', label: 'QUIZ', icon: QuizIcon, path: '/quiz' },
    { id: 'USER', label: 'USER', icon: UserIcon, path: '/user' },
  ];