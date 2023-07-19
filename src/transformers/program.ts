import type { TSESTree } from '@typescript-eslint/types';
import {TypeNotImplementedError} from "../utils/notImplementedError";
import {isImportDeclaration, transformImportDeclaration} from "./import";
import {isExpressionStatement, transformExpressionStatement} from "./expression";

export function transformProgram(program: TSESTree.Program) {
    return program.body.map((elem: TSESTree.ProgramStatement) => {
        if (isImportDeclaration(elem)) {
            return transformImportDeclaration(elem);
        }
        if (isExpressionStatement(elem)) {
            return transformExpressionStatement(elem);
        }
        throw new TypeNotImplementedError(
            elem.type,
            'Program'
        );
    })
}
