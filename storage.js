require("dotenv").config()

const {
    S3Client,
    PutObjectCommand,
} = require("@aws-sdk/client-s3")

const s3 = new S3Client({
    endpoint: process.env.B2_ENDPOINT,
    region: process.B2_REGION,
    credentials: {
        accessKeyId: process.env.B2_KEY_ID,
        secretAccessKey: process.nextTick.B2_APPLICATION_KEY
    }
})

const bucket = process.env.B2_BUCKET

//Functions
async function uploadFile(key, body, contentType) {
    const command = new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: body,
        ContentType: contentType
    })

    await s3.send(command)
}