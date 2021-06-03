import { Construct } from "constructs";
import { TerraformStack } from "cdktf";
import { AwsProvider, Instance } from "../../.gen/providers/aws";
import { MyStackConfig, ServerInterface } from './types';

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string, config: MyStackConfig) {
    super(scope, id);

    const { region = 'us-east-1' } = config;

    new AwsProvider(this, "aws", {
      region,
    });

    new Instance(this, "Hello", {
      ami: "ami-2757f631",
      instanceType: "t2.micro",
      tags: {
        name: config.name
      }
    });
  }
}

export const server = (props: ServerInterface) => {
    return new MyStack(app, id, { name: naming });
}
