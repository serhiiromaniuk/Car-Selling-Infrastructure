import * as aws from "@pulumi/aws";
import { backendBucketProperties } from '../specs';

const bucket = new aws.s3.Bucket(backendBucketProperties.name, {
    forceDestroy: backendBucketProperties.forceDestroy,
    bucket: backendBucketProperties.bucket
});

export const bucketName = bucket.bucket;
