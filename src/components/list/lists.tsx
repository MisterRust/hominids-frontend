import { useState } from "react";
import styled from "styled-components";
import List from "./List";

const LISTS_ARR = [
  {
    title: "CONNECT YOUR WALLET",
    content:
      "Connect your Metamask wallet by signing up in order to browse and sell your Nfts",
  },
  {
    title: "CREATE YOUR OWN COLLECTION",
    content:
      "Connect your Metamask wallet by signing up in order to browse and sell your Nfts",
  },
  {
    title: "ADD YOUR NFTS",
    content:
      "Connect your Metamask wallet by signing up in order to browse and sell your Nfts",
  },
  {
    title: "PUTS YOUR NFTS ON SALE",
    content:
      "Connect your Metamask wallet by signing up in order to browse and sell your Nfts",
  },
];

const ListsContainer = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 1500px;
  padding: 0 30px;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

const Underline = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: #1c1d1f;
  mix-blend-mode: screen;
  margin: 5px 0;
`;

export default function Lists() {
  const [visibility, setVisibility] = useState([true, false, false, false]);

  const onBtnClick = (index: number) => {
    setVisibility((state) => {
      if (state[index] === true) {
        state[index] = false;
        return [...state];
      } else {
        const status: Array<boolean> = [false, false, false, false];
        status[index] = true;
        return status;
      }
    });
  };

  return (
    <ListsContainer>
      {LISTS_ARR.map((list, index) => (
        <>
          <List
            key={index}
            index={index}
            visible={visibility[index]}
            title={list.title}
            content={list.content}
            onBtnClick={onBtnClick}
          />
          {index !== 3 && <Underline />}
        </>
      ))}
    </ListsContainer>
  );
}
