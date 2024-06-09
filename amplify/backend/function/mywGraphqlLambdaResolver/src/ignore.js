// const getFBVideos = async (videosToStore, { accessToken }) => {
//   return Promise.all(
//     videosToStore.map(async (videoId) => {
//       const fields = encodeURIComponent(
//         "title,created_time,updated_time,thumbnails,views,comments,description,likes,permalink_url"
//       );

//       const config = {
//         method: "get",
//         url: `https://graph.facebook.com/v17.0/${videoId}?fields=${fields}&access_token=${accessToken}`,
//         headers: {},
//       };

//       const response = await axios.request(config);
//       const item = response.data;

//       const { thumbnails } = item;
//       const { data } = thumbnails;
//       const [{ uri } = {}] = data;

//       let s3Key;
//       if (uri) {
//         const base64 = await convertURLtoBase64(uri);
//         s3Key = `public/fb/${videoId}-${new Date().valueOf()}.png`;

//         await s3
//           .putObject({
//             Bucket: S3_BUCKET,
//             Key: s3Key,
//             Body: base64,
//             ContentType: "image/png",
//           })
//           .promise();
//       }

//       return {
//         videoId: item.id,
//         title: item.description ?? null,
//         type: "REEL",
//         timestamp: item.created_time,
//         permaLink: item.permalink_url,
//         thumbnailUrl: s3Key,
//         statistics: {
//           viewCount: +item.views,
//           commentCount: +item.comments.data.length,
//         },
//       };
//     })
//   );
// };

// const getIGVideos = async (videosToStore, { accessToken }) => {
//   return Promise.all(
//     videosToStore.map(async (videoId) => {
//       const fields = encodeURIComponent(
//         "is_shared_to_feed,caption,id,timestamp,username,thumbnail_url,media_url,permalink,media_type"
//       );

//       const config = {
//         method: "get",
//         url: `https://graph.instagram.com/${videoId}?fields=${fields}&access_token=${accessToken}`,
//         headers: {},
//       };

//       const response = await axios.request(config);
//       const item = response.data;
//       const { thumbnail_url: thumbnailUrl } = item;

//       let s3Key;
//       if (thumbnailUrl) {
//         const base64 = await convertURLtoBase64(thumbnailUrl);
//         s3Key = `public/ig/${videoId}-${new Date().valueOf()}.png`;

//         await s3
//           .putObject({
//             Bucket: S3_BUCKET,
//             Key: s3Key,
//             Body: base64,
//             ContentType: "image/png",
//           })
//           .promise();
//       }

//       return {
//         videoId: item.id,
//         title: item.caption ? item.caption : "",
//         type: item.media_type,
//         timestamp: item.timestamp,
//         permaLink: item.permalink,
//         thumbnailUrl: s3Key,
//       };
//     })
//   );
// };
