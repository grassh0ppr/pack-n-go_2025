# 🛩 Pack-n-Go ✈️

A modern, feature-rich packing list application built with React and Vite. Perfect for travelers who want to stay organized and never forget essential items.

![Pack-n-Go Demo](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![Vite](https://img.shields.io/badge/Vite-6.3.5-purple)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.6-7952b3)

## ✨ Features

### 🎯 Core Functionality

- **Add Items**: Quickly add items to your packing list
- **Mark as Packed**: Check off items as you pack them
- **Delete Items**: Remove items you no longer need
- **Edit Items**: Inline editing with keyboard shortcuts
- **Clear List**: One-click to clear your entire list

### 🎨 User Experience

- **Dark/Light Theme**: Toggle between themes with a beautiful sun/moon icon
- **Editable Title**: Click the app title to customize it
- **Sorting Options**: Sort by input order, description, or packed status
- **Progress Tracking**: See your packing progress with percentage completion
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile

### ⌨️ Keyboard Shortcuts

- **Enter**: Save changes when editing
- **Escape**: Cancel editing and revert changes
- **Click Outside**: Save changes when clicking outside the input

### 🎨 Modern UI/UX

- **Smooth Animations**: All interactions have smooth transitions
- **Accessibility**: Full keyboard navigation and screen reader support
- **Bootstrap Integration**: Clean, professional styling
- **Custom Icons**: Beautiful SVG icons for all actions

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/grassh0ppr/pack-n-go_2025.git
   cd pack-n-go_2025
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📱 How to Use

### Adding Items

1. Type your item description in the input field
2. Press Enter or click "Add Item"
3. Your item appears in the list below

### Managing Items

- **Check/Uncheck**: Click the checkbox to mark items as packed
- **Edit**: Click the pencil icon (✏️) to edit an item
- **Save**: Click the checkmark (✓) or press Enter to save changes
- **Delete**: Click the X icon to remove an item

### Theme Toggle

- Click the sun/moon icon in the top-right corner
- Switch between light and dark themes instantly

### Sorting

Use the dropdown menu to sort your list by:

- **Input Order**: Items appear in the order you added them
- **Description**: Alphabetical order
- **Packed Status**: Packed items grouped together

### Customizing the Title

- Click on the app title "pack-n-go"
- Type your custom title
- Click outside or press Enter to save

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **UI Framework**: Bootstrap 5.3.6 + React Bootstrap
- **Styling**: CSS with custom dark/light theme support
- **Icons**: Custom SVG icons
- **State Management**: React Hooks (useState, useContext)

## 📁 Project Structure

```
pack-n-go_2025/
├── src/
│   ├── components/
│   │   ├── App.jsx          # Main application component
│   │   ├── Logo.jsx         # Editable title component
│   │   ├── Form.jsx         # Add item form
│   │   ├── PackingList.jsx  # List management component
│   │   ├── Item.jsx         # Individual item component
│   │   ├── Stats.jsx        # Progress statistics
│   │   └── ThemeToggle.jsx  # Theme switcher
│   ├── styles/
│   │   ├── App.css          # Main application styles
│   │   └── index.css        # Global styles
│   └── main.jsx             # Application entry point
├── public/                  # Static assets
├── dist/                    # Production build
└── package.json            # Dependencies and scripts
```

## 🎨 Features in Detail

### Dark/Light Theme System

- **Context-based**: Uses React Context for global theme state
- **Smooth Transitions**: All color changes are animated
- **Persistent**: Theme preference maintained during session
- **Accessible**: High contrast ratios for both themes

### Inline Editing

- **Seamless UX**: Click to edit, no modal dialogs
- **Keyboard Support**: Full keyboard navigation
- **Validation**: Prevents empty items from being saved
- **Visual Feedback**: Clear indication of editing state

### Progress Tracking

- **Real-time Stats**: Shows total items and packed count
- **Percentage**: Calculates completion percentage
- **Motivational Messages**: Encouraging text when complete
- **Visual Indicators**: Strikethrough for packed items

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- ESLint configuration for React best practices
- Consistent code formatting
- Component-based architecture
- Reusable components and hooks

## 🌟 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Bootstrap](https://getbootstrap.com/)
- Icons from [Feather Icons](https://feathericons.com/)
- Deployed on [GitHub Pages](https://pages.github.com/)

---

**Happy Packing! 🧳✈️**

_Never forget your essentials again with Pack-n-Go - your smart packing companion._
