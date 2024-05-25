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
    link: '/my/admin/dashboard',
    icon: <SlHome />,
    id: 1,
  },
  {
    name: 'Manage Users',
    link: '/my/admin/users',
    icon: <FaUsers />,
    id: 2,
  },
  {
    name: 'Manage Referral',
    icon: <MdOutlineDashboard />,
    link: '/my/admin/referral',
    id: 3,
  },
  {
    name: 'Payment Gateways',
    link: '/my/admin/payment-gateway',
    icon: <CiCreditCard1 />,
    id: 4,
  },
  {
    name: 'Deposits',
    link: '/my/admin/deposits',
    icon: <CiCreditCard1 />,
    id: 5,
  },
  {
    name: 'Support Ticket',
    link: '/my/admin/tickets',
    icon: <MdSupportAgent />,
    id: 6,
  },
  {
    name: 'Transactions',
    link: '/my/admin/transactions',
    icon: <GrTransaction />,
    id: 6,
  },
  {
    name: 'Card Management',
    link: '/my/admin/card-management',
    icon: <LuTicket />,
    id: 6,
  },
]
