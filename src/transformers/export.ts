import type { TSESTree } from '@typescript-eslint/types';
import * as ts from 'typescript';
import {isLiteral, transformLiteral} from "./literal";
import {TypeNotImplementedError} from "../utils/notImplementedError";

export function isExportDefaultDeclaration(node: TSESTree.BaseNode): node is TSESTree.ExportDefaultDeclaration {
    return node.type === 'ExportDefaultDeclaration';
}

export function transformDefaultExportDeclarations(node: TSESTree.DefaultExportDeclarations) {
    if (isLiteral(node)) {
        return transformLiteral(node);
    }
    throw new TypeNotImplementedError(node.type, 'DefaultExportDeclarations');
}

export function transformExportDefaultDeclaration(node: TSESTree.ExportDefaultDeclaration) {
    return ts.factory.createExportAssignment(
        undefined,
        undefined,
        transformDefaultExportDeclarations(node.declaration)
    );
}
