---
title: Forms
template: docs.ejs
---
<p>Form elements are defined in base/form.css can be styled by adding form-input to your desired element.</p>

<pre class="code">:root {
--input-radius: 0.25em;
--input-border: 1px solid var(--color-gray-light);
--input-border-hover: 1px solid  var(--color-gray);
--input-border-active: 1px solid var(--color-primary);
--input-shadow: 0 1px 1px #0000000f;
--input-shadow-hover: none;
--input-shadow-active: 0px 0px 0px 3px var(--color-primary-a-10), 0px 1px 4px 1px var(--color-primary-a-20);
--input-check-radio-size: 18px;
}</pre>

<div class="form-field">
    <label for="name">Your name</label> 
    <input id="name" type="text" name="name" placeholder="John Smith" class="form-input">
</div>

<div class="form-field">
    <label for="select">Select a value</label> 
    <select id="select" class="form-input">
        <option>Option 1</option>
        <option>Option 2</option>
    </select>
</div>

<div class="form-field"><label><input type="checkbox" class="form-switch"> Switch</label></div>

<div class="form-field">
    <label for="check1">
        <input id="check1" type="checkbox" class="form-input">
        Check one
    </label> 
    <label for="check2">
        <input id="check2" type="checkbox" class="form-input"> 
        Check two
    </label>
</div>

<div class="form-field">
    <label for="radio1">
        <input id="radio1" name="radio" value="1" type="radio" class="form-input"> 
        Radio 1
    </label>
    <label for="radio2">
        <input id="radio2" name="radio" value="1" type="radio" class="form-input"> Radio 2
    </label>
</div>

<p>
    <button type="button" class="btn btn--primary">Submit</button> 
    <button type="button" class="btn">Cancel</button>
</p>