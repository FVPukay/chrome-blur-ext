/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common.ts":
/*!***********************!*\
  !*** ./src/common.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setBadgeText = setBadgeText;
function setBadgeText(enabled) {
    const text = enabled ? "ON!!!" : "OFF";
    void chrome.action.setBadgeText({ text: text });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/popup.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(/*! ./common */ "./src/common.ts");
console.log("Hello, world from popup!");
// Handle the ON/OFF switch
const checkbox = document.getElementById("enabled");
chrome.storage.sync.get("enabled", (data) => {
    checkbox.checked = !!data.enabled;
    void (0, common_1.setBadgeText)(data.enabled);
});
checkbox.addEventListener("change", (event) => {
    if (event.target instanceof HTMLInputElement) {
        void chrome.storage.sync.set({ "enabled": event.target.checked });
        void (0, common_1.setBadgeText)(event.target.checked);
    }
});
// Handle the input field
const input = document.getElementById("item");
chrome.storage.sync.get("item", (data) => {
    input.value = data.item || "";
});
input.addEventListener("change", (event) => {
    if (event.target instanceof HTMLInputElement) {
        void chrome.storage.sync.set({ "item": event.target.value });
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsb0NBR0M7QUFIRCxTQUFnQixZQUFZLENBQUMsT0FBZ0I7SUFDM0MsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUs7SUFDdEMsS0FBSyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQztBQUMvQyxDQUFDOzs7Ozs7O1VDSEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBLHdFQUFxQztBQUVyQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDO0FBRXZDLDJCQUEyQjtBQUMzQixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBcUI7QUFDdkUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO0lBQ3hDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPO0lBQ2pDLEtBQUsseUJBQVksRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ25DLENBQUMsQ0FBQztBQUNGLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUMxQyxJQUFJLEtBQUssQ0FBQyxNQUFNLFlBQVksZ0JBQWdCLEVBQUUsQ0FBQztRQUMzQyxLQUFLLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxDQUFDO1FBQy9ELEtBQUsseUJBQVksRUFBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUMzQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYseUJBQXlCO0FBQ3pCLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFxQjtBQUNqRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7SUFDckMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDakMsQ0FBQyxDQUFDLENBQUM7QUFDSCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7SUFDdkMsSUFBSSxLQUFLLENBQUMsTUFBTSxZQUFZLGdCQUFnQixFQUFFLENBQUM7UUFDM0MsS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQztJQUM5RCxDQUFDO0FBQ0wsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9jb21tb24udHMiLCJ3ZWJwYWNrOi8vbXktY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL3BvcHVwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBzZXRCYWRnZVRleHQoZW5hYmxlZDogYm9vbGVhbikge1xuICBjb25zdCB0ZXh0ID0gZW5hYmxlZCA/IFwiT04hISFcIiA6IFwiT0ZGXCJcbiAgdm9pZCBjaHJvbWUuYWN0aW9uLnNldEJhZGdlVGV4dCh7dGV4dDogdGV4dH0pXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHtzZXRCYWRnZVRleHR9IGZyb20gXCIuL2NvbW1vblwiXG5cbmNvbnNvbGUubG9nKFwiSGVsbG8sIHdvcmxkIGZyb20gcG9wdXAhXCIpXG5cbi8vIEhhbmRsZSB0aGUgT04vT0ZGIHN3aXRjaFxuY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuYWJsZWRcIikgYXMgSFRNTElucHV0RWxlbWVudFxuY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoXCJlbmFibGVkXCIsIChkYXRhKSA9PiB7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9ICEhZGF0YS5lbmFibGVkXG4gICAgdm9pZCBzZXRCYWRnZVRleHQoZGF0YS5lbmFibGVkKVxufSlcbmNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgdm9pZCBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7XCJlbmFibGVkXCI6IGV2ZW50LnRhcmdldC5jaGVja2VkfSlcbiAgICAgICAgdm9pZCBzZXRCYWRnZVRleHQoZXZlbnQudGFyZ2V0LmNoZWNrZWQpXG4gICAgfVxufSlcblxuLy8gSGFuZGxlIHRoZSBpbnB1dCBmaWVsZFxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1cIikgYXMgSFRNTElucHV0RWxlbWVudFxuY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoXCJpdGVtXCIsIChkYXRhKSA9PiB7XG4gICAgaW5wdXQudmFsdWUgPSBkYXRhLml0ZW0gfHwgXCJcIlxufSk7XG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgIHZvaWQgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoe1wiaXRlbVwiOiBldmVudC50YXJnZXQudmFsdWV9KVxuICAgIH1cbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=