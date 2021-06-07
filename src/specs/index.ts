import {
    BucketPropertiesInterface,
    DatabasePropertiesInterface
} from './types';

export const projectName = process.env.GITHUB_REPOSITORY || process.env.CI_PROJECT_NAME || 'sample-project';

const key = process.env.SECRET_KEY || '635266556A586E327235753778214125442A472D4B6150645367566B59703373';

export const usersList = [
    'serhii.romaniuk.here@gmail.com',
    'pizdecizada@gmail.com',
    'nazar2501babij@gmail.com',
    'andriykolodiy10@gmail.com'
];

const name = process.env.BUCKET_NAME || process.env.GITHUB_REPOSITORY || process.env.CI_PROJECT_NAME || false; 
const defaultName = 'sample-bucket';
const bucketName = name ? name.replace('/', '-').toLocaleLowerCase().slice(0, 63) : defaultName;

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

export const databaseProperties: DatabasePropertiesInterface = {
    allocatedStorage: 10,
    engine: "mysql",
    engineVersion: "5.7",
    instanceClass: "db.t3.micro",
    name: projectName,
    parameterGroupName: "default.mysql5.7",
    password: Buffer.from(usersList[0] + key).toString('hex'),
    skipFinalSnapshot: true,
    username: usersList,
} 
