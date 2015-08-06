# angular-sig-pad

> An AngularJS directive for signature_pad

## Usage
+ angular-sig-pad
```html
<!-- minimal -->
<canvas angular-sig-pad ng-model="model"></canvas>
<!-- maximum -->
<canvas angular-sig-pad ng-model="model" angular-sig-pad-dot-size="4" angular-sig-pad-min-width="0.5" angular-sig-pad-max-width="2.5" angular-sig-pad-background-color="rgba(0,0,0,0)" angular-sig-pad-pen-color="black" angular-sig-pad-velocity-filter-weight="0.7" angular-sig-pad-off="{{readOnly}}"></canvas>
```
The attribute **angular-sig-pad-dot-size** is the radius (float) of a single dot.<br/>
The attribute **angular-sig-pad-min-width** is minimum width (float) of a line. Defaults to <code>0.5</code>.<br/>
The attribute **angular-sig-pad-max-width** is the maximum width (float) of a line. Defaults to <code>2.5</code>.<br/>
The attribute **angular-sig-pad-background-color** is the color (string) used to clear the background. Can be any color format accepted by <code>context.fillStyle</code>. Defaults to <code>"rgba(0,0,0,0)"</code> (transparent black). Use a non-transparent color e.g. <code>"rgb(255,255,255)"</code> (opaque white) if you'd like to save signatures as JPEG images.<br/>
The attribute **angular-sig-pad-pen-color** is the color (string) used to draw the lines. Can be any color format accepted by <code>context.fillStyle</code>. Defaults to <code>"black"</code>.<br/>
The attribute **angular-sig-pad-velocity-filter-weight** is the weight (float) used to modify new velocity based on the previous velocity. Defaults to <code>0.7</code>.<br/>
The attribute **angular-sig-pad-off** set to 'true' (boolean) turns off events, therefore rendering signature pad read-only.<br/>

## Author

Russell Morley. MIT licensed.

## More Info

