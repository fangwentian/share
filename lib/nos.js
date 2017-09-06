const path = require('path');
const NosClient = require('nos-node-sdk');
const streamifier = require('streamifier');
const uuidV4 = require('uuid/v4');
const config = require('config');
const fs = require('fs');

const client = new NosClient();

const ACCESS_KEY = config.get('ACCESS_KEY');
const SECRET_KEY = config.get('SECRET_KEY');
const END_POINT = config.get('END_POINT');
const BUCKET = config.get('BUCKET');

client.setAccessId(ACCESS_KEY);
client.setSecretKey(SECRET_KEY);
client.setEndpoint(END_POINT);

module.exports = (file = {}) => {
    const { name = '', size = 0 } = file;
    const suffix = path.extname(name) || '';
    const readStream = fs.createReadStream(file.path);

    return new Promise((resolve, reject) => {
        try {
            client.put_object_stream({
                bucket: BUCKET,
                key: uuidV4() + suffix,
                body: readStream,
                length: size,
            }, (result) => {
                const url = `https://${BUCKET}.${END_POINT}/${result.headers['x-nos-object-name']}`;
                resolve({ name, url });
            });
        } catch (e) {
            reject(e);
        }
    });
};
