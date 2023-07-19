import * as ts from "typescript";
import {assertsString} from "../utils/asserts";
import {TypeNotImplementedError} from "../utils/notImplementedError";
import type { TSESTree } from '@typescript-eslint/types';
import {transformLiteral} from "./literal";

export function isImportDeclaration(node: TSESTree.BaseNode): node is TSESTree.ImportDeclaration {
    return node.type === 'ImportDeclaration';
}

export function transformImportClause(nodes: Array<TSESTree.ImportSpecifier | TSESTree.ImportDefaultSpecifier | TSESTree.ImportNamespaceSpecifier>): ts.ImportClause {
    if (nodes.length > 1) {
        throw new Error('Multiple Imports in one statement are not implemented');
    }
    if (nodes[0].type !== 'ImportDefaultSpecifier') {
        throw new TypeNotImplementedError(nodes[0].type, 'ImportClause');
    }
    return ts.factory.createImportClause(
        false,
        ts.factory.createIdentifier(nodes[0].local.name),
        undefined
    );
}

export function transformImportDeclaration(node: TSESTree.ImportDeclaration): ts.ImportDeclaration {
    return ts.factory.createImportDeclaration(
        undefined,
        transformImportClause(node.specifiers),
        transformLiteral(node.source),
        undefined
    );
}
