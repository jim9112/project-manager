import { List } from '@material-ui/core';
import { useState } from 'react';
import DialogContainer from '../containers/DialogContainer';
import NewTaskForm from './NewTaskForm';
import useGetProjectSubCollection from '../utils/useGetProjectSubCollection';
import Task from './Task';
import Spinner from './Spinner';
import ContentCard from '../containers/ContentCard';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';

const TasksCard = () => {
  const [open, setOpen] = useState(false);
  const { output, loading } = useGetProjectSubCollection('Tasks');

  return (
    <ContentCard>
      <CardHeader title="Tasks" />
      <List>
        {!loading ? (
          output
            .sort((x, y) => x.checked - y.checked)
            .map((task) => {
              return <Task key={task.id} task={task} />;
            })
        ) : (
          <Spinner />
        )}
      </List>
      <CardFooter setOpen={setOpen} />
      <DialogContainer
        open={open}
        setOpen={setOpen}
        title="New Task"
        NewComponentForm={NewTaskForm}
      />
    </ContentCard>
  );
};

export default TasksCard;
