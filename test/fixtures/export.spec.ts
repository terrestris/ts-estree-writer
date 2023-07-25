import {itWrites} from "../index";

describe('transformers/export', () => {
    itWrites(
        'default export',
        `export default 'string';`
    );
});
