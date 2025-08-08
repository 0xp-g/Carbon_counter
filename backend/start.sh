# backend/start.sh
# --- NEW FILE ---
# This script will run our database migrations and then start the server.

#!/bin/bash

# Run the table creation script
python -m app.db.create_tables

# Start the Gunicorn server
gunicorn -k uvicorn.workers.UvicornWorker -w 4 -b 0.0.0.0:8000 app.main:app
