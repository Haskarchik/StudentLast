import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';
import './Question.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface QuestionProps {
  question: string;
  answer: string;
}

export default function Question({ question, answer }: QuestionProps) {
  return (
    <Accordion className="question-module">
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="question-summary"
        expandIcon={<ExpandMoreIcon sx={{ strokeWidth: 1, stroke: 'black' }} />}>
        <Typography className="question-title">{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography /* sx={{ color: 'var(--dull-grey)' }} */>{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
