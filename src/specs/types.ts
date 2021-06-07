export interface BucketPropertiesInterface {
    name: string,
    args: ArgInterface
}

interface ArgInterface {
    bucket?: string,
    acl?: string, // Values are `private`, `public-read`, `public-read-write`, `aws-exec-read`, `authenticated-read`, and `log-delivery-write`.
    forceDestroy?: boolean,
    tags?: {
        [key: string]: string,
    },
    website?: WebsiteInterface
}

interface WebsiteInterface {
    errorDocument?: string,
    indexDocument?: string,
    redirectAllRequestsTo?: string,
    routingRules?: string
}

export interface DatabasePropertiesInterface {
    allocatedStorage: number,
    engine: string,
    engineVersion: string,
    instanceClass: string,
    name: string,
    parameterGroupName: string,
    password: string,
    skipFinalSnapshot: boolean,
    username: string,
}
