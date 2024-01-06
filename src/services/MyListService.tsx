import axios from "axios";

const REST_API_URL = 'http://localhost:8080/taswiksri';

export const listEmployees = () => axios.get(REST_API_URL + '/employees');

export const addEmployee = (employee:any) => axios.post(REST_API_URL + '/employee',employee)
