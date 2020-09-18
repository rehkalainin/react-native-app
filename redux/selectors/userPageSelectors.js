export const getUsers = (state) => state.usersPage.users
export const getUserById = (userId) => (state) => state.usersPage.users.find(el => el.id === userId)

export const getIsLoading = (state) => state.usersPage.isLoading