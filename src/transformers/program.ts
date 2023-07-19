import {ImportDeclaration, Program} from "estree";
import {transformImportDeclaration} from "./import";

export function transformProgram(program: Program) {
    return transformImportDeclaration(program.body[0] as ImportDeclaration);
}
