const admin = [
  {
    id: "admin001",
    email: "admin@company.com",
    password: "123",
  },
];

const employees = [
  {
    id: "emp001",
    email: "john.doe@example.com",
    password: "123",
    tasks: [
      {
        completed: true,
        failed: false,
        newTask: false,
        active: false,
        title: "Fix Login Bug",
        description: "Resolve authentication issue on login page",
        date: "2025-07-10",
        priority: "high",
      },
      {
        completed: false,
        failed: false,
        newTask: true,
        active: true,
        title: "Update Navbar",
        description: "Add profile picture to navbar",
        date: "2025-07-15",
        priority: "medium",
      },
      {
        completed: false,
        failed: true,
        newTask: false,
        active: false,
        title: "Write API Docs",
        description: "Create documentation for all endpoints",
        date: "2025-07-12",
        priority: "low",
      },
    ],
  },
  {
    id: "emp002",
    email: "jane.smith@example.com",
    password: "123",
    tasks: [
      {
        completed: true,
        failed: false,
        newTask: false,
        active: false,
        title: "Redesign Footer",
        description: "Implement the new footer as per mockups",
        date: "2025-07-09",
        priority: "medium",
      },
      {
        completed: false,
        failed: false,
        newTask: true,
        active: true,
        title: "Add Unit Tests",
        description: "Write unit tests for TaskList component",
        date: "2025-07-18",
        priority: "high",
      },
      {
        completed: false,
        failed: false,
        newTask: true,
        active: true,
        title: "Team Meeting",
        description: "Schedule and lead frontend sync",
        date: "2025-07-13",
        priority: "low",
      },
      {
        completed: true,
        failed: false,
        newTask: false,
        active: false,
        title: "Fix Modal Bug",
        description: "Fix issue with modal close button",
        date: "2025-07-08",
        priority: "high",
      },
    ],
  },
  {
    id: "emp003",
    email: "mike.williams@example.com",
    password: "123",
    tasks: [
      {
        completed: false,
        failed: false,
        newTask: true,
        active: true,
        title: "Migrate Data",
        description: "Migrate task data to new schema",
        date: "2025-07-17",
        priority: "high",
      },
      {
        completed: false,
        failed: false,
        newTask: false,
        active: true,
        title: "Optimize Images",
        description: "Reduce image sizes across the site",
        date: "2025-07-14",
        priority: "medium",
      },
      {
        completed: false,
        failed: true,
        newTask: false,
        active: false,
        title: "Remove Unused CSS",
        description: "Audit and clean up CSS files",
        date: "2025-07-11",
        priority: "low",
      },
    ],
  },
  {
    id: "emp004",
    email: "lisa.jordan@example.com",
    password: "123",
    tasks: [
      {
        completed: true,
        failed: false,
        newTask: false,
        active: false,
        title: "Write Blog",
        description: "Draft new blog post about design patterns",
        date: "2025-07-05",
        priority: "medium",
      },
      {
        completed: true,
        failed: false,
        newTask: false,
        active: false,
        title: "Create Component Library",
        description: "Set up reusable components in Storybook",
        date: "2025-07-06",
        priority: "high",
      },
      {
        completed: false,
        failed: false,
        newTask: true,
        active: true,
        title: "Client Call",
        description: "Demo UI changes to client",
        date: "2025-07-19",
        priority: "low",
      },
    ],
  },
  {
    id: "emp005",
    email: "alex.martin@example.com",
    password: "123",
    tasks: [
      {
        completed: false,
        failed: false,
        newTask: true,
        active: true,
        title: "Setup CI/CD",
        description: "Configure GitHub Actions for deployment",
        date: "2025-07-16",
        priority: "high",
      },
      {
        completed: true,
        failed: false,
        newTask: false,
        active: false,
        title: "Database Backup",
        description: "Automate weekly backup process",
        date: "2025-07-07",
        priority: "medium",
      },
      {
        completed: false,
        failed: false,
        newTask: true,
        active: true,
        title: "Create Wireframes",
        description: "Design wireframes for new admin dashboard",
        date: "2025-07-20",
        priority: "low",
      },
      {
        completed: true,
        failed: false,
        newTask: false,
        active: false,
        title: "Fix Tooltip",
        description: "Correct positioning on hover tooltips",
        date: "2025-07-10",
        priority: "medium",
      },
    ],
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const data = localStorage.getItem("employees");
  const data2 = localStorage.getItem("admin");
  console.log(JSON.parse(data));
  console.log(JSON.parse(data2));
};
