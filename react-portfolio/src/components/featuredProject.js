import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";


function FeaturedArea (){
    return(


      <Container className="featuredContainer">
        <div className="d-flex justify-content-around">
          <Card style={{ width: "70rem" }}>
            <Card.Img variant="top" src="/BiblioTecha.png" />
            <Card.Body>
              <Card.Title>biblioTecha</Card.Title>
              <Card.Text>
                biblioTECHa is a website that gives users their own virtual
                library card. As a user you will be able to search and add books
                to your booklist, create reviews, and comment on fellow readers'
                posts.
                <a href="https://arcane-harbor-36381.herokuapp.com/">
                  {" "}
                  link to biblioTECHa
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>

        
    )
}




export default FeaturedArea;
