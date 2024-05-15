import { useState } from "react";

const useForm = (initialState, validationRules) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    Object.entries(formData).forEach(([fieldName, value]) => {
      if (
        validationRules[fieldName] &&
        !validationRules[fieldName].validate(value)
      ) {
        newErrors[fieldName] = validationRules[fieldName].message;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const response = await fetch(
          "",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(formData).toString(),
          }
        );
        if (response.ok) {
          console.log("Form submitted successfully!");
          // Reset form data after successful submission
          setFormData(initialState);
        } else {
          console.error("Form submission failed");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.error("Form validation failed");
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
