---
title: Spacing
template: docs.ejs
---

<p>Slate provides space units used throughout in many places.</p>

<pre class="code">:root {
--space:  1em;
--space-xxxxs: calc(0.125 * var(--space)); 
--space-xxxs:  calc(0.25 * var(--space));
--space-xxs:   calc(0.375 * var(--space));
--space-xs:    calc(0.5 * var(--space));
--space-s:    calc(0.75 * var(--space));
--space-m:    calc(1.25 * var(--space));
--space-l:    calc(2 * var(--space));
--space-xl:    calc(3.25 * var(--space));
--space-xxl:   calc(5.25 * var(--space));
--space-xxxl:  calc(8.5 * var(--space));
--space-xxxxl: calc(13.75 * var(--space));
}</pre>

<p>Space units are extended with helper classes for adjust spacing along with using them for margin and padding.</p>

<h3>Adjusting Space</h3>

<p>To adjust the space inside or on an element, use the space-(size) classes and the space unit willl adjust for the element.</p>

<h4>Normal spacing</h4>

<div class="p outline">
    Normal Padding
</div>
<div class="p space--xxs outline">
    Padding with space--xxs
</div>
<div class="p space--xxxl outline">
    <p>Padding with space--xxxl</p>
    <div class="btn">Button</div>
</div>

<h2>Padding</h2>
<div class="responsive-table">
    <table class="table">
        <thead>
            <tr>
                <th>Class</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>.p</td>
                <td><code>padding: var(--space)</code></td>
            </tr>
            <tr>
                <td>.px</td>
                <td><code>padding: 0 var(--space)</code></td>
            </tr>
            <tr>
                <td>.py</td>
                <td><code>padding: var(--space) 0</code></td>
            </tr>
            <tr>
                <td>.pl</td>
                <td><code>padding-left: var(--space)</code></td>
            </tr>
            <tr>
                <td>.pr</td>
                <td><code>padding-right: var(--space)</code></td>
            </tr>
            <tr>
                <td>.pt</td>
                <td><code>padding-top: var(--space)</code></td>
            </tr>
            <tr>
                <td>.pb</td>
                <td><code>padding-bottom: var(--space)</code></td>
            </tr>
        </thead>
    </table>
</div>

<h3>Padding Sizes</h3>

<p>Size variants exists all the way from 2 - 12 which is a straight multiplication of the <code>var(--space)</code> unit</p>

<div class="responsive-table">
    <table class="table">
        <thead>
            <tr>
                <th>Class</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>.p-2</td>
                <td><code>padding: calc( 2 * var(--space) )</code></td>
            </tr>
            <tr>
                <td colspan="2">...</td>
            </tr>
            <tr>
                <td>.p-12</td>
                <td><code>padding: calc( 12 * var(--space) )</code></td>
            </tr>
        </thead>
    </table>
</div>


<h2>Margin</h2>
<div class="responsive-table">
    <table class="table">
        <thead>
            <tr>
                <th>Class</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>.m</td>
                <td><code>margin: var(--space)</code></td>
            </tr>
            <tr>
                <td>.mx</td>
                <td><code>margin: 0 var(--space)</code></td>
            </tr>
            <tr>
                <td>.mx-auto</td>
                <td><code>margin-left: var(--space); margin-right: var(--space)</code></td>
            </tr>
            <tr>
                <td>.my</td>
                <td><code>margin: var(--space) 0</code></td>
            </tr>
            <tr>
                <td>.my-auto</td>
                <td><code>margin-top: var(--space); margin-bottom: var(--space)</code></td>
            </tr>
            <tr>
                <td>.ml</td>
                <td><code>margin-left: var(--space)</code></td>
            </tr>
            <tr>
                <td>.mr</td>
                <td><code>margin-right: var(--space)</code></td>
            </tr>
            <tr>
                <td>.mt</td>
                <td><code>margin-top: var(--space)</code></td>
            </tr>
            <tr>
                <td>.mb</td>
                <td><code>margin-bottom: var(--space)</code></td>
            </tr>
        </thead>
    </table>
</div>

<h3>Margin Sizes</h3>

<p>Size variants exists all the way from 2 - 12 which is a straight multiplication of the <code>var(--space)</code> unit</p>

<div class="responsive-table">
    <table class="table">
        <thead>
            <tr>
                <th>Class</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>.m-2</td>
                <td><code>margin: calc( 2 * var(--space) )</code></td>
            </tr>
            <tr>
                <td colspan="2">...</td>
            </tr>
            <tr>
                <td>.m-12</td>
                <td><code>margin: calc( 12 * var(--space) )</code></td>
            </tr>
        </thead>
    </table>