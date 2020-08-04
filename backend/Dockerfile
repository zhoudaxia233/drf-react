FROM python:3.7-alpine

ENV PYTHONUNBUFFERED 1

WORKDIR /app/backend

# Install Python dependencies
COPY requirements.txt .
RUN pip install --upgrade pip -r requirements.txt

# Add the rest of the code
COPY . .
