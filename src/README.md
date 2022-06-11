# Side Button
### General
A button that appears to the right of all page content and sticks to the top of the screen when scrolled.

### Usage
```
const button = new SideButton({ ... });
```

### Options
`root` [jQuery]: The root element to append the button to. This element should be present on page load.

`text` [string]: The default text for the button.

`textDisabledDuration` [number]: The amount of time in milliseconds that the button is disabled after being clicked.

`onClick` [function]: A callback for when the button is clicked.

`onUpdateText` [function]: A callback for when the text has been changed.

### URL
https://cdn.jsdelivr.net/gh/danielgoodwin97/torn-script-utilities/dist/js/side-button.js

# Fetch Event
### General
Used as a way to monitor when the fetch method is used on the window.

Whenever the fetch method is used, you can run a callback like it's an event.

### Hijacking
If you're hijacking a request, it should be noted that the request will abort.

This means that the request will never actually be fired. You will however have access to the original request data. So you could make it yourself afterwards.

Hijacking is set to false by default.

### Usage
```
new FetchEvent('endpoint.php', {
    callback: () => {
        console.log('The endpoint has been hit');
    }
});
 ```

### Options
`isHijack` [boolean]: Whether request should or should not be hijacked.

`callback` [function]: A callback function that gets ran when the request is made or if hijacking is enabled, instead of the request.

### URL
https://cdn.jsdelivr.net/gh/danielgoodwin97/torn-script-utilities/dist/js/fetch-event.js
