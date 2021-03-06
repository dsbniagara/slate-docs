---
title: Utility
template: docs.ejs
---
                
<p>@slate/utility or slate.utility.min.css</p>

<nav class="nav flex-col docs-toc">
    <a class="nav-link" href="#flex">Flex</a>
    <a class="nav-link" href="#padding">Padding</a>
    <a class="nav-link" href="#margin">Margin</a>
    <a class="nav-link" href="#space">Space</a>
    <a class="nav-link" href="#text">Text</a>
</nav>

<h2 id="flex">Flex</h2>

<p>Flex classes exist at each device breakpoint. Add <b>@device</b> to any class to target a device.</p>

<table class="table">
    <thead>
        <tr>
            <th>Class</th>
            <th>CSS</th>
        </tr>
    </thead>
    <tbody> 
        <tr>
            <td>.flex</td>
            <td><code>display: flex;</code></td>
        </tr>
        <tr>
            <td colspan="2"><b>flex-direction</b></td>
        </tr>
        <tr>
            <td>.flex-col</td>
            <td><code>flex-direction: column;</code></td>
        </tr>
        <tr>
            <td>.flex-col-r</td>
            <td><code>flex-direction: column-reverse;</code></td>
        </tr>
        <tr>
            <td>.flex-row</td>
            <td><code>flex-direction: row;</code></td>
        </tr>
        <tr>
            <td>.flex-row-r</td>
            <td><code>flex-direction: row-reverse;</code></td>
        </tr>
        <tr>
            <td colspan="2"><b>justify-content</b></td>
        </tr>
        <tr>
            <td>.flex-just-start</td>
            <td><code>justify-content: flex-start;</code></td>
        </tr>
        <tr>
            <td>.flex-just-center</td>
            <td><code>justify-content: center;</code></td>
        </tr>
        <tr>
            <td>.flex-just-end</td>
            <td><code>justify-content: flex-end;</code></td>
        </tr>
        <tr>
            <td>.flex-just-around</td>
            <td><code>justify-content: space-around;</code></td>
        </tr>
        <tr>
            <td>.flex-just-between</td>
            <td><code>justify-content: space-between;</code></td>
        </tr>
        <tr>
            <td>.flex-just-even</td>
            <td><code>justify-content: space-evenly;</code></td>
        </tr>
        <tr>
            <td colspan="2"><b>align-items</b></td>
        </tr>
        <tr>
            <td>.flex-align-items-start</td>
            <td><code>align-items: flex-start;</code></td>
        </tr>
        <tr>
            <td>.flex-align-items-center</td>
            <td><code>align-items: flex-center;</code></td>
        </tr>
        <tr>
            <td>.flex-align-items-end</td>
            <td><code>align-items: flex-end;</code></td>
        </tr>
        <tr>
            <td colspan="2"><b>order</b></td>
        </tr>
        <tr>
            <td>.order-first</td>
            <td><code>order: -1;</code></td>
        </tr>
        <tr>
            <td>.order-last</td>
            <td><code>order: 1;</code></td>
        </tr>
    </thead>
</table>

<h2 id="padding">Padding</h2>
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
            <tr>
                <td colspan="2"><b>Sizes</b></td>
            </tr>
            <tr>
                <td>.p<i>{side}</i>-2</td>
                <td><code>padding: calc( 2 * var(--space) )</code></td>
            </tr>
            <tr>
                <td colspan="2">...</td>
            </tr>
            <tr>
                <td>.p<i>{side}</i>-12</td>
                <td><code>padding: calc( 12 * var(--space) )</code></td>
            </tr>
        </thead>
    </table>
</div>

<h2 id="margin">Margin</h2>
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
                <td>.my</td>
                <td><code>margin: var(--space) 0</code></td>
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
            <tr>
                <td colspan="2"><b>Sizes</b></td>
            </tr>
            <tr>
                <td>.m<i>{side}</i>-2</td>
                <td><code>margin: calc( 2 * var(--space) )</code></td>
            </tr>
            <tr>
                <td colspan="2">...</td>
            </tr>
            <tr>
                <td>.m<i>{side}</i>-12</td>
                <td><code>margin: calc( 12 * var(--space) )</code></td>
            </tr>
        </thead>
    </table>
</div>

<h2 id="space">Space</h2>

<p>The space utility classes modify the space unit on the given element. All children will then use the new space unit.</p>

<table class="table">
    <thead>
        <tr>
            <th>Class</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody> 
        <tr>
            <td>.space-xxxs</td>
            <td><code>--space: var(--space-xxxs);</code></td>
        </tr>
        <tr>
            <td>.space-xxs</td>
            <td><code>--space: var(--space-xxs);</code></td>
        </tr>
        <tr>
            <td>.space-xs</td>
            <td><code>--space: var(--space-xs);</code></td>
        </tr>
        <tr>
            <td>.space-s</td>
            <td><code>--space: var(--space-s);</code></td>
        </tr>
        <tr>
            <td>.space-m</td>
            <td><code>--space: var(--space-m);</code></td>
        </tr>
        <tr>
            <td>.space-l</td>
            <td><code>--space: var(--space-l);</code></td>
        </tr>
        <tr>
            <td>.space-xl</td>
            <td><code>--space: var(--space-xl);</code></td>
        </tr>
        <tr>
            <td>.space-xxl</td>
            <td><code>--space: var(--space-xxl);</code></td>
        </tr>
        <tr>
            <td>.space-xxxl</td>
            <td><code>--space: var(--space-xxxl);</code></td>
        </tr>
    </tbody>
</table>

<h2 id="text">Text</h2>

<table class="table">
    <thead>
        <tr>
            <th>Class</th>
            <th>CSS</th>
        </tr>
    </thead>
    <tbody> 
        <tr>
            <td>.text-left</td>
            <td><code>text-align: left;</code></td>
        </tr>
        <tr>
            <td>.text-center</td>
            <td><code>text-align: center;</code></td>
        </tr>
        <tr>
            <td>.text-right</td>
            <td><code>text-align: right;</code></td>
        </tr>
        <tr>
            <td>.text-base</td>
            <td><code>font-size: var(--text-base);</code></td>
        </tr>
        <tr>
            <td>.text-xs</td>
            <td><code>font-size: var(--text-xs);</code></td>
        </tr>
        <tr>
            <td>.text-s</td>
            <td><code>font-size: var(--text-s);</code></td>
        </tr>
        <tr>
            <td>.text-m</td>
            <td><code>font-size: var(--text-m);</code></td>
        </tr>
        <tr>
            <td>.text-l</td>
            <td><code>font-size: var(--text-l);</code></td>
        </tr>
        <tr>
            <td>.text-xxl</td>
            <td><code>font-size: var(--text-xxl);</code></td>
        </tr>
        <tr>
            <td>.text-xxxl</td>
            <td><code>font-size: var(--text-xxxl);</code></td>
        </tr>
        <tr>
            <td>.h1</td>
            <td><code>font-size: var(--text-h1);</code></td>
        </tr>
        <tr>
            <td>.h2</td>
            <td><code>font-size: var(--text-h2);</code></td>
        </tr>
        <tr>
            <td>.h3</td>
            <td><code>font-size: var(--text-h3);</code></td>
        </tr>
        <tr>
            <td>.h4</td>
            <td><code>font-size: var(--text-h4);</code></td>
        </tr>
        <tr>
            <td>.h5</td>
            <td><code>font-size: var(--text-h5);</code></td>
        </tr>
        <tr>
            <td>.h6</td>
            <td><code>font-size: var(--text-h6);</code></td>
        </tr>
    </tbody>
</table>