import {
    BucketPropertiesInterface
} from './types';

const name = process.env.BUCKET_NAME || process.env.GITHUB_REPOSITORY || false; 
const bucketName = name ? name.replace('/', '-').toLocaleLowerCase() : 'sample-bucket'

export const bucketProperties: BucketPropertiesInterface = {
    name: bucketName,
    args: {
        bucket: bucketName,
        forceDestroy: true
    }
};

const beName = 'pulumi-backend-' + bucketName;
export const backendBucketProperties: BucketPropertiesInterface = {
    name: beName,
    args: {
        bucket: beName
    }
};
