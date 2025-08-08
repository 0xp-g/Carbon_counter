# backend/start.sh
# --- NEW FILE ---
# This script will run our database migrations and then start the server.

#!/bin/bash

# Run the table creation script
python -m app.db.create_tables
