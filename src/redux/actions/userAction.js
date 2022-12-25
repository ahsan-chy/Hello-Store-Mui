export const signin = (username, email, confirmed, token) => {
    return{
        type: "SIGNIN",
        payload: {
            username: username,
            email: email,
            token: token,
            // confirmed: confirmed
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