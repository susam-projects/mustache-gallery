export function bindTargetedHandlers($node, eventName, handlers) {
    $node.on(eventName, (event) => {
        const $target = $(event.target);
        for (const handler of handlers) {
            if ($target.closest(handler.selector).length) {
                handler.handle($target, event);
                break;
            }
        }
    });
}

export function bindKeyEventHandlers($node, eventName, keyHandlers) {
    $node.on(eventName, (event) => {
        for (const handler of keyHandlers) {
            if (handler.keys.includes(event.key)) {
                handler.handle(event.key, event);
            }
        }
    });
}
