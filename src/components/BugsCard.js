import { useState } from 'react';
import Bug from './Bug';
import DialogContainer from '../containers/DialogContainer';
import CardInnerContainter from '../containers/CardInnerContainer';
import CardScrollContainter from '../containers/CardScrollContainer';
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
      <CardInnerContainter>
        <CardHeader title="Bugs" />
        <CardScrollContainter>
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
        </CardScrollContainter>
        <CardFooter setOpen={setOpen} />
      </CardInnerContainter>
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
