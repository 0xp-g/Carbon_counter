# backend/app/main.py
# --- MODIFIED FILE ---
# We are making the CORS origins more specific to fix the error.

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .core.config import settings
from .api.api import api_router

app = FastAPI(title=settings.PROJECT_NAME, version=settings.PROJECT_VERSION)

# Define the list of allowed origins
origins = [
    "http://localhost:5173",
    "http://localhost:3000", 
    "https://carbon-counter-frontend.onrender.com",
]

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Use the specific list of origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

app.include_router(api_router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Carbon Counter API"}
