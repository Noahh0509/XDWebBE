import axiosInstance from './axiosInstance';

export const loginAPI = async (email, password) => {
    const { data } = await axiosInstance.post('/api/auth/login', { email, password });
    return data; // { status, accessToken, data: { user } }
};

export const logoutAPI = async () => {
    await axiosInstance.post('/api/auth/logout');
};

export const getMeAPI = async () => {
    const { data } = await axiosInstance.get('/api/users/me');
    return data.data.user;
};