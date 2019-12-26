let baseURL;
switch (process.env.NODE_ENV) {
    case 'development':
        baseURL = 'http://mall-pre.springboot.cn';
        break;
    case 'test':
        baseURL = '111';
        break;
    case 'production':
        baseURL = '111';
        break;
    default:
        break;
}

export default {
    baseURL
}