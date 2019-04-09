// Type definitions for react-native-document-picker 3.0
// Project: https://github.com/Elyx0/react-native-document-picker#v3
// Definitions by: Alex Newark <https://github.com/Alex-231>
// Definitions: https://github.com/Alex-231/types_react-native-document-picker


export function pick(options: Options): Promise<Result>;

export interface Options {
    type: string[];
}

export interface Result {
    uri: string;
    type: string;
    name: string;
    size: number;
}