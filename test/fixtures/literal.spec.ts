import {itWrites} from "../index";

describe('transformers/literal', () => {
    itWrites(
        'string literal',
        `'string';`
    );
})
