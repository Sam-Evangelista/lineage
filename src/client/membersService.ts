import { CreateMemberResult } from "../pages/api/types/members";

const MEMBERS_ENDPOINT = '/api/members';

const addPairing = async (
  name: string,
  classOf: string,
  adings: number = 0,
  aks: number = 0
) => {
  const response = await fetch(MEMBERS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      name,
      classOf,
      adings,
      aks,
    }),
  });
  const result: CreateMemberResult = await response.json();
  return result;
};

export { addPairing };
