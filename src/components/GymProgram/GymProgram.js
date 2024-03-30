/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import GymTitle from "./GymTitle";
import GymSubtitle from "./GymSubtitle";
import GymProgramCard from "./GymProgramCard";
import Container from "../GlobalComponents/Container";

const GymProgram = () => (
  <div css={styles} className="gymProgram">
    <GymTitle />
    <Icon />
    <GymSubtitle />
    <Container>
      <GymProgramCard
        title="Basic Fitness"
        desc="Basic fitness for beginners and young adults who have less time."
      />
      <GymProgramCard
        title="Advanced Muscle Course"
        desc="You may want to browse through Digital Marketing or Corporate HTML CSS templates on our website."
      />
      <GymProgramCard
        title="New Gym Training"
        desc="Proper gym training strictly according to latest industry trends and equipments"
      />
      <GymProgramCard
        title="Yoga Training"
        desc="Relax your senses and mind after a hectic day of work"
      />
      <GymProgramCard
        title="Basic Muscle Course"
        desc="Credit goes to Pexels website for images and video background used in this website."
      />
      <GymProgramCard
        title="Body Building Course"
        desc="Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi. Integer nibh sapien, vehicula et auctor."
      />
    </Container>
  </div>
);

const styles = css`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 120px 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 0;
  }
  @media (max-width: 700px) {
    .container {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  @media (min-width: 701px) and (max-width: 1100px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default GymProgram;
