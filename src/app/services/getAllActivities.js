const getAllActivities = async () => {
    const url = "https://navkolodozvillya.onrender.com/offerings";
    try {
        const response = await fetch(url, { cache: "no-cache" });
        if (!response.ok) {
            throw new Error("Failed to fetch data.");
        }
        const data = await response.json();
        console.log('data', data);
        return data;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
};

export default getAllActivities;