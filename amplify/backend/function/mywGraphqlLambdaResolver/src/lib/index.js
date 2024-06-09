const AWS = require("aws-sdk");

const { convertURLtoBase64 } = require("../helpers");

const S3_BUCKET = process.env.STORAGE_MYWSTORAGE_BUCKETNAME;

const s3 = new AWS.S3();

const storeThumnailToS3 = async (thumbnailUrl, thumbnailPath) => {
  const { buffer, contentType } = await convertURLtoBase64(thumbnailUrl);
  await s3
    .putObject({
      Bucket: S3_BUCKET,
      Key: thumbnailPath,
      Body: buffer,
      ContentType: contentType,
    })
    .promise();
  return thumbnailPath;
};

const storeVideoToS3 = async (videoUrl, videoPath) => {
  const { buffer, contentType } = await convertURLtoBase64(videoUrl);
  await s3
    .putObject({
      Bucket: S3_BUCKET,
      Key: videoPath,
      Body: buffer,
      ContentType: contentType,
    })
    .promise();
  return videoPath;
};

module.exports = {
  storeThumnailToS3,
  storeVideoToS3,
};
