# File Upload to AWS S3

## Description
This project is a simple web-based application that allows users to upload PDF files to an AWS S3 bucket. The frontend is built with HTML, CSS, and JavaScript, while the backend utilizes AWS Lambda with Node.js to handle the file upload process.

## Features
- Upload PDF files from the web interface
- Validate file selection
- Display success or error messages after upload
- Upload files securely to an AWS S3 bucket

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** AWS Lambda (Node.js)
- **Cloud Services:** AWS S3

## Prerequisites
- AWS account with an S3 bucket created
- AWS Lambda configured with the necessary permissions to write to the S3 bucket
- API Gateway set up to trigger the Lambda function

## Project Structure
```
├── uploader.html   # Frontend interface for file upload
└── uploadtos3.js    # AWS Lambda function to handle file uploads to S3
```

## Setup Instructions

### 1. Frontend
- Open `uploader.html` in a web browser.
- Select a PDF file and click "Upload".

### 2. Backend (AWS Lambda)
- Deploy `uploadtos3.js` as an AWS Lambda function.
- Ensure the Lambda function has an execution role with `s3:PutObject` permissions for the specified S3 bucket.
- Set up an API Gateway to trigger the Lambda function.

## Configuration
- Update the API endpoint in `uploader.html`:
  ```javascript
  fetch('https://your-api-gateway-endpoint', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          file_name: file.name,
          content_type: file.type,
          body: base64File
      })
  });
  ```
- Update the S3 bucket name in `uploadtos3.js`:
  ```javascript
  const bucketName = 'your-s3-bucket-name';
  ```

## Error Handling
- The frontend provides basic validation to ensure a PDF file is selected.
- The backend handles errors such as missing file content or S3 upload failures.

## Troubleshooting
- Check the browser console for frontend errors.
- Review AWS CloudWatch logs for Lambda function execution details.


