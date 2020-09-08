import axios from 'axios';

const URL = "https://backend-for-my-site.herokuapp.com/api/message"

const sendMessage  = async (message) => {
    try {
    const response = await axios.post(URL, {
        email: message.email,
        title: message.title,
        message: message.message
    });
    return response;
    } catch (err) {
        return null;
    }
}

export default sendMessage;