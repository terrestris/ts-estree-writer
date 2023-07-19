import type { TSESTree } from '@typescript-eslint/types';
import * as ts from "typescript";
import {isLiteral, transformLiteral} from "./literal";
import {TypeNotImplementedError} from "../utils/notImplementedError";

export function isExpressionStatement(node: TSESTree.BaseNode): node is TSESTree.ExpressionStatement {
    return node.type === 'ExpressionStatement';
}

export function transformExpressionStatement(node: TSESTree.ExpressionStatement) {
    let expression;
    if (isLiteral(node.expression)) {
        expression = transformLiteral(node.expression);
    } else {
        throw new TypeNotImplementedError(node.type, 'ExpressionStatement');
    }


    return ts.factory.createExpressionStatement(expression);
}
