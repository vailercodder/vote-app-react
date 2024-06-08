import axios from "axios";

const BASE_URL = "https://6664946b932baf9032ab83be.mockapi.io";

const USERS_API_URL = `${BASE_URL}/users`;
const VOTES_API_URL = `${BASE_URL}/votes`;

export const checkCredentials = async (email, password) => {
  try {
    const response = await axios.get(USERS_API_URL);
    const users = response.data;

    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    return user ? user : null;
  } catch (error) {
    console.error("Error fetching users:", error);
    return null;
  }
};

export const submitVote = async (voteData) => {
  try {
    const response = await axios.post(VOTES_API_URL, {
      ...voteData,
      timestamp: new Date().toISOString(),
    });
    return response.data;
  } catch (error) {
    console.error("Error submitting vote:", error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(USERS_API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getVotes = async () => {
  try {
    const response = await axios.get(VOTES_API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching votes:", error);
    throw error;
  }
};
