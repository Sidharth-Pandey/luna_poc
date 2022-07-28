/** to multipart upload files */

const { S3, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

    const credentials = {
      accessKeyId: "KEY", // UPDATE THIS
      secretAccessKey: "SECRET", // UPDATE THIS
    };
    const options = {
      credentials,
      region: "REGION", // UPDATE THIS
      apiVersion: "2006-03-01", // if you want to fix the api version, optional
    };
    const s3Client = new S3(options);
    // Create the command
    const command = new PutObjectCommand({
      Bucket: 'BUCKET', // UPDATE THIS
      Key: 'OBJ_ID_ON_S3', // UPDATE THIS
    });
    // Create the presigned URL
    const signedUrl = await getSignedUrl(s3Client, command, {
      expiresIn: 60 * 2, // This makes the URL expires after 2 min
    });

