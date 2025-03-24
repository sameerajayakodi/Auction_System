# Auction System

## Overview
The Auction System is an online platform for buying and selling items through auctions. Users can browse available auctions, place bids, and manage their profiles. The platform also includes an admin dashboard for managing auctions, users, and system settings.

## Features
### User Features:
- User authentication (login, registration, and profile management)
- Browse and search for auctions
- Place bids on active auctions
- View auction details
- Track bidding history
- Edit user profile and update personal details

### Admin Features:
- Manage (add, edit, delete) auctions
- Manage registered users
- Monitor bidding activities
- Dashboard with analytics

## Technologies Used
### Frontend:
- React.js
- Tailwind CSS
- React Router

### Backend:
- ASP.NET Core
- Entity Framework
- SQL Server

## Installation Guide
### Prerequisites:
- Node.js & npm
- .NET Core SDK
- SQL Server

### Steps:
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/auction-system.git
   cd auction-system
   ```
2. **Setup the Frontend:**
   ```bash
   cd frontend
   npm install
   npm start
   ```
3. **Setup the Backend:**
   - Navigate to the backend folder
   - Configure the database in `appsettings.json`
   - Run the migration and seed data:
     ```bash
     dotnet ef database update
     ```
   - Start the backend server:
     ```bash
     dotnet run
     ```
4. **Access the application:**
   - Open `http://localhost:3000/` for the frontend.
   - The backend API runs on `http://localhost:5000/`

## Usage
1. **Register/Login** to the platform.
2. **Browse Auctions** and check details.
3. **Place Bids** on desired items.
4. **Manage Profile** and update details.
5. **Admins** can add, edit, or remove auctions and users.

## Future Enhancements
- Implement real-time bidding using WebSockets.
- Add payment gateway integration.
- Improve UI/UX with animations.
- Introduce notifications for bid updates.

## License
This project is licensed under the MIT License.

## Contact
For queries or contributions, contact:
- **Name:** Sameera Jayakodi
- **Email:** sameerajayakodi456@gmail.com
- **GitHub:** [sameerajayakodi](https://github.com/sameerajayakodi)

