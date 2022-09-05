export function nextFactory({
  context,
  middleware,
  index,
}: {
  context: any;
  middleware: any;
  index: any;
}) {
  const subsequentMiddleware = middleware[index];
  if (!subsequentMiddleware) return context.next;

  // @ts-ignore
  return (...parameters) => {
    context.next(...parameters);
    const nextMiddleware = nextFactory({
      context: context,
      middleware: middleware,
      index: index + 1,
    });
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}
