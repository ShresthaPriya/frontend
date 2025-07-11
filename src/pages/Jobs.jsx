import React, { useState } from 'react';
import axios from 'axios';

const JobPage = () => {
  const [search, setSearch] = useState('');
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [expandedJob, setExpandedJob] = useState(null);

  const fetchJobs = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('https://jsearch.p.rapidapi.com/search', {
        params: { query: search, page: '1' },
        headers: {
          'X-RapidAPI-Key': '23cc636d96msh7d319f604e088c5p18d3cajsn77d41d041b40',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
        },
      });
      setJobs(response.data.data);
    } catch (err) {
      console.error(err);
      if (err.response?.status === 403) {
        setError('Access forbidden: Check your RapidAPI key or subscription.');
      } else {
        setError('Error fetching jobs. Try again later.');
      }
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  const toggleJobDetails = async (jobId) => {
    if (expandedJob?.job_id === jobId) {
      setExpandedJob(null);
      return;
    }

    try {
      const response = await axios.get('https://jsearch.p.rapidapi.com/job-details', {
        params: { job_id: jobId, country: 'us' },
        headers: {
          'X-RapidAPI-Key': '23cc636d96msh7d319f604e088c5p18d3cajsn77d41d041b40',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
        },
      });
      setExpandedJob(response.data.data[0]);
    } catch (err) {
      console.error(err);
      alert('Failed to fetch job details.');
    }
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">🔍 Find Your Dream Job</h2>
        <p className="text-muted">Powered by JSearch API on RapidAPI</p>
      </div>

      <div className="input-group mb-4">
        <input
          className="form-control"
          type="text"
          placeholder="e.g. React Developer"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-primary" onClick={fetchJobs}>
          Search
        </button>
      </div>

      {loading && (
        <div className="text-center mb-4">
          <div className="spinner-border text-primary" role="status"></div>
        </div>
      )}

      {error && <p className="alert alert-danger">{error}</p>}

      <div className="row">
        {jobs.map((job, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{job.job_title}</h5>
                <p className="card-text">
                  <strong>Company:</strong> {job.employer_name} <br />
                  <strong>Location:</strong> {job.job_city}, {job.job_country}
                </p>
                <div className="d-flex justify-content-between">
                  <a
                    href={job.job_apply_link}
                    className="btn btn-success"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-bs-toggle="tooltip"
                    title="Apply via job portal"
                  >
                    Apply Now
                  </a>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => toggleJobDetails(job.job_id)}
                  >
                    {expandedJob?.job_id === job.job_id ? 'Hide Details' : 'View Details'}
                  </button>
                </div>
              </div>
              {expandedJob?.job_id === job.job_id && (
                <div className="card-footer bg-light">
                  <h6>Description</h6>
                  <p style={{ whiteSpace: 'pre-line' }}>{expandedJob.job_description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {jobs.length === 0 && !loading && (
        <div className="text-center mt-5 text-muted">No jobs found yet. Try searching for a role.</div>
      )}
    </div>
  );
};

export default JobPage;

