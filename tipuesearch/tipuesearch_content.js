---
---
var tipuesearch = {"pages": [
     {% for post in site.posts %}
     {"title": "{{ post.title }}", "text": "{{ post.output }}", "tags": "{{ post.categories }}", "url": "https://scriptlify.netlify.com{{ post.url }}"},
     {% endfor %}
]};



