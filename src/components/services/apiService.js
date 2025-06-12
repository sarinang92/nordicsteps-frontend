import { menuItems, userProfiles } from '../data/mockData';

// Simulate a network delay
const simulateNetworkDelay = (data, delay = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};

// Fetch function for menu items
export const fetchMenuItems = async () => {
  return await simulateNetworkDelay(menuItems);
};

// Fetch function for user profiles
export const fetchUserProfiles = async () => {
  return await simulateNetworkDelay(userProfiles);
};
