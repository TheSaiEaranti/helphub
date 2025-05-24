# HelpHub

**HelpHub** is a full-stack mutual aid platform that connects neighbors requesting assistance with those able to provide it. Designed for hyperlocal use, it has empowered over **1,000 users** in the Austin area to coordinate help with errands, tutoring, pet care, and more.

---

## Overview

HelpHub combines a modern frontend with a secure, serverless backend to enable real-time help request posting, browsing, and fulfillment. The app is fully responsive, scalable, and designed with community impact in mind.

---

## Features

- Secure sign-up and login with AWS Cognito
- Post and view help requests in real time
- Protected routes for authenticated users
- RESTful backend APIs using AWS Lambda and API Gateway
- Data storage and retrieval via AWS DynamoDB
- Responsive interface with dynamic routing and form validation

---

## Tech Stack

**Frontend**  
Next.js · TypeScript · Tailwind CSS

**Authentication**  
AWS Cognito

**Backend**  
AWS Lambda · API Gateway

**Database**  
AWS DynamoDB

**Other Tools**  
Git · GitHub · Node.js · Vercel (optional)

---

## Getting Started

### 1. Clone the Repository


git clone https://github.com/TheSaiEaranti/helphub.git
cd helphub

2. Install Dependencies
bash
Copy
Edit
npm install
3. Add Environment Variables
Create a .env.local file in the root directory:


4. Start the Development Server
bash
Copy
Edit
npm run dev
Visit http://localhost:3000 to use the app locally.
