import apiServices from "./api";

const getAllCategories = async () => {
    try {
        const url = `/categories`;
        const res = await apiServices.get(url);
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


const categoryServices = {
    getAllCategories,
}

export default categoryServices;