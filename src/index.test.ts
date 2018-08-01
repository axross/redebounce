test('exports <Redebounce> as default export', async () => {
  const exported = await import('./');
  const Redebounce = (await import('./Redebounce')).default;

  expect(exported.default).toBe(Redebounce);
});

test('exports <NoDebounce> as named export', async () => {
  const exported = await import('./');
  const NoDebounce = (await import('./NoDebounce')).default;

  expect(exported.NoDebounce).toBe(NoDebounce);
});
