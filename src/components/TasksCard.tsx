import { List } from '@material-ui/core';
import { useState } from 'react';
import DialogContainer from '../containers/DialogContainer';
import CardInnerContainter from '../containers/CardInnerContainer';
import CardScrollContainter from '../containers/CardScrollContainer';
import NewTaskForm from './NewTaskForm';
import useGetProjectSubCollection from '../utils/useGetProjectSubCollection';
import Task from './Task';
import Spinner from './Spinner';
import ContentCard from '../containers/ContentCard';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';

interface X {
  checked: any;
}

interface ITask {
  id: string;
  task: string;
  checked: boolean;
  date: number;
}

const TasksCard = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { output, loading } = useGetProjectSubCollection('Tasks');

  return (
    <ContentCard>
      <CardInnerContainter>
        <CardHeader title="Tasks" />
        <CardScrollContainter>
          <List>
            {!loading ? (
              output
                .sort((x: X, y: X) => x.checked - y.checked)
                .map((task: ITask) => {
                  return <Task key={task.id} task={task} />;
                })
            ) : (
              <Spinner />
            )}
          </List>
        </CardScrollContainter>
        <CardFooter setOpen={setOpen} />
      </CardInnerContainter>
      <DialogContainer
        open={open}
        setOpen={setOpen}
        title="New Task"
        type="New"
        NewComponentForm={NewTaskForm}
      />
    </ContentCard>
  );
};

export default TasksCard;
