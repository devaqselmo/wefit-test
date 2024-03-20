import 'reflect-metadata';

import env from '@config/env';
import app from '@config/server';

app.listen(env.port, () => {
  console.log(`Listening port ${env.port}`);
});
