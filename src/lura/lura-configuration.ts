import { EndpointElement, Config } from "./lura-model";
import { Component } from "../component";
import { JsonFile } from "../json";
import { Project } from "../project";

export interface LuraConfigurationOptions {
  readonly host: Config["host"];
  readonly endpoints?: EndpointElement[];
}

export class LuraConfiguration extends Component {
  public readonly file: JsonFile;
  public readonly host: Config["host"] = [];
  public readonly endpoints?: EndpointElement[] = [];
  constructor(
    project: Project,
    // name: string,
    _options: LuraConfigurationOptions
  ) {
    super(project);
    this.file = new JsonFile(this.project, "lura.json", {
      obj: () => this.renderConfig(),
    });
  }
  public addEndpoint(_endpoint: EndpointElement) {
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
