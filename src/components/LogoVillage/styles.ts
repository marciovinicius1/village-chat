import styled from 'styled-components';
import { Logovillage } from '../../assets/svgr';

export const Container = styled.div`
  background-color: transparent;
  margin-bottom: 20px;
`;
export const LogoVillageIcon = styled(Logovillage)`
  margin-top: 10px;
  width: 400px;
  background-color: transparent;

  @media (max-width: 1200px) {
    width: 300px;
  }

  @media (max-width: 420px) {
    width: 200px;
  }
`;
