import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import { projectName } from '../specs';

const defaultInstance = new aws.rds.Instance(projectName, {
    allocatedStorage: 10,
    engine: "mysql",
    engineVersion: "5.7",
    instanceClass: "db.t3.micro",
    name: pulumi.interpolate``,
    parameterGroupName: "default.mysql5.7",
    password: "foobarbaz",
    skipFinalSnapshot: true,
    username: "foo",
});


