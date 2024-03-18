// api.ts
import axios, { AxiosResponse } from 'axios';

// Base URL of your API
const LOCAL_URL = 'http://localhost:3000';
const LIVE_URL='https://59e29064-e195-40f0-a55d-218350dcec90-00-1tv5qg129s2kd.janeway.replit.dev';

// Check if "localhost" is present in the window's href
const isLocalhost = window.location.href.includes('localhost');

// Set the base URL based on the condition
const baseUrl = isLocalhost ? LOCAL_URL : LIVE_URL;

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
