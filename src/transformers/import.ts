import {ImportDeclaration, ImportDefaultSpecifier, ImportNamespaceSpecifier, ImportSpecifier} from "estree";
import * as ts from "typescript";
import {assertsString} from "../utils/asserts";

export function transformImportClause(nodes: Array<ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier>): ts.ImportClause {
    if (nodes.length > 1 || nodes[0].type !== 'ImportDefaultSpecifier') {
        throw new Error('Only default imports are implemented');
    }
    return ts.factory.createImportClause(
        false,
        ts.factory.createIdentifier(nodes[0].local.name),
        undefined
    );
}

export function transformImportDeclaration(node: ImportDeclaration): ts.ImportDeclaration {
    const value = node.source.value;
    assertsString(value);
    return ts.factory.createImportDeclaration(
        undefined,
        transformImportClause(node.specifiers),
        ts.factory.createStringLiteral(value, true),
        undefined
    );
}
