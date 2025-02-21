# AWS S3 File Uploader

## Description
This project is a **serverless file upload service** that allows users to upload PDF files to an **AWS S3 bucket**. The frontend is built with **HTML, CSS, and JavaScript**, while the backend uses **AWS Lambda (Python runtime)** to handle the file upload process via **API Gateway**.

## Features
- **Upload PDF files** from a web interface
- **Validate file selection** before upload
- **Secure file storage** in an AWS S3 bucket
- **Error handling and user feedback** for a seamless experience

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** AWS Lambda (Python)
- **Cloud Services:** AWS S3, API Gateway

## Prerequisites
- AWS account with an **S3 bucket** created
- AWS Lambda function with **IAM permissions** to write to S3
- API Gateway set up to trigger the Lambda function

## Project Structure
```
├── uploader.html   # Frontend UI for file upload
└── uploadtos3.py   # AWS Lambda function to handle file uploads
```

## Setup Instructions

### 1. Frontend
- Open `uploader.html` in a web browser.
- Select a PDF file and click "Upload".

### 2. Backend (AWS Lambda)
- Deploy `uploadtos3.py` as an **AWS Lambda function**.
- Ensure the Lambda function has an **IAM execution role** with `s3:PutObject` permissions.
- Configure **API Gateway** to trigger the Lambda function.

## Configuration

### **Update API Endpoint in `uploader.html`**
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

### **Update S3 Bucket Name in `uploadtos3.py`**
```python
bucket_name = 'your-s3-bucket-name'
```

## Error Handling & Troubleshooting
- **Frontend:** Validates file selection and displays upload success/error messages.
- **Backend:** Handles missing file content, incorrect formats, and S3 upload failures.
- **Debugging:** Check browser console for frontend issues and **AWS CloudWatch logs** for Lambda execution details.

