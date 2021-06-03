import { App } from "cdktf";

export interface MyStackConfig {
    name: string,
    region?: string;
}

export interface ServerInterface {
    app: App, 
    id: string, 
    naming?: string
}