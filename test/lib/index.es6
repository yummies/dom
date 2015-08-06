import { expect } from 'chai';
import TestUtils from 'react/lib/ReactTestUtils';
import YummiesDOM from '../../lib/index';

const dummyBlock = { block: 'block' };

describe('yummies-dom', () => {
    it('exist', () => {
        expect(YummiesDOM).to.exist;
    });

    it('render()', () => {
        expect(
            TestUtils.isDOMComponent(
                YummiesDOM.render(
                    dummyBlock,
                    document.createElement('div')
                )
            )
        ).to.be.true;
    });
});
