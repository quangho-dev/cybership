import dotenv from 'dotenv';
import assert from 'assert';

dotenv.config();

const {
  PORT,
  HOST,
  HOST_URL,
} = process.env;

assert(PORT, 'Port is required');
assert(HOST, 'Host is required');

export default {
  port: PORT || 5000,
  host: HOST || 'localhost',
  hostUrl: HOST_URL || 'http://localhost:5000'
};