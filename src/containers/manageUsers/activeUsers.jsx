import React from 'react'
import Users from '.'
import { allUserData, allUsersHeader } from '../../mocks/users'

const ActiveUsers = () => {
  return (
    <div>
      <Users tableHeaders={allUsersHeader} tableData={allUserData} />
    </div>
  )
}

export default ActiveUsers
