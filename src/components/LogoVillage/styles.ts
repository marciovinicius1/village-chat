import styled from 'styled-components';
import { Logovillage } from '../../assets/svgr';

export const Container = styled.div`
  height: auto;
  width: 400px;
  margin-top: 30px;
  background-color: transparent;
  margin-bottom: 20px;

  @media (max-width: 420px) {
    width: 220px;
  }
`;
export const LogoVillageIcon = styled(Logovillage)`
  background-color: transparent;
`;
