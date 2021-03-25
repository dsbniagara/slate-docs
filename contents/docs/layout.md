---
title: Layout
template: docs.ejs
---

<p>Slate uses a 12 column flexbox grid in a series of containers, rows, and columns. Below is an example and an in-depth look at how the layout comes together.</p>
                
<div class="docs-example">
<div class="container">
<div class="row">
<div class="col-12">
12
</div>
</div>
<div class="row">
<div class="col-11">
11
</div>
<div class="col-1">
1
</div>
</div>
<div class="row">
<div class="col-10">
10
</div>
<div class="col-2">
2
</div>
</div>
<div class="row">
<div class="col-9">
9
</div>
<div class="col-3">
3
</div>
</div>
<div class="row">
<div class="col-8">
8
</div>
<div class="col-4">
4
</div>
</div>
<div class="row">
<div class="col-7">
7
</div>
<div class="col-5">
5
</div>
</div>
<div class="row">
<div class="col-6">
6
</div>
<div class="col-6">
6
</div>
</div>
</div>
</div>

<h2>Auto width</h2>

<p>A standard .col will provide an automatic width inside a row.</p>

<div class="docs-example layout-grid-example">
<div class="container">
<div class="row">
<div class="col">
1 of 2
</div>
<div class="col">
2 of 2
</div>
</div>
<div class="row">
<div class="col">
1 of 3
</div>
<div class="col">
2 of 3
</div>
<div class="col">
3 of 3
</div>
</div>
</div>
</div>

<h2>Devices</h2>

<p>Breakpoints exist for @xs, @s, @m, @xl and @xxl. Below is a table describing the device sizes and breakpoints.</p>

<p>Devices can be targeted by appending @device to any of the columns.</p>

<div class="responsive-table">
<table class="table">
<thead>
<tr>
<th></th>
<th>.col@xs</th>
<th>.col@s</th>
<th>.col@m</th>
<th>.col@l</th>
<th>.col@xl</th>
<th>.col@xxl</th>
</tr>
</thead>
<tbody>
<tr>
<td>Breakpoint</td>
<td>576px</td>
<td>≥576px</td>
<td>≥768px</td>
<td>≥992px</td>
<td>≥1200px</td>
<td>≥1800px</td>
</tr>
<tr>
<td>Container</td>
<td>None</td>
<td>540px</td>
<td>720px</td>
<td>960px</td>
<td>1140px</td>
<td>1640px</td>
</tr>
<tr>
<td>Gutter</td>
<td colspan="6">var(--space)</td>
</tr>
</thead>
</table>
</div>

<h3>Stacking</h3>

<p>Combine with <a href="docs_utility.html#flex">flex utility</a> classes to change the layout type to column.</p>

<div class="docs-example layout-grid-example">
<div class="container">
<div class="row flex-col">
<div class="col">
.flex-col
</div>
<div class="col">
.flex-col
</div>
</div>
<div class="row flex-col@xs">
<div class="col">
.flex-col@xs
</div>
<div class="col">
.flex-col@xs
</div>
</div>
</div>
</div>

<h2>Alignment &amp; Spacing</h2>

<p>All alignment &amp; spacing can target devices by appending the appropriate @device.</p>

<h3>Around</h3>
<div class="docs-example layout-grid-example">
<div class="container">
<div class="row flex-just-around">
<div class="col-3">
.flex-just-around
</div>
<div class="col-3">
.flex-just-around
</div>
<div class="col-3">
.flex-just-around
</div>
</div>
</div>
</div>
<h3>Between</h3>
<div class="docs-example layout-grid-example">
<div class="container">
<div class="row flex-just-between">
<div class="col-3">
.flex-just-between
</div>
<div class="col-3">
.flex-just-between
</div>
<div class="col-3">
.flex-just-between
</div>
</div>
</div>
</div>
<h3>Even</h3>
<div class="docs-example layout-grid-example">
<div class="container">
<div class="row flex-just-even">
<div class="col-3">
.flex-just-even
</div>
<div class="col-3">
.flex-just-even
</div>
<div class="col-3">
.flex-just-even
</div>
</div>
</div>
</div>
<h3>Center</h3>
<div class="docs-example layout-grid-example">
<div class="container">
<div class="row flex-just-center">
<div class="col-3">
.flex-just-center
</div>
<div class="col-3">
.flex-just-center
</div>
<div class="col-3">
.flex-just-center
</div>
</div>
</div>
</div>

<h2>Alignment</h2>

<p>Helper classes exist to make align easy. Each alignment class also exists at each device breakpoint, so you can use .row--top or .row-xs-center in combination.</p>

<h3>Vertical</h3>

<p>By default a column will fill the height of the row. To control the alignment within the row you can use .top, .middle or .bottom.</p>

<h4>Start</h4>
<div class="docs-example layout-grid-example">
<div class="container">
<div class="row flex-align-items-start">
<div class="col">
.flex-align-items-start
</div>
<div class="col">
.flex-align-items-start
</div>
<div class="col">
.flex-align-items-start
</div>
</div>
</div>
</div>
<h4>Center</h4>
<div class="docs-example layout-grid-example">
<div class="container my-2">
<div class="row flex-align-items-center">
<div class="col">
.flex-align-items-center
</div>
<div class="col">
.flex-align-items-center
</div>
<div class="col">
.flex-align-items-center
</div>
</div>
</div>
</div>
<h4>End</h4>
<div class="docs-example layout-grid-example">
<div class="container my-2">
<div class="row flex-align-items-end">
<div class="col">
.flex-align-items-end
</div>
<div class="col">
.flex-align-items-end
</div>
<div class="col">
.flex-align-items-end
</div>
</div>
</div>
</div>

<h3>Horizontal</h3>

<p>By default a column will fill the height of the row. To control the alignment within the row you can use .top, .middle or .bottom.</p>

<div class="docs-example layout-grid-example">
<div class="container my-2">
<div class="row flex-just-start">
<div class="col-3">
.flex-just-start
</div>
</div>
<div class="row flex-just-center">
<div class="col-3">
.flex-just-center
</div>
</div>
<div class="row flex-just-end">
<div class="col-3">
.flex-just-end
</div>
</div>
</div>
</div>

<h2>Reverse</h2>

<p>Reverse will adjust flex-direction from either row-reverse with .row--reverse or column reverse with .col--reverse.</p>

<h3>Row</h3>
<div class="docs-example layout-grid-example">
<div class="container">
<div class="row flex-row-r">
<div class="col">
#1 .flex-row-r
</div>
<div class="col">
#2 .flex-row-r
</div>
<div class="col">
#3 .flex-row-r
</div>
</div>
</div>
</div>
<h3>Column Reverse</h3>
<div class="docs-example layout-grid-example">
<div class="container">
<div class="row flex-col-r">
<div class="col">
#1 .flex-col-r
</div>
<div class="col">
#2 .flex-col-r
</div>
<div class="col">
#3 .flex-col-r
</div>
</div>
</div>
</div>

<h2>Order</h2>

<div class="docs-example layout-grid-example">
<div class="container">
<div class="row">
<div class="col-4 order-last">
#1 .order-last
</div>
<div class="col-4">
#2
</div>
<div class="col-4 order-first">
#3 .order-first
</div>
</div>
</div>
</div>
</div>