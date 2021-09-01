const CLIENT_ID = "729cca45e0c408428ac95c62cb111af7";
const REDIRECT_URI = "http://10.50.48.81:3000/kakao";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
