---
title: Buttons
template: docs.ejs
---
<p>Button styles are located in base/buttons.css, include just buttons with @slate base/buttons.</p>

<pre class="code">:root {
    --btn-radius: .4rem;
    --btn-font-weight: 500;
    --btn-font-size: 1em;
    --btn-font-size-s: calc(var(--btn-font-size) - 0.2em);
    --btn-font-size-m: calc(var(--btn-font-size) + 0.2em);
    --btn-font-size-l: calc(var(--btn-font-size) + 0.4em);
    --btn-padding-x: var(--space-m);
    --btn-padding-y: var(--space-xs);
    --btn-shadow: none;
    --btn-shadow-hover: none;
    --btn-border-default: 1px solid var(--color-gray-lighter);
}</pre>
<p>Buttons come in a few variants with sizing variants.</p>

## Variants

<button class="btn" type="button">.btn</button>
<button class="btn btn--primary" type="button">.btn--primary</button>
<button class="btn btn--accent" type="button">.btn--accent</button>
<button class="btn btn--subtle" type="button">.btn--subtle</button>

## Sizes

<button class="btn btn--primary" type="button">.btn</button>
<button class="btn btn--primary btn--l" type="button">.btn--l</button>
<button class="btn btn--primary btn--m" type="button">.btn--m</button>
<button class="btn btn--primary btn--s" type="button">.btn--s</button>

## Icons

<button class="btn btn--primary" type="button">
    <svg class="mr" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    Some Icons
    <svg class="ml" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" /></svg>
</button>


## States

### Disabled
<button disabled="true" class="btn btn--disabled" type="button">.btn--disabled</button>

### Block
<button class="btn btn--primary btn--block" type="button">    <svg class="mr" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
.btn--block</button>