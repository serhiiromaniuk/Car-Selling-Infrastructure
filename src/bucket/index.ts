import * as aws from "@pulumi/aws";
import { bucketProperties } from '../specs';
import * as pulumi from "@pulumi/pulumi";
import * as fs from "fs";

const bucket = new aws.s3.Bucket(bucketProperties.name, {
    forceDestroy: bucketProperties.forceDestroy,
    bucket: bucketProperties.bucket
});
const bucketPolicy = new aws.s3.BucketPolicy("bucketPolicy", {
    bucket: bucket.id,
    policy: bucket.arn.apply(bucketArn => JSON.stringify({
        Version: "2012-10-17",
        Statement: [{
            Effect: "Allow",
            Principal: "*",
            Action: [
                "s3:GetObject",
            ],
            Resource: [
                `${bucketArn}/*`,
            ],
        }],
    })),
});

const images = __dirname + '/images';
const uploadedFiles = [];
for (const item of fs.readdirSync(images)) {
    const filePath = require("path").join(images, item);
    const siteObject = new aws.s3.BucketObject(item, {
        bucket: bucket,
        source: new pulumi.asset.FileAsset(filePath)
    });
    uploadedFiles.push(
        bucket.bucketDomainName.apply(name => "http://" + name + '/' + item)
    );
}

export const files = uploadedFiles;
export const bucketOut = bucket;
