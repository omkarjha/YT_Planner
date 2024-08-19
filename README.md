Course Routine Planner
A full-stack web application that allows users to generate a custom study routine based on a YouTube playlist for a course. Users can input a playlist link and specify the number of days they want to complete the course, and the application will generate a daily schedule with the required videos to be watched.

Features
User Authentication: Register and login functionality to keep user data secure.
YouTube Playlist Integration: Automatically fetches and stores video details from a provided playlist.
Routine Generation: Creates a custom routine based on the user's time frame to complete the course.
Responsive Design: A modern, responsive UI using Tailwind CSS.
Interactive UI: Hover effects, animations, and transitions for an enhanced user experience.
Tech Stack
Frontend: React.js, Tailwind CSS
Backend: Node.js, Express.js
Database: MySQL
Authentication: JWT (JSON Web Tokens)
API: YouTube Data API v3
Installation
Prerequisites
Node.js
MySQL
Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/course-routine-planner.git
cd course-routine-planner
Backend Setup
Install backend dependencies:

bash
Copy code
cd backend
npm install
Create a .env file in the backend directory and add the following environment variables:

bash
Copy code
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=course_routine_planner
JWT_SECRET=yourjwtsecret
YOUTUBE_API_KEY=youryoutubeapikey
Initialize the database:

Open your MySQL client and run the SQL schema provided in the schema.sql file to set up the database tables.
Start the backend server:

bash
Copy code
npm start
The server will start on http://localhost:5000.

Frontend Setup
Install frontend dependencies:

bash

cd ../frontend
npm install
Start the frontend server:

bash

npm start
The application will open in your browser at http://localhost:3000.

Usage
Register or login to the application.
Paste the YouTube playlist link in the input form and specify the number of days you want to complete the course.
The application will generate a daily routine and display it on the screen.
Follow the routine and complete your course!
Folder Structure
plaintext

course-routine-planner/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── tailwind.config.js
│
├── schema.sql
└── README.md
Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

This README.md should provide all the necessary information for someone to understand, set up, and use your Course Routine Planner project.






