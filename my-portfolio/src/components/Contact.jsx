import Form from 'react-bootstrap/Form';

function Contact() {
    return (
        <>
            <Form name="contact">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control type="email" placeholder="Email Address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control as="textarea" placeholder="Leave a message" rows={3} />
                </Form.Group>
            </Form>
        </>
    )
};

export default Contact();