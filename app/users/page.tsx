import React, { Suspense } from "react";
import UsersTable from "./UsersTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}

export default async function UsersPage({
  searchParams: { sortOrder },
}: Props) {
  return (
    <>
      <h1> Users </h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense fallback={<p>Loading....</p>}>
        <UsersTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
}
