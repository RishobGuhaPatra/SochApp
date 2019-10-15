(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/global.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "html.ios {\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n}\n\nhtml.md {\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\n\nhtml {\n  --ion-font-family: var(--ion-default-font);\n}\n\nbody {\n  background: var(--ion-background-color);\n}\n\nbody.backdrop-no-scroll {\n  overflow: hidden;\n}\n\n.ion-color-primary {\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n\n.ion-color-secondary {\n  --ion-color-base: var(--ion-color-secondary, #0cd1e8) !important;\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 12, 209, 232) !important;\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-secondary-shade, #0bb8cc) !important;\n  --ion-color-tint: var(--ion-color-secondary-tint, #24d6ea) !important;\n}\n\n.ion-color-tertiary {\n  --ion-color-base: var(--ion-color-tertiary, #7044ff) !important;\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 112, 68, 255) !important;\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-tertiary-shade, #633ce0) !important;\n  --ion-color-tint: var(--ion-color-tertiary-tint, #7e57ff) !important;\n}\n\n.ion-color-success {\n  --ion-color-base: var(--ion-color-success, #10dc60) !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 16, 220, 96) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #0ec254) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #28e070) !important;\n}\n\n.ion-color-warning {\n  --ion-color-base: var(--ion-color-warning, #ffce00) !important;\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 206, 0) !important;\n  --ion-color-contrast: var(--ion-color-warning-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-warning-shade, #e0b500) !important;\n  --ion-color-tint: var(--ion-color-warning-tint, #ffd31a) !important;\n}\n\n.ion-color-danger {\n  --ion-color-base: var(--ion-color-danger, #f04141) !important;\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 240, 65, 65) !important;\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-danger-shade, #d33939) !important;\n  --ion-color-tint: var(--ion-color-danger-tint, #f25454) !important;\n}\n\n.ion-color-light {\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\n}\n\n.ion-color-medium {\n  --ion-color-base: var(--ion-color-medium, #989aa2) !important;\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 152, 154, 162) !important;\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-medium-shade, #86888f) !important;\n  --ion-color-tint: var(--ion-color-medium-tint, #a2a4ab) !important;\n}\n\n.ion-color-dark {\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\n}\n\n.ion-page {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  justify-content: space-between;\n  contain: layout size style;\n  overflow: hidden;\n  z-index: 0;\n}\n\nion-route,\nion-route-redirect,\nion-router,\nion-select-option,\nion-nav-controller,\nion-menu-controller,\nion-action-sheet-controller,\nion-alert-controller,\nion-loading-controller,\nion-modal-controller,\nion-picker-controller,\nion-popover-controller,\nion-toast-controller,\n.ion-page-hidden,\n[hidden] {\n  /* stylelint-disable-next-line declaration-no-important */\n  display: none !important;\n}\n\n.ion-page-invisible {\n  opacity: 0;\n}\n\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\n  --ion-statusbar-padding: 20px;\n}\n\n@supports (padding-top: 20px) {\n  html {\n    --ion-safe-area-top: var(--ion-statusbar-padding);\n  }\n}\n\n@supports (padding-top: constant(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: constant(safe-area-inset-top);\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\n    --ion-safe-area-left: constant(safe-area-inset-left);\n    --ion-safe-area-right: constant(safe-area-inset-right);\n  }\n}\n\n@supports (padding-top: env(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: env(safe-area-inset-top);\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\n    --ion-safe-area-left: env(safe-area-inset-left);\n    --ion-safe-area-right: env(safe-area-inset-right);\n  }\n}\n\naudio,\ncanvas,\nprogress,\nvideo {\n  vertical-align: baseline;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\nb,\nstrong {\n  font-weight: bold;\n}\n\nimg {\n  max-width: 100%;\n  border: 0;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\nfigure {\n  margin: 1em 40px;\n}\n\nhr {\n  height: 1px;\n  border-width: 0;\n  box-sizing: content-box;\n}\n\npre {\n  overflow: auto;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\nlabel,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  line-height: normal;\n}\n\ntextarea {\n  overflow: auto;\n  height: auto;\n  font: inherit;\n  color: inherit;\n}\n\ntextarea::-webkit-input-placeholder {\n  padding-left: 2px;\n}\n\ntextarea::-moz-placeholder {\n  padding-left: 2px;\n}\n\ntextarea:-ms-input-placeholder {\n  padding-left: 2px;\n}\n\ntextarea::-ms-input-placeholder {\n  padding-left: 2px;\n}\n\ntextarea::placeholder {\n  padding-left: 2px;\n}\n\nform,\ninput,\noptgroup,\nselect {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\n\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n\na,\na div,\na span,\na ion-icon,\na ion-label,\nbutton,\nbutton div,\nbutton span,\nbutton ion-icon,\nbutton ion-label,\n.ion-tappable,\n[tappable],\n[tappable] div,\n[tappable] span,\n[tappable] ion-icon,\n[tappable] ion-label,\ninput,\ntextarea {\n  touch-action: manipulation;\n}\n\na ion-label,\nbutton ion-label {\n  pointer-events: none;\n}\n\nbutton {\n  border: 0;\n  border-radius: 0;\n  font-family: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n\n[tappable] {\n  cursor: pointer;\n}\n\na[disabled],\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\ninput[type=checkbox],\ninput[type=radio] {\n  padding: 0;\n  box-sizing: border-box;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\n* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\nhtml {\n  width: 100%;\n  height: 100%;\n  -webkit-text-size-adjust: 100%;\n     -moz-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n}\n\nhtml:not(.hydrated) body {\n  display: none;\n}\n\nhtml.plt-pwa {\n  height: 100vh;\n}\n\nbody {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  position: fixed;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  text-rendering: optimizeLegibility;\n  overflow: hidden;\n  touch-action: manipulation;\n  -webkit-user-drag: none;\n  -ms-content-zooming: none;\n  word-wrap: break-word;\n  overscroll-behavior-y: none;\n  -webkit-text-size-adjust: none;\n     -moz-text-size-adjust: none;\n      -ms-text-size-adjust: none;\n          text-size-adjust: none;\n}\n\nhtml {\n  font-family: var(--ion-font-family);\n}\n\na {\n  background-color: transparent;\n  color: var(--ion-color-primary, #3880ff);\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 16px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  line-height: 1.2;\n}\n\nh1 {\n  margin-top: 20px;\n  font-size: 26px;\n}\n\nh2 {\n  margin-top: 18px;\n  font-size: 24px;\n}\n\nh3 {\n  font-size: 22px;\n}\n\nh4 {\n  font-size: 20px;\n}\n\nh5 {\n  font-size: 18px;\n}\n\nh6 {\n  font-size: 16px;\n}\n\nsmall {\n  font-size: 75%;\n}\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n.ion-no-padding,\n[no-padding] {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.ion-padding,\n[padding] {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding,\n[padding] {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n\n.ion-padding-top,\n[padding-top] {\n  --padding-top: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n}\n\n.ion-padding-start,\n[padding-start] {\n  --padding-start: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-start,\n[padding-start] {\n    padding-left: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n  }\n}\n\n.ion-padding-end,\n[padding-end] {\n  --padding-end: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-end,\n[padding-end] {\n    padding-right: unset;\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n\n.ion-padding-bottom,\n[padding-bottom] {\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n\n.ion-padding-vertical,\n[padding-vertical] {\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n\n.ion-padding-horizontal,\n[padding-horizontal] {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-horizontal,\n[padding-horizontal] {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n\n.ion-no-margin,\n[no-margin] {\n  --margin-start: 0;\n  --margin-end: 0;\n  --margin-top: 0;\n  --margin-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.ion-margin,\n[margin] {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin,\n[margin] {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n\n.ion-margin-top,\n[margin-top] {\n  --margin-top: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n}\n\n.ion-margin-start,\n[margin-start] {\n  --margin-start: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-start,\n[margin-start] {\n    margin-left: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n  }\n}\n\n.ion-margin-end,\n[margin-end] {\n  --margin-end: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-end,\n[margin-end] {\n    margin-right: unset;\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n\n.ion-margin-bottom,\n[margin-bottom] {\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n\n.ion-margin-vertical,\n[margin-vertical] {\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n\n.ion-margin-horizontal,\n[margin-horizontal] {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-horizontal,\n[margin-horizontal] {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n\n.ion-float-left,\n[float-left] {\n  float: left !important;\n}\n\n.ion-float-right,\n[float-right] {\n  float: right !important;\n}\n\n.ion-float-start,\n[float-start] {\n  float: left !important;\n}\n\n[dir=rtl] .ion-float-start, :host-context([dir=rtl]) .ion-float-start, [dir=rtl] [float-start], :host-context([dir=rtl]) [float-start] {\n  float: right !important;\n}\n\n.ion-float-end,\n[float-end] {\n  float: right !important;\n}\n\n[dir=rtl] .ion-float-end, :host-context([dir=rtl]) .ion-float-end, [dir=rtl] [float-end], :host-context([dir=rtl]) [float-end] {\n  float: left !important;\n}\n\n@media (min-width: 576px) {\n  .ion-float-sm-left,\n[float-sm-left] {\n    float: left !important;\n  }\n\n  .ion-float-sm-right,\n[float-sm-right] {\n    float: right !important;\n  }\n\n  .ion-float-sm-start,\n[float-sm-start] {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-sm-start, :host-context([dir=rtl]) .ion-float-sm-start, [dir=rtl] [float-sm-start], :host-context([dir=rtl]) [float-sm-start] {\n    float: right !important;\n  }\n\n  .ion-float-sm-end,\n[float-sm-end] {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-sm-end, :host-context([dir=rtl]) .ion-float-sm-end, [dir=rtl] [float-sm-end], :host-context([dir=rtl]) [float-sm-end] {\n    float: left !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .ion-float-md-left,\n[float-md-left] {\n    float: left !important;\n  }\n\n  .ion-float-md-right,\n[float-md-right] {\n    float: right !important;\n  }\n\n  .ion-float-md-start,\n[float-md-start] {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-md-start, :host-context([dir=rtl]) .ion-float-md-start, [dir=rtl] [float-md-start], :host-context([dir=rtl]) [float-md-start] {\n    float: right !important;\n  }\n\n  .ion-float-md-end,\n[float-md-end] {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-md-end, :host-context([dir=rtl]) .ion-float-md-end, [dir=rtl] [float-md-end], :host-context([dir=rtl]) [float-md-end] {\n    float: left !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .ion-float-lg-left,\n[float-lg-left] {\n    float: left !important;\n  }\n\n  .ion-float-lg-right,\n[float-lg-right] {\n    float: right !important;\n  }\n\n  .ion-float-lg-start,\n[float-lg-start] {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-lg-start, :host-context([dir=rtl]) .ion-float-lg-start, [dir=rtl] [float-lg-start], :host-context([dir=rtl]) [float-lg-start] {\n    float: right !important;\n  }\n\n  .ion-float-lg-end,\n[float-lg-end] {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-lg-end, :host-context([dir=rtl]) .ion-float-lg-end, [dir=rtl] [float-lg-end], :host-context([dir=rtl]) [float-lg-end] {\n    float: left !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .ion-float-xl-left,\n[float-xl-left] {\n    float: left !important;\n  }\n\n  .ion-float-xl-right,\n[float-xl-right] {\n    float: right !important;\n  }\n\n  .ion-float-xl-start,\n[float-xl-start] {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-xl-start, :host-context([dir=rtl]) .ion-float-xl-start, [dir=rtl] [float-xl-start], :host-context([dir=rtl]) [float-xl-start] {\n    float: right !important;\n  }\n\n  .ion-float-xl-end,\n[float-xl-end] {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-xl-end, :host-context([dir=rtl]) .ion-float-xl-end, [dir=rtl] [float-xl-end], :host-context([dir=rtl]) [float-xl-end] {\n    float: left !important;\n  }\n}\n\n.ion-text-center,\n[text-center] {\n  text-align: center !important;\n}\n\n.ion-text-justify,\n[text-justify] {\n  text-align: justify !important;\n}\n\n.ion-text-start,\n[text-start] {\n  text-align: start !important;\n}\n\n.ion-text-end,\n[text-end] {\n  text-align: end !important;\n}\n\n.ion-text-left,\n[text-left] {\n  text-align: left !important;\n}\n\n.ion-text-right,\n[text-right] {\n  text-align: right !important;\n}\n\n.ion-text-nowrap,\n[text-nowrap] {\n  white-space: nowrap !important;\n}\n\n.ion-text-wrap,\n[text-wrap] {\n  white-space: normal !important;\n}\n\n@media (min-width: 576px) {\n  .ion-text-sm-center,\n[text-sm-center] {\n    text-align: center !important;\n  }\n\n  .ion-text-sm-justify,\n[text-sm-justify] {\n    text-align: justify !important;\n  }\n\n  .ion-text-sm-start,\n[text-sm-start] {\n    text-align: start !important;\n  }\n\n  .ion-text-sm-end,\n[text-sm-end] {\n    text-align: end !important;\n  }\n\n  .ion-text-sm-left,\n[text-sm-left] {\n    text-align: left !important;\n  }\n\n  .ion-text-sm-right,\n[text-sm-right] {\n    text-align: right !important;\n  }\n\n  .ion-text-sm-nowrap,\n[text-sm-nowrap] {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-sm-wrap,\n[text-sm-wrap] {\n    white-space: normal !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .ion-text-md-center,\n[text-md-center] {\n    text-align: center !important;\n  }\n\n  .ion-text-md-justify,\n[text-md-justify] {\n    text-align: justify !important;\n  }\n\n  .ion-text-md-start,\n[text-md-start] {\n    text-align: start !important;\n  }\n\n  .ion-text-md-end,\n[text-md-end] {\n    text-align: end !important;\n  }\n\n  .ion-text-md-left,\n[text-md-left] {\n    text-align: left !important;\n  }\n\n  .ion-text-md-right,\n[text-md-right] {\n    text-align: right !important;\n  }\n\n  .ion-text-md-nowrap,\n[text-md-nowrap] {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-md-wrap,\n[text-md-wrap] {\n    white-space: normal !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .ion-text-lg-center,\n[text-lg-center] {\n    text-align: center !important;\n  }\n\n  .ion-text-lg-justify,\n[text-lg-justify] {\n    text-align: justify !important;\n  }\n\n  .ion-text-lg-start,\n[text-lg-start] {\n    text-align: start !important;\n  }\n\n  .ion-text-lg-end,\n[text-lg-end] {\n    text-align: end !important;\n  }\n\n  .ion-text-lg-left,\n[text-lg-left] {\n    text-align: left !important;\n  }\n\n  .ion-text-lg-right,\n[text-lg-right] {\n    text-align: right !important;\n  }\n\n  .ion-text-lg-nowrap,\n[text-lg-nowrap] {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-lg-wrap,\n[text-lg-wrap] {\n    white-space: normal !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .ion-text-xl-center,\n[text-xl-center] {\n    text-align: center !important;\n  }\n\n  .ion-text-xl-justify,\n[text-xl-justify] {\n    text-align: justify !important;\n  }\n\n  .ion-text-xl-start,\n[text-xl-start] {\n    text-align: start !important;\n  }\n\n  .ion-text-xl-end,\n[text-xl-end] {\n    text-align: end !important;\n  }\n\n  .ion-text-xl-left,\n[text-xl-left] {\n    text-align: left !important;\n  }\n\n  .ion-text-xl-right,\n[text-xl-right] {\n    text-align: right !important;\n  }\n\n  .ion-text-xl-nowrap,\n[text-xl-nowrap] {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-xl-wrap,\n[text-xl-wrap] {\n    white-space: normal !important;\n  }\n}\n\n.ion-text-uppercase,\n[text-uppercase] {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: uppercase !important;\n}\n\n.ion-text-lowercase,\n[text-lowercase] {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: lowercase !important;\n}\n\n.ion-text-capitalize,\n[text-capitalize] {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: capitalize !important;\n}\n\n@media (min-width: 576px) {\n  .ion-text-sm-uppercase,\n[text-sm-uppercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-sm-lowercase,\n[text-sm-lowercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-sm-capitalize,\n[text-sm-capitalize] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .ion-text-md-uppercase,\n[text-md-uppercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-md-lowercase,\n[text-md-lowercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-md-capitalize,\n[text-md-capitalize] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .ion-text-lg-uppercase,\n[text-lg-uppercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-lg-lowercase,\n[text-lg-lowercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-lg-capitalize,\n[text-lg-capitalize] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .ion-text-xl-uppercase,\n[text-xl-uppercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-xl-lowercase,\n[text-xl-lowercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-xl-capitalize,\n[text-xl-capitalize] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n\n.ion-align-self-start,\n[align-self-start] {\n  align-self: flex-start !important;\n}\n\n.ion-align-self-end,\n[align-self-end] {\n  align-self: flex-end !important;\n}\n\n.ion-align-self-center,\n[align-self-center] {\n  align-self: center !important;\n}\n\n.ion-align-self-stretch,\n[align-self-stretch] {\n  align-self: stretch !important;\n}\n\n.ion-align-self-baseline,\n[align-self-baseline] {\n  align-self: baseline !important;\n}\n\n.ion-align-self-auto,\n[align-self-auto] {\n  align-self: auto !important;\n}\n\n.ion-wrap,\n[wrap] {\n  flex-wrap: wrap !important;\n}\n\n.ion-nowrap,\n[nowrap] {\n  flex-wrap: nowrap !important;\n}\n\n.ion-wrap-reverse,\n[wrap-reverse] {\n  flex-wrap: wrap-reverse !important;\n}\n\n.ion-justify-content-start,\n[justify-content-start] {\n  justify-content: flex-start !important;\n}\n\n.ion-justify-content-center,\n[justify-content-center] {\n  justify-content: center !important;\n}\n\n.ion-justify-content-end,\n[justify-content-end] {\n  justify-content: flex-end !important;\n}\n\n.ion-justify-content-around,\n[justify-content-around] {\n  justify-content: space-around !important;\n}\n\n.ion-justify-content-between,\n[justify-content-between] {\n  justify-content: space-between !important;\n}\n\n.ion-justify-content-evenly,\n[justify-content-evenly] {\n  justify-content: space-evenly !important;\n}\n\n.ion-align-items-start,\n[align-items-start] {\n  align-items: flex-start !important;\n}\n\n.ion-align-items-center,\n[align-items-center] {\n  align-items: center !important;\n}\n\n.ion-align-items-end,\n[align-items-end] {\n  align-items: flex-end !important;\n}\n\n.ion-align-items-stretch,\n[align-items-stretch] {\n  align-items: stretch !important;\n}\n\n.ion-align-items-baseline,\n[align-items-baseline] {\n  align-items: baseline !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2NvcmUuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvY29yZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvdGhlbWVzL2lvbmljLmdsb2JhbHMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL25vcm1hbGl6ZS5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9ub3JtYWxpemUuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3Mvc3RydWN0dXJlLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3N0cnVjdHVyZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy90eXBvZ3JhcGh5LnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3R5cG9ncmFwaHkuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvcGFkZGluZy5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2Zsb2F0LWVsZW1lbnRzLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL2Zsb2F0LWVsZW1lbnRzLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3RleHQtYWxpZ25tZW50LnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtYWxpZ25tZW50LmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9mbGV4LXV0aWxzLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL2ZsZXgtdXRpbHMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsNkZBQUE7QUNKRjs7QURNQTtFQUNFLDBEQUFBO0FDSEY7O0FETUE7RUFDRSwwQ0FBQTtBQ0hGOztBRE1BO0VBQ0UsdUNBQUE7QUNIRjs7QURNQTtFQUNFLGdCQUFBO0FDSEY7O0FEa0NFO0VBVEEsOERBQUE7RUFDQSwyRUFBQTtFQUNBLHdFQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FDckJGOztBRHlCRTtFQVRBLGdFQUFBO0VBQ0EsNkVBQUE7RUFDQSwwRUFBQTtFQUNBLDJGQUFBO0VBQ0EsdUVBQUE7RUFDQSxxRUFBQTtBQ1pGOztBRGdCRTtFQVRBLCtEQUFBO0VBQ0EsNEVBQUE7RUFDQSx5RUFBQTtFQUNBLDBGQUFBO0VBQ0Esc0VBQUE7RUFDQSxvRUFBQTtBQ0hGOztBRE9FO0VBVEEsOERBQUE7RUFDQSwwRUFBQTtFQUNBLHdFQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FDTUY7O0FERkU7RUFUQSw4REFBQTtFQUNBLDBFQUFBO0VBQ0Esd0VBQUE7RUFDQSx5RkFBQTtFQUNBLHFFQUFBO0VBQ0EsbUVBQUE7QUNlRjs7QURYRTtFQVRBLDZEQUFBO0VBQ0EseUVBQUE7RUFDQSx1RUFBQTtFQUNBLHdGQUFBO0VBQ0Esb0VBQUE7RUFDQSxrRUFBQTtBQ3dCRjs7QURwQkU7RUFUQSw0REFBQTtFQUNBLDBFQUFBO0VBQ0Esc0VBQUE7RUFDQSxpRkFBQTtFQUNBLG1FQUFBO0VBQ0EsaUVBQUE7QUNpQ0Y7O0FEN0JFO0VBVEEsNkRBQUE7RUFDQSwyRUFBQTtFQUNBLHVFQUFB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LDZDUWxOQTtJUm1OQSw0Q1FuTkE7RUN1QlI7QUFDRjs7QURFQTs7RUFFRSx1Q0FBQTtFUndNQSxxQ1FwT1E7QUM4QlY7O0FER0E7O0VBRUUseUNBQUE7RVJnS0Usc0NRbk1NO0FDbUNWOztBVG9LTTtFQUNFOztJQUVJLG1CQUFBO0lBTUYsK0NRaE5BO0lSaU5BLDhDUWpOQTtFQzBDUjtBQUNGOztBREhBOztFQUVFLHVDQUFBO0VSMEpFLHVDUXBNTTtBQ2lEVjs7QVRzSk07RUFDRTs7SUFLSSxvQkFBQTtJQUtGLDZDUWxOQTtJUm1OQSw0Q1FuTkE7RUN3RFI7QUFDRjs7QURWQTs7RUFFRSwwQ0FBQTtFUm9MQSx3Q1FyT1E7QUMrRFY7O0FEVEE7O0VBRUUsdUNBQUE7RUFDQSwwQ0FBQTtFUjJLQSxxQ1FwT1E7RVJxT1Isd0NRck9RO0FDc0VWOztBRFJBOztFQUVFLHlDQUFBO0VBQ0EsdUNBQUE7RVJrSUUsc0NRbk1NO0VSb01OLHVDUXBNTTtBQzZFVjs7QVQwSE07RUFDRTs7SUFFSSxtQkFBQTtJQUdBLG9CQUFBO0lBR0YsK0NRaE5BO0lSaU5BLDhDUWpOQTtJUmtOQSw2Q1FsTkE7SVJtTkEsNENRbk5BO0VDdUZSO0FBQ0Y7O0FEZEE7O0VBRUUsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VSZ0hFLGNROUdjO0VSK0dkLGVRL0djO0VSbUpoQixhUW5KZ0I7RVJvSmhCLGdCUXBKZ0I7QUNtQmxCOztBRGhCQTs7RUFFRSx1Q0FBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSx3Q0FBQTtFUjBHRSxvQ1FsTUs7RVJtTUwscUNRbk1LO0VSbU9QLG1DUW5PTztFUm9PUCxzQ1FwT087QUMrR1Q7O0FUdUZNO0VBQ0U7O0lBRUksa0JBQUE7SUFHQSxtQkFBQTtJQUdGLDZDUS9NRDtJUmdOQyw0Q1FoTkQ7SVJpTkMsMkNRak5EO0lSa05DLDBDUWxORDtFQ3lIUDtBQUNGOztBRDdCQTs7RUFFRSxxQ0FBQTtFUm9JQSxtQ1FuT087QUNnSVQ7O0FENUJBOztFQUVFLHVDQUFBO0VSNEZFLG9DUWxNSztBQ3FJVDs7QVRpRU07RUFDRTs7SUFFSSxrQkFBQTtJQU1GLDZDUS9NRDtJUmdOQyw0Q1FoTkQ7RUM0SVA7QUFDRjs7QURsQ0E7O0VBRUUscUNBQUE7RVJzRkUscUNRbk1LO0FDbUpUOztBVG1ETTtFQUNFOztJQUtJLG1CQUFBO0lBS0YsMkNRak5EO0lSa05DLDBDUWxORDtFQzBKUDtBQUNGOztBRHpDQTs7RUFFRSx3Q0FBQTtFUmdIQSxzQ1FwT087QUNpS1Q7O0FEeENBOztFQUVFLHFDQUFBO0VBQ0Esd0NBQUE7RVJ1R0EsbUNRbk9PO0VSb09QLHNDUXBPTztBQ3dLVDs7QUR2Q0E7O0VBRUUsdUNBQUE7RUFDQSxxQ0FBQTtFUjhERSxvQ1FsTUs7RVJtTUwscUNRbk1LO0FDK0tUOztBVHVCTTtFQUNFOztJQUVJLGtCQUFBO0lBR0EsbUJBQUE7SUFHRiw2Q1EvTUQ7SVJnTkMsNENRaE5EO0lSaU5DLDJDUWpORDtJUmtOQywwQ1FsTkQ7RUN5TFA7QUFDRjs7QUN2TEk7O0VWZ1hFLHNCQUFBO0FXMVhOOztBRGVJOztFVjJXRSx1QkFBQTtBV3JYTjs7QURlSTs7RVZ3VkUsc0JBQUE7QVdsV047O0FYK0lXO0VBc05MLHVCQUFBO0FXbFdOOztBRFlJOztFVjBWRSx1QkFBQTtBV2pXTjs7QVh1SVc7RUE2Tkwsc0JBQUE7QVdqV047O0FYbUVJO0VVOUVBOztJVmdYRSxzQkFBQTtFVy9WSjs7RURaRTs7SVYyV0UsdUJBQUE7RVcxVko7O0VEWkU7O0lWd1ZFLHNCQUFBO0VXdlVKO0VYb0hTO0lBc05MLHVCQUFBO0VXdlVKOztFRGZFOztJVjBWRSx1QkFBQTtFV3RVSjtFWDRHUztJQTZOTCxzQkFBQTtFV3RVSjtBQUNGOztBWHVDSTtFVTlFQTs7SVZnWEUsc0JBQUE7RVdwVUo7O0VEdkNFOztJVjJXRSx1QkFBQTtFVy9USjs7RUR2Q0U7O0lWd1ZFLHNCQUFBO0VXNVNKO0VYeUZTO0lBc05MLHVCQUFBO0VXNVNKOztFRDFDRTs7SVYwVkUsdUJBQUE7RVczU0o7RVhpRlM7SUE2Tkwsc0JBQUE7RVczU0o7QUFDRjs7QVhZSTtFVTlFQTs7SVZnWEUsc0JBQUE7RVd6U0o7O0VEbEVFOztJVjJXRSx1QkFBQTtFV3BTSjs7RURsRUU7O0lWd1ZFLHNCQUFBO0VXalJKO0VYOERTO0lBc05MLHVCQUFBO0VXalJKOztFRHJFRTs7SVYwVkUsdUJBQUE7RVdoUko7RVhzRFM7SUE2Tkwsc0JBQUE7RVdoUko7QUFDRjs7QVhmSTtFVTlFQTs7SVZnWEUsc0JBQUE7RVc5UUo7O0VEN0ZFOztJVjJXRSx1QkFBQTtFV3pRSjs7RUQ3RkU7O0lWd1ZFLHNCQUFBO0VXdFBKO0VYbUNTO0lBc05MLHVCQUFBO0VXdFBKOztFRGhHRTs7SVYwVkUsdUJBQUE7RVdyUEo7RVgyQlM7SUE2Tkwsc0JBQUE7RVdyUEo7QUFDRjs7QUN4SEk7O0VBRUUsNkJBQUE7QUNaTjs7QURlSTs7RUFFRSw4QkFBQTtBQ1pOOztBRGVJOztFQUVFLDRCQUFBO0FDWk47O0FEZUk7O0VBRUUsMEJBQUE7QUNaTjs7QURlSTs7RUFFRSwyQkFBQTtBQ1pOOztBRGVJOztFQUVFLDRCQUFBO0FDWk47O0FEZUk7O0VBRUUsOEJBQUE7QUNaTjs7QURlSTs7RUFFRSw4QkFBQTtBQ1pOOztBYnFESTtFWTlFQTs7SUFFRSw2QkFBQTtFQzZCSjs7RUQxQkU7O0lBRUUsOEJBQUE7RUM2Qko7O0VEMUJFOztJQUVFLDRCQUFBO0VDNkJKOztFRDFCRTs7SUFFRSwwQkFBQTtFQzZCSjs7RUQxQkU7O0lBRUUsMkJBQUE7RUM2Qko7O0VEMUJFOztJQUVFLDRCQUFBO0VDNkJKOztFRDFCRTs7SUFFRSw4QkFBQTtFQzZCSjs7RUQxQkU7O0lBRUUsOEJBQUE7RUM2Qko7QUFDRjs7QWJXSTtFWTlFQTs7SUFFRSw2QkFBQTtFQ3NFSjs7RURuRUU7O0lBRUUsOEJBQUE7RUNzRUo7O0VEbkVFOztJQUVFLDRCQUFBO0VDc0VKOztFRG5FRTs7SUFFRSwwQkFBQTtFQ3NFSjs7RURuRUU7O0lBRUUsMkJBQUE7RUNzRUo7O0VEbkVFOztJQUVFLDRCQUFBO0VDc0VKOztFRG5FRTs7SUFFRSw4QkFBQTtFQ3NF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 */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/theme/variables.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #ffce00;\n  --ion-color-primary-rgb: 255, 206, 0;\n  --ion-color-primary-contrast: #333333;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #e0b500;\n  --ion-color-primary-tint: #ffd31a;\n  /** secondary **/\n  --ion-color-secondary: #0cd1e8;\n  --ion-color-secondary-rgb: 12, 209, 232;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0bb8cc;\n  --ion-color-secondary-tint: #24d6ea;\n  /** tertiary **/\n  --ion-color-tertiary: #222428;\n  --ion-color-tertiary-rgb: 34, 34, 34;\n  --ion-color-tertiary-contrast: #ffce00;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #1e2023;\n  --ion-color-tertiary-tint: #383a3e;\n  /** success **/\n  --ion-color-success: #10dc60;\n  --ion-color-success-rgb: 16, 220, 96;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #0ec254;\n  --ion-color-success-tint: #28e070;\n  /** warning **/\n  --ion-color-warning: #ffce00;\n  --ion-color-warning-rgb: 255, 206, 0;\n  --ion-color-warning-contrast: #333333;\n  --ion-color-warning-contrast-rgb: 255, 255, 255;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  /** danger **/\n  --ion-color-danger: #f04141;\n  --ion-color-danger-rgb: 245, 61, 61;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #d33939;\n  --ion-color-danger-tint: #f25454;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 34, 34;\n  --ion-color-dark-contrast: #fff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 244, 244;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9EOlxcaW9uaWNQcm9qZWN0XFxTb2NoLTEuMC9zcmNcXHRoZW1lXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSwwQkFBQTtBQUNBO0VBQ0MsY0FBQTtFQUNBLDRCQUFvQjtFQUNwQixvQ0FBd0I7RUFDeEIscUNBQTZCO0VBQzdCLCtDQUFpQztFQUNqQyxrQ0FBMEI7RUFDMUIsaUNBQXlCO0VBRXpCLGdCQUFBO0VBQ0EsOEJBQXNCO0VBQ3RCLHVDQUEwQjtFQUMxQix1Q0FBK0I7RUFDL0IsaURBQW1DO0VBQ25DLG9DQUE0QjtFQUM1QixtQ0FBMkI7RUFFM0IsZUFBQTtFQUNBLDZCQUFxQjtFQUNyQixvQ0FBeUI7RUFDekIsc0NBQThCO0VBQzlCLGdEQUFrQztFQUNsQyxtQ0FBMkI7RUFDM0Isa0NBQTBCO0VBRTFCLGNBQUE7RUFDQSw0QkFBb0I7RUFDcEIsb0NBQXdCO0VBQ3hCLHFDQUE2QjtFQUM3QiwrQ0FBaUM7RUFDakMsa0NBQTBCO0VBQzFCLGlDQUF5QjtFQUV6QixjQUFBO0VBQ0EsNEJBQW9CO0VBQ3BCLG9DQUF3QjtFQUN4QixxQ0FBNkI7RUFDN0IsK0NBQWlDO0VBQ2pDLGtDQUEwQjtFQUMxQixpQ0FBeUI7RUFFekIsYUFBQTtFQUNBLDJCQUFtQjtFQUNuQixtQ0FBdUI7RUFDdkIsb0NBQTRCO0VBQzVCLDhDQUFnQztFQUNoQyxpQ0FBeUI7RUFDekIsZ0NBQXdCO0VBRXhCLFdBQUE7RUFDQSx5QkFBaUI7RUFDakIsZ0NBQXFCO0VBQ3JCLCtCQUEwQjtFQUMxQiw0Q0FBOEI7RUFDOUIsK0JBQXVCO0VBQ3ZCLDhCQUFzQjtFQUV0QixhQUFBO0VBQ0EsMkJBQW1CO0VBQ25CLHFDQUF1QjtFQUN2QixvQ0FBNEI7RUFDNUIsOENBQWdDO0VBQ2hDLGlDQUF5QjtFQUN6QixnQ0FBd0I7RUFFeEIsWUFBQTtFQUNBLDBCQUFrQjtFQUNsQixvQ0FBc0I7RUFDdEIsbUNBQTJCO0VBQzNCLHVDQUErQjtFQUMvQixnQ0FBd0I7RUFDeEIsK0JBQXVCLEVBQUEiLCJmaWxlIjoic3JjL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxyXG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cclxuXHJcbi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xyXG46cm9vdCB7XHJcbiAvKiogcHJpbWFyeSAqKi9cclxuIC0taW9uLWNvbG9yLXByaW1hcnk6ICNmZmNlMDA7XHJcbiAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogMjU1LCAyMDYsIDA7XHJcbiAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjMzMzMzMzO1xyXG4gLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XHJcbiAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjZTBiNTAwO1xyXG4gLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjZmZkMzFhO1xyXG5cclxuIC8qKiBzZWNvbmRhcnkgKiovXHJcbiAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMwY2QxZTg7XHJcbiAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiAxMiwgMjA5LCAyMzI7XHJcbiAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XHJcbiAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMGJiOGNjO1xyXG4gLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICMyNGQ2ZWE7XHJcblxyXG4gLyoqIHRlcnRpYXJ5ICoqL1xyXG4gLS1pb24tY29sb3ItdGVydGlhcnk6ICMyMjI0Mjg7XHJcbiAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDM0LCAzNCwgMzQ7XHJcbiAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmY2UwMDtcclxuIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjMWUyMDIzO1xyXG4gLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzM4M2EzZTtcclxuXHJcbiAvKiogc3VjY2VzcyAqKi9cclxuIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMxMGRjNjA7XHJcbiAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogMTYsIDIyMCwgOTY7XHJcbiAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XHJcbiAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMGVjMjU0O1xyXG4gLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjMjhlMDcwO1xyXG5cclxuIC8qKiB3YXJuaW5nICoqL1xyXG4gLS1pb24tY29sb3Itd2FybmluZzogI2ZmY2UwMDtcclxuIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDIwNiwgMDtcclxuIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMzMzMzMzM7XHJcbiAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGI1MDA7XHJcbiAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQzMWE7XHJcblxyXG4gLyoqIGRhbmdlciAqKi9cclxuIC0taW9uLWNvbG9yLWRhbmdlcjogI2YwNDE0MTtcclxuIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI0NSwgNjEsIDYxO1xyXG4gLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2QzMzkzOTtcclxuIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZjI1NDU0O1xyXG5cclxuIC8qKiBkYXJrICoqL1xyXG4gLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcclxuIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzQsIDM0O1xyXG4gLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZjtcclxuIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcclxuIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcclxuXHJcbiAvKiogbWVkaXVtICoqL1xyXG4gLS1pb24tY29sb3ItbWVkaXVtOiAjOTg5YWEyO1xyXG4gLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLCAxNTQsIDE2MjtcclxuIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcclxuIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XHJcbiAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XHJcbiAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcclxuXHJcbiAvKiogbGlnaHQgKiovXHJcbiAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODtcclxuIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LCAyNDQsIDI0NDtcclxuIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xyXG4gLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xyXG4gLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XHJcbiAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xyXG59XHJcbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/global.scss":
/*!*************************!*\
  !*** ./src/global.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./global.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/theme/variables.scss":
/*!**********************************!*\
  !*** ./src/theme/variables.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/lib/loader.js??ref--14-3!./variables.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!**********************************************************!*\
  !*** multi ./src/theme/variables.scss ./src/global.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\ionicProject\Soch-1.0\src\theme\variables.scss */"./src/theme/variables.scss");
module.exports = __webpack_require__(/*! D:\ionicProject\Soch-1.0\src\global.scss */"./src/global.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map