import { styled } from "styled-components";
import { useWindowSize } from "hooks/useWindowSizes";

const StyleMain = styled.div`
  filter: url("#fancy-goo");
  width: 100%;
  height: 100%;
  /* opacity: 0.1; */
  position: absolute;
  z-index: 1;
`;




export const Background = () => {
  const { width } = useWindowSize();
  return (
    <>
      {width > 970 ? (
        <StyleMain>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', maxWidth: '1440px', width: '98vw', margin: 'auto' }}>
            <img src="/images/bg/left.png" alt="" />
            <div style={{ backgroundImage: 'url("/images/bg/center.png")', width: '100%' }}>
              <h1 style={{ width: '100%' }}></h1>
            </div>
            <img src="/images/bg/right.png" alt="" />
          </div>
        </StyleMain>
      ) : <></>}
    </>

  );
};
