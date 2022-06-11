// Packages.
const _ = require('lodash');

global.FetchEvent = class FetchEvent {
    /**
     * @param {*} url
     * @param {*} options
     * @returns
     */
    constructor(url, options) {
        // Set defaults.
        options = _.defaults(options, { callback: () => {}, isHijack: false });

        const { callback, isHijack } = options;

        // Set request URL to attach event to.
        this.url = url;

        // Set callback.
        this.callback = callback;

        // Set whether or not we're hijacking this request.
        this.isHijack = isHijack;

        // Get current fetch method.
        this.currentFetchMethod = window.fetch;

        // Update global fetch method.
        this.updateFetchMethod();

        return this;
    }

    /**
     * Update global fetch method.
     */
    updateFetchMethod() {
        const { currentFetchMethod, url, callback, isHijack } = this;

        const controller = new AbortController(),
            { signal } = controller;

        // Update fetch method with callback.
        window.fetch = function () {
            const isRequestUrlMatch = arguments[0].includes(url);

            // If the request URL is a match with the event URL.
            if (isRequestUrlMatch) {
                // Add an abort signal to the fetch event which can be used to stop fetch event.
                arguments[1] = _.merge({ signal }, arguments[1]);

                // Create modified promise with new abort controller signal.
                const response = currentFetchMethod.apply(this, arguments);

                // If we're hijacking a request.
                if (isHijack) {
                    // Stop the request from firing at all.
                    controller.abort();

                    // Remove aborted signal from original request data.
                    delete arguments[1].signal;

                    // Run callback.
                    callback(arguments[1]);

                    // Stop execution.
                    return;
                }

                // Otherwise, run callback after request has been made with request and response data.
                response.then((res) => {
                    callback(arguments[1], res);
                });

                // Return modified promise. = $
                return response;
            } else {
                // Return unmodified promise.
                return currentFetchMethod.apply(this, arguments);
            }
        }
    }
}
