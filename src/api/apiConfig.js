const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'bc4cd0ba5990d81073f3b951b228e81f',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;