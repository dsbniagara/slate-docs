---
title: Panel
template: component.ejs
---
<p>Group other componenets with a simple panel.</p>

<div class="panel">
    I am a panel.
</div>

<h2>Header</h2>
<div class="panel">
    <div class="panel-header">
        <h5>Panel header</h5>
    </div>
    I am a panel.
</div>

<h2>Table</h2>
<p>Add <code>.panel--table</code> to your <code>.panel</code> to get a paddingless table. The first and last columns (td,th) also get a padding bump to give more space from the edge.</p>
<div class="panel panel--table">
    <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Jim</td>
                    <td>Smith</td>
                    <td>Approved</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Jim</td>
                    <td>Smith</td>
                    <td>Approved</td>
                </tr>
            </thead>
        </table>
</div>

<h3>Reference</h3>

<h4>Variables</h4>

<pre class="code">:root {
--panel-padding: var(--space-l);
--panel-radius: .8rem;
--panel-border: 0px none;
--panel-shadow: 0 1px 1px #00000012, 0 2px 5px #0000001a;
--panel-margin: 0 0 1rem 0;
--panel-background: transparent;
}</pre>

<h4>Source</h4>
<pre class="code">@import '@dsbn/slate-css/src/components/panel';</pre>