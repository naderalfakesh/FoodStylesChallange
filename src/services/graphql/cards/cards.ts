import client from '../client';
import {
  CREAT_CARD,
  DELETE_CARD,
  DUPLICATE_CARD,
  SHARE_CARD,
} from './mutations';
import { GET_CARDS } from './queries';
import { CreateResponse, DuplicateResponse, GetResponse } from './types';

const get = () =>
  client.query<GetResponse>({
    query: GET_CARDS,
  });

const create = () =>
  client.mutate<CreateResponse>({
    mutation: CREAT_CARD,
  });

const share = () =>
  client.mutate<void>({
    mutation: SHARE_CARD,
  });

const duplicate = (id: string) =>
  client.mutate<DuplicateResponse>({
    mutation: DUPLICATE_CARD,
    variables: { id },
  });

const remove = (id: string) =>
  client.mutate<void>({
    mutation: DELETE_CARD,
    variables: { id },
  });

export { get, create, share, duplicate, remove as delete };
