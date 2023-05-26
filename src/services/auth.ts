import axios from "axios"

export const apiInstance = axios.create({
    baseURL: "http://172.26.70.224:8093/api/",
    headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }
});

export const login = async (payload: { identity: string; password: string }) => {
    try {
        const req = await apiInstance.post('collections/users/auth-with-password', payload);
        sessionStorage.setItem("token", req.data.token)
        window.location.href = '/';
    } catch (error) {
        console.error(error)
    }
}