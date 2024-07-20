const getUserDetailsFromToken = require("../helpers/getUserDetailsFromToken.js");
const UserModel = require("../models/UserModel.js");

async function updateUserDetails(request, response) {
    try {
        // Extract token from cookies
        const token = request.cookies.token || "";
        console.log('Token:', token);

        // Get user details from token
        const user = await getUserDetailsFromToken(token);
        console.log('User from Token:', user);

        if (!user || !user._id) {
            return response.status(401).json({
                message: "Unauthorized",
                success: false
            });
        }

        const { name, profile_pic } = request.body;
        console.log('Request Body:', { name, profile_pic });

        // Update user document
        const userInformation = await UserModel.findByIdAndUpdate(
            user._id,
            { name, profile_pic },
            { new: true }  // Option to return the updated document
        );

        console.log('Updated User Information:', userInformation);

        // Check if userInformation is returned
        if (!userInformation) {
            return response.status(404).json({
                message: "User not found",
                success: false
            });
        }

        return response.json({
            message: "User updated successfully",
            data: userInformation,
            success: true
        });

    } catch (error) {
        console.error('Error updating user details:', error);  // Log the error for debugging
        return response.status(500).json({
            message: error.message || "Internal server error",
            success: false
        });
    }
}

module.exports = updateUserDetails;
