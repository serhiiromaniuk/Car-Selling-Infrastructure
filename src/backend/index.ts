import * as aws from "@pulumi/aws";
import { backendBucketProperties } from '../specs';

const bucket = new aws.s3.Bucket(backendBucketProperties.name, backendBucketProperties.args);

export const backend_bucket_name = bucket.bucket;
