import { format } from 'date-fns';

export const formatEventStart = start =>
  format(Date.parse(start), 'dd MMMM yyyy, HH:mm');
