const classes: { [key: string]: string } = {"msg": "markup_f8f345 messageContent_f9f2ca"};
function get(c: string): HTMLCollection
{
    const elements: HTMLCollection = document.getElementsByClassName(c);
    return elements;
}
function observeAdd(childClassName: string, func: (className: string, node: Element, mutation: MutationRecord) => void)
{
    const observer: MutationObserver = new MutationObserver(function(mutations) 
    {
        mutations.forEach(function(mutation) 
        {
            mutation.addedNodes.forEach(function(node) 
            {
                if (node instanceof Element) {
                    if (get(childClassName).length > 0) func(childClassName, node, mutation);
                }
            });
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

observeAdd(classes.msg, (className: string, node: Element, mutation: MutationRecord) => {const els: HTMLCollection = get(className); if (els.length === 0) {return;}; const mostEl: Element = els[els.length - 1]; if (mostEl.textContent?.toLowerCase().includes("g")) { (mostEl as HTMLElement).style.backgroundColor = "rgb(255, 255, 0)"; document.title = "The letter G is in presence!" }});
