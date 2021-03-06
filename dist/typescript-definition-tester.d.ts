// Generated by dts-bundle v0.2.0

declare module 'typescript-definition-tester' {
    import * as ts from "typescript";
    export function compile(fileNames: string[], options: ts.CompilerOptions, done: Function): void;
    export function compileDirectory(path: string, done: Function): void;
    export function compileDirectory(path: string, options: ts.CompilerOptions, done: Function): void;
    export function compileDirectory(path: string, filter: (fileName: string) => boolean, done: Function): void;
    export function compileDirectory(path: string, filter: (fileName: string) => boolean, options: ts.CompilerOptions, done: Function): void;
    export function walk(dir: string, done: (err: any, results?: string[]) => void): void;
    export function walk(dir: string, filter: (fileName: string) => boolean, done: (err: any, results?: string[]) => void): void;
}

