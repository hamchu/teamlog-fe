import { Box, Grid } from "@material-ui/core";
import MapContainer from "./MapContainer";
import TaskContainer from "./TaskContainer";
import UserSelect from "./UserSelect";

const App = () => {
  return (
    <>
      <MapContainer />
      {/* <TaskContainer />
      <Box maxWidth='720px' border='solid 1px'>
          <UserSelect />
      </Box> */}
    </>
  );
};

export default App;
