export interface Config {
  readonly cacheTTL?: number;
  readonly debug?: boolean;
  readonly dialerFallbackDelay?: number;
  readonly dialerKeepAlive?: number;
  readonly dialerTimeout?: number;
  readonly disableCompression?: boolean;
  readonly disableKeepAlives?: boolean;
  readonly disableStrictREST?: boolean;
  readonly endpoints: Endpoint[];
  readonly expectContinueTimeout?: number;
  readonly extraConfig?: { [key: string]: any };
  readonly host: string[];
  readonly idleConnTimeout?: number;
  readonly idleTimeout?: number;
  readonly maxIdleConns?: number;
  readonly maxIdleConnsPerHost?: number;
  readonly name: string;
  readonly outputEncoding?: string;
  readonly plugin?: Plugin;
  readonly port?: number;
  readonly readHeaderTimeout?: number;
  readonly readTimeout?: number;
  readonly responseHeaderTimeout?: number;
  readonly timeout?: number;
  readonly tls?: TLs;
  readonly version?: number;
  readonly writeTimeout?: number;
}

export interface Endpoint {
  readonly backend: Backend[];
  readonly cacheTTL?: number;
  readonly concurrentCalls?: number;
  readonly endpoint: string;
  readonly extraConfig?: { [key: string]: any };
  readonly headersToPass?: string[];
  readonly method: string;
  readonly outputEncoding?: string;
  readonly queryString?: string[];
  readonly timeout?: number;
}

export interface Backend {
  readonly allowList?: string[];
  readonly blacklist?: string[];
  readonly concurrentCalls?: number;
  readonly denyList?: string[];
  readonly encoding?: string;
  readonly extraConfig?: { [key: string]: any };
  readonly group?: string;
  readonly host: string[];
  readonly hostSanitizationDisabled?: boolean;
  readonly isCollection?: boolean;
  readonly mapping?: { [key: string]: string };
  readonly method: string;
  readonly sd?: string;
  readonly target?: string;
  readonly timeout?: number;
  readonly uRLKeys?: string[];
  readonly uRLPattern: string;
  readonly whitelist?: string[];
}

export interface Plugin {
  readonly folder: string;
  readonly pattern: string;
}

export interface TLs {
  readonly cipherSuites: number[];
  readonly curvePreferences: number[];
  readonly enableMTLS: boolean;
  readonly isDisabled: boolean;
  readonly maxVersion: string;
  readonly minVersion: string;
  readonly preferServerCipherSuites: boolean;
  readonly privateKey: string;
  readonly publicKey: string;
}
