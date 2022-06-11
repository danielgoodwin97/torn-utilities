// Packages.
const delay = require('delay');

global.RateLimitedApi = class RateLimitedApi {
    /**
     * @param {*} key
     */
    constructor(key) {
        // Assign API key.
        this.key = key;

        // Last time an API request was made.
        this.timeLastRan = new Date();

        // Return request method so user can start making requests.
        return this.request.bind(this);
    }

    /**
     * Make a request using the official Torn API.
     * @param {*} options
     * @returns
     */
    async request({ area, selections, id }) {
        const url = `https://api.torn.com/${area}/${id ?? ''}?selections=${selections}&key=${this.key}`;

        // Make sure there is a wait of at least the bare minimum between API calls
        if (this.shouldDelay()) {
            await delay(this.getDelay());
        }

        // Update last time an API request was made
        this.timeLastRan = new Date();

        return await fetch(url).then(response => response.json()).then(data => data);
    }

    /**
     * Check if call should be delayed or not.
     * @returns
     */
    shouldDelay() {
        return this.getTimeSinceLastRun() < this.getMaximumRequestRate();
    }

    /**
     * Get required delay before next call in milliseconds.
     * @returns
     */
    getDelay() {
        return this.getMaximumRequestRate() - this.getTimeSinceLastRun();
    }

    /**
     * Get time since last API call
     * @returns
     */
    getTimeSinceLastRun() {
        return new Date() - this.timeLastRan;
    }

    /**
     * Get maximum request rate for API in milliseconds
     * @returns
     */
    getMaximumRequestRate() {
        return (60/100) * 1000;
    }
}
