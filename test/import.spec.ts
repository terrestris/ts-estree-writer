import {Program} from "estree";
import {expect} from "chai";
import {parseForESLint} from "@typescript-eslint/parser";
import {writeTsEstree} from "../src/";

describe('writers/import', () => {
    it('writes default import', () => {
        const code = `import IllegalArgumentException from '../../../../java/lang/IllegalArgumentException.js';`;

        const tree = parseForESLint(code).ast as Program;

        const written = writeTsEstree(tree);

        expect(written).to.eq(code);
    });
});
