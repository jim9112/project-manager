import React, { useState } from 'react';
import Bug from './Bug';
import DialogContainer from '../containers/DialogContainer';
import CardInnerContainter from '../containers/CardInnerContainer';
import CardScrollContainter from '../containers/CardScrollContainer';
import NewBugForm from './NewBugForm';
import Spinner from './Spinner';
import ContentCard from '../containers/ContentCard';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import useGetProjectSubCollection from '../utils/useGetProjectSubCollection';
import { useParams } from 'react-router';

const BugsCard: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { projectKey } = useParams<{ projectKey: string }>();
  const { output, loading } = useGetProjectSubCollection('Bugs', projectKey);

  return (
    <ContentCard>
      <CardInnerContainter>
        <CardHeader title="Bugs" />
        <CardScrollContainter>
          {!loading ? (
            output.map(
              (bug: {
                id: string;
                date: number;
                title: string;
                desc: string;
                priority: string;
              }) => (
                <Bug
                  key={bug.id}
                  date={bug.date}
                  title={bug.title}
                  desc={bug.desc}
                  priority={bug.priority}
                  id={bug.id}
                />
              )
            )
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
