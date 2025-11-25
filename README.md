MovieMaster Pro

A full-stack web application for managing your personal movie collection. Built with Next.js, MongoDB and Tailwind CSS.

Live Link:  https://movie-next-app-theta.vercel.app
server Live Link: https://movie-next-server.vercel.app

Project Description:
MovieMaster Pro allows users to:
Browse and search movies
Add movies to personal collection
View detailed movie information
Manage personal movie library
User authentication and private routes

Setup & Installation:
Prerequisites:
Node.js 
MongoDB Atlas or local MongoDB
npm or yarn

Installation:
1. Clone the repository
git clone https://github.com/sanzida-urmi/MovieNext.git
cd MovieNext
2. Install dependencies
npm install
or
yarn install
3. Run the development server
npm run dev
or
yarn dev

The app will be available at http://localhost:3000


Route Summary:
Public Routes:
/                Home page  
/movies          Browse all movies
/movies/[id]     Movie Details
/login           User login
/register        User registration

Protected Routes:
/mycollection    user's movie collection
/addmovie        add new movie to collection