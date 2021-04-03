import React from 'react';
import { Container, Text, Input } from '../../components/atom';

export default function Post() {
  return (
    <Container style={{ paddingTop: '20px' }}>
      <Text
        style={{
          width: '100%',
          marginTop: '20px',
          marginBottom: '10px',
        }}
      >
        매장 주소
      </Text>
      <Input
        name=""
        ref={null}
        type="text"
        borderBottom="1px solid #002060"
        readOnly
      />
    </Container>
  );
}
