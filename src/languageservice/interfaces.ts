/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export interface IStatusView {
    installingService(fileUri: string): void;
    serviceInstalled(fileUri: string): void;
    serviceInstallationFailed(fileUri: string): void;
}

export interface IConfig {
    getSqlToolsServiceDownloadUrl(): string;
    getSqlToolsInstallDirectory(): string;
    getSqlToolsInstallDirectory(): string;
    getSqlToolsExecutableFiles(): string[];
    getSqlToolsPackageVersion(): string;
    getExtensionConfig(key: string, defaultValue?: any): any;
    getWorkspaceConfig(key: string, defaultValue?: any): any;
    getSqlToolsConfigValue(configKey: string): any;
}

export interface IExtensionWrapper {
    getActiveTextEditorUri(): string;
}

export interface ILogger {
    logDebug(message: string): void;
}
