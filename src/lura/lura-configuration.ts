import { Endpoint, Config } from "./lura-model";
import { Component } from "../component";
import { JsonFile } from "../json";
import { Project } from "../project";

export interface LuraConfigurationOptions {
  readonly host: Config["host"];
  readonly endpoints: Endpoint[];
}

export class LuraConfiguration extends Component {
  public readonly file: JsonFile;
  public readonly host: Config["host"];
  public readonly endpoints: Endpoint[];
  constructor(
    project: Project,
    // name: string,
    options: LuraConfigurationOptions
  ) {
    super(project);
    this.host = options.host;
    this.endpoints = options.endpoints;

    this.file = new JsonFile(this.project, "lura.json", {
      obj: () => this.renderConfig(),
    });
  }
  public addEndpoint(_endpoint: Endpoint) {
    return;
  }
  private renderConfig(): object {
    return {
      version: 3,
      host: this.host,
      endpoints: this.endpoints,
    };
  }
}
