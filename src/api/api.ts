// api.ts
import axios, { AxiosResponse } from 'axios';

// Base URL of your API
const baseUrl = 'http://localhost:3000';
export const schedules= 'schedules';
export const scheduleLogs=(scheduleId:string)=>'scheduleLogs?scheduleId'+scheduleId;

// Function to make a GET request
export const get = async (endpoint: string): Promise<any> => {
  try {
    const response: AxiosResponse = await axios.get(`${baseUrl}/${endpoint}`);
    return response.data;
  } catch (error) {
    throw new Error(`GET request failed: ${error}`);
  }
};

// Function to make a PATCH request
export const patch = async (endpoint: string, data: any): Promise<any> => {
  try {
    const response: AxiosResponse = await axios.patch(`${baseUrl}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    throw new Error(`PATCH request failed: ${error}`);
  }
};

// Function to make a POST request
export const post = async (endpoint: string, data: any): Promise<any> => {
  try {
    const response: AxiosResponse = await axios.post(`${baseUrl}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    throw new Error(`POST request failed: ${error}`);
  }
};
