import {
    BucketPropertiesInterface
} from './types';

export const bucketProperties: BucketPropertiesInterface = {
    name: process.env.BUCKET_NAME || process.env.GITHUB_REPOSITORY || 'sample-bucket'
};

export const backendBucketProperties: BucketPropertiesInterface = {
    name: 'pulumi-backend',
    bucket: 'pulumi-backend'
};
