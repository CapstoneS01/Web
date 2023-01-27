import React from "react";

function Welcome() {
  async function submitImage(file: any) {
    const data = new FormData();
    data.append("file", file);

    await fetch("http://localhost:3030/upload", {
      credentials: "same-origin",
      method: "POST",
      body: data,
      headers: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjAxR1FTWkMwMFJYSDdXTUJUMlhIWENTMEdaIiwiaWF0IjoxNjc0ODM1MjYzfQ.yneN_EBmUNPFK9zsPuXQHlZTn-FWRkERXBC0hd6-Bi8",
      },
    });
  }

  return (
    <div>
      <h1 className="">Welcome Page</h1>
      <input type="file" onChange={(e) => submitImage(e!.target!.files![0])} />
    </div>
  );
}

export default Welcome;
