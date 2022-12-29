const cookieName = ""; // Enter the name of the cookie here.
const cookieValue = document.cookie.split('; ').find((row) => row.startsWith(cookieName + '='))?.split('=')[1];
