import { config } from 'dotenv';
const result = config();
if (result.error) {
  throw result.error;
}
const { parsed: envs } = result;
export default envs;