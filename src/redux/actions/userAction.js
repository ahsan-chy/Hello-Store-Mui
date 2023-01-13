export const signin = (username, email, token, id) => {
    return{
        type: "SIGNIN",
        payload: {
            id: id,
            username: username,
            email: email,
            token: token,
          }
    }
}
export const signup = (username, email, token) => {
    return{
        type: "SIGNUP",
        payload: {
            username: username,
            email: email,
            // token: token
          }
    }
}

export const signOut = () => {
    return {
        type: "SIGNOUT",
        payload: null
    }
}