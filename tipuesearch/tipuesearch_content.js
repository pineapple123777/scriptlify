---
---
var tipuesearch = {"pages": [
     {% for post in site.posts %}{"title": "{{ post.title }}", "text": "{{ post.content | strip_html | truncatewords:20 }}", "tags": "{{ post.categories }}", "url": "https://scriptlify.netlify.com{{ post.url }}"},{% endfor %}
]};



