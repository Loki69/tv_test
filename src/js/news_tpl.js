var tpl, tpl_img;
tpl = "{{#rss}}<div class=\"slide autoplay\"> <div class=\"newsImg\"><div class=\"scrolled autoplay\">{{#images}}{{>image}}{{/images}}</div><div class=\"description\"><div class=\"tiitle\"><h1><img src=\"1ebab1.jpg\" alt=\"\" class=\"logotip\">{{title}}</h1></div><div class=\"publishDate\">{{publishedDate}}</div><div class=\"sours\">{{source}}</div></div></div></div>{{/rss}}";
tpl_img = {
    image: "<div sytle=\"background: url(\'{{.}}\')\"></div>"
};


//html = Mustache.to_html(tpl, jsonTest, tpl_img);
//$('body').html(html);
