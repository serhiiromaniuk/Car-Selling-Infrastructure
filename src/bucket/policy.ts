import * as aws from '@pulumi/aws';
import { bucketProperties, usersList } from '../specs';

const bucketName = bucketProperties.name;
const policyName = bucketProperties.name + '-policy';

const policy = new aws.iam.Policy(policyName, {
    description: 'Access to ' + bucketName,
    policy: {
        Version: '2012-10-17',
        Statement: [{
            Sid: 'AllowUserToSeeBucketListInTheConsole',
            Action: ['s3:ListAllMyBuckets', 's3:GetBucketLocation'],
            Effect: 'Allow',
            Resource: ['arn:aws:s3:::*']
        }, {
            Sid: 'AllowAllS3ActionsInBucket',
            Effect: 'Allow',
            Action: ['s3:*'],
            Resource: ['arn:aws:s3:::' + bucketName + '/*']
        }]
       }
});

const test_attach = new aws.iam.UserPolicyAttachment(policyName + '-attachment', {
    user: usersList[1],
    policyArn: policy.arn.apply(arn => arn),
});

export const policyArn = test_attach.policyArn;
export const user = test_attach.user;
