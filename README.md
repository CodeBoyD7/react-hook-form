# React Hook Form with Tailwind CSS

This project demonstrates a simple form built with **React Hook Form** and styled using **Tailwind CSS**. It includes various input fields with validation and error handling.

## 🚀 Features
- Form validation using `react-hook-form`
- Error handling for required fields
- Input types: text, email, number, radio buttons, checkboxes, and a dropdown
- Styled using **Tailwind CSS**

## 📦 Installation
### 1. Clone the Repository
```sh
git clone https://github.com/CodeBoyD7/react-hook-form.git
cd react-hook-form
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Install Tailwind CSS
```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 4. Configure Tailwind
Modify `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Update `index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## ▶️ Running the Project
```sh
npm start
```

## 🛠️ Code Overview
### `App.js`
```jsx
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block">Name</label>
          <input {...register("firstName", { required: "Name is required" })} className="border p-2 w-full" />
          {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
        </div>
        
        <div>
          <label className="block">Email</label>
          <input {...register("email", { required: "Email is required" })} className="border p-2 w-full" />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default App;
```

## 📜 License
This project is licensed under the MIT License.

---
Happy Coding! 🎉

