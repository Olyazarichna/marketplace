const getCity = async () => {
    const url = "https://navkolodozvillya.onrender.com/city";
    try {
        const response = await fetch(url, { mode: "no-cors" });
        if (!response.ok) {
            throw new Error("Failed to fetch data.");
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default getCity;
