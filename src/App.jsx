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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
        {/* Form element with handleSubmit to manage submission */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="firstName" className="block font-medium">
              Name
            </label>
            <input
              {...register("firstName", { required: "Name is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Select Dropdown */}
          <div>
            <label htmlFor="country" className="block font-medium">
              Country
            </label>
            <select
              {...register("country")}
              className="w-full p-2 border rounded"
            >
              <option value="">SELECT</option>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
            </select>
          </div>

          {/* Age and Salary Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="age" className="block font-medium">
                Age
              </label>
              <input
                type="number"
                {...register("age", {
                  required: "Age is required",
                  min: { value: 18, message: "Age should not be less than 18" },
                })}
                className="w-full p-2 border rounded"
              />
              {errors.age && (
                <p className="text-red-500 text-sm">{errors.age.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="salary" className="block font-medium">
                Salary
              </label>
              <input
                type="number"
                {...register("salary", {
                  required: "Salary is required",
                  valueAsNumber: true,
                  validate: (value) =>
                    value > 100000 || "Salary should be greater than 100000",
                })}
                className="w-full p-2 border rounded"
              />
              {errors.salary && (
                <p className="text-red-500 text-sm">{errors.salary.message}</p>
              )}
            </div>
          </div>

          {/* Gender Selection */}
          <div>
            <label className="block font-medium">Gender</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  {...register("gender", { required: "Select your gender" })}
                  value="male"
                  className="mr-2"
                />
                MALE
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  {...register("gender")}
                  value="female"
                  className="mr-2"
                />
                FEMALE
              </label>
            </div>
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender.message}</p>
            )}
          </div>

          {/* Skills Selection */}
          <div>
            <label className="block font-medium">Skills</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  {...register("skills")}
                  value="JAVA"
                  className="mr-2"
                />
                JAVA
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  {...register("skills")}
                  value="PYTHON"
                  className="mr-2"
                />
                PYTHON
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
