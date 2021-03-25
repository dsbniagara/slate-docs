---
title: Devices
template: docs.ejs
---

<p>Slate provides a set of common device sizes from @xs to @xxl.</p>
<div class="docs-device-preview">
    <div class="device-xxl">
        <b>@xxl</b>
        Infinity
        <div class="device-xl">
            <b>@xl</b>
            1800px
            <div class="device-l">
                <b>@l</b>
                1200px
                <div class="device-m">
                    <b>@m</b>
                    992px
                    <div class="device-s">
                        <b>@s</b>
                        768px
                        <div class="device-xs">
                            <b>@xs</b>
                            576px
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<h2>Visibility</h2>

<p>Use only@device or not@device to target one device size. The elements below will demonstrate device targeting with each class.</p>

<div class="row docs-not-only-demo">
    <div class="col">
        <div class="only@xs">
            only@xs
        </div>
        <div class="not@xs">
            not@xs
        </div>
    </div>
    <div class="col">
        <div class="only@s">
            only@s
        </div>
        <div class="not@s">
            not@s
        </div>
    </div>
    <div class="col">
        <div class="only@m">
            only@m
        </div>
        <div class="not@m">
            not@m
        </div>
    </div>
    <div class="col">
        <div class="only@l">
            only@l
        </div>
        <div class="not@l">
            not@l
        </div>
    </div>
    <div class="col">
        <div class="only@xl">
            only@xl
        </div>
        <div class="not@xl">
            not@xl
        </div>
    </div>
    <div class="col">
        <div class="only@xxl">
            only@xxl
        </div>
        <div class="not@xxl">
            not@xxl
        </div>
    </div>
</div>

<p>To target a <b>device or greater</b> use {block|flex}@device to toggle the display property at the desired device level. Using block@m will set the display to block at the medium breakpoint and greater.</p>

<div class="row docs-block-flex-demo">
    <div class="col block@xs">
        <div class="block">
            block@xs or flex@xs
        </div>
    </div>
    <div class="col block@s">
        <div class="block">
            block@s or flex@s
        </div>
    </div>
    <div class="col block@m">
        <div class="block">
            block@m or flex@m
        </div>
    </div>
    <div class="col block@l">
        <div class="block">
            block@l or flex@l
        </div>
    </div>
    <div class="col block@xl">
        <div class="block">
            block@xl or flex@xl
        </div>
    </div>
    <div class="col block@xxl">
        <div class="block">
            block@xxl or flex@xxl
        </div>
    </div>
</div>

<h2>Modify Devices</h2>

<p>CSS Variables are provided for each device if you would like to use them within your other css properties.</p>

<pre class="code">:root {
--device-xs: 576px;
--device-s: 768px;
--device-m: 992px;
--device-l: 1200px;
--device-xl: 1800px;
--device-xxl: auto;
}</pre>

<p>CSS Variables cannot modify media queries. To change the device sizes you must create a <code>slate.config.js</code> file and redefine the devices.</p>

<pre class="code">module.exports = {
'device-xs': '576px',
'device-s': '768px',
'device-m': '992px',
'device-l': '1200px',
'device-xl': '1800px',
'device-xxl': 'auto',
'device-xs-container': '540px',
'device-s-container': '720px',
'device-m-container': '960px',
'device-l-container': '1140px',
'device-xl-container': '1640px',
'device-xxl-container': 'auto'
}</pre>