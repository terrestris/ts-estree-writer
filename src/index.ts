import type { TSESTree } from '@typescript-eslint/types';
import * as ts from "typescript";
import {transformProgram} from "./transformers/program";

export function writeTsEstree(tree: TSESTree.Program) {
    return writeNode(transformProgram(tree));
}

function writeNode(node: ts.Node|ts.Node[]) {
    const sourceFile = ts.createSourceFile("x.ts", '', ts.ScriptTarget.Latest);
    const printer = ts.createPrinter();
    const nodes = Array.isArray(node) ? node : [node];
    return nodes.map(n =>
        printer.printNode(ts.EmitHint.Unspecified, n, sourceFile)
    ).join('');
}
