---
title: "Coffeeless Programming Smart Search"
thumbnail: /assets/img/coffeeless/small-icon.png
technologies: [Python, AWS Bedrock, AWS DynamoDB, AWS Lambda, Pinecone, AWS Cloudwatch, Hierarchical Navigable Small Worlds(HNSW), approximate k nearest neighbors (kNN), cosine similarity, Clean Architecture]
summary: "A serverless Retrieval-Augmented Generation system that transforms educational articles into an intelligent semantic search experience. Built with AWS Lambda, Amazon Bedrock, and Pinecone, the platform indexes selected article sections, performs fast HNSW-based vector search, and uses an LLM to deliver accurate, context-aware answers in real time."
---

# Coffeeless Programming Smart Search
![Coffeless](/assets/img/coffeeless/large-icon.svg)

This project showcases a retrieval-augmented generation (RAG) system designed to transform static educational articles into a dynamic, intelligent, query-driven knowledge experience. The system integrates a large language model, embedding model, and vector database to deliver context-aware answers drawn directly from the website’s educational content.

To support this capability, I engineered a suite of AWS Lambda functions that manage the entire content-indexing and query-response pipeline. Bloggers can selectively index specific sections of their posts, allowing only the most relevant content to be embedded and stored. This selective-chunking approach increases retrieval precision while maintaining tight control over costs and performance. The solution fits seamlessly into Coffeeless Programming’s serverless architecture, emphasizing scalability, decoupling, and maintainability.

At the core of the indexing workflow is the Embeddings Creator Lambda, which uses Amazon Bedrock to generate high-quality embeddings. These embeddings are stored in Pinecone and organized using a Hierarchical Navigable Small Worlds (HNSW) index with cosine similarity, enabling fast and semantically meaningful vector retrieval.

For answering user questions, I developed the Query Resolver Lambda, which performs approximate k-nearest neighbors searches over the vector database. Using Pinecone’s HNSW graph, the system consistently returns relevant semantic matches in under three seconds. To elevate user experience even further, I extended the Query Resolver with full RAG capabilities—combining LLM generation with the retrieved article segments to produce precise, context-grounded responses.

This project brings together distributed system design, serverless compute, vector search, and LLM-powered reasoning to deliver a scalable, intelligent search layer across blog content.
