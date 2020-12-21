import { useState } from 'react';
import Bug from './Bug';
import DialogContainer from '../containers/DialogContainer';
import NewBugForm from '../components/NewBugForm';
import Spinner from './Spinner';
import ContentCard from '../containers/ContentCard';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import useGetProjectSubCollection from '../utils/useGetProjectSubCollection';

const BugsCard = () => {
  const [open, setOpen] = useState(false);
  const { output, loading } = useGetProjectSubCollection('Bugs');

  return (
    <ContentCard>
      <CardHeader title="Bugs" />
      {!loading ? (
        output.map((bug) => (
          <Bug
            key={bug.id}
            archived={bug.archived}
            date={bug.date}
            title={bug.title}
            desc={bug.desc}
            priority={bug.priority}
            id={bug.id}
          />
        ))
      ) : (
        <Spinner />
      )}
      <CardFooter setOpen={setOpen} />
      <DialogContainer
        open={open}
        setOpen={setOpen}
        title="New Bug"
        type={'New'}
        NewComponentForm={NewBugForm}
      />
    </ContentCard>
  );
};

export default BugsCard;
