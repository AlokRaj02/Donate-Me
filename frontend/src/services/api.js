import axios from 'axios';

const getBaseURL = () => {
  if (process.env.NODE_ENV !== 'production') {
    return 'http://localhost:5000/api';
  }

  // In production, use explicit env var if provided.
  // Otherwise fall back to same origin /api (useful when backend is served from the same domain).
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL;
  }

  const fallback = `${window.location.origin}/api`;
  console.warn(
    'REACT_APP_API_URL is not set. Falling back to',
    fallback,
    '— set REACT_APP_API_URL in your deployment environment for a correct backend URL.'
  );
  return fallback;
};

const api = axios.create({
  baseURL: getBaseURL(),
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;