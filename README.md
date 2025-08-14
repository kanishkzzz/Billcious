# Billicious

A modern expense splitting app that takes the hassle out of shared finances. Billicious helps groups track, split, and settle expenses in real-time with minimal friction.

## Why Billicious?

- **Eliminate Payment Confusion:** Smart algorithms automatically calculate the optimal way to settle group debts
- **Real-Time Peace of Mind:** Instant updates keep everyone on the same page about shared expenses
- **Simplified Group Finance:** Handle multiple groups, categories, and complex splitting scenarios with ease

## Features

- **Smart Bill Splitting:** Automatically calculate and divide expenses among group members with customizable splitting options
  ![HomePage](./mockups/Screenshot%202024-12-08%20at%2011.24.41 PM.png)
- **Real-time Collaboration:** Instant updates when group members add expenses or settle debts using Supabase Realtime
  ![Users](./mockups/Screenshot%202024-12-08%20at%2010.16.12 PM.png)
- **Expense Categories:** Organize expenses with customizable categories for better tracking along with detailed transaction history with filtering and search capabilities
  ![Expenses](./mockups/Screenshot%202024-12-08%20at%2011.25.08 PM.png)
- **Settlement Tracking:** Clear visualization of who owes whom and simplified debt settlement process
  ![Settle](./mockups/Screenshot%202024-12-08%20at%2011.24.46 PM.png)
- **Group Management:** Create and manage multiple groups for different occasions (roommates, trips, events)
  ![Dashboard](./mockups/Screenshot%202024-12-08%20at%2011.32.19 PM.png)
- **Dark/Light Mode:** User-friendly interface with theme support
  ![DarkMode](./mockups/Screenshot%202024-12-08%20at%2010.19.48 PM.png)
- **Responsive Design:** Works seamlessly across desktop and mobile devices
  ![Responsive](./mockups/Screenshot%202024-12-08%20at%2011.35.36 PM.png)

## Impact

- Reduces time spent on expense calculations by 90%
- Prevents common splitting mistakes and disputes
- Supports multiple currency conversions and split types
- Privacy-focused with modern passkey authentication

## Tech Stack

- **Frontend:** Next.js 14
- **Backend:** Supabase
- **State Management:** Zustand
- **Data Fetching and Mutations:** Tanstack Query
- **UI Components:** Shadcn UI
- **Real-time Updates:** Supabase Realtime
- **Passkeys Authenication:** Hanko

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Supabase account
- Hanko account

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/BioHazard786/billicious.git
   cd billicious
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and vars given in `example.env` and types in `env.d.ts`.

### Running the App

1. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

The project directory structure is as follows:

```
billicious/
├── app/                # Next.js app directory
├── auth-utils/         # Utility functions for supabase
├── components/         # Reusable UI components
├── constants/          # constants
├── providers/          # state management and query providers
├── lib/                # Utility functions and types
├── store/              # Zustand store configurations
├── server/             # Server-side actions and API
└── database/           # Database configurations
```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Authors

- Kanishk Negi - [GitHub](https://github.com/kanishkzzz)


## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Tanstack Query](https://tanstack.com/query/latest)
- [Shadcn UI](https://ui.shadcn.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/)
- [Hanko](https://www.hanko.io/)
