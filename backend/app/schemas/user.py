# backend/app/schemas/user.py
# --- MODIFIED FILE ---
# Added username to the Pydantic models and a new UserProfile schema.

from pydantic import BaseModel, EmailStr
from typing import Optional

class UserCreate(BaseModel):
    username: str # New field
    email: EmailStr
    password: str

class UserOut(BaseModel):
    id: int
    username: str # New field
    email: EmailStr
    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str

class UserProfile(BaseModel):
    id: int
    username: str
    email: EmailStr
    total_emitted: float
    total_saved: float
    streak: int
    class Config:
        from_attributes = True
