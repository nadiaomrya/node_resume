// tasks.js
module.exports = {
    formatResponse: (data) => {
        // Format the response data in a specific way
        return {
            status: 'success',
            data: data
        };
    },

    validateInput: (input) => {
        // Validate user input
        if (!input || typeof input !== 'string') {
            throw new Error('Invalid input');
        }
    }
};
