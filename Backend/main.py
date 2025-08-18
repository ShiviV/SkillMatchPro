from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
import fitz  # PyMuPDF

app = FastAPI()

# Allow requests from React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict this to ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload_resume")
async def upload_resume(file: UploadFile = File(...)):
    contents = await file.read()
    pdf = fitz.open(stream=contents, filetype="pdf")
    text = ""
    for page in pdf:
        text += page.get_text()
    return {"resume_text": text}

@app.post("/match_score")
async def match_score(resume_text: str = Form(...), job_description: str = Form(...)):
    # Very basic score: number of overlapping words
    resume_words = set(resume_text.lower().split())
    jd_words = set(job_description.lower().split())
    common = resume_words.intersection(jd_words)
    score = round(len(common) / len(jd_words) * 100, 2) if jd_words else 0
    return {"match_score": score}
