import { Card } from '../../../models/card';

export type GetResponse = { cards: Card[] };

export type CreateResponse = { createCard: Card };

export type DuplicateResponse = { duplicateCard: Card };
