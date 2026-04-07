import Button from "../Button/Button";

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <form className="flex flex-col  w-1/2">
        <input
          className="border border-gray-300 rounded py-2 px-4 m-1 w-2/6"
          type="text"
          placeholder="Your Name"
        />
        <input
          className="border border-gray-300 rounded py-2 px-4 m-1 w-2/6"
          type="text"
          placeholder="Your Message"
        />
        <Button type="primary" name="Send Message"></Button>
      </form>
    </div>
  );
};

export default Contact;
