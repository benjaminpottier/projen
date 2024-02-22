# `lura` Submodule <a name="`lura` Submodule" id="projen.lura"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LuraConfiguration <a name="LuraConfiguration" id="projen.lura.LuraConfiguration"></a>

#### Initializers <a name="Initializers" id="projen.lura.LuraConfiguration.Initializer"></a>

```typescript
import { lura } from 'projen'

new lura.LuraConfiguration(project: Project, _options: LuraConfigurationOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.lura.LuraConfiguration.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.lura.LuraConfiguration.Initializer.parameter._options">_options</a></code> | <code><a href="#projen.lura.LuraConfigurationOptions">LuraConfigurationOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen.lura.LuraConfiguration.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `_options`<sup>Required</sup> <a name="_options" id="projen.lura.LuraConfiguration.Initializer.parameter._options"></a>

- *Type:* <a href="#projen.lura.LuraConfigurationOptions">LuraConfigurationOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.lura.LuraConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen.lura.LuraConfiguration.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen.lura.LuraConfiguration.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen.lura.LuraConfiguration.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#projen.lura.LuraConfiguration.addEndpoint">addEndpoint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="projen.lura.LuraConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen.lura.LuraConfiguration.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen.lura.LuraConfiguration.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen.lura.LuraConfiguration.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addEndpoint` <a name="addEndpoint" id="projen.lura.LuraConfiguration.addEndpoint"></a>

```typescript
public addEndpoint(_endpoint: EndpointElement): void
```

###### `_endpoint`<sup>Required</sup> <a name="_endpoint" id="projen.lura.LuraConfiguration.addEndpoint.parameter._endpoint"></a>

- *Type:* <a href="#projen.lura.EndpointElement">EndpointElement</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen.lura.LuraConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen.lura.LuraConfiguration.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen.lura.LuraConfiguration.isConstruct"></a>

```typescript
import { lura } from 'projen'

lura.LuraConfiguration.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen.lura.LuraConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen.lura.LuraConfiguration.isComponent"></a>

```typescript
import { lura } from 'projen'

lura.LuraConfiguration.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen.lura.LuraConfiguration.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.lura.LuraConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen.lura.LuraConfiguration.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen.lura.LuraConfiguration.property.file">file</a></code> | <code>projen.JsonFile</code> | *No description.* |
| <code><a href="#projen.lura.LuraConfiguration.property.host">host</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#projen.lura.LuraConfiguration.property.endpoints">endpoints</a></code> | <code><a href="#projen.lura.EndpointElement">EndpointElement</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen.lura.LuraConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen.lura.LuraConfiguration.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `file`<sup>Required</sup> <a name="file" id="projen.lura.LuraConfiguration.property.file"></a>

```typescript
public readonly file: JsonFile;
```

- *Type:* projen.JsonFile

---

##### `host`<sup>Required</sup> <a name="host" id="projen.lura.LuraConfiguration.property.host"></a>

```typescript
public readonly host: string[];
```

- *Type:* string[]

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="projen.lura.LuraConfiguration.property.endpoints"></a>

```typescript
public readonly endpoints: EndpointElement[];
```

- *Type:* <a href="#projen.lura.EndpointElement">EndpointElement</a>[]

---


## Structs <a name="Structs" id="Structs"></a>

### BackendElement <a name="BackendElement" id="projen.lura.BackendElement"></a>

#### Initializer <a name="Initializer" id="projen.lura.BackendElement.Initializer"></a>

```typescript
import { lura } from 'projen'

const backendElement: lura.BackendElement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.lura.BackendElement.property.allowList">allowList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#projen.lura.BackendElement.property.blacklist">blacklist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#projen.lura.BackendElement.property.concurrentCalls">concurrentCalls</a></code> | <code>number</code> | *No description.* |
| <code><a href="#projen.lura.BackendElement.property.denyList">denyList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#projen.lura.BackendElement.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.lura.BackendElement.property.extraConfig">extraConfig</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#projen.lura.BackendElement.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.lura.BackendElement.property.host">host</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#projen.lura.BackendElement.property.hostSanitizationDisabled">hostSanitizationDisabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.lura.BackendElement.property.isCollection">isCollection</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.lura.BackendElement.property.mapping">mapping</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#projen.lura.BackendElement.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.lura.BackendElement.property.sd">sd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.lura.BackendElement.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.lura.BackendElement.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#projen.lura.BackendElement.property.uRLKeys">uRLKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#projen.lura.BackendElement.property.uRLPattern">uRLPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.lura.BackendElement.property.whitelist">whitelist</a></code> | <code>string[]</code> | *No description.* |

---

##### `allowList`<sup>Required</sup> <a name="allowList" id="projen.lura.BackendElement.property.allowList"></a>

```typescript
public readonly allowList: string[];
```

- *Type:* string[]

---

##### `blacklist`<sup>Required</sup> <a name="blacklist" id="projen.lura.BackendElement.property.blacklist"></a>

```typescript
public readonly blacklist: string[];
```

- *Type:* string[]

---

##### `concurrentCalls`<sup>Required</sup> <a name="concurrentCalls" id="projen.lura.BackendElement.property.concurrentCalls"></a>

```typescript
public readonly concurrentCalls: number;
```

- *Type:* number

---

##### `denyList`<sup>Required</sup> <a name="denyList" id="projen.lura.BackendElement.property.denyList"></a>

```typescript
public readonly denyList: string[];
```

- *Type:* string[]

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="projen.lura.BackendElement.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `extraConfig`<sup>Required</sup> <a name="extraConfig" id="projen.lura.BackendElement.property.extraConfig"></a>

```typescript
public readonly extraConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `group`<sup>Required</sup> <a name="group" id="projen.lura.BackendElement.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="projen.lura.BackendElement.property.host"></a>

```typescript
public readonly host: string[];
```

- *Type:* string[]

---

##### `hostSanitizationDisabled`<sup>Required</sup> <a name="hostSanitizationDisabled" id="projen.lura.BackendElement.property.hostSanitizationDisabled"></a>

```typescript
public readonly hostSanitizationDisabled: boolean;
```

- *Type:* boolean

---

##### `isCollection`<sup>Required</sup> <a name="isCollection" id="projen.lura.BackendElement.property.isCollection"></a>

```typescript
public readonly isCollection: boolean;
```

- *Type:* boolean

---

##### `mapping`<sup>Required</sup> <a name="mapping" id="projen.lura.BackendElement.property.mapping"></a>

```typescript
public readonly mapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `method`<sup>Required</sup> <a name="method" id="projen.lura.BackendElement.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `sd`<sup>Required</sup> <a name="sd" id="projen.lura.BackendElement.property.sd"></a>

```typescript
public readonly sd: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="projen.lura.BackendElement.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="projen.lura.BackendElement.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `uRLKeys`<sup>Required</sup> <a name="uRLKeys" id="projen.lura.BackendElement.property.uRLKeys"></a>

```typescript
public readonly uRLKeys: string[];
```

- *Type:* string[]

---

##### `uRLPattern`<sup>Required</sup> <a name="uRLPattern" id="projen.lura.BackendElement.property.uRLPattern"></a>

```typescript
public readonly uRLPattern: string;
```

- *Type:* string

---

##### `whitelist`<sup>Required</sup> <a name="whitelist" id="projen.lura.BackendElement.property.whitelist"></a>

```typescript
public readonly whitelist: string[];
```

- *Type:* string[]

---

### Config <a name="Config" id="projen.lura.Config"></a>

#### Initializer <a name="Initializer" id="projen.lura.Config.Initializer"></a>

```typescript
import { lura } from 'projen'

const config: lura.Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.lura.Config.property.cacheTTL">cacheTTL</a></code> | <code>number</code> | *No description.* |
| <code><a href="#projen.lura.Config.property.debug">debug</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.lura.Config.property.dialerFallbackDelay">dialerFallbackDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#projen.lura.Config.property.dialerKeepAlive">dialerKeepAlive</a></code> | <code>number</code> | *No description.* |
| <code><a href="#projen.lura.Config.property.dialerTimeout">dialerTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#projen.lura.Config.property.disableCompression">disableCompression</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.lura.Config.property.disableKeepAlives">disableKeepAlives</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.lura.Config.property.disableStrictREST">disableStrictREST</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.lura.Config.property.endpoints">endpoints</a></code> | <code><a href="#projen.lura.EndpointElement">EndpointElement</a>[]</code> | *No description.* |
| <code><a href="#projen.lura.Config.property.expectContinueTimeout">expectContinueTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#projen.lura.Config.property.extraConfig">extraConfig</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#projen.lura.Config.property.host">host</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#projen.lura.Config.property.idleConnTimeout">idleConnTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#projen.lura.Config.property.idleTimeout">idleTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#projen.lura.Config.property.maxIdleConns">maxIdleConns</a></code> | <code>number</code> | *No description.* |
| <code><a href="#projen.lura.Config.property.maxIdleConnsPerHost">maxIdleConnsPerHost</a></code> | <code>number</code> | *No description.* |
| <code><a href="#projen.lura.Config.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.lura.Config.property.outputEncoding">outputEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.lura.Config.property.plugin">plugin</a></code> | <code><a href="#projen.lura.Plugin">Plugin</a></code> | *No description.* |
| <code><a href="#projen.lura.Config.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#projen.lura.Config.property.readHeaderTimeout">readHeaderTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#projen.lura.Config.property.readTimeout">readTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#projen.lura.Config.property.responseHeaderTimeout">responseHeaderTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#projen.lura.Config.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#projen.lura.Config.property.tls">tls</a></code> | <code><a href="#projen.lura.TLs">TLs</a></code> | *No description.* |
| <code><a href="#projen.lura.Config.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#projen.lura.Config.property.writeTimeout">writeTimeout</a></code> | <code>number</code> | *No description.* |

---

##### `cacheTTL`<sup>Required</sup> <a name="cacheTTL" id="projen.lura.Config.property.cacheTTL"></a>

```typescript
public readonly cacheTTL: number;
```

- *Type:* number

---

##### `debug`<sup>Required</sup> <a name="debug" id="projen.lura.Config.property.debug"></a>

```typescript
public readonly debug: boolean;
```

- *Type:* boolean

---

##### `dialerFallbackDelay`<sup>Required</sup> <a name="dialerFallbackDelay" id="projen.lura.Config.property.dialerFallbackDelay"></a>

```typescript
public readonly dialerFallbackDelay: number;
```

- *Type:* number

---

##### `dialerKeepAlive`<sup>Required</sup> <a name="dialerKeepAlive" id="projen.lura.Config.property.dialerKeepAlive"></a>

```typescript
public readonly dialerKeepAlive: number;
```

- *Type:* number

---

##### `dialerTimeout`<sup>Required</sup> <a name="dialerTimeout" id="projen.lura.Config.property.dialerTimeout"></a>

```typescript
public readonly dialerTimeout: number;
```

- *Type:* number

---

##### `disableCompression`<sup>Required</sup> <a name="disableCompression" id="projen.lura.Config.property.disableCompression"></a>

```typescript
public readonly disableCompression: boolean;
```

- *Type:* boolean

---

##### `disableKeepAlives`<sup>Required</sup> <a name="disableKeepAlives" id="projen.lura.Config.property.disableKeepAlives"></a>

```typescript
public readonly disableKeepAlives: boolean;
```

- *Type:* boolean

---

##### `disableStrictREST`<sup>Required</sup> <a name="disableStrictREST" id="projen.lura.Config.property.disableStrictREST"></a>

```typescript
public readonly disableStrictREST: boolean;
```

- *Type:* boolean

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="projen.lura.Config.property.endpoints"></a>

```typescript
public readonly endpoints: EndpointElement[];
```

- *Type:* <a href="#projen.lura.EndpointElement">EndpointElement</a>[]

---

##### `expectContinueTimeout`<sup>Required</sup> <a name="expectContinueTimeout" id="projen.lura.Config.property.expectContinueTimeout"></a>

```typescript
public readonly expectContinueTimeout: number;
```

- *Type:* number

---

##### `extraConfig`<sup>Required</sup> <a name="extraConfig" id="projen.lura.Config.property.extraConfig"></a>

```typescript
public readonly extraConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `host`<sup>Required</sup> <a name="host" id="projen.lura.Config.property.host"></a>

```typescript
public readonly host: string[];
```

- *Type:* string[]

---

##### `idleConnTimeout`<sup>Required</sup> <a name="idleConnTimeout" id="projen.lura.Config.property.idleConnTimeout"></a>

```typescript
public readonly idleConnTimeout: number;
```

- *Type:* number

---

##### `idleTimeout`<sup>Required</sup> <a name="idleTimeout" id="projen.lura.Config.property.idleTimeout"></a>

```typescript
public readonly idleTimeout: number;
```

- *Type:* number

---

##### `maxIdleConns`<sup>Required</sup> <a name="maxIdleConns" id="projen.lura.Config.property.maxIdleConns"></a>

```typescript
public readonly maxIdleConns: number;
```

- *Type:* number

---

##### `maxIdleConnsPerHost`<sup>Required</sup> <a name="maxIdleConnsPerHost" id="projen.lura.Config.property.maxIdleConnsPerHost"></a>

```typescript
public readonly maxIdleConnsPerHost: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="projen.lura.Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputEncoding`<sup>Required</sup> <a name="outputEncoding" id="projen.lura.Config.property.outputEncoding"></a>

```typescript
public readonly outputEncoding: string;
```

- *Type:* string

---

##### `plugin`<sup>Required</sup> <a name="plugin" id="projen.lura.Config.property.plugin"></a>

```typescript
public readonly plugin: Plugin;
```

- *Type:* <a href="#projen.lura.Plugin">Plugin</a>

---

##### `port`<sup>Required</sup> <a name="port" id="projen.lura.Config.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `readHeaderTimeout`<sup>Required</sup> <a name="readHeaderTimeout" id="projen.lura.Config.property.readHeaderTimeout"></a>

```typescript
public readonly readHeaderTimeout: number;
```

- *Type:* number

---

##### `readTimeout`<sup>Required</sup> <a name="readTimeout" id="projen.lura.Config.property.readTimeout"></a>

```typescript
public readonly readTimeout: number;
```

- *Type:* number

---

##### `responseHeaderTimeout`<sup>Required</sup> <a name="responseHeaderTimeout" id="projen.lura.Config.property.responseHeaderTimeout"></a>

```typescript
public readonly responseHeaderTimeout: number;
```

- *Type:* number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="projen.lura.Config.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `tls`<sup>Required</sup> <a name="tls" id="projen.lura.Config.property.tls"></a>

```typescript
public readonly tls: TLs;
```

- *Type:* <a href="#projen.lura.TLs">TLs</a>

---

##### `version`<sup>Required</sup> <a name="version" id="projen.lura.Config.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `writeTimeout`<sup>Required</sup> <a name="writeTimeout" id="projen.lura.Config.property.writeTimeout"></a>

```typescript
public readonly writeTimeout: number;
```

- *Type:* number

---

### EndpointElement <a name="EndpointElement" id="projen.lura.EndpointElement"></a>

#### Initializer <a name="Initializer" id="projen.lura.EndpointElement.Initializer"></a>

```typescript
import { lura } from 'projen'

const endpointElement: lura.EndpointElement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.lura.EndpointElement.property.backend">backend</a></code> | <code><a href="#projen.lura.BackendElement">BackendElement</a>[]</code> | *No description.* |
| <code><a href="#projen.lura.EndpointElement.property.cacheTTL">cacheTTL</a></code> | <code>number</code> | *No description.* |
| <code><a href="#projen.lura.EndpointElement.property.concurrentCalls">concurrentCalls</a></code> | <code>number</code> | *No description.* |
| <code><a href="#projen.lura.EndpointElement.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.lura.EndpointElement.property.extraConfig">extraConfig</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#projen.lura.EndpointElement.property.headersToPass">headersToPass</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#projen.lura.EndpointElement.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.lura.EndpointElement.property.outputEncoding">outputEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.lura.EndpointElement.property.queryString">queryString</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#projen.lura.EndpointElement.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |

---

##### `backend`<sup>Required</sup> <a name="backend" id="projen.lura.EndpointElement.property.backend"></a>

```typescript
public readonly backend: BackendElement[];
```

- *Type:* <a href="#projen.lura.BackendElement">BackendElement</a>[]

---

##### `cacheTTL`<sup>Required</sup> <a name="cacheTTL" id="projen.lura.EndpointElement.property.cacheTTL"></a>

```typescript
public readonly cacheTTL: number;
```

- *Type:* number

---

##### `concurrentCalls`<sup>Required</sup> <a name="concurrentCalls" id="projen.lura.EndpointElement.property.concurrentCalls"></a>

```typescript
public readonly concurrentCalls: number;
```

- *Type:* number

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="projen.lura.EndpointElement.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `extraConfig`<sup>Required</sup> <a name="extraConfig" id="projen.lura.EndpointElement.property.extraConfig"></a>

```typescript
public readonly extraConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `headersToPass`<sup>Required</sup> <a name="headersToPass" id="projen.lura.EndpointElement.property.headersToPass"></a>

```typescript
public readonly headersToPass: string[];
```

- *Type:* string[]

---

##### `method`<sup>Required</sup> <a name="method" id="projen.lura.EndpointElement.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `outputEncoding`<sup>Required</sup> <a name="outputEncoding" id="projen.lura.EndpointElement.property.outputEncoding"></a>

```typescript
public readonly outputEncoding: string;
```

- *Type:* string

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="projen.lura.EndpointElement.property.queryString"></a>

```typescript
public readonly queryString: string[];
```

- *Type:* string[]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="projen.lura.EndpointElement.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

### LuraConfigurationOptions <a name="LuraConfigurationOptions" id="projen.lura.LuraConfigurationOptions"></a>

#### Initializer <a name="Initializer" id="projen.lura.LuraConfigurationOptions.Initializer"></a>

```typescript
import { lura } from 'projen'

const luraConfigurationOptions: lura.LuraConfigurationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.lura.LuraConfigurationOptions.property.host">host</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#projen.lura.LuraConfigurationOptions.property.endpoints">endpoints</a></code> | <code><a href="#projen.lura.EndpointElement">EndpointElement</a>[]</code> | *No description.* |

---

##### `host`<sup>Required</sup> <a name="host" id="projen.lura.LuraConfigurationOptions.property.host"></a>

```typescript
public readonly host: string[];
```

- *Type:* string[]

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="projen.lura.LuraConfigurationOptions.property.endpoints"></a>

```typescript
public readonly endpoints: EndpointElement[];
```

- *Type:* <a href="#projen.lura.EndpointElement">EndpointElement</a>[]

---

### Plugin <a name="Plugin" id="projen.lura.Plugin"></a>

#### Initializer <a name="Initializer" id="projen.lura.Plugin.Initializer"></a>

```typescript
import { lura } from 'projen'

const plugin: lura.Plugin = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.lura.Plugin.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.lura.Plugin.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |

---

##### `folder`<sup>Required</sup> <a name="folder" id="projen.lura.Plugin.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="projen.lura.Plugin.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

### TLs <a name="TLs" id="projen.lura.TLs"></a>

#### Initializer <a name="Initializer" id="projen.lura.TLs.Initializer"></a>

```typescript
import { lura } from 'projen'

const tLs: lura.TLs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen.lura.TLs.property.cipherSuites">cipherSuites</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#projen.lura.TLs.property.curvePreferences">curvePreferences</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#projen.lura.TLs.property.enableMTLS">enableMTLS</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.lura.TLs.property.isDisabled">isDisabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.lura.TLs.property.maxVersion">maxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.lura.TLs.property.minVersion">minVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.lura.TLs.property.preferServerCipherSuites">preferServerCipherSuites</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen.lura.TLs.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen.lura.TLs.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |

---

##### `cipherSuites`<sup>Required</sup> <a name="cipherSuites" id="projen.lura.TLs.property.cipherSuites"></a>

```typescript
public readonly cipherSuites: number[];
```

- *Type:* number[]

---

##### `curvePreferences`<sup>Required</sup> <a name="curvePreferences" id="projen.lura.TLs.property.curvePreferences"></a>

```typescript
public readonly curvePreferences: number[];
```

- *Type:* number[]

---

##### `enableMTLS`<sup>Required</sup> <a name="enableMTLS" id="projen.lura.TLs.property.enableMTLS"></a>

```typescript
public readonly enableMTLS: boolean;
```

- *Type:* boolean

---

##### `isDisabled`<sup>Required</sup> <a name="isDisabled" id="projen.lura.TLs.property.isDisabled"></a>

```typescript
public readonly isDisabled: boolean;
```

- *Type:* boolean

---

##### `maxVersion`<sup>Required</sup> <a name="maxVersion" id="projen.lura.TLs.property.maxVersion"></a>

```typescript
public readonly maxVersion: string;
```

- *Type:* string

---

##### `minVersion`<sup>Required</sup> <a name="minVersion" id="projen.lura.TLs.property.minVersion"></a>

```typescript
public readonly minVersion: string;
```

- *Type:* string

---

##### `preferServerCipherSuites`<sup>Required</sup> <a name="preferServerCipherSuites" id="projen.lura.TLs.property.preferServerCipherSuites"></a>

```typescript
public readonly preferServerCipherSuites: boolean;
```

- *Type:* boolean

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="projen.lura.TLs.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="projen.lura.TLs.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---



