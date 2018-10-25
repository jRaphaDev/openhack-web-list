import React from "react";

export const EnderecosComponent = ({ enderecos }) => (
  <table className="table table-striped table-dark">
    <thead>
      <tr>
        <th scope="row" style={{ textAlign: "center" }} colSpan="4">
          Endereços
        </th>
      </tr>
      <tr>
        <th scope="col" style={{ textAlign: "center" }}>
          Serviço
        </th>
        <th scope="col" style={{ textAlign: "center" }}>
          IP
        </th>
        <th scope="col" style={{ textAlign: "center" }}>
          Online
        </th>
        <th scope="col" style={{ textAlign: "center" }}>
          Capacidade
        </th>
      </tr>
    </thead>
    <tbody>
      {enderecos.map((item, index) => (
        <tr>
          <td style={{ textAlign: "center" }}>{item}</td>
          <td style={{ textAlign: "center" }}>123.456.789.999</td>
          <td style={{ textAlign: "center" }}>4</td>
          <td style={{ textAlign: "center" }}>20</td>
        </tr>
      ))}
    </tbody>
  </table>
);
