import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
// import { Link, Routes } from 'react-router-dom';
import {
  TLoginSchema,
  LoginSchema,
  Credentials,
  StorageKeys,
  ROUTES,
} from '../../utils/types';
import { TOKEN } from '../../utils/constants';
import { Navigate } from 'react-router-dom';
import { getFromLocalStorage, setToLocalStorage } from '../../utils/storage';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
  });
  // const router = useRouter();

  useEffect(() => {
    const checkLoginStatus = () => {
      const isAuthenticated = getFromLocalStorage(TOKEN);
      if (isAuthenticated) {
        console.log('sweet ! navigate me somewhere');
        <Navigate to={ROUTES.HOME} replace={true} />;
      }
    };
    checkLoginStatus();
  }, []);

  const onSubmit = async (data: TLoginSchema) => {
    if (
      getValues(StorageKeys.email) === Credentials.AdminUsername &&
      getValues(StorageKeys.password) === Credentials.PasswordUsername
    ) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setToLocalStorage('key', TOKEN);
      <Navigate to={ROUTES.HOME} replace={true} />;
    } else {
      toast.error("Incorrect email or password'");
    }
  };

  return (
    <Container>
      <div>
        <h1>Welcome back!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <StyledInput
              {...register(StorageKeys.email)}
              maxLength={50}
              placeholder={StorageKeys.email}
              hasError={
                !!errors[StorageKeys.password] || !!errors[StorageKeys.email]
              }
            />
            <StyledInput
              {...register(StorageKeys.password)}
              maxLength={50}
              placeholder={StorageKeys.password}
              type='password'
              hasError={
                !!errors[StorageKeys.password] || !!errors[StorageKeys.email]
              }
            />
          </InputContainer>

          <Button disabled={isSubmitting} type='submit'>
            {isSubmitting ? 'LOADING....' : 'Sign in'}
          </Button>
          <div>
            <p>{/* Don't have an account? <Link href='/'>Sign up</Link> */}</p>
            {/* <Link href={Routes.Home}>Forgot password?</Link> */}
          </div>
        </form>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ::placeholder {
    color: purple;
    text-transform: capitalize;
  }
`;

const Button = styled.button`
  display: flex;
  border: none;
  background: purple;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  padding: 10px 15px;
  width: 100%;
  justify-content: center;
  margin: 10px auto 0 auto;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledInput = styled.input<{ hasError?: boolean }>`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${({ hasError }) => (hasError ? 'red' : 'gray')};
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ hasError }) => (hasError ? 'red' : 'blue')};
  }

  ::placeholder: {
    text-transform: capitalize;
  }
`;
