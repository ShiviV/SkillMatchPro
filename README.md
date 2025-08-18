# SkillMatchPro

**SkillMatch Pro** is an AI-powered career tool where users upload their resume and LinkedIn profile or paste job descriptions to get GPT-generated match scores, tailored resume rewrites, and portfolio project ideas.  
It tracks skill trends, top industries, and suggests courses, job alerts, and networking leads to boost employability.  

---

## 🚀 Current Progress (MVP Build)

- **Backend (Python)**  
  - Core service structure established with API-ready endpoints.  
  - Requirements managed via `requirements.txt` (virtual environment ready).  

- **Frontend (React)**  
  - Initial UI scaffolding built.  
  - Dockerized using **multi-stage build** with Node + Nginx for production deployment.  

- **Dockerization**  
  - Separate `Dockerfile` for backend and frontend.  
  - Containers set up for portability, collaboration, and cloud-readiness.  

- **Planned LLM Integration**  
  - GPT-powered engine to parse resumes and job descriptions.  
  - Generate match scores, resume rewrites, and tailored career insights.  
  - Enhance recommendations with natural language understanding.  

---

## 📊 Project Documentation
- [BRD – SkillMatch Pro](#)  
- [PRD – SkillMatch Pro](#)  
- [TRD – SkillMatch Pro](#)  

---

## 🎨 Figma Screens
- [Figma Prototype](https://www.figma.com/make/VZgHYafDpoNI3KDAneqAqK/Skill-Based-Job-Matching-Application)  

---

## 🛠️ Next Steps
- Integrate **S3 Cloud Storage** for resume uploads and persistence.  
- Connect to **database (PostgreSQL/Snowflake)** for scalable data management.  
- Deploy to **AWS/GCP** using Docker containers.  
- Build and fine-tune **LLM-powered modules** for skill extraction, job matching, and career insights.  

---

## ⚡ Tech Stack
- **Frontend:** React, Nginx, Docker  
- **Backend:** Python (Flask/FastAPI), Docker  
- **Cloud (planned):** AWS S3, PostgreSQL/Snowflake  
- **AI/ML (planned):** GPT-based LLM for job matching & skill insights, Python ML models  
