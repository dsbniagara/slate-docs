---
title: Typography
template: docs.ejs
---

<p>All type settings are located in the <code>base/typography.css</code> file. This includes all css selectors and variable declarations associated with typography.</p>

<h2>Family</h2>

<p>The primary font uses pre-installed system fonts that can be found on a wide range of devices. The font is wrapped in the <code>--font-primary</code> variable is applied to all headings the body.</p>

<pre class="code">:root {
    --font-primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
}</pre>

<h2>Scale</h2>

<p>The type scale works of the --text-base size, then uses a scale ratio to provide sizing from xs to xxxl. You can easily customize this ratio at certain break points or on certain components to consistenly scale text.</p>

<pre class="code">:root {
    --text-base: 11pt;

    --text-scale-ratio: 1.2;
    --text-xs: calc((var(--text-base) / var(--text-scale-ratio)) / var(--text-scale-ratio));
    --text-s: calc(var(--text-xs) * var(--text-scale-ratio));
    --text-m: calc(var(--text-s) * var(--text-scale-ratio) * var(--text-scale-ratio));
    --text-l: calc(var(--text-m) * var(--text-scale-ratio));
    --text-xl: calc(var(--text-l) * var(--text-scale-ratio));
    --text-xxl: calc(var(--text-xl) * var(--text-scale-ratio));
    --text-xxxl: calc(var(--text-xxl) * var(--text-scale-ratio));

    --text-h1: 3rem;
    --text-h2: 2em;
    --text-h3: 1.8em;
    --text-h4: 1.3em;
    --text-h5: 1.2em;
    --text-h6: 1.1em;
}</pre>
<h2>Heading sizes</h2>

<p>All headings are styled along with .h1 to .h6 classes that match each size.</p>

<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>

<h2>Text sizes</h2>

<p>Text size classes are available via the text-* pattern from xs to xxxl.</p>

<div class="text--xs">.text--xs</div>
<div class="text--s">.text--s</div>
<div class="text--base">Normal text or .text--base</div>
<div class="text--m">.text--m</div>
<div class="text--l">.text--l</div>
<div class="text--xl">.text--xl</div>
<div class="text--xxl">.text--xxl</div>
<div class="text--xxxl">.text--xxxl</div>