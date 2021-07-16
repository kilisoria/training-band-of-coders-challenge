import React, { memo, useCallback } from 'react';
import { useRouter } from 'next/router';
import {
  Card, CardText, CardBody, CardTitle, Button,
} from 'reactstrap';

const AboutPage = () => {
  const router = useRouter();

  const handleConfirm = useCallback(() => {
    router.push('tasks');
  }, []);

  return (
    <div data-testid="about">
      <Card>
        <CardBody>
          <CardTitle tag="h5">Details</CardTitle>
          <CardText>This is the version 0.1.9 for the Code Challenge.</CardText>
          <Button onClick={handleConfirm}>OK</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default memo(AboutPage);
