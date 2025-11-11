import React from "react";
import styled from "styled-components";
import { useSettings } from "../hooks/useSettings";
import { useDispatch } from "react-redux";
import { clearUserData, setLogged } from "../store/store";
import { useNavigate } from "react-router-dom";

export const SettingsPage: React.FC = () => {
  const { mode, toggleMode } = useSettings();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleResetAccount = () => {
    const ok = window.confirm(
      "Reset account will clear your balance and transactions. This cannot be undone. Continue?"
    );
    if (!ok) return;

    dispatch(clearUserData());
    dispatch(setLogged(false));
    try {
      localStorage.removeItem("userData");
    } catch (e) {
      // ignore
    }
    navigate("/");
  };

  return (
    <Container>
      <Title>Settings</Title>

      <Section>
        <SectionHeading>Appearance</SectionHeading>
        <Row>
          <SwitchLabel>
            <HiddenCheckbox
              type="checkbox"
              checked={mode === "dark"}
              onChange={toggleMode}
              aria-label="Toggle theme"
            />
            <Slider />
          </SwitchLabel>
          <Meta>
            Theme: <strong>{mode}</strong>
          </Meta>
        </Row>
      </Section>

      <Section>
        <SectionHeading>Account</SectionHeading>
        <Row>
          <p>
            Resetting your account will set your balance to 0 and remove
            transaction history.
          </p>
        </Row>
        <Row>
          <ResetButton onClick={handleResetAccount}>Reset account</ResetButton>
        </Row>
      </Section>

      <Section>
        <SectionHeading>Other</SectionHeading>
        <Row>
          <p>No additional settings yet.</p>
        </Row>
      </Section>
    </Container>
  );
};

/* Styled components */
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 1.5rem;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 1rem;
  color: #e6e9ee;
`;

const Section = styled.section`
  background: #2b6760ff;
  border: 1px solid #000000ff;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const SectionHeading = styled.h2`
  margin: 0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Meta = styled.div`
  color: #caece8ff;
`;

const ResetButton = styled.button`
  background: #ef4444;
  color: white;
  border: none;
  padding: 0.6rem 0.9rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: #dc2626;
  }
`;

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 52px;
  height: 30px;
`;

const HiddenCheckbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.2s;
  border-radius: 30px;

  &::before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.2s;
    border-radius: 50%;
  }

  /* When the associated input is checked, move the knob and change color */
  ${HiddenCheckbox}:checked + & {
    background-color: #2a9d8f;
  }

  ${HiddenCheckbox}:checked + &::before {
    transform: translateX(22px);
  }
`;
