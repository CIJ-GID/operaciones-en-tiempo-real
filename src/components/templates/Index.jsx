import React from "react";
//* Templates
import Template1 from "./Template1.jsx";
import Template2 from "./Template2.jsx";
import Template3 from "./Template3.jsx";
import { useLoaderData } from "react-router-dom";

export function loader({ params }) {
  const templateId = params.templateId;
  return templateId;
}

const Index = () => {
  const templateId = useLoaderData();

  return (
    <main className="dark:bg-dark h-screen w-screen bg-base ">
      {templateId === "1" && <Template1 />}
      {templateId === "2" && <Template2 />}
      {templateId === "3" && <Template3 />}
    </main>
  );
};

export default Index;
