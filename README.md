Use the Postman API collection to test the endpoints: [API Documentation](https://documenter.getpostman.com/view/32310370/2sAYHzGi2K)

# Proactive Backend Setup

This repository contains a backend setup using Node.js, MySQL, and Docker. Below are the steps to set up and run the project.

## Prerequisites
- **Node.js** (v16 or above)  
- **Docker** (v20.10 or above)

## Steps to Run

1. **Clone the repository**  
   ```
   git clone https://github.com/omp28/proactive-backend
   cd proactive-backend
   ```


2.  **Install Dependencies**
    
    
    ```
    npm install
    ``` 
    
4.  **Environment Variables**  
    Create a `.env` file in the root folder with the following variables:
    ``` 
    PORT=3000
    DB_NAME=your_database_name
    DB_USER=root
    DB_PASS=new_password
    DB_HOST=127.0.0.1
    DB_PORT=3307
    EMAIL_USER=hello@gmail.com
    EMAIL_PASS=hello
    JWT_SECRET=hello123
    GOOGLE_EMAIL=your_email@gmail.com
    GOOGLE_PASSWORD=your_email_password
    GOOGLE_CLIENT_ID=your_client_id
    GOOGLE_CLIENT_SECRET=your_client_secret
    GOOGLE_REDIRECT_URI=your_redirect_uri
    GOOGLE_REFRESH_TOKEN=your_refresh_token
    ```
    
    
5.  **Run MySQL Using Docker**  
    Start the database using Docker Compose:
        
    ```
    docker-compose up -d
    ``` 
    
7.  **Start the Development Server**
    
    
    ```
    npm run dev
    ``` 
    
9.  **Access the API**  
    The server runs on ```
    http://localhost:3000```.
    

## Notes

-   Ensure MySQL runs on port `3307` as per the Docker setup.
