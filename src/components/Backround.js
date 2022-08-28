import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

function Background() {
    return (
        <div style={{ width: "100%" }}>
            <Card style={{ minHeight: "428px", marginBottom: "50px", backgroundColor: "#DEEED6" }} className="text-black">
                <div style={{ top: "auto", width: "578px", marginLeft: "100px", marginBottom: "50px", marginTop: "75px" }}>
                    <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
                        Order groceries for delivery <br /> or pickup today
                    </Card.Text>
                    <Card.Text style={{ fontSize: "1em" }}>
                        Whatever you want from local stores, brought right to your door.
                    </Card.Text>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control size="lg" type="text" placeholder="   Enter your address                                         ->" />
                        </Form.Group>
                    </Form>
                </div>
            </Card>
        </div>
        // Can not get the image to work so the entire div was made into the card
    )
}
export default Background