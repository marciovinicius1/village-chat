import React, { FormEvent } from 'react';
import { Button } from '../../components/Buttons/Button';
import { Container, FormBox, KnightIcon, Toggle, ZombieIcon } from './styles';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const CreateUser: React.FC = () => {
  const { user, userName, setUserName, userZombie, setUserZombie, signIn } =
    useAuth();

  const navigate = useNavigate();

  async function handleCreateUser(event: FormEvent) {
    event.preventDefault();

    if (userName.trim() === '') {
      return;
    }

    if (!user) {
      await signIn();
    } else {
      console.log(user);
    }
  }

  return (
    <Container>
      <FormBox>
        <form onSubmit={handleCreateUser}>
          <div>
            <label>Nome da Sala</label>
            <input
              type="text"
              placeholder="Digite o nome da sala"
              onChange={(event) => setUserName(event.target.value)}
              value={userName}
              name="username"
              required
            />
          </div>
          <div>
            <label>Escolha seu lado:</label>
            <Toggle>
              <KnightIcon />
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={(event) => setUserZombie(event.target.checked)}
                />
                <span className="slider"></span>
              </label>
              <ZombieIcon />
            </Toggle>
          </div>
          <Button type="submit">Entrar na sala</Button>
        </form>
      </FormBox>
    </Container>
  );
};

export default CreateUser;
