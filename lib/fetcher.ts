import axios from 'axios';

const Fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default Fetcher;