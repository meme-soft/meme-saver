import path from 'path';

export default {
    uploadPath:  path.join(__dirname, "uploads"),
    port: process.env.PORT || 5000
}
