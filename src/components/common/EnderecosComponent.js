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
          <td style={{ textAlign: "center" }}>{enderecos.minecraft}</td>
          <td style={{ textAlign: "center" }}>4</td>
          <td style={{ textAlign: "center" }}>20</td>
        </tr>
    </tbody>
  </table>
);
