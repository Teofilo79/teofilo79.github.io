---
title: Table test
layout: default
---
<style>
    td, th {
        border: 1px solid black;
        padding:5px 10px;
    }
</style>    


{% assign ARRAY_NAME = "" | split: ',' %}
{% for object in site.data.test_products %}
{% assign new_item = object.category %}
{% assign ARRAY_NAME = ARRAY_NAME | push: new_item %}
{% endfor %}
{% assign ARRAY_NAME = ARRAY_NAME | uniq %}

<div>
{% for item in ARRAY_NAME %}
<button>{{item}}</button>
{% endfor %}
<button>&nbsp;X&nbsp;</button>
</div>  


<table>
  {% for row in site.data.test_products %}
    {% if forloop.first %}
    <tr>
      {% for pair in row %}
        <th>{{ pair[0] }}</th>
      {% endfor %}
    </tr>
    {% endif %}

    {% tablerow pair in row %}
      {{ pair[1] }}
    {% endtablerow %}
  {% endfor %}
</table>