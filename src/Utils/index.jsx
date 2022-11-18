const checkRole = (currentUser, role = 'ROLE_ADMIN') =>{
    if(!currentUser || !Array.isArray(currentUser.userRoles)) return false
    const {userRoles} = currentUser
    if(userRoles.includes(role)) return true
    return false
}


export const checkUserAdmin = currentUser => {
    return checkRole(currentUser, 'ROLE_ADMIN')
}

export const checkUserManager = currentUser => {
    return checkRole(currentUser, 'director')
}

export const checkUserInstructor = currentUser =>{
    return checkRole(currentUser, 'instructor')
}

export const checkUserStudent = currentUser =>{
    return checkRole(currentUser, 'student')
}