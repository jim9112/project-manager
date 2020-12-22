import { useState } from 'react';
import Note from './Note';
import DialogContainer from '../containers/DialogContainer';
import CardInnerContainter from '../containers/CardInnerContainer';
import CardScrollContainter from '../containers/CardScrollContainer';
import NewNoteForm from '../components/NewNoteForm';
import Spinner from './Spinner';
import ContentCard from '../containers/ContentCard';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import useGetProjectSubCollection from '../utils/useGetProjectSubCollection';

const NotesCard = () => {
  const [open, setOpen] = useState(false);
  const { output, loading } = useGetProjectSubCollection('Notes');

  return (
    <ContentCard>
      <CardInnerContainter>
        <CardHeader title="Notes" />
        <CardScrollContainter>
          {!loading ? (
            output.map((note) => (
              <Note
                key={note.id}
                archived={note.archived}
                date={note.date}
                title={note.title}
                content={note.content}
                id={note.id}
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
        title="New Note"
        type={'New'}
        NewComponentForm={NewNoteForm}
      />
    </ContentCard>
  );
};

export default NotesCard;
