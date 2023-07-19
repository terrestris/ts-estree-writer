import {Program} from "estree";
import * as ts from "typescript";
import {transformProgram} from "./transformers/program";

export function writeTsEstree(tree: Program) {
    return writeNode(transformProgram(tree));
}

function writeNode(node: ts.Node) {
    const sourceFile = ts.createSourceFile("x.ts", '', ts.ScriptTarget.Latest);
    const printer = ts.createPrinter();
    return printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
}
