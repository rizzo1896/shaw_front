import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IRepo } from "../../types/IGithub.types";

export default function DataTable({ data }: { data: IRepo[] }) {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "html_url", headerName: "URL", width: 280 },
  ];

  const rows = data.map((repo) => {
    return {
      id: repo.id,
      name: repo.name,
      html_url: repo.html_url,
    };
  });

  return (
    <div style={{ height: 400, width: "140%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
