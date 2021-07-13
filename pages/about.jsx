import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function SSRPage({ user }) {
  return (
    <div>
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

export const getServerSideProps = withPageAuthRequired();
