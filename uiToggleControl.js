/**
 * Starting point for a UI element that needs to maintain state -- usually something like "open/close" or
 * a "show/hide" functionality.
 * 
 * Note that this object starts in an "!isOpen" state, so your CSS should start from that point. If you
 * prefer different behavior, then either adjust your CSS to start there, and change the default value of
 * isOpen to true, or call that.hideIt() from within initialize.
 * 
 * @param uic {string} The 'id' attribute of the control this object should attach to.
 * @requires jQuery
 * @returns {object} Self
 */
var UIElement = function (uic) {
	var that = this,
		isOpen = false,
		initialize = function (uic) {
			// @todo Add initialization functionality here such as creating the object and attaching it to the DOM.
			if (typeof uic === "string") {
				// $("#"+uic)...
			}
			return true;
		};

	// Define a toggle method
	that.toggle = function () {
		return (that.isOpen) ? that.hideIt() : that.showIt();
	};

	// Define the hideIt method
	that.hideIt = function () {
		if (isOpen) { // Only perform if the object is open
			// @todo Do stuff to hide the panel
			isOpen = false;
		}
		return true;
	};

	// Define the showIt method
	that.showIt = function () {
		if (!isOpen) { // Only perform if the object is not open
			// @todo Do stuff to show the panel
			isOpen = true;
		}
		return true;
	};

	// And now, initialize the object and return itself.
	initialize();
	return that;
};