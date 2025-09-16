---
# the default layout is 'page'
icon: fa fa-clock
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
    .container_wishlist {
        display:grid;
        place-content: center;
        grid-template-columns: 100px 1fr;
        gap: 20px;
    }    
    .container > div {
        padding: 10px 0px;
    }         

    .container > div > a > img {
    border-width: 12px;
    border-style: solid;
    border-image: url("/assets/img/images/png-transparent-frame-border-silver.png") 16 stretch;   }

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

#post-list .card , {
    border-radius:14px;
    border-width: 12px;
    border-style: solid;
    border-image: url("/assets/img/images/png-transparent-frame-border-silver.png") 18 stretch;
    border-image-outset: 0px;
    background: var(--card-bg);
}


}

</style>    

<H1 style="text-align:center">"If watches were not fun, we would need only one"</H1><br>
<div width="100%" style="text-align:right">This is quote of one youtuber, pretty smart said.</div><br>

![Exit](https://static.vecteezy.com/system/resources/previews/002/301/058/non_2x/fire-exit-emergency-green-sign-free-vector.jpg){: .right w="100" .shadow}
<H2>Update from 16.09.2025</H2><br>
There is one interesting term in watch collecting - the "Exit Watch". It has a magic inside - makes you resign from collecting and wear only one. This is like dating a lot of girls and finally marrying the one and only - to be your partner forever. For life and after it if this is possible. So, my latest acquisition made me resign from collecting. I look at the watchbox. I like the watches I've collected - but I do not want to wear them. They are like paintings on the wall. This makes me sad. Then I look at my wrist and smile. Happy again. I have decided to wait for one year. In one year I will probably sell what I can, leaving only the items that were presents from family and friends.


<hr>
<H1 style="text-align:center">Confession</H1><br>
<div width="100%" style="text-align:left">
Confession here! I am watch addict. It lasts my whole life, I was buying watches each few years or so. I always had a watch on the wrist. But last few years I started falling into the rabbit hole of watch collecting. Revealed a lot of watch enthusiasts, communities, youtube bloggers that share the same passion to watches and admire them with no logical - sometimes purely aesthetic reasons.<br><br>

This page has my <a href="#current_collection">current collection</a> and my <a href="#wishlist_collection">wishlist</a> that can be used when I finally win a lottery :)<br><br>

So, let me give you small introduction to this wonderful world.<br><br>
There is a non-official division on watch types:<br>
<ul>
<li><b>Diver</b> - rotating bezel is what differentiates them from any others. They look as a watch with certain functionality, and bezels give them a big space for unique looks. Most famous - Rolex submarine.</li>
<li><b>Dress watch</b> - these are for shirts or suits - to look officially and fancy. Usually not very readable hands, no additional features. Their goal is to look fancy and show the time.</li>
<li><b>Beater</b> - take these when you plan to do any activities. they are waterproof, shock-proof, the ones that you do not regret scratches. So, tough ones! Sometimes not looking fancy - that is not what they are made for.</li>
<li><b>GADA</b> - Go anywhere, do anything. This category is interesting, as it can include any of the above-mentioned ones. The watch that you pick when you do not have much time to decide - grab and go. They are usually ready for anything.</li>
</ul>
</div>


<H1 id="current_collection" style="text-align:center">Current collection</H1><br>
Do not ask me why and how, but I really wear them all, rotating each few days. I like how they look, feel and what they can do! Initially I wanted to target on solar watches, they are precise, reliable and need no maintenance. But life is life, some models are just so tempting - can not resist adding them to collection.<br>

<div class="container" style="padding: 20px">
{% for item in site.data.watches %}
{% assign leftright = counter | modulo: 2 %}

{% if leftright == 1 %}
<div class="p_b_0" style="text-align: right">
<img alt="{{ item.name }}" src="{{item.image}}" style="object-fit: cover; width:400px; height:250px;"></div>
<div class="p_b_30 p_t_0" style="padding:10px; text-align: left; justify-self: stretch;">
<span class="item_name">{{ item.name }}</span><br>
Type: {{ item.type }}<br>
<i>{{ item.description }}</i><br>
Movement: {{ item.movement }}<br>
WR {{ item.water_resistance }}<br>
{{ item.date_acquired }}<br>
</div>

{% else %}
<div class="p_b_0" class="mobile_show" style="text-align: left; display: none;">
<img class="mobile_show" alt="{{ item.name }}" src="{{item.image}}" style="display: none; object-fit: cover; width:400px; height:250px">
</div>
<div class="p_b_30 p_t_0" style="padding:10px; text-align: right">
<span class="item_name">{{ item.name }}</span><br>
Type: {{ item.type }}<br>
<i>{{ item.description }}</i><br>
Movement: {{ item.movement }}<br>
WR: {{ item.water_resistance }}<br>
{{ item.date_acquired }}<br>
</div>
<div class="mobile_hide" style="text-align: left">
<img class="mobile_hide" alt="{{ item.name }}" src="{{item.image}}" style="object-fit: cover; width:400px; height:250px">
</div>
{% endif %}

{% assign counter = counter | plus:1 %}
{% endfor %}
</div>





<H1 id="wishlist_collection" style="text-align:center">Wishlist!</H1><br>
Yes, there are plenty of watches I like, thus if I have an chance - I will buy them. But with no big impact on family budget - I remember this is a hobby, and it should not hurt you, but only bring pleasure.<br>

<div class="container_wishlist" style="padding: 20px">
{% for item1 in site.data.wishlist %}

<div class="p_b_0" style="text-align: right">
<img alt="{{ item1.name }}" src="{{item1.image}}" style="object-fit: cover; width:100px; height:100px; border-radius: 0px 0px 20px 20px;"></div>
<div class="p_b_30 p_t_0" style="padding:10px; text-align: left; justify-self: stretch;">
<span class="item_name">{{ item1.name }}</span><br>
{{ item1.description }}<br>
{{ item1.price }}<br>
</div>

{% endfor %}
</div>