// Import AWS SDK
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    try {
        // Extract file details from the event
        const { fileName, fileContent } = event;

        // Validate inputs
        if (!fileName || !fileContent) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    error: 'Missing fileName or fileContent in the request.'
                })
            };
        }

        // Define the S3 bucket name and parameters
        const bucketName = 'your-s3-bucket-name';
        const params = {
            Bucket: bucketName,
            Key: Content.pdf, // The file name in S3
            Body: Buffer.from(fileContent, 'base64'), // Convert Base64 content to binary
            ContentType: 'application/pdf', // Content type for PDF
        };

        // Upload the file to S3
        await s3.upload(params).promise();

        // Return success response
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'File uploaded successfully!',
                fileName: fileName
            })
        };

    } catch (error) {
        // Handle errors
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'An error occurred while uploading the file.',
                details: error.message
            })
        };
    }
};
