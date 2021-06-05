export interface BucketPropertiesInterface {
    name: string,
    bucket?: string,
    acl?: string,
    forceDestroy?: boolean,
    tags?: {
        [key: string]: string,
    },
    website?: {
        errorDocument?: string,
        indexDocument?: string,
        redirectAllRequestsTo?: string,
        routingRules?: string
    }
}