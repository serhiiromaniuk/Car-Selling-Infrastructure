import { server } from './bucket';
import { App } from "cdktf";


const app = new App();
server(app, 'sample', 'first app');
app.synth();