import Link from "next/link";

const ClientsProjects = () => {
  const clientele = [
    { id: 1, name: "feisal", hobby: "reading" },
    { id: 2, name: "Mohamed", hobby: "space" },
    { id: 3, name: "Ibrahim", hobby: "reading" },
    { id: 4, name: "Noor", hobby: "space" },
    { id: 5, name: "Abdille", hobby: "reading" },
    { id: 6, name: "Ahmed", hobby: "space" },
  ];
//   href={`/clients/${client.name}/${client.hobby}`

  console.log(clientele);
  return (
    <div>
      {" "}
      <h1>This is a page about the clients projects </h1>
      {clientele.map((client) => (
        <li key={client.id}>
          <Link href={{
              pathname:"/clients/[clientsid]/[clientsprojectid]",
              query:{clientsid: client.hobby,clientsprojectid: client.name}
          }}>
            {client.name}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default ClientsProjects;
