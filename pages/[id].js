import { useRouter } from "next/dist/client/router";

const Id = () => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <>
      <h1>User: {id}</h1>
    </>
  );
};

export default Id;
