import React from "react";
import Type from "components/Type";
import { Gender, Looking } from "types";
import { Row } from "./styles";

type Props = {
  type: Looking;
};

function ChooseAType({ type }: Props) {
  return (
    <Row>
      <div>
        <Type type={type} gender={Gender.FEMALE} />
      </div>
      <div>
        <Type type={type} gender={Gender.MALE} />
      </div>
    </Row>
  );
}

export default ChooseAType;
