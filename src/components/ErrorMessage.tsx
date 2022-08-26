export function ErrorMessage({error}: {error: string}) {
  return (
    <p className='text-center text-red-600'>{error}</p>
  );
}