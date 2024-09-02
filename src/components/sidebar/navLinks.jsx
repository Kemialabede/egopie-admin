import React from 'react'
import { SlHome } from 'react-icons/sl'
import { FaUsers } from 'react-icons/fa'
import { CiCreditCard1 } from 'react-icons/ci'
import { LuTicket } from 'react-icons/lu'
import { MdOutlineDashboard, MdSupportAgent } from 'react-icons/md'
import { GrTransaction } from 'react-icons/gr'
import './sidebar.scss'

export const navLinks = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    icon: <SlHome />,
    id: 1,
  },
  {
    name: 'Manage Users',
    link: '/users',
    icon: <FaUsers />,
    id: 2,
  },
  {
    name: 'Manage Referral',
    icon: <MdOutlineDashboard />,
    link: '/referral',
    id: 3,
  },
  {
    name: 'Deposits',
    link: '/deposits',
    icon: <CiCreditCard1 />,
    id: 4,
  },
  {
    name: 'Support Ticket',
    link: '/tickets',
    icon: <MdSupportAgent />,
    id: 5,
  },
  {
    name: 'Transactions',
    link: '/transactions',
    icon: <GrTransaction />,
    id: 6,
  },
  {
    name: 'Card Management',
    link: '/card-management',
    icon: <LuTicket />,
    id: 7,
  },
]
