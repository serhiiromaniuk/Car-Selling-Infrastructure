import {
    BucketPropertiesInterface
} from './types';

export const bucketProperties: BucketPropertiesInterface = {
    name: process.env.BUCKET_NAME || process.env.GITHUB_REPOSITORY || 'sample-bucket',
    bucket: process.env.BUCKET_NAME || process.env.GITHUB_REPOSITORY || 'sample-bucket',
    forceDestroy: true
};

export const backendBucketProperties: BucketPropertiesInterface = {
    name: 'pulumi-backend',
    bucket: 'pulumi-backend',
    forceDestroy: false
};
