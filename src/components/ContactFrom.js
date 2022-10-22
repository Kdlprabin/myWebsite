import Form from "react-bootstrap/Form";
function ContactForm() {
  return (
    <div className="text-white">
      <Form className="m-5">
        <Form.Group>
          <Form.Label className="m-2">Email address :</Form.Label>
          <Form.Control
            type="email"
            placeholder="name123@gmail.com"
            className="w-25"
          />
          <Form.Label className="m-2">Message :</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            placeholder="Type your message here..."
          />
        </Form.Group>
      </Form>
    </div>
  );
}
export default ContactForm;
