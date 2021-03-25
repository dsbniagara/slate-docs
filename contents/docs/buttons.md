---
title: Buttons
template: docs.ejs
---
<p>Button styles are located in base/buttons.css, include just buttons with @slate base/buttons.</p>

<pre class="code">:root {
    --btn-font-weight: 500;
    --btn-font-size: 1em;
    --btn-font-size-s: calc(var(--btn-font-size) - 0.2em);
    --btn-font-size-m: calc(var(--btn-font-size) + 0.2em);
    --btn-font-size-l: calc(var(--btn-font-size) + 0.4em);
    --btn-radius: 0.25em;
    --btn-padding-x: var(--space-s);
    --btn-padding-y: var(--space-xs);
    --btn-shadow: 0 2px 2px #0000001c, 0 2px 3px #0000000f;
    --btn-shadow-hover: 0 6px 9px #00000012, 0 2px 5px #0000000f;
}</pre>
<p>Buttons come in a few variants with sizing variants.</p>

<h2>Variants</h2>
<p>
    <button class="btn" type="button">.btn</button>
    <button class="btn btn--primary" type="button">.btn--primary</button>
    <button class="btn btn--accent" type="button">.btn--accent</button>
    <button class="btn btn--subtle" type="button">.btn--subtle</button>
</p>

<h2>Sizes</h2>
<p>
    <button class="btn btn--primary" type="button">.btn</button>
    <button class="btn btn--primary btn--l" type="button">.btn--l</button>
    <button class="btn btn--primary btn--m" type="button">.btn--m</button>
    <button class="btn btn--primary btn--s" type="button">.btn--s</button>
</p>

<h2>States</h2>
<p>
    <button disabled="true" class="btn btn--disabled" type="button">Disabled</button>
</p>