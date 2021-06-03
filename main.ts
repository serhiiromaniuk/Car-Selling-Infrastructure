import { Construct } from 'constructs';
import { App, TerraformStack, RemoteBackend } from 'cdktf';

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // define resources here

  }
}

const app = new App();
const stack = new MyStack(app, 'src');
new RemoteBackend(stack, {
  hostname: 'app.terraform.io',
  organization: 'serhiiromaniuk',
  workspaces: {
    name: 'typescript'
  }
});
app.synth();
