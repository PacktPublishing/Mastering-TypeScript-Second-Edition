import * as React from "react";
import * as ReactDOM from "react-dom";

import { ArrayView, ClickableItem } 
    from "./ReactApp";

let ClickableItemArray : ClickableItem[] = [
    { id: 1, displayName : "firstItem"},
    { id: 2, displayName : "secondItem"},
    { id: 3, displayName : "thirdItem"},
]; 

ReactDOM.render(
    <ArrayView items={ClickableItemArray} 
        title="Select an option:" />,
    document.getElementById("example")
);