import { Box, Grid } from "@material-ui/core";
import TaskContainer from "./TaskContainer"
import UserSelect from "./UserSelect"

const App = () => {
  return (
    <>
    
      <TaskContainer />
      <Box maxWidth='360px' border='solid 1px'>
          <UserSelect />
      </Box>
    </>
  );
};

export default App;
