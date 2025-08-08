# backend/Dockerfile
# --- MODIFIED FILE ---
# Updated to use the new start.sh script.

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

# Copy the startup script into the container
COPY ./backend/start.sh /app/start.sh
# Make the script executable
RUN chmod +x /app/start.sh

# Command to run the application
CMD ["/app/start.sh"]
