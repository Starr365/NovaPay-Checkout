# NovaPay Checkout

NovaPay Checkout is a modern, responsive crypto payment checkout application built with Next.js, React, and TypeScript. It provides a seamless multi-step payment experience with professional UI design and comprehensive form validation.

![NovaPay Checkout](public/NC%20BlackTrans%20BG.png)

## 🚀 Features

### Multi-Step Checkout Process
- **Step 1**: User Information Collection
  - Email address validation
  - Full name input
  - Payment amount specification
  - Real-time form validation

- **Step 2**: Payment Details
  - Secure card number input (16-digit validation)
  - Expiry date formatting (MM/YY)
  - CVV security code
  - Loading states during processing
  - Error handling and validation

- **Step 3**: Success Confirmation
  - Transaction processing confirmation
  - Copyable transaction ID
  - Visual feedback with success icons
  - Easy navigation back to home

### User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Professional Typography**: Outfit font family for modern aesthetics
- **Form Validation**: Comprehensive client-side validation with real-time feedback
- **Loading States**: Visual feedback during payment processing
- **Error Handling**: User-friendly error messages and recovery options
- **Accessibility**: Proper focus states, ARIA labels, and keyboard navigation

### Technical Features
- **State Management**: React Context API for global payment state
- **TypeScript**: Full type safety throughout the application
- **Modern UI**: Tailwind CSS with custom design system
- **Icon Library**: Lucide React for consistent iconography
- **Performance**: Next.js App Router for optimal loading and SEO

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Context API
- **Font**: [Outfit](https://fonts.google.com/specimen/Outfit) from Google Fonts

## 📁 Project Structure

```
novapay/
├── public/                          # Static assets
│   ├── CheckCircle.png             # Success checkmark icon
│   └── NC BlackTrans BG.png        # NovaPay logo
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── globals.css             # Global styles and Tailwind config
│   │   ├── layout.tsx              # Root layout with providers
│   │   ├── page.tsx                # Home page - Step 1
│   │   ├── favicon.ico             # Application favicon
│   │   ├── payment-details/
│   │   │   └── page.tsx            # Payment details page - Step 2
│   │   └── success/
│   │       └── page.tsx            # Success page - Step 3
│   ├── components/                 # Reusable UI components
│   │   ├── Button.tsx              # Multi-variant button component
│   │   ├── FormField.tsx           # Form input with validation
│   │   ├── Input.tsx               # Basic input component
│   │   └── SummaryCard.tsx         # Payment summary display
│   └── context/
│       └── PaymentContext.tsx      # Global payment state management
├── package.json                    # Dependencies and scripts
├── next.config.ts                  # Next.js configuration
├── tailwind.config.mjs             # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
└── README.md                       # This file
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd novapay
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 User Flow

### Step 1: Checkout Information
1. User enters email address (with validation)
2. User provides full name
3. User specifies payment amount
4. System validates all fields before proceeding

### Step 2: Payment Details
1. User enters 16-digit card number
2. User provides expiry date (MM/YY format)
3. User enters CVV (3-4 digits)
4. System validates payment information
5. Payment processing with loading state

### Step 3: Success Confirmation
1. Success page displays transaction confirmation
2. Transaction ID is shown and can be copied
3. User can navigate back to home

## 🎨 Design System

### Colors
- **Primary**: Black (#000000)
- **Secondary**: White (#ffffff)
- **Background**: Light gray (#f5f5f5)
- **Text Primary**: Dark gray (#1a1a1a)
- **Text Secondary**: Medium gray (#666666)
- **Accent**: Orange (#ff6b35)
- **Success**: Green (for copy confirmation)

### Typography
- **Font Family**: Outfit (Google Fonts)
- **Weights**: 100-900 available
- **Responsive**: Scales appropriately across devices

### Components
- **Buttons**: Primary, secondary, and outline variants
- **Form Fields**: Consistent styling with error states
- **Cards**: Summary cards with shadow and rounded corners
- **Icons**: Lucide React icon library

## 🔧 Configuration

### Next.js Configuration
The application uses Next.js 16 with the following configuration:
- React Compiler enabled for optimal performance
- TypeScript support
- App Router for modern routing

### Tailwind CSS
Custom design system with:
- CSS custom properties for theming
- Responsive design utilities
- Custom component classes
- Dark mode support (basic)

### Environment Variables
No environment variables required for basic setup.

## 🧪 Testing

The application includes:
- **TypeScript**: Compile-time type checking
- **ESLint**: Code quality and consistency
- **Form Validation**: Client-side validation for all inputs

## 📦 Deployment

### Vercel (Recommended)
The easiest way to deploy is using [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The application can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Docker containers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary software.

## 🆘 Support

For support and questions:
- Check the existing issues on GitHub
- Review the Next.js documentation
- Refer to Tailwind CSS documentation for styling questions

## 🔮 Future Enhancements

Potential improvements and features:
- [ ] Payment gateway integration (Stripe, PayPal, etc.)
- [ ] Real payment processing
- [ ] Email notifications
- [ ] Transaction history
- [ ] User authentication
- [ ] Admin dashboard
- [ ] Multi-currency support
- [ ] Advanced security features
- [ ] A/B testing for conversion optimization
- [ ] Analytics integration

---

Built with ❤️ using Next.js, React, and TypeScript
# NovaPay-Checkout
