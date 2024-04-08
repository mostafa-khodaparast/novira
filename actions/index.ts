"use server"

export async function fetchToken(username: string, password: string) {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: 'POST',
        body: JSON.stringify({
            username,
            password
        })
    })
    const token = response.json()
    return token
}