import {
    BucketPropertiesInterface
} from './types';

const bucketName = process.env.BUCKET_NAME || process.env.GITHUB_REPOSITORY || ''; 

export const bucketProperties: BucketPropertiesInterface = {
    name: bucketName ? bucketName.replace('/', '-') : 'sample-bucket',
    bucket: process.env.BUCKET_NAME || process.env.GITHUB_REPOSITORY || 'sample-bucket',
    forceDestroy: true
};

export const backendBucketProperties: BucketPropertiesInterface = {
    name: 'pulumi-backend',
    bucket: 'pulumi-backend',
    forceDestroy: false
};
