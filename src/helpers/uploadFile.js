const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/auto/upload`;

const uploadFile = async (file) => {
    try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'cheer-app-file');

        const response = await fetch(url, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Cloudinary upload failed with status ${response.status}: ${errorText}`);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        throw error;  // Rethrow the error so it can be handled by the caller
    }
};

export default uploadFile;