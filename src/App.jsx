import { useForm } from "react-hook-form"; // Importing useForm from react-hook-form

const App = () => {
  // Initializing the useForm hook
  const {
    register, // Used to register form fields
    handleSubmit, // Function to handle form submission
    formState: { errors }, // Extracting errors for validation handling
  } = useForm();

  // Function to handle form submission
  const onSubmit = async (data) => {
    console.log(data); // Logging submitted form data to the console
  };

  return (
    <div>
      {/* Form element with handleSubmit to manage submission */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <label htmlFor="firstName"> Name</label>
        <input {...register("firstName", { required: "Name is required" })} />
        {errors.firstName && <p>{errors.firstName.message}</p>}

        {/* Email Field */}
        <label htmlFor="email">Email</label>
        <input {...register("email", { required: "Email is required" })} />
        {errors.email && <p>{errors.email.message}</p>}

        {/* Select Dropdown */}
        <label htmlFor="country">Country</label>
        <select {...register("country")}>
          <option value="">SELECT</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
        </select>

        <div>
          {/* Age Field with Validation */}
          <label htmlFor="age">
            Age
            <input
              type="number"
              {...register("age", {
                required: "Age is required",
                min: { value: 18, message: "Age should not be less than 18" },
              })}
            />
          </label>
          {errors.age && <p>{errors.age.message}</p>}

          {/* Salary Field with Custom Validation */}
          <label htmlFor="salary">
            Salary
            <input
              type="number"
              {...register("salary", {
                required: "Salary is required",
                valueAsNumber: true,
                validate: (value) =>
                  value > 100000 || "Salary should be greater than 100000",
              })}
            />
          </label>
          {errors.salary && <p>{errors.salary.message}</p>}
        </div>

        <div>
          {/* Radio Button for Gender Selection */}
          <label htmlFor="male">
            <input
              type="radio"
              {...register("gender", { required: "Select your gender" })}
              value="male"
            />
            MALE
          </label>
          <label htmlFor="female">
            <input type="radio" {...register("gender")} value="female" />
            FEMALE
          </label>
          {errors.gender && <p>{errors.gender.message}</p>}
        </div>

        <div>
          {/* Checkboxes for Skills Selection */}
          <label>
            <input type="checkbox" {...register("skills")} value="JAVA" />
            JAVA
          </label>
          <label>
            <input type="checkbox" {...register("skills")} value="PYTHON" />
            PYTHON
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
