import React from "react";
import { Panel } from "./panel";
import { Button } from "./button";

export function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}
