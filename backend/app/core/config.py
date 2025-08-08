# backend/app/core/config.py
# --- MODIFIED FILE ---


import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    PROJECT_NAME: str = "Carbon Counter"
    PROJECT_VERSION: str = "1.0.0"

    # This will now read the full connection string provided by Render
    DATABASE_URL: str = os.getenv("DATABASE_URL")
    
    # JWT settings
    SECRET_KEY: str = os.getenv("SECRET_KEY", "a_very_secret_key_for_jwt")
    ALGORITHM = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES = 30


settings = Settings()
