//? Handle user-related communications with the server

const BASE_URL = '/api/users';

// Maps to users-service.signUp
export async function signUp(userData) {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    })

    if (res.ok){
        return res.json()
    } else {
        throw new Error('Invalid Sign Up')
    }
}

// Maps to users-service.login
export async function login(credentials) {
    const res = await fetch(BASE_URL + '/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(credentials)
    })

    if (res.ok){
        return res.json()
    } else {
        throw new Error('Invalid Credentials')
    }
}