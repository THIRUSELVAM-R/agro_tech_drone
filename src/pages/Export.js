import React from "react";
import Header from "../components/Header";

function Export() {
  return (
    <>
      <Header />
      <iframe
        width="100%"
        height="700px"
        src="https://www.chartjs.org/docs/latest/samples/bar/border-radius.html"
        title="Graph"
      />
    </>
  );
}

export default Export;
