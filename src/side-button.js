// Packages.
const $ = require('jquery'),
    _ = require('lodash');

global.ScriptButton = class SideButton {
    /**
     * @param {*} options
     * @returns
     */
    constructor(options = {}) {
        // Default settings.
        const defaults = {
            root: $('.content-wrapper'),
            text: 'A button',
            textDisabledDuration: 500,
            onClick: () => {},
            onUpdateText: () => {}
        };

        // Set component options and merge with defaults.
        this.options = _.defaults(options, defaults);

        // Create button.
        const button = this.createButton();

        // Set variables for individual button components.
        this.buttonWrapper = button;
        this.button = button.find('button');

        // Run on click callback.
        this.button.on('click', this.options.onClick);

        // Add styles to page.
        this.addStyles();

        // Add button to root element.
        this.addButton();

        return this;
    }

    /**
     * Create button element.
     * @returns
     */
    createButton() {
        return $(`
            <div class="script-button-wrapper">
                <button class="script-button torn-btn">
                    <span>${this.options.text}</span>
                </button>
            </div>
        `);
    }

    /**
     * Add button to root element.
     */
    addButton() {
        this.options.root.append(this.buttonWrapper);
    }

    /**
     * Add styles to page.
     */
    addStyles() {
        // Set root element to be relative.
        this.options.root.css({ position: 'relative' });

        // Add styles to wrapper to allow sticky behaviour.
        this.buttonWrapper.css({
            position: 'absolute',
            top: 0,
            right: 0,
            height: '100%',
            transform: 'translateX(calc(100% + 20px))'
        });

        // Add styles to button.
        this.button.css({
            position: 'sticky',
            top: 20
        });
    }

    /**
     * Update button text.
     * @param {*} updatedText
     */
    setButtonText(updatedText) {
        const self = this,
            { text, onUpdateText, textDisabledDuration } = this.options;

        // Disable button temporarily.
        this.button.attr('disabled', '');

        // Update the button text.
        this.button.text(updatedText);

        setTimeout(() => {
            // Set text back to default.
            self.button.text(text);

            // Remove disabled attribute.
            self.button.removeAttr('disabled');

            // Run the text updated callback.
            onUpdateText();
        }, textDisabledDuration);
    }
}
