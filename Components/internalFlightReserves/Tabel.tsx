import React from "react";
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}: any) {
  const count = preFilteredRows.length;
  return (
    <input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`فیلتر ...`}
      className="p-3 my-3 mx-2 border "
    />
  );
}

function DataTabel({ dataProps, HiddenTd, TitleOfTabel, onclickRow }: any) {
  let data: any = React.useMemo(() => {
    const data: any[] = [];

    for (let i = 0; i < dataProps.length; i++) {
      let tempData: any = {};
      let j = 1;
      for (const [key, value] of Object.entries(dataProps[i])) {
        if (!HiddenTd.includes(key)) {
          tempData = { ...tempData, [`col${j}`]: value };
          j++;
        }
      }

      data.push(tempData);
    }
    return data;
  }, [dataProps]);

  let columns: any = React.useMemo(() => {
    // if(dataProps && dataProps[0]){
    let columnsData: any = [];
    let j = 1;
    for (const [key, value] of Object.entries(dataProps[0])) {
      if (!HiddenTd.includes(key)) {
        columnsData.push({
          key: key,
          Header: TitleOfTabel[key],
          accessor: `col${j}`,
        });
        j++;
      }
    }
    console.log("columnsData", columnsData);

    return columnsData;

    // }
  }, [dataProps]);

  const defaultColumn: any = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
  }: any = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  return (
    <table
      {...getTableProps()}
      style={{
        border: "solid 1px #e5e7eb",
        paddingTop: "10px",
        borderCollapse: "collapse",
        width: "100%",
      }}
      className="tablewithSort"
    >
      <thead>
        {headerGroups.map((headerGroup: any) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                style={{
                  color: "#919191",
                  paddingTop: "10px",
                  borderBottom: "solid 1px #e5e7eb",
                  // position: "sticky",
                  // top: "26px",
                  background: "#fff",
                  // padding: 0,
                  // margin:0,
                  // height:"50px"
                }}
                className="text-sm"
              >
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}
                </span>
                <div>{column.canFilter ? column.render("Filter") : null}</div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} style={{ tableLayout: "fixed" }}>
        {rows.map((row: any) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              className=" overflow-hidden hover:bg-primary"
            >
              {row.cells.map((cell: any) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      borderBottom: "solid 1px #e5e7eb",
                    }}
                    //   className={`${row.index % 2 === 1 ? "bg-white" : "bg-[#e5e3e7]" } `}
                  >
                    <p
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "88%",
                      }}
                    >
                      {cell.render("Cell")}
                    </p>
                    {/* {listCopy.incluse(cell.key) && <p>copy</p>} */}
                  </td>
                );
              })}
              <td
                style={{
                  left: 0,
                  padding: "16px",
                  position: "sticky",
				  backgroundColor: "inherit"
                }}
              >
                <button
                  className="whitespace-nowrap dialog-content__button btn bg-[#3498db] hover:bg-[#3498db] mr-5 py-2 text-[0.7rem]"
                  onClick={() => onclickRow(row.index)}
                >
                  نمایش جزئیات
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default DataTabel;
