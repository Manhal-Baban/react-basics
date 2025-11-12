import styles from "./Form.module.css";
const Form = ({ formData, setFormData, handleClick }) => {
  const handleChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick();
    setFormData({
      age: "",
      name: "",
      title: "",
    }); // optional resetting of the form.
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="name">
          Name:
        </label>
        <input
          className={styles.input}
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label className={styles.label} htmlFor="title">
          Title:
        </label>
        <input
          className={styles.input}
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label className={styles.label} htmlFor="age">
          Age:
        </label>
        <input
          className={styles.input}
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <button type="submit">Add Employee</button>
        {/* Alternatively you can use just button without submit type */}
        {/* <button type="button" onClick={handleClick}>
          Add Employee
        </button> */}
        <button
          type="button"
          onClick={() =>
            setFormData({
              age: "",
              name: "",
              title: "",
            })
          }
        >
          Reset Form
        </button>
      </form>
      <p>Your name is: {formData.name}</p>
      <p>Your title is: {formData.title}</p>
      <p>Your age is: {formData.age}</p>
    </div>
  );
};

export default Form;
