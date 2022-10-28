//? Organize functions used to sign-up, log in, log out, etc.

import * as userAPI from './users-api';

export const signUp = async (userData) => {
    const token = await userAPI.signUp(userData)
    return token;
}