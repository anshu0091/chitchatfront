// Test file to verify backend API connectivity
async function testBackendConnection() {
  try {
    const response = await fetch('https://chitchat-backend-production-7800.up.railway.app/rooms');
    const data = await response.json();
    console.log('Backend connection successful:', data);
    return true;
  } catch (error) {
    console.error('Backend connection failed:', error);
    return false;
  }
}

export default testBackendConnection;