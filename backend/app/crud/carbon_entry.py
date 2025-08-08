# backend/app/crud/carbon_entry.py
# --- MODIFIED FILE ---
# The calculation logic is updated with more detailed emission factors.
# Added a new function to calculate total emissions for a user.

from sqlalchemy.orm import Session
from sqlalchemy import func
from ..models.carbon_entry import CarbonEntry
from ..schemas.carbon_entry import CarbonEntryCreate
from typing import Tuple
import datetime

# More detailed emission factors (in kg CO2e per unit)
EMISSION_FACTORS = {
    "electricity_kwh": 0.85,
    "transport_mode": {
        "none": 0.0,
        "petrol_car": 0.21,
        "electric_car": 0.05,
        "motorcycle": 0.1,
        "bus": 0.08,
        "train": 0.04,
    },
    "food_choice": {
        "none": 0.0,
        "beef": 9.0,
        "pork": 4.0,
        "chicken": 2.5,
        "fish": 2.0,
        "plant_based": 1.0,
        "vegetables_grains": 0.5,
    }
}
DAILY_TARGET_CO2 = 20.0

def calculate_emissions(entry: CarbonEntryCreate) -> Tuple[float, int]:
    electricity_co2 = entry.electricity_kwh * EMISSION_FACTORS["electricity_kwh"]
    transport_co2 = entry.distance_km * EMISSION_FACTORS["transport_mode"].get(entry.transport_mode, 0.0)
    food_co2 = EMISSION_FACTORS["food_choice"].get(entry.food_choice, 0.0)
    
    total_co2 = electricity_co2 + transport_co2 + food_co2
    
    score_percentage = (total_co2 / DAILY_TARGET_CO2) * 100
    carbon_score = max(0, 100 - int(score_percentage))
    
    return round(total_co2, 2), carbon_score

def create_carbon_entry(db: Session, entry: CarbonEntryCreate, user_id: int):
    total_co2, carbon_score = calculate_emissions(entry)
    db_entry = CarbonEntry(
        entry_date=entry.entry_date,
        electricity_kwh=entry.electricity_kwh,
        transport_mode=entry.transport_mode,
        distance_km=entry.distance_km,
        food_choice=entry.food_choice,
        total_co2=total_co2, 
        carbon_score=carbon_score,
        owner_id=user_id
    )
    db.add(db_entry)
    db.commit()
    db.refresh(db_entry)
    return db_entry

def get_user_entries(db: Session, user_id: int, skip: int = 0, limit: int = 100):
    return db.query(CarbonEntry).filter(CarbonEntry.owner_id == user_id).order_by(CarbonEntry.entry_date.desc(), CarbonEntry.id.desc()).offset(skip).limit(limit).all()

def get_total_emissions_for_user(db: Session, user_id: int) -> float:
    """
    Calculates the total CO₂ emissions for a specific user.
    """
    total_co2 = db.query(func.sum(CarbonEntry.total_co2)).filter(CarbonEntry.owner_id == user_id).scalar()
    return round(total_co2, 2) if total_co2 is not None else 0.0
