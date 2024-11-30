/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container } from '../components/common/container/Container';
import { Col } from '../components/common/flex/Flex';
import { LogoIcon } from '../assets';
import { TextInput } from '../components/common/input/TextInput';
import PrimaryButton from '../components/common/button/PrimaryButton';
import { useNavigation } from '../hooks/useNavigation';
import { useState } from 'react';

const LoginPage = () => {
  const { navigate } = useNavigation();

  const [idInputValue, setIdInputValue] = useState('');

  const handleIdInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdInputValue(e.target.value);
  };

  const [passwordInputValue, setPasswordInputValue] = useState('');

  const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInputValue(e.target.value);
  };
  return (
    <Container>
      <Col padding={'53px 0'} alignItems="center" gap={30}>
        <Col alignItems="center" gap={5}>
          <span
            css={css`
              font-family: 'LeeSeoyun';
              font-size: 4rem;
              color: #000;
            `}
          >
            KUIZ
          </span>
          <span
            css={css`
              font-family: 'LeeSeoyun';
              font-size: 1.2rem;
              color: #797979;
            `}
          >
            올바른 UI/UX를 위한 길잡이
          </span>
        </Col>
        <LogoIcon />
        <Col padding={'0 20px'} gap={8}>
          <TextInput
            placeholder="아이디를 입력하세요"
            type="text"
            value={idInputValue}
            onChange={handleIdInputChange}
          />
          <TextInput
            placeholder="비밀번호를 입력하세요"
            type="password"
            value={passwordInputValue}
            onChange={handlePasswordInputChange}
          />
        </Col>
        <Col alignItems="center" gap={15}>
          <div
            css={css`
              width: 100%;
              padding: 0 20px;
            `}
          >
            <PrimaryButton title="로그인" color="#BA6C25" onClick={() => navigate('/')} />
          </div>
          <span
            css={css`
              font-family: 'Prentendard';
              font-size: 1.4rem;
              font-weight: 600;
              color: #ba6c25;
            `}
          >
            회원가입
          </span>
        </Col>
      </Col>
    </Container>
  );
};

export default LoginPage;
