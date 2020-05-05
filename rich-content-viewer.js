import React from 'react';
import ReactDOM from 'react-dom';
import { WixRichContent } from "@wix/rich-content";
import { RichContentViewer } from "wix-rich-content-viewer";


export class RichContentViewerComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="editor">
                <h2>Rich Content Viewer</h2>
                <WixRichContent >
                    <RichContentViewer initialState={initialState} />
                </WixRichContent>;
            </div>
        );
    }
}

class richContentViewer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        ReactDOM.render(
            <RichContentViewerComponent />,
            this,
        );
    }
}

window.customElements.define('rich-content-viewer', richContentViewer);