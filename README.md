# Typosphere - (with OTPLess Auth)

## Overview
This project is a Vite+React application developed as a personal project, which is now integrated with OTPLess Authentication System. The objective of the application is to allow users to sign in to the blog application without using passwords, just with a single sign in approval link.

## Key Features
1. Created a React app using Vite.
2. Utilized Tailwind CSS for styling.
3. Integrated OTP-less authentication for seamless user login and registration. Checks if the user exists in the database; if not, it registers and logs in the user automatically.
4. Users can log in to add new blog posts, read articles, and comment on posts.
5. Comments are based on approval and controlled by the admin.
6. Comprehensive admin panel with full access to manage users, posts, and comments.
7. Admin can approve, edit, delete, or modify blog posts and comments.
8. Admin has the authority to approve comments before they appear on posts.
9. Users can create, edit, and format blog posts using the rich text editor powered by Tiptap Editor.
10. Categories can be assigned to blog posts for easy categorization and browsing.
11. Implemented Redux for efficient global state management across the application.
12. Designed the front-end using Tailwind CSS and Daisy UI for a modern, mobile-first, and responsive interface.
13. Built a dedicated backend server using Node.js and Express with RESTful routes for handling posts, comments, categories, and user management.
14. Database management handled using MongoDB, ensuring scalability and flexibility for managing data.
15. Code available on [GitHub](https://github.com/namanx19/Typosphere).
16. Website deployed on Vercel. [Link](https://typosphere-one.vercel.app/).
17. Backend deployed on Digital Ocean.

## Setup Instructions
To set up the project locally, follow these steps:

1. Clone the repository:
`https://github.com/namanx19/Typosphere`

2. Navigate to the project directory: `cd <PATH_OF_DIRECTORY>`
   
3. Navigate to the client directory to run the frontend `cd client/`

4. Install dependencies: `npm install`
   
5. Add a `.env` file inside /client with the following details:
   
`VITE_BASE_URL = <SERVER_URL>` Default Local Host Server URL is `http://localhost:5000`

7. Start the frontend client: `npm run dev`
   
8. On your browser, go to `http://localhost:5173` (if your port is 5173)

9. Navigate to the server directory to run the backend `cd server/`
   
10. Install dependencies: `npm install`
    
11. Add a `.env` file inside /server with the following details:

| Key             | Value                  |
|-----------------|------------------------|
| PORT            | `<PORT_NUMBER>`         |
| DB_URI          | `<MONGO_DB_URI>`        |
| JWT_SECRET      | `<SECRET>`              |
| NODE_ENV        | development             |
| CLIENT_SECRET   | `<OTPLESS_CLIENT_SECRET>`|
| CLIENT_ID       | `<OTPLESS_CLIENT_ID>`   |

11. Admin Panel is only accessible when you mark the user admin = true in mongo db.

## Screenshots
<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/99c1939e-e3c4-46e2-b166-43208519cde7" alt="1 homepage" width="450" height="auto"></td>
    <td><img src="https://github.com/user-attachments/assets/f75f7ac1-7e31-41c8-a378-95d98b12bfed" alt="2 otplesssignin" width="450" height="auto"></td>
  </tr>

  <tr>
    <td><img src="https://github.com/user-attachments/assets/affef9e2-775e-49b7-89b9-b59f4aeae978" alt="4 articledetail" width="450" height="auto"></td>
    <td><img src="https://github.com/user-attachments/assets/c68e734d-b2d5-4998-b215-69cd4ab7b226" alt="5 allblogs" width="450" height="auto"></td>
  </tr>

  <tr>
    <td><img src="https://github.com/user-attachments/assets/762c1872-499e-4fc7-9e09-4e6d3dd5fd99" alt="6 profilepage" width="450" height="auto"></td>
    <td><img src="https://github.com/user-attachments/assets/1c7ee6ef-b822-481c-b20a-4a2019dfba38" alt="7 crop picture" width="450" height="auto"></td>
  </tr>

  <tr>
    <td><img src="https://github.com/user-attachments/assets/1d317de7-5f75-43dd-82e0-8fc056f0fa0b" alt="8 create post" width="450" height="auto"></td>
    <td><img src="https://github.com/user-attachments/assets/658f44de-c28a-461f-b03a-dd8c2f8bdfb3" alt="8 profile3" width="450" height="auto"></td>
  </tr>


  <tr>
    <td><img src="https://github.com/user-attachments/assets/84acdb40-3616-4e42-898f-9a0ea9f22074" alt="10 admin comments" width="450" height="auto"></td>
    <td><img src="https://github.com/user-attachments/assets/a04887ff-a272-49b4-ade4-c7ca3df48150" alt="11 admin category" width="450" height="auto"></td>
  </tr>

  <tr>
    <td><img src="https://github.com/user-attachments/assets/f56f90a0-0922-418b-afbc-db5f8bac5564" alt="13 admin users" width="450" height="auto"></td>
  </tr>
</table>


### Questions or Issues?
Feel free to reach out to ```naman.mw4@gmail.com``` if you have any questions or encounter any issues while setting up or using Typosphere. Happy coding!
