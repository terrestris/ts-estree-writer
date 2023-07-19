import {itWrites} from "./index";

describe('transformers/import', () => {
    itWrites(
        'default import',
        `import IllegalArgumentException from '../../../../java/lang/IllegalArgumentException.js';`
    );
});
