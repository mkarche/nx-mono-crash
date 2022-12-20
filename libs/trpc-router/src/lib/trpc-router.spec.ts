import { trpcRouter } from './trpc-router';

describe('trpcRouter', () => {
  it('should work', () => {
    expect(trpcRouter()).toEqual('trpc-router');
  });
});
