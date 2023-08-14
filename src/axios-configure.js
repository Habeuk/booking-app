import axios from 'axios';
import { baseUrl } from './general-configs';

export default axios.create({
    baseURL: baseUrl,
})
