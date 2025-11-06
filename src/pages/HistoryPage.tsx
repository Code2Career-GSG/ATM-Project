import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { useUser } from "../hooks/useUser";

export const HistoryPage: React.FC = () => {
  const { user, resetUser } = useUser();
  const transactions = useMemo(() => user?.transactions || [], [user]);

  const pageSize = 4;
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(transactions.length / pageSize));

  const visible = useMemo(() =>
    transactions
      .slice()
      .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice((page - 1) * pageSize, page * pageSize),
    [transactions, page]
  );

  const handleClear = () => {
    if (!confirm("Are you sure you want to clear all user data? This action cannot be undone.")) return;
    resetUser();
    setPage(1);
  };
  return (
    <Wrap>
      <Header>
        <h2>Transaction History</h2>
        <Actions>
          <div>Total: {transactions.length}</div>
          <button onClick={handleClear}>Reset Account</button>
        </Actions>
      </Header>
      
      {transactions.length === 0 ? (
        <EmptyState>No Transactions Yet.</EmptyState>
      ) : (
        <>
          <List>
            {visible.map((tr: any) => (
              <Item key={tr.id}>
                <Left>
                  <Type>{tr.type}</Type>
                  <Desc>{tr.target_user ? `To: ${tr.target_user}` : ""}</Desc>
                </Left>
                <Right>
                  <Amount positive={tr.type === "deposit"}>{tr.type === "deposit" ? "+" : "-"}{tr.amount} {tr.currency}</Amount>
                  <DateText>{new Date(tr.date).toLocaleString()}</DateText>
                </Right>
              </Item>
            ))}
          </List>

          <Pager>
            <button aria-label="Previous page" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Previous</button>
            <PageInfo> Page {page} / {totalPages} </PageInfo>
            <button aria-label="Next page" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>Next</button>
          </Pager>
        </>
        )}
    </Wrap>
  );
};
const Wrap = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: calc(100vh - 110px);
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
const Actions = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  button {
    padding: 8px 12px;
    background-color: #ff4d4f;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #ff7875;
    }
  }
`;
const EmptyState = styled.div`
  text-align: center;
  padding: 20px;
  color: #666;
  background: #f9fafb;
  border-radius: 8px;
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Item = styled.li`
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Type = styled.div`
  font-weight: 600;
`;

const Desc = styled.div`
  font-size: 14px;
  color: #666;
`;
const Amount = styled.div<{positive:boolean}>`
  font-weight: 600;
  color: ${(props) => (props.positive ? "#16a34a" : "#ef4444")};
`;

const DateText = styled.div`
  font-size: 12px;
  color: #999;
`;

const Pager = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: auto;
  padding-top: 12px;
  button {
    padding: 8px 12px;
    background-color: #1890ff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #40a9ff;
    }
  }
  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
const PageInfo = styled.div`
  font-size: 14px;
`;
