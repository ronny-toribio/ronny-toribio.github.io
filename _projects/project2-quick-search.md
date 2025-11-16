---
layout: project
title: "Coffeeless Programming Quick Search Service"
technologies: [Python, Term Frequency-Inverse Document Frequency (TF-IDF), NLTK, Levenshtein distance, AWS Cloudwatch]
summary: "Implemented a search and autosuggestion service using TF-IDF, Levenshtein ratios for typo handling, and NLTK preprocessing to deliver accurate, context-aware article recommendations for the Coffeeless Programming educational platform."
---

![Coffeless](/assets/img/coffeeless/large-icon.svg)
## Quick Search Service

For this project, I built a robust article recommendation and autosuggestion service designed to improve search accuracy and user experience on the Coffeeless Programming platform—an educational initiative in the United States that helps individuals prepare for careers in software engineering.

The system leverages *TF-IDF (Term Frequency–Inverse Document Frequency)* to analyze article content and generate contextually relevant suggestions based on user queries. To ensure the service remains effective even when users make spelling mistakes, I incorporated *Levenshtein distance ratios*, enabling fuzzy matching and resilient typo-tolerant search functionality.

In addition, I developed an autosuggestion pipeline that combines *TF-IDF*, *Levenshtein-based typo correction*, and *NLTK preprocessing* (including tokenization, lemmatization, and stop-word filtering). This hybrid approach ensures fast, accurate, and meaningful suggestions as users type, enhancing overall usability and accessibility across the platform.
