---
layout: default
title: Home
---

<div class="hero hud-card">
  <h1>Hi — I'm <strong>Ronny Toribio</strong></h1>
  <p>Machine learning engineer — deep learning, computer vision, model deployment, and scalable inference systems.</p>
</div>

<section style="margin-top:1.25rem;">
  <h2 style="margin:0 0 0.5rem 0; color:var(--accent-2);">Featured Projects</h2>

  <div class="project-grid">
    {% assign featured = site.projects | slice: 0,3 %}
    {% for project in featured %}
      <div class="hud-card project-item">
        {% if project.thumbnail %}
          <img src="{{ project.thumbnail | relative_url }}" alt="{{ project.title }} thumbnail" class="project-thumb" />
        {% endif %}
        <div class="project-meta">
          <h3 class="project-title"><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
          {% if project.summary %}
            <p class="project-summary">{{ project.summary }}</p>
          {% else %}
            <p class="project-summary">{{ project.excerpt | strip_html | truncate:120 }}</p>
          {% endif %}
          {% if project.technologies %}
            <div class="tech-chips">
              {% for t in project.technologies %}
                <span class="chip">{{ t }}</span>
              {% endfor %}
            </div>
          {% endif %}
          <a class="project-cta" href="{{ project.url | relative_url }}">View Project</a>
        </div>
      </div>
    {% endfor %}
  </div>
</section>

