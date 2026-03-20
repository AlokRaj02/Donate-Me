# Donation Platform
Updated by Alok
Second update by Alok

A full-stack web application for managing charitable donations, built with React frontend and Node.js/Express backend.

## Features

- **User Authentication**: Secure registration and login with JWT tokens
- **Charity Management**: Browse and view registered charities
- **Donation Processing**: Make donations with Stripe payment integration
- **Admin Dashboard**: Manage users, charities, and donations
- **Receipt Generation**: Download donation receipts as PDF
- **Responsive Design**: Mobile-friendly interface with Bootstrap

## Tech Stack

### Frontend
- React 19
- React Router for navigation
- Bootstrap for styling
- Axios for API calls
- Stripe Elements for payment processing
- SweetAlert2 for notifications

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- Stripe for payment processing
- Nodemailer for email notifications
- bcryptjs for password hashing

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- Stripe account (for payments)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/donation-platform.git
cd donation-platform
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Set up environment variables:

Create a `.env` file in the `backend` directory:
```env
MONGODB_URI=mongodb://localhost:27017/donation-platform
JWT_SECRET=your_jwt_secret_here
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
PORT=5000
```

## Running the Application

1. Start the backend server:
```bash
cd backend
npm run dev
```

2. Start the frontend development server:
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## API Endpoints

### Authentication
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - User login
- `GET /api/users/profile` - Get user profile (protected)

### Charities
- `GET /api/charities` - Get all charities
- `GET /api/charities/:id` - Get charity by ID
- `POST /api/charities` - Create new charity (admin only)
- `PUT /api/charities/:id` - Update charity (admin only)
- `DELETE /api/charities/:id` - Delete charity (admin only)

### Donations
- `GET /api/donations` - Get all donations (admin only)
- `GET /api/donations/user` - Get user's donations (protected)
- `POST /api/donations` - Create new donation (protected)
- `GET /api/donations/receipt/:id` - Get donation receipt (protected)

### Admin
- `GET /api/admin/stats` - Get platform statistics (admin only)
- `GET /api/admin/users` - Get all users (admin only)
- `DELETE /api/admin/users/:id` - Delete user (admin only)

## Deployment

For detailed deployment instructions, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

## Project Structure

```
donation-platform/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Charity.js
│   │   └── Donation.js
│   ├── routes/
│   │   ├── users.js
│   │   ├── charities.js
│   │   ├── donations.js
│   │   └── admin.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   ├── package.json
│   └── seed.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── CharityList.js
│   │   │   ├── DonationForm.js
│   │   │   ├── DonationsList.js
│   │   │   ├── Profile.js
│   │   │   ├── Admin.js
│   │   │   └── Receipt.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   └── package.json
├── DEPLOYMENT_GUIDE.md
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.
