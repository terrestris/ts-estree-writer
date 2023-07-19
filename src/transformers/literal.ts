import type { TSESTree } from '@typescript-eslint/types';
import * as ts from "typescript";
import {TypeNotImplementedError} from "../utils/notImplementedError";

export function isLiteral(node: TSESTree.BaseNode): node is TSESTree.Literal {
    return node.type === 'Literal';
}

export function transformLiteral(literal: TSESTree.Literal) {
    if (typeof literal.value === 'string') {
        return ts.factory.createStringLiteral(literal.value, true);
    }
    throw new TypeNotImplementedError(typeof literal.value, 'Literal');
}
