import type { TSESTree } from '@typescript-eslint/types';
import {writeTsEstree} from "../src";
import {expect} from "chai";
import {parse} from "@typescript-eslint/parser";

export function itWrites(description: string, code: string) {
    it(description, () => {
        const tree = parse(code) as TSESTree.Program;

        if (process.env.DEBUG) {
            console.debug(JSON.stringify(tree, null, 2));
        }

        const written = writeTsEstree(tree);

        expect(written).to.eq(code);
    })
}
