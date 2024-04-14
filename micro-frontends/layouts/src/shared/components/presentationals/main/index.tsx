import React, { FC } from "react";
import { PageHeading, PageContent } from "@shared/components/presentationals";

export const Main: FC = () => {
  return (
    <div className="w-full p-10">
      <PageHeading />
      <PageContent />
    </div>
  );
};
