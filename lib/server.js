import ReactDOMServer from 'react-dom/server';
import { convertToReact } from '@yummies/core';

/**
 * 'inherit' from React DOM
 */
const YummiesDOMServer = Object.create(ReactDOMServer);

/**
 * .renderToString({ block: 'test' })
 */
YummiesDOMServer.renderToString = function(json) {
    return ReactDOMServer.renderToString(convertToReact(json));
};

/**
 * .renderToStaticMarkup({ block: 'test' })
 */
YummiesDOMServer.renderToStaticMarkup = function(json) {
    return ReactDOMServer.renderToStaticMarkup(convertToReact(json));
};

export default YummiesDOMServer;
