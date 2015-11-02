import { expect } from 'chai';
import YummiesDOMServer from '../../lib/server';

const dummyBlock = { block: 'block' };

describe('yummies-dom/server', () => {
    it('exist', () => {
        expect(YummiesDOMServer).to.exist;
    });

    it('renderToString()', () => {
        expect(
            YummiesDOMServer.renderToString(dummyBlock)
        ).to.be.a('string');
    });

    it('renderToStaticMarkup()', () => {
        expect(
            YummiesDOMServer.renderToStaticMarkup(dummyBlock)
        ).to.be.a('string');
    });
});
