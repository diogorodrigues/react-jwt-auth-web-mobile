import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValitationErrors from '../../utils/getValitationErrors';

import Button from '../../components/Button';
import Input from '../../components/Input';

import * as S from './styles';

interface SignInFormProps {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormProps) => {
      try {
        formRef.current?.setErrors({});
        // console.log(formRef);

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email is required')
            .email('Enter a valid email'),
          password: Yup.string().required('Password is required'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValitationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Authentication Error',
          description:
            'An error occurred while trying to sign in. Check the entrances and try again.',
        });
      }
    },
    [signIn, addToast, history],
  );

  return (
    <S.Container>
      <S.Content>
        <h1>Sign In</h1>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input placeholder="Email" icon={FiMail} name="email" type="text" />
          <Input
            placeholder="Password"
            icon={FiLock}
            name="password"
            type="password"
          />
          <Button type="submit">Entrar</Button>
        </Form>
        <Link to="/signup">
          <FiLogIn size={13} />
          <span>New account</span>
        </Link>
      </S.Content>
    </S.Container>
  );
};

export default SignIn;
