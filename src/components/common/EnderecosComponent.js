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
        <tr>
          <td style={{ textAlign: "center" }}>{enderecos[0].ip}:{enderecos[0].ports}</td>
          <td style={{ textAlign: "center" }}>{enderecos[0].online}</td>
          <td style={{ textAlign: "center" }}>{enderecos[0].max_cap}</td>
        </tr>
    </tbody>
  </table>
);
