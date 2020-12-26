import React, { useState } from 'react';
import Note from './Note';
import DialogContainer from '../containers/DialogContainer';
import CardInnerContainter from '../containers/CardInnerContainer';
import CardScrollContainter from '../containers/CardScrollContainer';
import NewNoteForm from './NewNoteForm';
import Spinner from './Spinner';
import ContentCard from '../containers/ContentCard';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import useGetProjectSubCollection from '../utils/useGetProjectSubCollection';

interface Note {
  id: string;
  date: number;
  title: string;
  content: string;
}

const NotesCard: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { output, loading } = useGetProjectSubCollection('Notes');

  return (
    <ContentCard>
      <CardInnerContainter>
        <CardHeader title="Notes" />
        <CardScrollContainter>
          {!loading ? (
            output.map((note: Note) => (
              <Note
                key={note.id}
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
