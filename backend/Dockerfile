# backend/Dockerfile
# --- MODIFIED FILE ---
# Startup logic is now directly in the CMD instruction to avoid file format errors.

# Use an official Python runtime as a parent image
FROM python:3.12-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file from the backend folder into the container
COPY backend/requirements.txt .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application's code from the backend/app folder
COPY ./backend/app /app/app

# Command to run the application
# This now includes the table creation step before starting the server.
CMD ["sh", "-c", "python -m app.db.create_tables && gunicorn -k uvicorn.workers.UvicornWorker -w 4 -b 0.0.0.0:8000 app.main:app"]
