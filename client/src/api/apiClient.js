// Getting the base URL from environment variables
const BASE_URL = import.meta.env.VITE_BASE_URL;

// Reusable API Client
export const apiClient = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },

      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data;
  } catch (error) {
    console.log(error);

    throw error;
  }
};
