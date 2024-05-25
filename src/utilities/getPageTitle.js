const getPageTitle = (location) => {
  switch (location) {
    case '/my/admin/dashboard':
      return 'Dashboard'
    case '/my/admin/users':
      return 'User Management'
    case '/my/admin/notifications':
      return 'Notifications'
    case '/my/admin/payment-gateway':
      return 'Payment Gateways'
    case '/my/admin/referral':
      return 'Referral Management'
    case 'Rejected Deposits':
      return 'Rejected Deposits'
    case 'Approved Deposits':
      return 'Approved Deposits'
    case 'Pending Deposits':
      return 'Pending Deposits'
    case 'Successful Deposits':
      return 'Successful Deposits'
    case 'All Deposits':
      return 'All Deposits'
    case 'All Tickets':
      return 'All Tickets'
    case 'Pending Tickets':
      return 'Pending Tickets'
    case 'Closed Tickets':
      return 'Closed Tickets'
    case 'Answered Tickets':
      return 'Answered Tickets'
    case 'Generated Cards':
      return 'Generated Cards'
    case 'Linked Cards':
      return 'Linked Cards'
    case 'User Cards':
      return 'Users Cards'
    case 'All Transactions':
      return 'All Transactions'
    case 'Failed Transactions':
      return 'Failed Transactions'
    case 'Successful Transactions':
      return 'Successful Transactions'
    case '/my/admin/users/detail':
      return 'User Detail'
    default:
      return 'Dashboard'
  }
}

export default getPageTitle
