import React from "react";

const Home = () => {
  const reactProjects = [
    {
      id: 1,
      title: "To-Do List App",
      emoji: "✅",
      features: ["Add tasks", "Delete tasks", "Mark complete/incomplete"],
      conceptsUsed: ["useState", "Event handling", "Conditional rendering"],
    },     
    {
      id: 2,
      title: "Counter App",
      emoji: "🔢",
      features: ["Increment", "Decrement", "Reset counter"],
      conceptsUsed: ["useState"],
    },
    {
      id: 3,
      title: "Weather App",
      emoji: "☀️",
      features: ["Search city to fetch live weather info"],
      apiUsed: "https://openweathermap.org/",
      conceptsUsed: ["useEffect", "Fetch API", "Conditional rendering"],
    },
    {
      id: 4,
      title: "Quote Generator",
      emoji: "✨",
      features: ["Show random quotes", "Refresh button"],
      conceptsUsed: ["useState", "Side effects", "Working with arrays"],
    },
    {
      id: 5,
      title: "Digital Clock",
      emoji: "⏰",
      features: ["Real-time clock displaying current date and time"],
      conceptsUsed: ["setInterval", "useEffect", "Cleanup function"],
    },
    {
      id: 6,
      title: "Form Validation App",
      emoji: "📝",
      features: ["Signup form with real-time validation and error handling"],
      conceptsUsed: ["Controlled components", "Form validation logic"],
    },
    {
      id: 7,
      title: "Movie Search App",
      emoji: "🎬",
      features: ["Search movies", "Display posters and details"],
      apiUsed: "https://www.omdbapi.com/",
      conceptsUsed: ["API calls", "Search input", "Loading/error states"],
    },
    {
      id: 8,
      title: "Quiz App",
      emoji: "❓",
      features: ["Multiple choice questions", "Dynamic score tracking"],
      conceptsUsed: [
        "Complex state logic",
        "Conditional rendering",
        "Dynamic UI",
      ],
    },
    {
      id: 9,
      title: "Expense Tracker",
      emoji: "💰",
      features: ["Track income/expenses", "Running balance"],
      conceptsUsed: ["useReducer", "localStorage", "Input handling"],
    },
    {
      id: 10,
      title: "Notes App",
      emoji: "🗒️",
      features: ["Add", "Edit", "Delete", "Save notes"],
      conceptsUsed: ["CRUD logic", "localStorage", "Component structure"],
    },
    {
      id: 11,
      title: "Stopwatch / Timer",
      emoji: "⏱️",
      features: ["Start", "Stop", "Reset timer"],
      conceptsUsed: ["setInterval", "useRef", "useEffect"],
    },
    {
      id: 12,
      title: "Light/Dark Mode Toggle",
      emoji: "🌙",
      features: ["Switch between light and dark themes"],
      conceptsUsed: ["Conditional styling", "useContext (optional)"],
    },
    {
      id: 13,
      title: "Blog Post Viewer",
      emoji: "📰",
      features: ["Fetch and view blog posts"],
      apiUsed: "https://jsonplaceholder.typicode.com/",
      conceptsUsed: ["React Router", "useParams", "useEffect", "API fetching"],
    },
    {
      id: 14,
      title: "Image Gallery",
      emoji: "🖼️",
      features: ["View images in grid", "Fullscreen modal"],
      apiUsed: "https://unsplash.com/developers",
      conceptsUsed: ["API fetch", "Modals", "Responsive grid layout"],
    },
    {
      id: 15,
      title: "Currency Converter",
      emoji: "💱",
      features: ["Convert between currencies", "Real-time exchange rates"],
      apiUsed: "https://www.exchangerate-api.com/",
      conceptsUsed: ["API fetch", "Dropdowns", "Input validation"],
    },
  ];

  return (
    <div>
      <div>React Projects</div>
      <div className="flex flex-wrap gap-4 cursor-pointer border-2 ">
        {reactProjects.map((val, ind) => {
          return (
            <ul key={ind} className=" ">
              <li className="cursor-pointer  p-2 w-96">
                {val.id}. {val.title}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
