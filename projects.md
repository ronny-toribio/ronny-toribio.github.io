---
layout: default
title: Projects
permalink: /projects/
---

# Projects

<section style="margin-top:0.6rem;">
  <div class="project-grid">
    {% assign sorted_projects = site.projects | sort: 'order' %}
    {% for project in sorted.projects %}
      <div class="hud-card project-item">
        {% if project.thumbnail %}
          <img src="{{ project.thumbnail | relative_url }}" alt="{{ project.title }} thumbnail" class="project-thumb" />
        {% endif %}
        <div class="project-meta">
          <h3 class="project-title"><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
          <p class="project-summary">{{ project.summary | default: project.excerpt | strip_html | truncate:150 }}</p>
          {% if project.technologies %}
            <div class="tech-chips">
              {% for t in project.technologies %}<span class="chip">{{ t }}</span>{% endfor %}
            </div>
          {% endif %}
          <a class="project-cta" href="{{ project.url | relative_url }}">Explore →</a>
        </div>
      </div>
    {% endfor %}
  </div>
</section>
