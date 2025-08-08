# backend/app/api/endpoints/users.py
# --- NEW FILE ---

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ...schemas import user as schemas_user
from ...models import user as models_user
from ...db.dependencies import get_db
from ...core.security import get_current_user
from ...crud import user as crud_user
from ...crud import streak as crud_streak
from ...crud import carbon_entry as crud_carbon

router = APIRouter()

@router.get("/me", response_model=schemas_user.UserProfile)
def read_user_profile(
    db: Session = Depends(get_db),
    current_user: models_user.User = Depends(get_current_user)
):
    """
    Retrieves the profile of the current authenticated user.
    """
    total_emitted = crud_carbon.get_total_emissions_for_user(db, user_id=current_user.id)
    current_streak = crud_streak.get_user_streak(db, user_id=current_user.id)
    
    # In a full implementation, total_saved would be calculated based on goals
    # For now, it's a placeholder.
    total_saved = 0.0

    return {
        "id": current_user.id,
        "username": current_user.username,
        "email": current_user.email,
        "total_emitted": total_emitted,
        "total_saved": total_saved,
        "streak": current_streak
    }
