/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  backgroundColor?: React.CSSProperties['backgroundColor'];
  isBottomNavigation?: boolean;
}

export const Container = (props: ContainerProps) => {
  const { children, isBottomNavigation = true, backgroundColor = '#ffffff' } = props;

  return (
    <div
      css={css`
        position: relative;
        width: 100%;
        height: ${isBottomNavigation
          ? 'calc(var(--vh, 1vh) * 100 - 70px)'
          : 'calc(var(--vh, 1vh) * 100)'};
        max-width: 840px;
        margin: 0 auto;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background-color: ${backgroundColor};
        overflow-y: auto;
      `}
    >
      {children}
    </div>
  );
};
