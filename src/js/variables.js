const newsUrl = NODE_ENV === 'development' ? 'http://newsapi.org/v2/everything?' : 'https://newsapi.org/v2/everything?';
const apiKey = '4af89f6877ab4761885f949aa2b1dd7d';
const gitUrl = 'https://api.github.com/repos/7tp/qualification_work/commits';

export {newsUrl, apiKey, gitUrl}
