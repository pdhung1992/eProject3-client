import apiServices from "./api";

const register = async (formData) => {
    try {
        const url = 'auth/user/register';
        const res = await apiServices.post(url, formData);
        return res.status;
    }catch (error){
        if (error.response) {
            return error.response.data;
        } else if (error.request) {
            return 'No response from server';
        } else {
            return 'An error occurred';
        }
    }
}

const logIn = async (formData) => {
    try {
        const url = 'auth/user/login';
        const res = await apiServices.post(url, formData);
        return res.data;
    }catch (error){
        if (error.response) {
            return error.response.data;
        } else if (error.request) {
            return 'No response from server';
        } else {
            return 'An error occurred';
        }
    }
}

const logOut = async () => {
    await sessionStorage.removeItem('user');
}

const authService = {
    register, logIn, logOut
}

export default authService;