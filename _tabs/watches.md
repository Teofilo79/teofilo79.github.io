---
# the default layout is 'page'
icon: fas fa-stream
order: 5
---
{% assign counter = 1 %}

<style>
    .item_name {
    font-weight:bold;
    font-size: 1.46rem;
    line-height: 1.35;
    }
    .container {
        display:grid;
        place-content: center;
        grid-template-columns: 1fr 1fr;
    }
    .container > div {
        padding: 10px 0px;
    }         

@media (max-width: 400px) {
    .container {
        display:grid;  
        grid-template-columns: 1fr;
    }
    .container > div {
        text-align: center !important;
        width:100%;
    }
    .container > div > a > img {
        border-radius: 20px !important;
    }    
}

</style>    

<H1>My watches collection</H1><hr>
<H2 style="text-align:center">Current collection</H2>
<div class="container" style="padding: 20px">
{% for item in site.data.watches %}
{% assign leftright = counter | modulo: 2 %}

{% if leftright == 1 %}
<div style="padding-right:0px; text-align: right">
<img alt="{{ item.name }}" src="{{item.image}}" style="object-fit: cover; width:300px; height:300px; border-radius: 80px 0px 0px 80px;"></div>
<div style="padding:10px; text-align: left">
<span class="item_name">{{ item.name }}</span><br>
{{ item.type }}<br>
{{ item.description }}<br>
{{ item.movement }}<br>
{{ item.water_resistance }}<br>
{{ item.date_acquired }}<br>
</div>

{% else %}

<div style="padding:10px; text-align: right">
<span class="item_name">{{ item.name }}</span><br>
{{ item.type }}<br>
{{ item.description }}<br>
{{ item.movement }}<br>
{{ item.water_resistance }}<br>
{{ item.date_acquired }}<br>
</div>
<div style="padding-left:0px; text-align: left">
<img alt="{{ item.name }}" src="{{item.image}}" style="object-fit: cover; width:300px; height:300px; border-radius: 0px 80px 80px 0px;">
</div>
{% endif %}

{% assign counter = counter | plus:1 %}
{% endfor %}
</div>
