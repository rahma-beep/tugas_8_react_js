import React, { Component } from "react";
import {
  Col,
  Dropdown,
  Image,
  Media,
  Row,
  Breadcrumb,
  Container,
  Carousel,
  ListGroup,
  Jumbotron,
  Button,
  Form,
  Modal,
 }
 from "react-bootstrap";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      buka: true,
      tutup: false,
    }
    this.tampilModal = this.tampilModal.bind(this);
    this.sembunyiModal = this.sembunyiModal.bind(this);
  }
  sembunyiModal(){
    this.setState (this.state.tutup)
  }
  tampilModal(e){
    e.preventDefault();
    alert(this.state.buka);
  }
  render() {
    return (
      <div>
      <Row style={{ backgroundColor: "black"}}>
      <Col>
      <Dropdown>
      <Dropdown.Toggle variant="primary">
      Pilih Bahasa
      </Dropdown.Toggle>
      </Dropdown>
      </Col>
      <Col></Col><Col></Col><Col></Col>
      <Col>
      <Media>
      <Image
      src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
      alt="User"
      width={50} height={50} /> <br/>
      <Media.Body>
      <p style={{ color: "white"}}>Alan Saputra</p>
      </Media.Body>
      </Media>
      </Col>
      </Row>
      <Container>
      <Row>
      <Col></Col>
      <Col>
      <Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Berita
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Bola</Breadcrumb.Item>
</Breadcrumb>
      </Col>
      </Row>
      <br/>
      <Row>
      <Col></Col>
      <Carousel style={{width: "70%"}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
      alt="First slide" fluid
    />
    <Carousel.Caption>
      <h4>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h4>Neymar Bahas Kontrak Baru Di Paris Saint-Germaint</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h4>Inggris Mau Jadi Tim Terbaik DiDunia</h4>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<Col></Col>
</Row>
</Container>
<br/>
<Row>
<Col>
<ListGroup>
  <ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
  <ListGroup.Item>Liga Primer Inggris</ListGroup.Item>
  <ListGroup.Item disabled>Divisi Primera</ListGroup.Item>
  <ListGroup.Item>Serie A</ListGroup.Item>
  <ListGroup.Item>Ligue 1</ListGroup.Item>
  <ListGroup.Item>Bundes Liga</ListGroup.Item>
  </ListGroup>
</Col>
<Col>
<Jumbotron>
<br/>
<br/>
<br/>
<h2>DIVISI PRIMERA</h2>
<p>Main Untuk Catalunya, Gerard Pique Minta Dihormati</p>
<Button variant="primary">Read More</Button>
</Jumbotron>
</Col>
<Col>
<Media style={{textAlign: "center"}}>
<Image
src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg"
alt="User"
width={50} height={50} /> <br/>
<Media.Body>
<h4>Silahkan Login</h4>
</Media.Body>
</Media>
<Form>
<Form.Group>
<Form.Control type="email" placeholder="Masukan email"/>
</Form.Group>
<Form.Control type="password" placeholder="Masukan Password"/>
<Form.Group>
</Form.Group>
<Form.Group>
<Form.Check type="checkbox" label="Term & Condition"/>
</Form.Group>
<Button variant="primary" onClick={this.state.buka}>Login</Button>
</Form>
</Col>
</Row>
<Modal show={this.state.buka} onHide={this.state.tutup}>
<Modal.Header closeButton>
<Modal.Title>Login</Modal.Title>
</Modal.Header>
<Modal.Body>Anda Berhasil Login</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={this.state.tutup}>Close</Button>
<Button variant="primary" onClick={this.state.tutup}>Save Username & Password</Button>
</Modal.Footer>
</Modal>
</div>
);
  }
}

export default App;
