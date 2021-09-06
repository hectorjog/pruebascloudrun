# Python image to use.
FROM python:3.8
# Set the working directory to /app
WORKDIR /app
# copy the requirements file used for dependencies
COPY requirements.txt .
# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt
RUN pip install Flask
RUN pip install flask-cors
# Copy the rest of the working directory contents into the container at /app
COPY . .
ENV PORT 5000
# Run app.py when the container launches
CMD ["python", "RestService.py"]