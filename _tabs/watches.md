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
        gap: 20px;
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
    .mobile_hide {
        display: none;
    }
    .mobile_show {
        display: block !important;
    }
    .p_b_30 {
        padding-bottom: 30px !important;
    }
    .p_b_0 {
        padding-bottom: 0px !important;
    }    
    .p_t_0 {
        padding-top: 0px !important;
    }
}

</style>    

<H1 style="text-align:center">Current collection</H1>
<div class="container" style="padding: 20px">
{% for item in site.data.watches %}
{% assign leftright = counter | modulo: 2 %}

{% if leftright == 1 %}
<div class="p_b_0" style="text-align: right">
<img alt="{{ item.name }}" src="{{item.image}}" style="object-fit: cover; width:300px; height:300px; border-radius: 80px 0px 0px 80px;"></div>
<div class="p_b_30 p_t_0" style="padding:10px; text-align: left; justify-self: stretch;">
<span class="item_name">{{ item.name }}</span><br>
{{ item.type }}<br>
{{ item.description }}<br>
{{ item.movement }}<br>
{{ item.water_resistance }}<br>
{{ item.date_acquired }}<br>
</div>

{% else %}
<div class="p_b_0" class="mobile_show" style="text-align: left; display: none;">
<img class="mobile_show" alt="{{ item.name }}" src="{{item.image}}" style="display: none; object-fit: cover; width:300px; height:300px; border-radius: 0px 80px 80px 0px;">
</div>
<div class="p_b_30 p_t_0" style="padding:10px; text-align: right">
<span class="item_name">{{ item.name }}</span><br>
{{ item.type }}<br>
{{ item.description }}<br>
{{ item.movement }}<br>
{{ item.water_resistance }}<br>
{{ item.date_acquired }}<br>
</div>
<div class="mobile_hide" style="text-align: left">
<img class="mobile_hide" alt="{{ item.name }}" src="{{item.image}}" style="object-fit: cover; width:300px; height:300px; border-radius: 0px 80px 80px 0px;">
</div>
{% endif %}

{% assign counter = counter | plus:1 %}
{% endfor %}
</div>
