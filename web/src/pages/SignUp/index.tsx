import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import Button from '../../components/Button';
import Input from '../../components/Input';

import * as S from './styles';

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <S.Container>
      <S.Content>
        <h1>Create an account</h1>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="Name" icon={FiUser} name="name" type="text" />
          <Input placeholder="Email" icon={FiMail} name="email" type="text" />
          <Input
            placeholder="Password"
            icon={FiLock}
            name="password"
            type="password"
          />
          <Button type="submit">Sign Up</Button>
        </Form>
        <a href="/">
          <FiArrowLeft size={13} />
          <span>Do you have an account?</span>
        </a>
      </S.Content>
    </S.Container>
  );
};

export default SignUp;
