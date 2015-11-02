import ReactDOM from 'react-dom';
import { convertToReact } from '@yummies/core';

/**
 * 'inherit' from React DOM
 */
const YummiesDOM = Object.create(ReactDOM);

/**
 * .render({ block: 'test' }, document.body, function() {})
 */
YummiesDOM.render = function(json, ...rest) {
    return ReactDOM.render(convertToReact(json), ...rest);
};

export default YummiesDOM;
