import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

export const ProfileCard = ({ row }) => (
  <Card
    style={{ width: '16.5rem', minHeight: '220px', fontSize: '0.7rem' }}
    className="m-3 shadow"
  >
    <Card.Body>
      <Card.Title style={{ fontSize: '0.9rem'}}>{row.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '0.7rem'}}>
        <Row>
          <Col sm={6} className="pr-0">{row.stargazers_count} Stargazers</Col>
          <Col sm={6} className="p-0">{row.watchers_count} People Watching</Col>
        </Row>
      </Card.Subtitle>
      <Card.Text>{row.description}</Card.Text>
      <Card.Link href={row.url}>{row.name}</Card.Link>
    </Card.Body>
  </Card>
);
