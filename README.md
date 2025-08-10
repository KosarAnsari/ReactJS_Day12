# ReactJS Day 12 – Nested Looping with Components

## 📌 Project Overview
This project demonstrates **nested looping** in ReactJS by rendering data from a nested array of objects using reusable components.  
The example shows a list of **colleges** and their **students**, with each student’s details displayed dynamically.

---

## 🚀 Features
- **Reusable Components** (`College` & `Students`)
- **Dynamic Rendering** using `.map()` loops
- **Nested Looping** to display multiple levels of data
- **Props Passing** to child components
- **Clean & Modular Code Structure**

---

## 🛠 Tech Stack
- **ReactJS** (Vite setup)
- **JavaScript (ES6+)**
- **HTML5 & CSS3**

---

## 📂 Project Structure

src/ │ ├── App.jsx          # Main component rendering College list ├── College.jsx      # Component for displaying college details ├── Students.jsx     # Component for displaying student details └── index.css        # Styling

---

## 📄 Example Data
```javascript
const collegeData = [
  {
    name: "IET Alwar",
    city: "Alwar",
    website: "www.iet.com",
    student: [
      { name: "Anil", age: 29, email: "anil@test.com" },
      { name: "Peter", age: 28, email: "peter@test.com" },
      { name: "Bruce", age: 27, email: "bruce@test.com" }
    ]
  },
  {
    name: "IIT Delhi",
    city: "Delhi",
    website: "www.iitd.ac.in",
    student: [
      { name: "Steve", age: 30, email: "steve@test.com" },
      { name: "Tony", age: 31, email: "tony@test.com" }
    ]
  }
];


---

📸 Output Preview

Displays college name, city, and website

Lists all students with name, age, and email



---

🎯 Learning Outcomes

Using nested .map() for rendering complex data

Passing data between components via props

Organizing components for better maintainability



---

🏃‍♂️ How to Run

1. Clone the repository


2. Run npm install to install dependencies


3. Run npm run dev to start
