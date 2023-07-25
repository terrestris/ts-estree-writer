import type { TSESTree } from '@typescript-eslint/types';
import {TypeNotImplementedError} from "../utils/notImplementedError";
import {isImportDeclaration, transformImportDeclaration} from "./import";
import {isExpressionStatement, transformExpressionStatement} from "./expression";
import {isExportDefaultDeclaration, transformExportDefaultDeclaration} from "./export";

export function transformProgram(program: TSESTree.Program) {
    return program.body.map((elem: TSESTree.ProgramStatement) => {
        if (isImportDeclaration(elem)) {
            return transformImportDeclaration(elem);
        }
        if (isExpressionStatement(elem)) {
            return transformExpressionStatement(elem);
        }
        if (isExportDefaultDeclaration(elem)) {
            return transformExportDefaultDeclaration(elem);
        }
        throw new TypeNotImplementedError(
            elem.type,
            'Program'
        );
    })
}
