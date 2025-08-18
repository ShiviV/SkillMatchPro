import React, { useState } from 'react';

function App() {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [matchScore, setMatchScore] = useState(null);

  const handleResumeChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resumeFile || !jobDescription) {
      alert('Upload resume and paste job description');
      return;
    }

    // Step 1: Upload resume and extract text
    const formData = new FormData();
    formData.append('file', resumeFile);

    let resumeText = '';
    try {
      const uploadRes = await fetch('http://localhost:8000/upload_resume', {
        method: 'POST',
        body: formData,
      });
      const uploadJson = await uploadRes.json();
      resumeText = uploadJson.resume_text;
    } catch (err) {
      alert("Failed to upload resume.");
      return;
    }

    // Step 2: Send resumeText + jobText to scoring API
    const matchForm = new FormData();
    matchForm.append('resume_text', resumeText);
    matchForm.append('job_description', jobDescription);

    try {
      const matchRes = await fetch('http://localhost:8000/match_score', {
        method: 'POST',
        body: matchForm,
      });
      const matchJson = await matchRes.json();
      setMatchScore(matchJson.match_score);
    } catch (err) {
      alert("Failed to calculate match score.");
    }
  };

  return (
    <div className="App">
      <h1>SkillMatch Pro</h1>
      <form onSubmit={handleSubmit}>
        <label>Upload Resume (PDF)</label>
        <input type="file" accept=".pdf" onChange={handleResumeChange} />

        <label>Paste Job Description</label>
        <textarea
          rows="6"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        ></textarea>

        <button type="submit">Check Match</button>
      </form>

      {matchScore !== null && (
        <h2>Match Score: {matchScore}%</h2>
      )}
    </div>
  );
}

export default App;
