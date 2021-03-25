---
title: Nav
template: component.ejs
---

<p>A very basic nav with responsive capabilities.</p>
<pre class="code">@slate components/nav</pre>

<nav class="nav">
    <ul class="nav-items">
        <li class="nav-item"><a href="docs.html" class="nav-link">Docs</a></li>
        <li class="nav-item active"><a href="components.html" class="nav-link">Components</a></li>
        <li class="nav-item"><a href="docs.html" class="nav-link">Globals</a></li>
    </ul>
</nav>
<h3>Stacked</h3>

<nav class="nav nav--stacked nav-active--fill">
    <ul class="nav-items">
        <li class="nav-item"><a href="docs.html" class="nav-link">Docs</a></li>
        <li class="nav-item active"><a href="components.html" class="nav-link">Components</a></li>
        <li class="nav-item"><a href="docs.html" class="nav-link">Globals</a></li>
    </ul>
</nav>

<h3>Active</h3>

<h4>Under</h4>
<p>An underline like active state.</p>
<nav class="nav nav-active--under">
    <ul class="nav-items">
        <li class="nav-item"><a href="docs.html" class="nav-link">Docs</a></li>
        <li class="nav-item active"><a href="components.html" class="nav-link">Components</a></li>
        <li class="nav-item"><a href="docs.html" class="nav-link">Globals</a></li>
    </ul>
</nav>
<h4>Fill</h4>
<p>Fill the background.</p>
<nav class="nav nav-active--fill">
    <ul class="nav-items">
        <li class="nav-item"><a href="docs.html" class="nav-link">Docs</a></li>
        <li class="nav-item active"><a href="components.html" class="nav-link">Components</a></li>
        <li class="nav-item"><a href="docs.html" class="nav-link">Globals</a></li>
    </ul>
</nav>
<h4>Tab</h4>
<p>A tab like active state.</p>
<nav class="nav nav--tabs">
    <ul class="nav-items">
        <li class="nav-item"><a href="docs.html" class="nav-link">Docs</a></li>
        <li class="nav-item active"><a href="components.html" class="nav-link">Components</a></li>
        <li class="nav-item"><a href="docs.html" class="nav-link">Globals</a></li>
    </ul>
</nav>

<h3>Responsive</h3>

<p>Simply use nav@device. You will also need the appropriate nav-toggle@device to make the button responsive as well.</p>

<div x-data="{ show: false }">

<button class="nav-toggle@s" type="button" @click="show = !show" :class="{ 'active': show }"><svg fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button>

<nav class="nav@s" :class="{ 'active': show }">
    <ul class="nav-items">
        <li class="nav-item"><a class="nav-link" href="docs.html">Docs</a></li>
        <li class="nav-item active"><a class="nav-link" href="components.html" >Components</a></li>
        <!-- <li class="nav-item"><a class="nav-link" href="docs.html" >Globals</a></li> -->
    </ul>
</nav>

</div>