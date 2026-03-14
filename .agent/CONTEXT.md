# CONTEXT.md

## Project Name

**Companion**

## Overview

Companion is a **privacy-first AI coworker platform** that provides every user with a **personal AI companion agent** connected to a shared organizational knowledge system.

The system captures knowledge from meetings, documents, and internal communication, transforming it into **searchable organizational memory** accessible by AI agents.

Companion focuses on **non-technical usability**, allowing users to interact with AI through natural conversation while maintaining **local-first privacy through self-hosted AI infrastructure**.

---

# Core Product Concept

Companion provides two primary interaction modes:

1. **Chat Mode (Coworker Mode)**
2. **Code Mode (Developer Mode)**

Both modes share the same **organizational knowledge base** and **meeting intelligence system**.

---

# Mode 1 — Chat Mode (AI Coworker)

Chat Mode is designed for **non-technical users**.

It functions similarly to a collaborative AI assistant that understands:

* organizational knowledge
* meeting discussions
* shared documents
* company context

The interface resembles conversational AI systems used for workplace collaboration.

Users interact with their personal **Companion agent** to:

* ask questions about meetings
* retrieve company knowledge
* summarize discussions
* extract decisions
* generate reports

Example queries:

* "What did we decide in the engineering meeting yesterday?"
* "Summarize the discussion about the sonar sensor."
* "What tasks were assigned during the planning meeting?"

---

# Meeting Intelligence

Companion can **attend meetings automatically** when users join them.

During meetings, the system performs:

* real-time transcription
* speaker identification
* topic segmentation
* decision extraction
* action item detection

Users can query the Companion **in real-time during meetings** for context.

Example:

User question during meeting:

> "Did we already discuss the sensor supplier change?"

Companion response:

> "Yes. It was discussed last month in the engineering sync. The decision was to switch suppliers due to cost reduction."

---

# Live Meeting Stream

During meetings, Companion can provide a **live audio stream interface**.

Capabilities include:

* real-time transcription
* streaming text output
* optional text-to-speech playback

This allows users to receive **live contextual insights while discussions happen**.

---

# Shared Organizational Knowledge

Companion maintains a **shared knowledge layer for the entire organization**.

Sources include:

* meeting transcripts
* company documents
* internal communication
* project documentation

Knowledge is processed into:

* semantic embeddings
* structured metadata
* extracted decisions
* task assignments

This shared knowledge becomes the **institutional memory of the organization**.

---

# Mode 2 — Code Mode (Developer Mode)

Code Mode is designed for **developers and technical users**.

It acts as a development-focused interface that integrates AI coding assistance with organizational knowledge.

This mode wraps development-oriented AI tooling while providing access to:

* meeting transcripts
* organizational context
* technical discussions
* project documentation

Capabilities include:

* code generation
* repository navigation
* documentation search
* contextual reasoning about technical decisions

Example query:

> "Why did we switch to ROS2 for the robotics stack?"

The AI can reference **previous technical meetings and discussions**.

---

# System Architecture

Companion consists of several major subsystems:

## Knowledge Ingestion Pipeline

The ingestion system continuously processes organizational data.

Sources include:

* meetings
* documents
* chat platforms
* code repositories

Processing steps:

1. transcription
2. speaker identification
3. topic segmentation
4. knowledge extraction
5. embedding generation
6. semantic indexing

---

## Organizational Memory Layer

Companion stores knowledge in a shared memory system.

Components include:

* vector database for semantic retrieval
* structured knowledge storage
* decision and task extraction

This layer acts as the **long-term memory of the organization**.

---

## Personal Companion Agents

Each user has a **persistent AI companion** that:

* remembers past interactions
* understands user workflows
* retrieves relevant organizational context

Agents act as **AI coworkers**, helping users navigate knowledge and decisions across the organization.

---

# Privacy and Deployment

Companion is designed to support **fully self-hosted deployments**.

Key privacy principles:

* sensitive data remains local
* AI models can run on private infrastructure
* embeddings and transcripts remain within the organization

Local AI inference may run using frameworks such as **Ollama**.

External model routing can optionally be supported via **OpenRouter** when privacy policies allow.

---

# Target Users

Companion is designed for:

* organizations with frequent meetings
* teams that struggle with knowledge fragmentation
* companies with sensitive internal discussions
* mixed technical and non-technical teams

The system enables **AI-powered collaboration without exposing sensitive information to external services**.

---

# Long-Term Vision

Companion aims to become the **memory layer for organizations**.

Instead of knowledge disappearing after meetings or employee turnover, institutional knowledge becomes:

* persistent
* searchable
* accessible through AI coworkers

Over time, Companion agents may assist teams in:

* maintaining project context
* coordinating decisions
* preserving organizational knowledge
* accelerating collaboration across teams.

