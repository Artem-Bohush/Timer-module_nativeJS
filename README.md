# Timer-module_nativeJS
  This is a simple code for timer on your site. It contains countdown of days, hours, minutes and seconds. Any changing is up to you.
## Usage
  Your layout should contains next code structure:
```
<div class="timer">
  <div class="wrapper-class">
    <span class="days">00</span>
    <span>:</span>
    <span class="hours">00</span>
    <span>:</span>
    <span class="minutes">00</span>
    <span>:</span>
    <span class="seconds">00</span>
  </div>
</div>
```
  Next step - add timer.js to you project and import this module. Then just call a function with passing corresponding parameters to it(in the appropriate order):
  ```
  timer('wrapper-class', '2019-12-31')
  ```
