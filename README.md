# 🧠 Quiz Challenge

A beautiful, modern interactive quiz application built with React and Vite. Test your knowledge with timed questions, track your score, and compete for the highest accuracy!

![React](https://img.shields.io/badge/React-19.2-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2-purple?logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)

## ✨ Features

- ⚡ **Fast & Responsive** - Built with React 19 and Vite for lightning-fast performance
- 🎨 **Beautiful UI** - Modern gradient design with smooth animations
- ⏱️ **Timed Questions** - 10-second countdown timer for each question with visual feedback
- ❤️ **Lives System** - Start with 3 lives, lose one for incorrect answers
- 📊 **Score Tracking** - Earn 10 points for each correct answer
- 🏆 **Grade System** - Get graded A-D based on accuracy percentage
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 🎯 **Instant Feedback** - See correct/incorrect answers with visual indicators
- 🔄 **Play Again** - Restart the quiz instantly with fresh questions

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project:**
```bash
cd /home/jefrin/dev/react/quizz
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open in browser:**
Navigate to `http://localhost:5173` (or the URL shown in terminal)

## 📖 Usage

### Starting a Quiz

1. Click the **"Start Quiz 🚀"** button on the welcome screen
2. You'll see the first question with 4 multiple-choice options
3. Select your answer before the 10-second timer expires
4. After all questions or when lives reach 0, view your final score and grade

### Game Mechanics

- **Questions**: 10 total questions covering various topics
- **Time Limit**: 10 seconds per question
- **Lives**: 3 total (lose 1 for each wrong answer)
- **Scoring**: 10 points per correct answer
- **Accuracy**: Percentage calculated as (correct answers / total questions) × 100
- **Grade Scale**: 
  - A: 80-100%
  - B: 60-79%
  - C: 40-59%
  - D: Below 40%

## 📁 Project Structure

```
quizz/
├── src/
│   ├── componentes/          # React components
│   │   ├── Quiz.jsx         # Main quiz container
│   │   ├── StartScreen.jsx  # Welcome screen
│   │   ├── Question.jsx     # Question display
│   │   ├── Timer.jsx        # Countdown timer
│   │   └── GameOver.jsx     # Results screen
│   ├── data/
│   │   └── questions.jsx    # Quiz questions database
│   ├── App.jsx              # Main app component
│   ├── App.css              # Component styles
│   ├── index.css            # Global styles
│   ├── index.js             # Entry point
│   └── main.jsx             # React DOM root
├── public/
│   └── index.html           # HTML template
├── package.json             # Dependencies & scripts
├── vite.config.js          # Vite configuration
└── eslint.config.js        # ESLint rules
```

## 🛠️ Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint to check code quality |
| `npm run preview` | Preview production build locally |

## 🎨 Design System

### Color Palette
- **Primary Gradient**: Purple (#667eea) to Violet (#764ba2)
- **Success Gradient**: Cyan (#4facfe) to Light Blue (#00f2fe)
- **Warning Gradient**: Pink (#fa709a) to Yellow (#fee140)
- **Danger**: Red (#f5576c)

### Typography
- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Heading Sizes**: 2.8em (H1), 1.8em (H2)
- **Font Weights**: 400 (normal), 600 (semibold), 700 (bold)

### Components
- Card-based layout with rounded corners (20px)
- Smooth animations (0.3-0.6s transitions)
- Box shadows for depth
- Gradient overlays for visual interest

## ✏️ Customization

### Add More Questions

Edit `src/data/questions.jsx`:

```javascript
export const questions = [
  {
    id: 1,
    question: "Your question here?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0,  // Index of correct option (0-3)
  },
  // Add more questions...
];
```

### Change Timer Duration

Edit `src/componentes/Quiz.jsx` - line with `duration={10}`:

```javascript
<Timer
  questionId={currentQuestion.id}
  duration={20}  // Change to 20 seconds
  onTimeout={handleTimeout}
/>
```

### Modify Points Per Correct Answer

Edit `src/componentes/Quiz.jsx` in the `goToNext` function:

```javascript
if (isCorrect) {
  setScore((prev) => prev + 20);  // Change from 10 to 20 points
  setCorrectAnswers((prev) => prev + 1);
}
```

## 🔧 Technical Details

### Technologies Used
- **React 19.2** - UI library
- **Vite 7.2** - Build tool & dev server
- **React Compiler** - Automatic optimization
- **ESLint** - Code quality

### Key Features
- **React Hooks**: useState, useCallback, useEffect for state management
- **CSS Gradients**: Modern gradient backgrounds and text
- **Responsive Design**: Mobile-first approach with media queries
- **Animation**: Keyframe animations for smooth transitions
- **Hot Module Replacement (HMR)**: Instant updates during development

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

### Deploy to Netlify / Vercel

1. Connect your repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 🐛 Troubleshooting

### Timer shows multiple circles
- This is likely a React Strict Mode development issue
- It disappears in production build
- If persisting, clear browser cache and restart dev server

### Questions not loading
- Ensure `src/data/questions.jsx` has proper export
- Check console for any import errors
- Verify question object structure has all required fields

### Styles not applying
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server (stop and `npm run dev`)
- Check for CSS file imports in `src/main.jsx`

## 💡 Future Enhancements

- [ ] Multiple difficulty levels
- [ ] Category selection
- [ ] Leaderboard
- [ ] Sound effects
- [ ] Dark mode toggle
- [ ] Question timer customization
- [ ] Category-based questions
- [ ] User profiles and statistics

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Development

This project was created as a modern, interactive learning tool. Contributions are welcome!

### To Contribute:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📧 Support

For issues, questions, or suggestions, please open an issue on the repository.

---

**Happy Quizzing!** 🎉

*Built with ❤️ using React and Vite*
