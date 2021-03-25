---
title: Installation
template: docs.ejs
---

<p>Slate can be installed and used in two different ways. The first is by using the built css file in dist and the second would be using the slate postcss pipeline to build slate into your project.</p>

<h2>CSS</h2>

<pre class="code">npm i -s @dsbn/slate-css</pre>

<p>Now you can use the built css files in your project.</p>

<pre class="code">&lt;link rel="stylesheet" href="./node_modules/@dsbn/slate-css/css/slate.css"&gt;</pre>

<h3>Picky</h3>

<p>You can also pick and choose from the prebundles Slate provides.</p>

<p><b>@dsbn/slate-css/css/slate.css</b> - Everything slate has to offer.</p>

<p><b>@dsbn/slate-css/css/base.css</b> - The base styles, basically everything in docs</p>

<p><b>@dsbn/slate-css/css/utility.css</b> - Collection of utility classes</p>

<p><b>@dsbn/slate-css/css/components.css</b> - All components</p>

<h2>JavaScript</h2>

<p>With JavaScript and bundler</p>
<pre class="code">import '@dsbn/slate-css';</pre>

<h2>With Sass</h2>

<p>To hook into the Sass pipeline start by using the includes under the <code>src</code> directory.</p>

<pre class="code">@dsbn/slate-css/src/all.scss</pre>

<p>You can pick and choose from the following items in slide</p>

<p><b>@dsbn/slate-css/src/all.scss</b> - Everything slate has to offer.</p>

<p><b>@dsbn/slate-css/src/base.scss</b> - The base styles, basically everything in docs</p>

<p><b>@dsbn/slate-css/src/utility.scss</b> - Collection of utility classes</p>

<p><b>@dsbn/slate-css/src/components.scss</b> - All components</p>