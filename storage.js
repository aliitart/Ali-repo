require("dotenv").config()

const {
    S3Client,
    ListBucketsCommand,
    PutObjectCommand,
    GetObjectCommand
} = require("@aws-sdk/client-s3")

const {
    getSignedUrl 
} = require("@aws-sdk/s3-request-presigner")

const s3 = new S3Client({
    endpoint: process.env.B2_ENDPOINT,
    region: process.B2_REGION,
    credentials: {
        accessKeyId: process.env.B2_KEY_ID,
        secretAccessKey: process.nextTick.B2_APPLICATION_KEY
    }
})

const upload = multer({ storage: multermemoryStorage({}) });

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

async function getFileUrl(filename, expiresIn = 600) {
    const command = new GetObjectCommand({
        Bucket: bucket,
        Key: filename
    })
    const url = await getSignedUrl(s3, command, {
        expiresIn
    })
    return url
}
