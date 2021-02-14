import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.section).attrs(() => ({
  initial: 'hidden',
  variants: {
    hidden: { 
      opacity: 0,
      scale: 0.9,
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.4,
        ease: ['anticipate']
      } 
    },
  }
}))`
  background: ${({theme}) => theme.colors.secondary};
  border-radius: 5px;
  padding: 30px 45px;
  width: 100%;
  max-width: 750px;
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 500;
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 300;
`;

export const TextContainer = styled.hgroup`
  text-align: center;
  margin-bottom: 35px;
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.form`
  max-width: 270px;
  & > fieldset:first-of-type {
    margin-bottom: 30px;
  }
  & > button {
    margin-top: 30px;
  }
`;

export const Separator = styled.span`
  height: 290px;
  width: 1px;
  display: block;
  background-color: #dcdcdc;
  border-radius: 10px;
`;

export const ContainerSocialLogin = styled.div`
  width: 100%;
  max-width: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > :first-child {
    margin-bottom: 30px;
  }
  button {
    svg {
      margin-right: 10px;
    }
  }
`;

export const LinkNewAccount = styled.p`
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  margin-top: 35px;
`;