import apiServices from "./api";

const getDistrictByCity = async (id) => {
    try {
        const url = `/districts/bycity/${id}`;
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

const districtServices = {
    getDistrictByCity
}
export default districtServices;