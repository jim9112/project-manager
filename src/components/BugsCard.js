import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Bug from './Bug';
import DialogContainer from '../containers/DialogContainer';
import CardInnerContainter from '../containers/CardInnerContainer';
import NewBugForm from '../components/NewBugForm';
import Spinner from './Spinner';
import ContentCard from '../containers/ContentCard';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import useGetProjectSubCollection from '../utils/useGetProjectSubCollection';

const useStyles = makeStyles((theme) => ({
  scroll: {
    // minHeight: 500,
    // maxHeight: '90%',
    flex: 1,
    overflowY: 'auto',
    marginBottom: '1rem',
  },
  inner: {
    maxHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const BugsCard = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { output, loading } = useGetProjectSubCollection('Bugs');

  return (
    <ContentCard>
      <CardInnerContainter>
        <CardHeader title="Bugs" />
        <div className={classes.scroll}>
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
        </div>
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
