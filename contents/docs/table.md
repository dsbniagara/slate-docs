---
title: Table
template: docs.ejs
---
<p>Slate does include <i>basic</i> styling for tables. Use <code>.table</code> to enable.</p>

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
            <td><a class="btn btn--subtle btn--s">Edit</a> <a class="btn btn--subtle btn--s">Delete</a></td>
        </tr>
        <tr>
            <td>1</td>
            <td>Jim</td>
            <td>Smith</td>
            <td>Approved</td>
            <td><a class="btn btn--subtle btn--s">Edit</a> <a class="btn btn--subtle btn--s">Delete</a></td>
        </tr>
    </thead>
</table>
<h2>Responsive</h2>

<p>Wrap the table with <code>.responsive-table</code> to appropriately overflow the table on smaller devices.</p>

<div class="responsive-table">
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Points</th>
                <th>Points</th>
                <th>Points</th>
                <th>Points</th>
                <th>Points</th>
                <th>Points</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Jim</td>
                <td>Smith</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>Approved</td>
                <td><a class="btn btn--subtle btn--s">Edit</a> <a class="btn btn--subtle btn--s">Delete</a></td>
            </tr>
            <tr>
                <td>1</td>
                <td>Jim</td>
                <td>Smith</td>
                <td>44</td>
                <td>44</td>
                <td>44</td>
                <td>44</td>
                <td>44</td>
                <td>44</td>
                <td>44</td>
                <td>Approved</td>
                <td><a class="btn btn--subtle btn--s">Edit</a> <a class="btn btn--subtle btn--s">Delete</a></td>
            </tr>
        </thead>
    </table>
</div>