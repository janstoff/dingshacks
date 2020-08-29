import React from "react";
import { useParams } from "react-router-dom";
import { ShackPage as ShackPageComponent } from "./components/ShackPage";
import { FullShack, ShackResponse } from "./types";

export const ShackPage: React.SFC = () => {
  const { id } = useParams();
  const [shackData, setShackData] = React.useState<FullShack | undefined>();

  React.useEffect(() => {
    // TODO: fetch actual shack data
    const {
      shack,
    }: ShackResponse = require(`./mocks/backend-reponses/shack-${id}.json`);

    setShackData(shack);
  }, [id]);

  if (!shackData) {
    return <div>Loading...</div>;
  }

  return (
    <ShackPageComponent shackData={shackData}>{shackData}</ShackPageComponent>
  );
};
