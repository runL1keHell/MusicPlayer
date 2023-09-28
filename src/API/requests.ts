import axios from "axios";
export const getSearchResults = async (
    URL: string,
    queryText: string
) => {
    try {
        const response = await axios.post(
            URL,
            queryText
        );
        if (!response.ok) {
            console.error(`Something went wrong: ${response.status}`)
            return null
        } else {
            return response.data;
        }
    } catch (error) {
        console.error(`There is an error occured, ${error}`);
        return null
    };
};