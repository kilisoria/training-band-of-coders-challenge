import React from 'react';
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';

const AboutPage = () => {
  return (
    <div data-testid="about">
      <Card>
        <CardBody>
          <CardTitle tag="h5">Details</CardTitle>
          <CardText>This is the version 0.1.9 for the Code Challenge.</CardText>
          <Button>OK</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default AboutPage;

