import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { TLoginSchema, LoginSchema } from '../../utils/types';
import { COLORS, StorageKeys, TOKEN } from '../../utils/constants';
import { getFromLocalStorage, setToLocalStorage } from '../../utils/storage';
import { useRedirect } from '../../hooks/useRedirect';
import { createTesonetClient } from '../../config/tesonetClient';
import { useUserAuthentication } from '../../hooks/useUserAuthentication';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
  });
  const { toHome } = useRedirect();
  const { getToken } = createTesonetClient();
  const { updateUserAuthentication } = useUserAuthentication();
  const isAuthenticated = getFromLocalStorage(TOKEN);

  useEffect(() => {
    if (isAuthenticated) {
      toHome();
    }
  }, [isAuthenticated, toHome]);

  const onSubmit = async (data: TLoginSchema) => {
    const { username, password } = data;
    const tokenID = await getToken(username, password);

    if (tokenID) {
      setToLocalStorage(TOKEN, tokenID);
      updateUserAuthentication(true);
      toHome();
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
              {...register(StorageKeys.username)}
              placeholder={StorageKeys.username}
              hasError={
                !!errors[StorageKeys.password] || !!errors[StorageKeys.username]
              }
            />
            <StyledInput
              {...register(StorageKeys.password)}
              placeholder={StorageKeys.password}
              type='password'
              hasError={
                !!errors[StorageKeys.password] || !!errors[StorageKeys.username]
              }
            />
          </InputContainer>

          <Button disabled={isSubmitting} type='submit'>
            {isSubmitting ? 'LOADING....' : 'Sign in'}
          </Button>
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
  background: ${COLORS.primary};
  font-weight: 700;
  text-transform: uppercase;
  color: ${COLORS.white};
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

  ::placeholder {
    text-transform: capitalize;
  }
`;
